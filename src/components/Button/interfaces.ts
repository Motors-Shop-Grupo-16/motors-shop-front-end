import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IButtonConfig {
  children: ReactNode;
}

export interface IButtonConfig {
  width?: string;
  backgroundColor?: string;
  borderLength?: string;
  borderColor?: string;
  buttonText?: string;
  color?: string;
}
