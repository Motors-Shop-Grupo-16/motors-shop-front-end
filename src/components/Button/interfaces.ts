import { ReactNode } from "react";

export interface IButtonProps {
  children: ReactNode;
}

export interface IButtonConfig {
  width?: number;
  backgroundColor?: string;
  borderLength?: string;
  borderColor?: string;
  buttonText?: string;
}
