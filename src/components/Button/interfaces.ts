import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps
  extends IButtonConfig,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IButtonConfig {
  width?: string;
  backgroundColor?: string;
  borderLength?: string;
  borderColor?: string;
  buttonText?: string;
  color?: string;
}
