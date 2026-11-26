import React from "react";

export interface ReflectiveCardProps {
  name?: string;
  role?: string;
  badge?: string;
  status?: string;
  statusColor?: string;
  idLabel?: string;
  idValue?: string;
  avatar?: string;
  theme?: "dark" | "light" | string;
  metalness?: number;
  roughness?: number;
  blurStrength?: number;
  shine?: number;
  glare?: number;
  width?: number | string;
  height?: number | string;
  radius?: number;
  className?: string;
  children?: React.ReactNode;
  videoSrc?: string;
  onWebcamError?: () => void;
  style?: React.CSSProperties;
  enableTilt?: boolean;
  tiltStrength?: number;
}

declare const ReflectiveCard: React.FC<ReflectiveCardProps>;
export default ReflectiveCard;
