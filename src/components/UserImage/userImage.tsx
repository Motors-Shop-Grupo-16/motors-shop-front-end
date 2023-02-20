import createImage from "../../utils/createImage";

import { IUserImageProps } from "./interfaces";

const UserImage = ({ name, classname }: IUserImageProps) => {
  return <div className={classname}>{createImage(name)}</div>;
};

export default UserImage;
