import { ForwardedRef, forwardRef } from "react";
import { IInputProps } from "./interfaces";
import { Container } from "./style";

const Input = forwardRef(
  (
    { label, id, placeholder, type, error, ...rest }: IInputProps,
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
        {error && <span>{error}</span>}
      </Container>
    );
  }
);

export default Input;
