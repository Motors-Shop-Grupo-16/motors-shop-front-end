import createImage from "../../utils/createImage";
import colorRandomizer from "../../utils/colorRandomizer";

import { IUserImageProps } from "./interfaces";

import Container from "./style";

const UserImage = ({ name, classname }: IUserImageProps) => {
  return (
    <Container color={colorRandomizer(name)} className={classname}>
      {createImage(name)}
    </Container>
  );
};

export default UserImage;
