import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * Generate and download the résumé as a PDF.
 * Opens /resume in a hidden iframe, snapshots the sheet, and saves a multi-page A4 PDF.
 */
export async function downloadResumePdf(filename = "Chaitra-Nair-Resume.pdf"): Promise<void> {
  const iframe = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.left = "-10000px";
  iframe.style.top = "0";
  iframe.style.width = "900px";
  iframe.style.height = "1400px";
  iframe.style.border = "0";
  iframe.src = "/resume";
  document.body.appendChild(iframe);

  try {
    // Wait for iframe load
    await new Promise<void>((resolve, reject) => {
      iframe.onload = () => resolve();
      iframe.onerror = () => reject(new Error("Failed to load résumé"));
      setTimeout(() => resolve(), 4000); // safety timeout
    });

    // Allow fonts/images to settle
    await new Promise((r) => setTimeout(r, 600));

    const doc = iframe.contentDocument;
    if (!doc) throw new Error("No résumé document");

    // html2canvas can't parse oklch() — inject sRGB fallbacks for our tokens
    const overrideStyle = doc.createElement("style");
    overrideStyle.textContent = `
      :root, html, body {
        --color-background: #dfeef1;
        --color-foreground: #2b2b2b;
        --color-muted: #8a8a8a;
        --color-muted-foreground: #6b6b6b;
        --color-border: #d5dee0;
        --color-primary: #5a97a3;
        --color-primary-foreground: #ffffff;
        --color-secondary: #f2f2f2;
        --color-secondary-foreground: #2b2b2b;
        --color-accent: #f2f2f2;
        --color-accent-foreground: #2b2b2b;
        --color-destructive: #d64545;
        --color-destructive-foreground: #ffffff;
        --color-card: #ffffff;
        --color-card-foreground: #2b2b2b;
        --color-popover: #ffffff;
        --color-popover-foreground: #2b2b2b;
        --color-input: #e5e5e5;
        --color-ring: #2b2b2b;
      }
    `;
    doc.head.appendChild(overrideStyle);
    await new Promise((r) => setTimeout(r, 100));

    const sheet = doc.querySelector(".resume-sheet") as HTMLElement | null;
    if (!sheet) throw new Error("Résumé sheet not found");

    const canvas = await html2canvas(sheet, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#faf7f1",
      windowWidth: sheet.scrollWidth,
      windowHeight: sheet.scrollHeight,
    });

    const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();

    const imgW = pageW;
    const imgH = (canvas.height * imgW) / canvas.width;

    const imgData = canvas.toDataURL("image/jpeg", 0.95);

    if (imgH <= pageH) {
      pdf.addImage(imgData, "JPEG", 0, 0, imgW, imgH);
    } else {
      // multi-page: slice canvas vertically
      let remaining = imgH;
      let position = 0;
      while (remaining > 0) {
        pdf.addImage(imgData, "JPEG", 0, position, imgW, imgH);
        remaining -= pageH;
        position -= pageH;
        if (remaining > 0) pdf.addPage();
      }
    }

    pdf.save(filename);
  } finally {
    document.body.removeChild(iframe);
  }
}
