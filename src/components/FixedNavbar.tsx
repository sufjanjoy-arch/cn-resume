import { personalInfo, socialLinks } from "@/data/portfolio-data";
import { Mail, Linkedin, Download, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { downloadResumePdf } from "@/lib/download-resume";

export default function FixedNavbar() {
  const [showPhoto, setShowPhoto] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const linkedIn = socialLinks.find((link) => link.platform === "LinkedIn");

  useEffect(() => {
    const heroPhoto = document.getElementById("hero-photo");
    if (!heroPhoto) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowPhoto(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(heroPhoto);
    return () => observer.disconnect();
  }, []);

  const handleDownload = async () => {
    if (downloading) return;
    setDownloading(true);
    try { await downloadResumePdf(); } finally { setDownloading(false); }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-[44px] bg-background border-b border-border z-50 flex items-center">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center h-[44px] px-4 gap-2 md:gap-3 overflow-hidden">
          <span className="text-sm font-medium whitespace-nowrap">{personalInfo.name}</span>
          <span className="text-sm text-muted-foreground hidden sm:inline">•</span>
          <span className="text-sm text-muted-foreground truncate hidden sm:inline">{personalInfo.title}</span>
        </div>

        <div className={`absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${showPhoto ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-[28px] h-[28px] object-cover"
            style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
          />
        </div>

        <div className="flex items-center h-[44px] print:hidden">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="hidden sm:flex items-center gap-1.5 h-[28px] px-3 mr-2 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] text-xs font-medium hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)] transition-colors disabled:opacity-60"
            aria-label="Download résumé"
          >
            {downloading ? <Loader2 size={13} className="animate-spin" /> : <Download size={13} />}
            <span>{downloading ? "Preparing…" : "Résumé"}</span>
          </button>
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="sm:hidden flex items-center justify-center w-[44px] h-[44px] hover:text-[var(--color-primary)] transition-colors disabled:opacity-60"
            aria-label="Download résumé"
          >
            {downloading ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
          </button>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center justify-center w-[44px] h-[44px] hover:text-[var(--color-primary)] transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          {linkedIn && (
            <a
              href={linkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[44px] h-[44px] hover:text-[var(--color-primary)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
