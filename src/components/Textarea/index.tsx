import { ForwardedRef, forwardRef } from "react";
import { ITextareaProps } from "./interfaces";
import { Container } from "./style";

const Textarea = forwardRef(
  (
    { label, id, placeholder, error, ...rest }: ITextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <Container>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} placeholder={placeholder} ref={ref} {...rest} />
        {error && <span>{error}</span>}
      </Container>
    );
  }
);

export default Textarea;
