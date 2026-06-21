import React from "react";
import { tfTheme } from "../themes/terraform";

export const TerraformLogo: React.FC<{ size?: number; glow?: boolean; color?: string }> = ({ 
  size = 120, 
  glow = true,
  color = tfTheme.tfPurple
}) => {
  return (
    <svg 
      viewBox="0 0 256 256" 
      width={size} 
      height={size} 
      style={{ filter: glow ? `drop-shadow(${tfTheme.glowPurple})` : undefined }}
    >
      <path fill={color} d="M15.4 0L98 47.1v95L15.4 95.1V0zm0 107.1l82.6 47v95.1l-82.6-47.8v-94.3zm90.7-51.9l82.5-47v95.1l-82.5-47.8V55.2zm90.7 51.9l82.5 47.8v94.3l-82.5-47.8v-94.3z" />
    </svg>
  );
};
