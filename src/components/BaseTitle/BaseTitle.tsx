import { IBaseTitleProps } from "./interfaces";

export const BaseTitle = ({
  id,
  tag,
  className,
  children,
}: IBaseTitleProps) => (
  <>
    {tag === "h1" && (
      <h1 id={id} className={className}>
        {children}
      </h1>
    )}
    {tag === "h2" && (
      <h2 id={id} className={className}>
        {children}
      </h2>
    )}
    {tag === "h3" && (
      <h3 id={id} className={className}>
        {children}
      </h3>
    )}
    {tag === "h4" && (
      <h4 id={id} className={className}>
        {children}
      </h4>
    )}
    {tag === "h5" && (
      <h5 id={id} className={className}>
        {children}
      </h5>
    )}
    {tag === "h6" && (
      <h6 id={id} className={className}>
        {children}
      </h6>
    )}
    {tag === "p" && (
      <p id={id} className={className}>
        {children}
      </p>
    )}
  </>
);
