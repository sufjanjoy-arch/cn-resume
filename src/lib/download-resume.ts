import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * Generate and download the résumé as a PDF.
 *
 * Strategy: render /resume in a hidden iframe, capture the full sheet, then
 * paginate at natural section/role boundaries. If a role is taller than the
 * remaining page space, continue to the next safe child boundary instead of
 * leaving a large blank area.
 */
export async function downloadResumePdf(filename = "Chaitra-Nair-Resume.pdf"): Promise<void> {
  const iframe = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.left = "-10000px";
  iframe.style.top = "0";
    iframe.style.width = "820px";
    iframe.style.height = "1800px";
  iframe.style.border = "0";
  iframe.src = "/resume";
  document.body.appendChild(iframe);

  try {
    await new Promise<void>((resolve, reject) => {
      iframe.onload = () => resolve();
      iframe.onerror = () => reject(new Error("Failed to load résumé"));
      setTimeout(() => resolve(), 4000);
    });
    await new Promise((r) => setTimeout(r, 700));

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

    // A4 page geometry
    const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
    const pageWmm = pdf.internal.pageSize.getWidth();   // 210
    const pageHmm = pdf.internal.pageSize.getHeight();  // 297

    // Snapshot the full sheet at 2x
    const scale = 2;
    const fullCanvas = await html2canvas(sheet, {
      scale,
      useCORS: true,
      backgroundColor: "#faf7f1",
      windowWidth: sheet.scrollWidth,
      windowHeight: sheet.scrollHeight,
    });

    const pxPerMm = fullCanvas.width / pageWmm;         // canvas px per mm of PDF page
    const pageHpx = Math.floor(pageHmm * pxPerMm);      // page height in canvas px

    // Collect safe cut points. Include section titles, roles, bullets, and
    // education rows so the paginator can keep filling a page when a full role
    // cannot fit, instead of pushing it all to the next page.
    const sheetTop = sheet.getBoundingClientRect().top;
    const breakElements = Array.from(
      sheet.querySelectorAll<HTMLElement>(
        [
          ".resume-header",
          ".resume-section",
          ".resume-section-title",
          ".resume-experience-item",
          ".resume-bullet",
          ".resume-education-row",
          ".resume-skill-item",
        ].join(", ")
      )
    );

    const cutPoints: number[] = [0];
    for (const el of breakElements) {
      const rect = el.getBoundingClientRect();
      cutPoints.push(Math.round((rect.top - sheetTop) * scale));
      cutPoints.push(Math.round((rect.bottom - sheetTop) * scale));
    }
    cutPoints.push(fullCanvas.height);
    const sortedCuts = Array.from(new Set(cutPoints))
      .filter((c) => c >= 0 && c <= fullCanvas.height)
      .sort((a, b) => a - b);

    // Paginate: from currentTop, find the largest safe cut <= currentTop + pageHpx.
    // Avoid very short pages unless we are at the end of the document.
    let currentTop = 0;
    let first = true;
    while (currentTop < fullCanvas.height) {
      const maxBottom = currentTop + pageHpx;
      const possibleCuts = sortedCuts.filter((c) => c > currentTop + 24 && c <= maxBottom);
      let cut = possibleCuts.pop();

      const minimumUsefulPage = Math.floor(pageHpx * 0.72);
      const isLastPage = fullCanvas.height - currentTop <= pageHpx;
      if (!isLastPage && cut !== undefined && cut - currentTop < minimumUsefulPage) {
        const fullerCut = possibleCuts.filter((c) => c - currentTop >= minimumUsefulPage).pop();
        cut = fullerCut ?? Math.min(maxBottom, fullCanvas.height);
      }

      // If no natural cut fits (single block taller than page), hard-cut at page height
      if (cut === undefined) cut = Math.min(maxBottom, fullCanvas.height);

      const sliceH = cut - currentTop;
      const slice = document.createElement("canvas");
      slice.width = fullCanvas.width;
      slice.height = sliceH;
      const ctx = slice.getContext("2d")!;
      ctx.fillStyle = "#faf7f1";
      ctx.fillRect(0, 0, slice.width, slice.height);
      ctx.drawImage(fullCanvas, 0, currentTop, fullCanvas.width, sliceH, 0, 0, fullCanvas.width, sliceH);

      const imgData = slice.toDataURL("image/jpeg", 0.95);
      const imgHmm = sliceH / pxPerMm;
      if (!first) pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, 0, pageWmm, imgHmm);
      first = false;
      currentTop = cut;
    }

    pdf.save(filename);
  } finally {
    document.body.removeChild(iframe);
  }
}
