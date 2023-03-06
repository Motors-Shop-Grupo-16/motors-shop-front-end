import { IButtonProps } from "./interfaces";

import { Container } from "./style";

const Button = ({ children, ...rest }: IButtonProps) => {
  return <Container {...rest}>{children}</Container>;
};

export default Button;
