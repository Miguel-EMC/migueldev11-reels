import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const AwsLogo: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 120 72" fill="none">
    <path
      d="M32 46.5C23.5 46.5 17 40.5 17 31.5C17 22.5 23.5 16.5 32 16.5C37.5 16.5 42 19 44.5 23L38 27C36.5 24.5 34.5 23 32 23C27.5 23 24 26.5 24 31.5C24 36.5 27.5 40 32 40C34.5 40 36.5 38.5 38 36L44.5 40C42 44 37.5 46.5 32 46.5Z"
      fill="#FF9900"
    />
    <path
      d="M50 18H57L66 45H59L57.5 39H50.5L49 45H42L50 18ZM56.5 33L54 24L51.5 33H56.5Z"
      fill="#FFFFFF"
    />
    <path
      d="M66 18H73L78.5 36L84 18H91L96.5 36L102 18H109L100 45H93L87.5 28L82 45H75L66 18Z"
      fill="#FFFFFF"
    />
    <path
      d="M18 56C42 66 78 66 102 56"
      stroke="#FF9900"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M102 56L93 51M102 56L96 63"
      stroke="#FF9900"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

export const LambdaIcon: React.FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="0" fill="#FF9900" />
    <path
      d="M20 48L32 16H40L28 48H20ZM36 48L44 32H50L42 48H36Z"
      fill="#111111"
    />
  </svg>
);

export const ApiGatewayIcon: React.FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="0" fill="#3B82F6" />
    <path
      d="M16 32H48M48 32L38 22M48 32L38 42"
      stroke="#FFFFFF"
      strokeWidth="5"
      strokeLinecap="square"
    />
    <rect x="14" y="16" width="10" height="32" fill="#1D4ED8" />
  </svg>
);

export const BedrockIcon: React.FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="0" fill="#8B5CF6" />
    <circle cx="32" cy="32" r="14" stroke="#FFFFFF" strokeWidth="4" />
    <circle cx="32" cy="32" r="5" fill="#FFFFFF" />
    <line x1="32" y1="10" x2="32" y2="18" stroke="#FFFFFF" strokeWidth="4" />
    <line x1="32" y1="46" x2="32" y2="54" stroke="#FFFFFF" strokeWidth="4" />
    <line x1="10" y1="32" x2="18" y2="32" stroke="#FFFFFF" strokeWidth="4" />
    <line x1="46" y1="32" x2="54" y2="32" stroke="#FFFFFF" strokeWidth="4" />
  </svg>
);

export const S3Icon: React.FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="0" fill="#F59E0B" />
    <rect x="16" y="18" width="32" height="8" fill="#111111" />
    <rect x="16" y="28" width="32" height="8" fill="#111111" />
    <rect x="16" y="38" width="32" height="8" fill="#111111" />
  </svg>
);

export const TerraformIcon: React.FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="0" fill="#6366F1" />
    <polygon points="18,16 30,23 30,37 18,30" fill="#FFFFFF" />
    <polygon points="34,25 46,32 46,46 34,39" fill="#FFFFFF" />
    <polygon points="34,41 46,48 46,62 34,55" fill="#C7D2FE" />
    <polygon points="18,33 30,40 30,54 18,47" fill="#818CF8" />
  </svg>
);

export const StepFunctionsIcon: React.FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="0" fill="#06B6D4" />
    <rect x="14" y="26" width="10" height="12" fill="#FFFFFF" />
    <line x1="24" y1="32" x2="30" y2="32" stroke="#FFFFFF" strokeWidth="3" />
    <rect x="30" y="26" width="10" height="12" fill="#FFFFFF" />
    <line x1="40" y1="32" x2="46" y2="32" stroke="#FFFFFF" strokeWidth="3" />
    <rect x="46" y="26" width="10" height="12" fill="#FFFFFF" />
  </svg>
);

export const WindowsIcon: React.FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect x="8" y="8" width="22" height="22" fill="#00ADEF" />
    <rect x="34" y="8" width="22" height="22" fill="#00ADEF" />
    <rect x="8" y="34" width="22" height="22" fill="#00ADEF" />
    <rect x="34" y="34" width="22" height="22" fill="#00ADEF" />
  </svg>
);

export const LinuxIcon: React.FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="0" fill="#0E240E" stroke="#7CFC88" strokeWidth="2" />
    <rect x="14" y="16" width="10" height="32" fill="#7CFC88" />
    <rect x="28" y="16" width="10" height="14" fill="#7CFC88" />
    <rect x="42" y="16" width="10" height="32" fill="#7CFC88" />
    <rect x="28" y="34" width="10" height="14" fill="#7CFC88" />
  </svg>
);

export const DockerIcon: React.FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="0" fill="#0284C7" />
    <rect x="16" y="28" width="8" height="8" fill="#FFFFFF" />
    <rect x="26" y="28" width="8" height="8" fill="#FFFFFF" />
    <rect x="36" y="28" width="8" height="8" fill="#FFFFFF" />
    <rect x="26" y="18" width="8" height="8" fill="#FFFFFF" />
    <rect x="36" y="18" width="8" height="8" fill="#FFFFFF" />
    <path d="M12 38H52C50 48 38 52 24 52C16 52 12 46 12 38Z" fill="#FFFFFF" />
  </svg>
);

export const LocalStackIcon: React.FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="0" fill="#0E240E" stroke="#7CFC88" strokeWidth="2" />
    <path d="M18 42L32 18L46 42H18Z" fill="#7CFC88" />
    <circle cx="32" cy="34" r="4" fill="#070D08" />
  </svg>
);

export const CreditCardCutIcon: React.FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect x="8" y="14" width="48" height="36" fill="#1F2937" stroke="#EF4444" strokeWidth="2" />
    <rect x="8" y="22" width="48" height="8" fill="#111827" />
    <rect x="14" y="38" width="16" height="4" fill="#E5E7EB" />
    {/* Slash Cut */}
    <line x1="8" y1="50" x2="56" y2="14" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const BookmarkIcon: React.FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <path d="M18 12H46V52L32 40L18 52V12Z" fill="#7CFC88" stroke="#00FF41" strokeWidth="2" />
  </svg>
);

export const CheckmarkIcon: React.FC<IconProps> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="0" fill="#0E240E" stroke="#7CFC88" strokeWidth="2" />
    <path d="M18 34L28 44L46 20" stroke="#7CFC88" strokeWidth="6" strokeLinecap="square" />
  </svg>
);
