import { useContext } from "react";
import { BodyText, Heading } from "../../styles/typography";
import { splitName } from "../../utils/createImage";
import Button from "../Button";
import UserImage from "../UserImage/userImage";
import { IUserProfile } from "./interfaces";
import { Container } from "./style";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

const UserProfile = ({ name, description, viewButton }: IUserProfile) => {
  const { setIsCreateAnnouncement } = useContext(AnnouncementContext);
  return (
    <Container>
      <div className="userProfileContent">
        <UserImage name={name} className="productUserImage" />
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
        {viewButton && (
          <Button
            type="button"
            width="fit-content"
            buttonText=""
            backgroundColor="--color-grey10"
            color="--color-brand1"
            borderColor="--color-brand1"
            borderLength="2px"
            onClick={() => {
              setIsCreateAnnouncement(true);
            }}
          >
            Criar anúncio
          </Button>
        )}
      </div>
    </Container>
  );
};

export default UserProfile;
