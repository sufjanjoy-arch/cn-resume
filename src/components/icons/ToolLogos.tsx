import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function KekaLogo({ size = 16, className = "", ...props }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect width="24" height="24" rx="6" fill="#2A9D8F" />
      <path d="M7 6v12M7 12l6-6M9 10.5l5 7.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ZohoLogo({ size = 16, className = "", ...props }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect width="24" height="24" rx="6" fill="#E42527" />
      <path d="M6.5 7.5h6l-5 9h6" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PeopleCuesLogo({ size = 16, className = "", ...props }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect width="24" height="24" rx="6" fill="#6366F1" />
      <circle cx="9" cy="9" r="2.5" fill="#FFFFFF" />
      <circle cx="15" cy="15" r="2.5" fill="#FFFFFF" />
      <path d="M9 15c0-2 4-2 6-4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CursorLogo({ size = 16, className = "", ...props }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect width="24" height="24" rx="6" fill="#18181B" />
      <path d="M7 6.5l10.5 5.5-5.5 1.5-1.5 5.5L7 6.5z" fill="#FFFFFF" />
    </svg>
  );
}

export function ClaudeLogo({ size = 16, className = "", ...props }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect width="24" height="24" rx="6" fill="#D97757" />
      <path
        d="M12 5.5v13M5.5 12h13M7.4 7.4l9.2 9.2M16.6 7.4l-9.2 9.2"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AntigravityLogo({ size = 16, className = "", ...props }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect width="24" height="24" rx="6" fill="#1E293B" />
      <path d="M12 6l5 10H7l5-10z" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="1.5" fill="#38BDF8" />
    </svg>
  );
}

export function GitHubLogo({ size = 16, className = "", ...props }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect width="24" height="24" rx="6" fill="#181717" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.5C8.41 5.5 5.5 8.41 5.5 12c0 2.87 1.86 5.31 4.45 6.17.32.06.44-.14.44-.31 0-.15-.01-.66-.01-1.2-1.81.39-2.19-.77-2.19-.77-.3-.75-.72-.95-.72-.95-.59-.4.04-.4.04-.4.65.05.99.67.99.67.58.99 1.52.7 1.89.54.06-.42.23-.7.41-.87-1.44-.16-2.96-.72-2.96-3.21 0-.71.25-1.29.67-1.74-.07-.16-.29-.83.06-1.72 0 0 .55-.17 1.79.67.52-.15 1.08-.22 1.63-.22.56 0 1.11.07 1.63.22 1.24-.84 1.78-.67 1.78-.67.36.89.14 1.56.07 1.72.42.45.67 1.03.67 1.74 0 2.5-1.52 3.04-2.97 3.2.23.2.44.6.44 1.21 0 .87-.01 1.58-.01 1.79 0 .17.12.38.45.31A6.505 6.505 0 0018.5 12c0-3.59-2.91-6.5-6.5-6.5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function PowerBiLogo({ size = 16, className = "", ...props }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect width="24" height="24" rx="6" fill="#F2C811" />
      <rect x="7" y="12" width="2.5" height="6" rx="0.5" fill="#242424" />
      <rect x="10.75" y="9" width="2.5" height="9" rx="0.5" fill="#242424" />
      <rect x="14.5" y="6" width="2.5" height="12" rx="0.5" fill="#242424" />
    </svg>
  );
}

export function ToolIcon({ name, size = 16, className = "" }: { name: string; size?: number; className?: string }) {
  const norm = name.toLowerCase().trim();
  if (norm.includes("keka")) return <KekaLogo size={size} className={className} />;
  if (norm.includes("zoho")) return <ZohoLogo size={size} className={className} />;
  if (norm.includes("peoplecues")) return <PeopleCuesLogo size={size} className={className} />;
  if (norm.includes("cursor")) return <CursorLogo size={size} className={className} />;
  if (norm.includes("claude") || norm.includes("anthropic")) return <ClaudeLogo size={size} className={className} />;
  if (norm.includes("antigravity") || norm.includes("google")) return <AntigravityLogo size={size} className={className} />;
  if (norm.includes("github")) return <GitHubLogo size={size} className={className} />;
  if (norm.includes("power bi") || norm.includes("bi")) return <PowerBiLogo size={size} className={className} />;

  return (
    <div
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center rounded-md bg-muted text-[10px] font-bold text-foreground ${className}`}
    >
      {name.slice(0, 1).toUpperCase()}
    </div>
  );
}
