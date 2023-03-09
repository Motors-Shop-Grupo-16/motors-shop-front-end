import createImage from "../../utils/createImage";
import colorRandomizer from "../../utils/colorRandomizer";

import { IUserImageProps } from "./interfaces";

import Container from "./style";

const UserImage = ({ name, className }: IUserImageProps) => {
  return (
    <Container color={colorRandomizer(name)} className={className}>
      {createImage(name)}
    </Container>
  );
};

export default UserImage;
