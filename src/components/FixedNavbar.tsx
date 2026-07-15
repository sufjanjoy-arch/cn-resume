import { personalInfo } from "@/data/portfolio-data";
import { socialLinks } from "@/data/portfolio-data";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import { useState, useEffect } from "react";

export default function FixedNavbar() {
  const [showPhoto, setShowPhoto] = useState(false);

  const linkedIn = socialLinks.find((link) => link.platform === "LinkedIn");
  const github = socialLinks.find((link) => link.platform === "GitHub");

  useEffect(() => {
    const heroPhoto = document.getElementById("hero-photo");
    if (!heroPhoto) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowPhoto(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(heroPhoto);
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 h-[44px] bg-background border-b border-border z-50 flex items-center">
      <div className="w-full flex items-center justify-between">
        {/* Left: Name + Role */}
        <div className="flex items-center h-[44px] px-4 gap-2 md:gap-3 overflow-hidden">
          <span className="text-sm font-medium whitespace-nowrap">{personalInfo.name}</span>
          <span className="text-sm text-muted-foreground hidden sm:inline">•</span>
          <span className="text-sm text-muted-foreground truncate hidden sm:inline">{personalInfo.title}</span>
        </div>

        {/* Center: Photo */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${showPhoto ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-[28px] h-[28px] object-cover"
            style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
          />
        </div>

        {/* Right: Contact buttons */}
        <div className="flex items-center h-[44px]">
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
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[44px] h-[44px] hover:text-[var(--color-primary)] transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
