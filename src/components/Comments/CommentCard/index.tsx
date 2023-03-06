import { IComment } from "../../../contexts/AnnouncementContext.interfaces";

import UserImage from "../../UserImage/userImage";
import { BodyText } from "../../../styles/typography";
import { BsDot } from "react-icons/bs";

import { splitName } from "../../../utils/createImage";
import dateFormatter from "../../../utils/dateFormatter";

import { Container } from "./style";

const CommentCard = ({ comment }: { comment: IComment }) => {
  return (
    <Container>
      <div className="userContainer">
        <UserImage name={comment.User.name} className="userImage" />

        <BodyText
          className="userName"
          style="body-2"
          tag="p"
          weight="500"
          color="--color-grey1"
        >
          {splitName(comment.User.name)}
        </BodyText>

        <BsDot className="userDot" />

        <span className="userCommentHistory">
          {dateFormatter(comment.createdAt)}
        </span>
      </div>

      <BodyText
        className="userName"
        style="body-2"
        tag="p"
        color="--color-grey2"
      >
        {comment.content}
      </BodyText>
    </Container>
  );
};

export default CommentCard;
