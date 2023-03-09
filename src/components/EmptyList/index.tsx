import { ReactNode } from "react";
import { Heading } from "../../styles/typography";

interface IEmptyListProps {
  children: ReactNode;
}

const EmptyList = ({ children }: IEmptyListProps) => {
  return (
    <Heading
      style="heading-6"
      className="productTitle"
      tag="h6"
      weight="600"
      color="--color-alert1"
    >
      {children}
    </Heading>
  );
};

export default EmptyList;
