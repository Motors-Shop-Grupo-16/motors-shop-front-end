import { IButtonProps } from "./interfaces";

import Container from "./style";

const Button = ({ children }: IButtonProps) => {
  return <Container>{children}</Container>;
};

export default Button;
