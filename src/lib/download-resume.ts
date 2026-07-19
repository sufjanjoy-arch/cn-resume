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
