import React, { useId } from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function KekaLogo({ size = 16, className = "", ...props }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} {...props}>
      <rect width="32" height="32" rx="5.33333" fill="#5412AE" />
      <path
        d="M25.4925 10.3668C25.5225 10.2019 25.4715 10.0393 25.3531 9.92104L22.2492 6.82138C22.1309 6.70309 21.9675 6.6524 21.8022 6.68217C21.6369 6.71275 21.5032 6.81736 21.4339 6.97025L18.8966 12.6047C18.8089 12.8002 18.8483 13.0151 18.9999 13.1663C19.0963 13.2621 19.2213 13.3152 19.3523 13.3152C19.4239 13.3152 19.4946 13.2999 19.5622 13.2693L25.2035 10.7354C25.3571 10.6662 25.4621 10.5326 25.4925 10.3676"
        fill="#FFFFFF"
      />
      <path
        d="M16.9968 11.6328C17.0931 11.7655 17.2401 11.842 17.4001 11.842C17.4448 11.842 17.4901 11.8356 17.5351 11.8243C17.7421 11.7688 17.8844 11.6022 17.9051 11.3946L18.7047 5.89776C18.7214 5.73119 18.6578 5.57266 18.5304 5.46403C18.4024 5.3554 18.2361 5.31838 18.0738 5.36103L13.8342 6.49564C13.6719 6.5391 13.5472 6.65497 13.4905 6.81269C13.4342 6.97041 13.4589 7.13939 13.5599 7.2794L16.9978 11.6328H16.9968Z"
        fill="#FFFFFF"
      />
      <path
        d="M26.5255 13.6863C26.4165 13.5591 26.2582 13.4955 26.0865 13.5125L20.5933 14.3099C20.38 14.3316 20.213 14.4732 20.158 14.68C20.1023 14.8869 20.1757 15.0921 20.346 15.2152L24.7119 18.6544C24.7989 18.7171 24.8996 18.7501 25.0046 18.7501C25.0629 18.7501 25.1202 18.7405 25.1749 18.7204C25.3332 18.6641 25.4486 18.5393 25.4922 18.3768L26.6282 14.1425C26.6719 13.9808 26.6335 13.8142 26.5255 13.6863Z"
        fill="#FFFFFF"
      />
      <path
        d="M15.0922 26.6457H16.7531C17.2415 26.6457 17.5319 26.1001 17.2582 25.6961L13.0216 19.4345L16.6919 14.6005C17.0459 14.1338 16.7126 13.4642 16.1263 13.465H15.9696C15.9696 13.465 14.7883 13.4787 14.3389 13.5278C13.5729 13.6115 12.8418 13.8931 12.3804 14.5095L9.20814 18.7513V9.15568C9.20814 8.53766 8.70618 8.03711 8.08732 8.03711H6.98957C6.15274 8.03711 5.47182 8.7171 5.47182 9.55161L5.34375 25.5263C5.34375 26.1436 5.84649 26.6457 6.46456 26.6457H7.70231C8.53357 26.6457 9.20814 25.9721 9.20814 25.1424V20.1338L12.6676 25.3468C13.2062 26.1589 14.1162 26.6464 15.0914 26.6464"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function LinkedInLogo({ size = 16, className = "", ...props }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect width="24" height="24" rx="3.8" fill="#0A66C2" />
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 110-4.128 2.064 2.064 0 010 4.128zm1.782 13.019H3.555V9h3.564v11.452z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/**
 * Official Zoho People 4-color interlocking hexagon + person mark
 */
export function ZohoLogo({ size = 16, className = "", ...props }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="-26 -28 354 352" fill="none" className={className} {...props}>
      <rect x="-26" y="-28" width="354" height="352" rx="64" fill="#FFFFFF" />
      <rect x="-22" y="-24" width="346" height="344" rx="60" stroke="#E5E7EB" strokeWidth="8" />
      {/* Person head */}
      <path
        fill="#226DB4"
        d="M151.2,106.1c-14.7,0-26.6-11.9-26.6-26.6s11.9-26.6,26.6-26.6s26.6,11.9,26.6,26.6C177.8,94.1,165.9,106.1,151.2,106.1z M151.2,69.8c-5.3,0-9.6,4.3-9.6,9.6s4.3,9.6,9.6,9.6s9.6-4.3,9.6-9.6S156.5,69.8,151.2,69.8z"
      />
      {/* Bottom-left red hexagon */}
      <path
        fill="#E42527"
        d="M93.8,293c-4.5,0-8.9-1.2-12.8-3.4l-60.4-34.9c-7.9-4.6-12.8-13-12.8-22.1v-69.7c0-9.1,4.9-17.5,12.8-22.1l49-28.2c4.1-2.4,9.3-1,11.6,3.1c2.4,4.1,1,9.3-3.1,11.6l-49,28.2c-2.6,1.5-4.3,4.3-4.3,7.4v69.7c0,3,1.6,5.8,4.3,7.4l60.4,34.9c2.6,1.5,5.9,1.5,8.5,0l48.9-28.3c4.1-2.4,9.3-1,11.6,3.1c2.4,4.1,1,9.3-3.1,11.6l-48.9,28.2C102.6,291.8,98.2,293,93.8,293z"
      />
      {/* Bottom-right yellow hexagon */}
      <path
        fill="#F9B21D"
        d="M208.6,293c-4.5,0-8.9-1.2-12.8-3.4l-49-28.3c-4.1-2.4-5.5-7.5-3.1-11.6c2.4-4.1,7.5-5.5,11.6-3.1l49,28.3c2.6,1.5,5.9,1.5,8.5,0l60.4-34.9c2.6-1.5,4.3-4.3,4.3-7.4v-69.7c0-3-1.6-5.8-4.3-7.4l-48.9-28.2c-4.1-2.4-5.5-7.5-3.1-11.6c2.4-4.1,7.5-5.5,11.6-3.1l48.9,28.2c7.9,4.6,12.8,13,12.8,22.1v69.7c0,9.1-4.9,17.5-12.8,22.1l-60.4,34.9C217.5,291.8,213.1,293,208.6,293z"
      />
      {/* Top green hexagon */}
      <path
        fill="#089949"
        d="M73.8,128.5c-4.7,0-8.5-3.8-8.5-8.5V63.4c0-9.1,4.9-17.5,12.8-22.1l60.4-34.9c7.9-4.5,17.6-4.5,25.5,0l60.4,34.9c7.9,4.6,12.8,13,12.8,22.1v56.6c0,4.7-3.8,8.5-8.5,8.5s-8.5-3.8-8.5-8.5V63.4c0-3-1.6-5.8-4.3-7.4l-60.4-34.9c-2.6-1.5-5.9-1.5-8.5,0L86.6,56c-2.6,1.5-4.3,4.3-4.3,7.4v56.6C82.3,124.6,78.5,128.5,73.8,128.5z"
      />
      {/* Inner blue person torso & arms */}
      <path
        fill="#226DB4"
        d="M131.2,184.5c-1.5,0-2.9-0.4-4.3-1.1l-48.9-28.2c-7.9-4.6-12.8-13-12.8-22.1v-13.1c0-4.7,3.8-8.5,8.5-8.5c4.7,0,8.5,3.8,8.5,8.5V133c0,3,1.6,5.8,4.3,7.4l48.9,28.3c4.1,2.4,5.5,7.5,3.1,11.6C137.1,182.9,134.3,184.6,131.2,184.5z"
      />
      <path
        fill="#226DB4"
        d="M171.2,184.6c-4.7,0-8.5-3.8-8.5-8.5c0-3,1.6-5.9,4.3-7.4l49-28.3c2.6-1.5,4.3-4.3,4.3-7.4v-13.1c0-4.7,3.8-8.5,8.5-8.5c4.7,0,8.5,3.8,8.5,8.5v13.2c0,9.1-4.9,17.5-12.8,22.1l-49,28.2C174.1,184.2,172.7,184.6,171.2,184.6z"
      />
      <path
        fill="#226DB4"
        d="M151.2,150.1c-4.7,0-8.5-3.8-8.5-8.5c0-3,1.6-5.9,4.3-7.4l48.9-28.2c7.9-4.5,17.6-4.5,25.5,0l11.5,6.6c4.1,2.4,5.5,7.5,3.1,11.6c-2.4,4.1-7.5,5.5-11.6,3.1l-11.5-6.6c-2.6-1.5-5.9-1.5-8.5,0l-48.9,28.2C154.1,149.7,152.7,150.1,151.2,150.1z"
      />
      <path
        fill="#226DB4"
        d="M151.1,262.4c-1.5,0-2.9-0.4-4.3-1.1l-11.4-6.6c-7.9-4.6-12.7-13-12.8-22.1V176c0-4.7,3.8-8.5,8.5-8.5c4.7,0,8.5,3.8,8.5,8.5v56.6c0,3,1.6,5.8,4.3,7.4l11.4,6.6c4.1,2.4,5.5,7.5,3.1,11.6C157,260.8,154.2,262.4,151.1,262.4z"
      />
      <path
        fill="#226DB4"
        d="M151.2,262.5c-4.7,0-8.5-3.8-8.5-8.5c0-3,1.6-5.9,4.3-7.4l11.5-6.6c2.6-1.5,4.3-4.3,4.3-7.4V176c0-4.7,3.8-8.5,8.5-8.5c4.7,0,8.5,3.8,8.5,8.5v56.6c0,9.1-4.9,17.5-12.8,22.1l-11.5,6.6C154.1,262.1,152.7,262.5,151.2,262.5z"
      />
      <path
        fill="#226DB4"
        d="M151.2,150.1c-1.5,0-2.9-0.4-4.3-1.1L98,120.7c-2.6-1.5-5.9-1.5-8.5,0l-11.4,6.6c-4.1,2.4-9.3,1-11.6-3.1c-2.4-4.1-1-9.3,3.1-11.6l11.4-6.6c7.9-4.5,17.6-4.5,25.5,0l48.9,28.3c4.1,2.4,5.5,7.5,3.1,11.6C157.1,148.4,154.2,150.1,151.2,150.1z"
      />
    </svg>
  );
}

/**
 * Official PeopleCues (by xto10x) crimson 4-diamond graduated dot-matrix brandmark
 */
const XTO10X_TOP_DOTS: [number, number, number][] = [
  [128.0, 49.6, 7.1],
  [116.1, 61.7, 6.3],
  [140.0, 61.7, 6.3],
  [105.8, 71.9, 5.5],
  [150.2, 71.9, 5.5],
  [128.0, 73.5, 5.5],
  [96.9, 80.6, 4.7],
  [159.0, 80.6, 4.7],
  [138.4, 83.7, 4.75],
  [117.7, 83.8, 4.7],
  [147.1, 92.5, 4.0],
  [109.1, 92.6, 3.95],
  [128.0, 94.3, 4.0],
  [136.8, 102.8, 3.2],
  [119.3, 102.9, 3.2],
  [128.0, 111.5, 2.3],
];

export function PeopleCuesLogo({ size = 16, className = "", ...props }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="20 20 216 216" fill="none" className={className} {...props}>
      <rect x="20" y="20" width="216" height="216" rx="44" fill="#CB212E" />
      {[0, 90, 180, 270].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 128 128)`} fill="#FFFFFF">
          {XTO10X_TOP_DOTS.map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} />
          ))}
        </g>
      ))}
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

/**
 * Official Google Antigravity multicolored floating arch mark from antigravity.google
 */
export function AntigravityLogo({ size = 16, className = "", ...props }: LogoProps) {
  const uid = useId().replace(/:/g, "");
  return (
    <svg width={size} height={size} viewBox="0 0 180 180" fill="none" className={className} {...props}>
      <rect width="180" height="180" rx="38" fill="#FFFFFF" />
      <rect x="3" y="3" width="174" height="174" rx="35" stroke="#E5E7EB" strokeWidth="6" />
      <path
        d="M144.248 149.062C151.748 154.688 162.998 150.938 152.685 140.625C121.748 110.625 128.31 28.125 89.8727 28.125C51.4352 28.125 57.9977 110.625 27.0602 140.625C15.8102 151.875 27.9977 154.688 35.4977 149.062C64.5602 129.375 62.6852 94.6875 89.8727 94.6875C117.06 94.6875 115.185 129.375 144.248 149.062Z"
        fill="#3186FF"
      />
      <mask id={`${uid}_m`} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="22" y="28" width="136" height="125">
        <path
          d="M144.248 149.062C151.748 154.688 162.998 150.938 152.685 140.625C121.748 110.625 128.31 28.125 89.8727 28.125C51.4352 28.125 57.9977 110.625 27.0602 140.625C15.8102 151.875 27.9977 154.688 35.4977 149.062C64.5602 129.375 62.6852 94.6875 89.8727 94.6875C117.06 94.6875 115.185 129.375 144.248 149.062Z"
          fill="#FFFFFF"
        />
      </mask>
      <g mask={`url(#${uid}_m)`}>
        <g filter={`url(#${uid}_f0)`}>
          <ellipse cx="36.6225" cy="43.0872" rx="36.6225" ry="43.0872" transform="matrix(-0.112784 0.99362 -0.99362 -0.112781 106.557 -26.4847)" fill="#FFE432" />
        </g>
        <g filter={`url(#${uid}_f1)`}>
          <ellipse cx="155.163" cy="54.9292" rx="47.4118" ry="48.4541" transform="rotate(76.9243 155.163 54.9292)" fill="#FC413D" />
        </g>
        <g filter={`url(#${uid}_f2)`}>
          <ellipse cx="14.6006" cy="65.4425" rx="49.5515" ry="64.192" transform="rotate(74.1257 14.6006 65.4425)" fill="#00B95C" />
        </g>
        <g filter={`url(#${uid}_f4)`}>
          <ellipse cx="18.1226" cy="67.414" rx="48.5679" ry="53.4688" transform="rotate(45.6065 18.1226 67.414)" fill="#00B95C" />
        </g>
        <g filter={`url(#${uid}_f5)`}>
          <ellipse cx="121.837" cy="166.945" rx="46.6356" ry="44.9084" transform="rotate(76.9243 121.837 166.945)" fill="#3186FF" />
        </g>
        <g filter={`url(#${uid}_f6)`}>
          <ellipse cx="53.9456" cy="56.8997" rx="53.9456" ry="56.8997" transform="matrix(-0.409539 0.912293 -0.912294 -0.409537 162.811 -25.895)" fill="#FBBC04" />
        </g>
        <g filter={`url(#${uid}_f7)`}>
          <path d="M4.21557 239.063C-25.3231 227.467 25.1577 132.061 37.7105 100.085C50.2634 68.1097 84.3853 51.5888 113.924 63.1848C143.463 74.7809 178.474 138.65 165.921 170.626C153.368 202.601 33.7543 250.659 4.21557 239.063Z" fill="#3186FF" />
        </g>
        <g filter={`url(#${uid}_f8)`}>
          <path d="M183.197 120.315C175.289 129.545 154.652 124.839 137.102 109.803C119.553 94.7668 111.738 75.0955 119.646 65.8656C127.554 56.6357 148.191 61.3423 165.74 76.3782C183.289 91.414 191.105 111.085 183.197 120.315Z" fill="#749BFF" />
        </g>
        <g filter={`url(#${uid}_f9)`}>
          <ellipse cx="148.928" cy="36.7252" rx="71.1018" ry="44.199" transform="rotate(34.0763 148.928 36.7252)" fill="#FC413D" />
        </g>
        <g filter={`url(#${uid}_f10)`}>
          <ellipse cx="37.848" cy="46.0346" rx="38.1008" ry="22.1575" transform="rotate(112.516 37.848 46.0346)" fill="#FFEE48" />
        </g>
      </g>
      <defs>
        <filter id={`${uid}_f0`} x="4" y="-45" width="112" height="99" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="6.25" /></filter>
        <filter id={`${uid}_f1`} x="46" y="-53" width="218" height="216" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="30.2" /></filter>
        <filter id={`${uid}_f2`} x="-100" y="-37" width="230" height="205" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="25.7" /></filter>
        <filter id={`${uid}_f4`} x="-85" y="-35" width="206" height="205" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="25.7" /></filter>
        <filter id={`${uid}_f5`} x="27" y="71" width="188" height="191" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="24.4" /></filter>
        <filter id={`${uid}_f6`} x="-12" y="-99" width="202" height="198" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="22.1" /></filter>
        <filter id={`${uid}_f7`} x="-45" y="19" width="253" height="261" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="19.8" /></filter>
        <filter id={`${uid}_f8`} x="81" y="25" width="141" height="135" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="17.7" /></filter>
        <filter id={`${uid}_f9`} x="55" y="-48" width="188" height="168" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="14.9" /></filter>
        <filter id={`${uid}_f10`} x="-25" y="-28" width="125" height="147" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="18.5" /></filter>
      </defs>
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
  if (norm.includes("linkedin")) return <LinkedInLogo size={size} className={className} />;
  if (norm.includes("zoho")) return <ZohoLogo size={size} className={className} />;
  if (norm.includes("peoplecues") || norm.includes("xto10x")) return <PeopleCuesLogo size={size} className={className} />;
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
