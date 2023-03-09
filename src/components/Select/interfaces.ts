import { ReactNode, SelectHTMLAttributes } from "react";

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  error?: string;
}
