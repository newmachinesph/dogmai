"use client";

import { useEffect, useRef, useState } from "react";
import { jsPDF } from "jspdf";
import QRCode from "qrcode";

type CertificateCanvasProps = {
  certificateId: string;
};

const certificateData = {
  studentName: "John Doe",
  programTitle: "E-Commerce Builder Track",
  credentialTitle: "DOGM.AI E-Commerce AI Builder",
  completionDate: "March 1, 2025",
  summary:
    "Completed the 20-week, mentor-led and AI-guided mission to build production-grade e-commerce systems, automations, and AI merchant tools.",
  signatureName: "Mara Dela Cruz",
  signatureTitle: "Program Director, DOGM.AI",
};

const CANVAS_WIDTH = 1400;
const CANVAS_HEIGHT = 900;

const drawCertificate = (canvas: HTMLCanvasElement, certificateId: string, qrDataUrl?: string) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  ctx.fillStyle = "#05060b";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  const gradient = ctx.createLinearGradient(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gradient.addColorStop(0, "rgba(250,84,4,0.12)");
  gradient.addColorStop(1, "rgba(3, 169, 244, 0.15)");
  ctx.fillStyle = gradient;
  ctx.fillRect(40, 40, CANVAS_WIDTH - 80, CANVAS_HEIGHT - 80);

  ctx.strokeStyle = "rgba(255,255,255,0.25)";
  ctx.lineWidth = 4;
  ctx.strokeRect(50, 50, CANVAS_WIDTH - 100, CANVAS_HEIGHT - 100);

  ctx.fillStyle = "#ffffff";
  ctx.font = "34px 'Poppins', Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Certificate of Mastery", CANVAS_WIDTH / 2, 170);

  ctx.fillStyle = "#a5b4fc";
  ctx.font = "26px 'Poppins', Arial, sans-serif";
  ctx.fillText(certificateData.credentialTitle, CANVAS_WIDTH / 2, 220);

  ctx.fillStyle = "#ffffff";
  ctx.font = "60px 'Poppins', Arial, sans-serif";
  ctx.fillText(certificateData.studentName, CANVAS_WIDTH / 2, 330);

  ctx.fillStyle = "#fbbf24";
  ctx.font = "30px 'Inter', Arial, sans-serif";
  ctx.fillText(`has successfully completed the ${certificateData.programTitle}`, CANVAS_WIDTH / 2, 380);

  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.font = "24px 'Inter', Arial, sans-serif";
  const summaryLines = wrapText(ctx, certificateData.summary, CANVAS_WIDTH - 260);
  summaryLines.forEach((line, index) => {
    ctx.fillText(line, CANVAS_WIDTH / 2, 440 + index * 32);
  });

  ctx.font = "24px 'Inter', Arial, sans-serif";
  ctx.fillText(`Completion Date: ${certificateData.completionDate}`, CANVAS_WIDTH / 2, 560);
  ctx.fillText(`Credential ID: ${certificateId}`, CANVAS_WIDTH / 2, 600);

  const leftBlockX = 160;
  const blockY = 670;

  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(255,255,255,0.65)";
  ctx.font = "16px 'Inter', Arial, sans-serif";

  ctx.strokeStyle = "rgba(255,255,255,0.4)";
  ctx.lineWidth = 2;
  const signaturePath = [
    [leftBlockX + 60, blockY + 30],
    [leftBlockX + 110, blockY + 45],
    [leftBlockX + 160, blockY + 25],
    [leftBlockX + 210, blockY + 48],
    [leftBlockX + 260, blockY + 28],
    [leftBlockX + 310, blockY + 42],
  ];
  ctx.beginPath();
  ctx.moveTo(signaturePath[0][0], signaturePath[0][1]);
  for (let i = 1; i < signaturePath.length; i++) {
    ctx.lineTo(signaturePath[i][0], signaturePath[i][1]);
  }
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.font = "22px 'Poppins', Arial, sans-serif";
  ctx.fillText("Alex Reyes", leftBlockX + 30, blockY + 85);
  ctx.fillStyle = "#a1a1aa";
  ctx.font = "16px 'Inter', Arial, sans-serif";
  ctx.fillText("Program Mentor, DOGM.AI Builder Track", leftBlockX + 30, blockY + 110);

  if (qrDataUrl) {
    const qrSize = 100;
    const qrX = CANVAS_WIDTH - qrSize - 80;
    const qrY = CANVAS_HEIGHT - qrSize - 70;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(qrX - 6, qrY - 6, qrSize + 12, qrSize + 12);
    ctx.strokeStyle = "rgba(0,0,0,0.08)";
    ctx.strokeRect(qrX - 6, qrY - 6, qrSize + 12, qrSize + 12);

    const qrImage = new Image();
    qrImage.src = qrDataUrl;
    qrImage.onload = () => {
      ctx.drawImage(qrImage, qrX, qrY, qrSize, qrSize);
    };
  }
};

const wrapText = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number) => {
  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  words.forEach((word) => {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const { width } = ctx.measureText(testLine);
    if (width > maxWidth) {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  });

  if (currentLine) lines.push(currentLine);
  return lines;
};

export default function CertificateCanvas({ certificateId }: CertificateCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    QRCode.toDataURL(certificateId, {
      width: 256,
      margin: 1,
      color: { dark: "#000000", light: "#ffffff00" },
    })
      .then((url: any) => {
        if (mounted) setQrDataUrl(url);
      })
      .catch(() => {
        if (mounted) setQrDataUrl(null);
      });
    return () => {
      mounted = false;
    };
  }, [certificateId]);

  useEffect(() => {
    if (canvasRef.current) {
      drawCertificate(canvasRef.current, certificateId, qrDataUrl ?? undefined);
    }
  }, [certificateId, qrDataUrl]);

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `dogmai-certificate-${certificateId}.png`;
    link.href = canvas.toDataURL("image/png", 1.0);
    link.click();
  };

  const downloadPdf = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setIsGenerating(true);
    const dataUrl = canvas.toDataURL("image/png", 1.0);
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [CANVAS_WIDTH, CANVAS_HEIGHT],
    });
    pdf.addImage(dataUrl, "PNG", 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    pdf.save(`dogmai-certificate-${certificateId}.pdf`);
    setIsGenerating(false);
  };

  return (
    <div className="space-y-6">
      <div className="">
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="w-full max-w-6xl mx-auto rounded-[24px] border border-white/10 shadow-2xl"
        />
      </div>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={downloadImage}
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-intl-orange hover:text-intl-orange"
        >
          Download PNG
        </button>
        <button
          onClick={downloadPdf}
          disabled={isGenerating}
          className="inline-flex items-center justify-center rounded-full bg-intl-orange px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-ebony shadow-[0_0_30px_rgba(250,84,4,0.55)] transition hover:-translate-y-0.5 hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isGenerating ? "Preparing PDF..." : "Download PDF"}
        </button>
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
        Certificate Record: <span className="text-white">{certificateId}</span>
      </p>
    </div>
  );
}
