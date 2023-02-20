import createImage from "../../utils/createImage";

import { IUserImageProps } from "./interface";

const UserImage = ({ name, classname }: IUserImageProps) => {
  return <div className={classname}>{createImage(name)}</div>;
};

export default UserImage;
