import { ForwardedRef, forwardRef } from "react";
import { IInputProps } from "./interfaces";
import { Container } from "./style";

const Input = forwardRef(
  (
    { label, id, placeholder, type, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Container>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          placeholder={placeholder}
          type={type}
          ref={ref}
          {...rest}
        />
      </Container>
    );
  }
);

export default Input;
