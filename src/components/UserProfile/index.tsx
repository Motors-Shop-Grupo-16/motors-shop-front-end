import { BodyText, Heading } from "../../styles/typography";
import { splitName } from "../../utils/createImage";
import UserImage from "../UserImage/userImage";
import { IUserProfile } from "./interfaces";
import { Container } from "./style";

const UserProfile = ({ name, description }: IUserProfile) => {
  return (
    <Container>
      <div className="userProfileContent">
        <UserImage name={"André Silva Souza"} className="productUserImage" />
        <div className="userProfileContentUserName">
          <Heading
            className=""
            tag="h6"
            style="heading-6"
            weight="600"
            color="--color-grey1"
          >
            {splitName(name)}
          </Heading>

          <BodyText
            className="userProfileContentUserNameAdvertiser"
            tag="p"
            style="body-2"
            weight="500"
            color="--color-brand1"
          >
            {"Anunciante"}
          </BodyText>
        </div>

        <BodyText
          className=""
          tag="p"
          style="body-1"
          weight="400"
          color="--color-grey2"
        >
          {description}
        </BodyText>
      </div>
    </Container>
  );
};

export default UserProfile;
