import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export interface IButtonConfig {
  width?: number;
  backgroundColor?: string;
  borderLength?: string;
  borderColor?: string;
  buttonText?: string;
}
