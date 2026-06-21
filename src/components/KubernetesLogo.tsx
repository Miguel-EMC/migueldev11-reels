import React from "react";
import { k8sTheme } from "../themes/kubernetes";

export const KubernetesLogo: React.FC<{ size?: number; glow?: boolean }> = ({ size = 120, glow = true }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      style={{ filter: glow ? `drop-shadow(${k8sTheme.glowBlue})` : undefined }}
    >
      <path
        d="M39.9999 3.33325L73.3333 23.3333V63.3333L39.9999 83.3333L6.66659 63.3333V23.3333L39.9999 3.33325Z"
        fill={k8sTheme.k8sBlue}
        stroke={k8sTheme.cream}
        strokeWidth="2"
      />
      <path
        d="M39.9999 9.99992L13.3333 24.9999V54.9999L39.9999 69.9999L66.6666 54.9999V24.9999L39.9999 9.99992Z"
        stroke={k8sTheme.bg}
        strokeWidth="1.5"
      />
      <path
        d="M21.6667 30L33.3334 36.6667L25 41.6667L21.6667 30Z"
        fill={k8sTheme.cream}
      />
      <path
        d="M58.3333 30L46.6666 36.6667L55 41.6667L58.3333 30Z"
        fill={k8sTheme.cream}
      />
      <path
        d="M40 46.6667L28.3334 53.3334L31.6667 65L40 46.6667Z"
        fill={k8sTheme.cream}
      />
       <path
        d="M40 46.6667L51.6667 53.3334L48.3334 65L40 46.6667Z"
        fill={k8sTheme.cream}
      />
       <path
        d="M25 41.6667L33.3333 36.6667L40 46.6667L31.6667 65L25 41.6667Z"
        stroke={k8sTheme.cream}
        strokeWidth="1.5"
      />
       <path
        d="M55 41.6667L46.6667 36.6667L40 46.6667L48.3333 65L55 41.6667Z"
        stroke={k8sTheme.cream}
        strokeWidth="1.5"
      />
    </svg>
  );
};
