import { ReactNode } from "react";

export interface IModalProps {
  children: ReactNode;
  title: string;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}
