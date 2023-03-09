import { useContext } from "react";

import { AnnouncementContext } from "../../../contexts/AnnouncementContext";
import { UserContext } from "../../../contexts/UserContext";

import UserImage from "../../UserImage/userImage";
import Button from "../../Button";

import { splitName } from "../../../utils/createImage";
import dateFormatter from "../../../utils/dateFormatter";

import { BsDot } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

import { ICommentProps } from "./interfaces";

import { BodyText } from "../../../styles/typography";
import { Container } from "./style";
import { currencyMask } from "../../../masks";

const CommentCard = ({
  comment,
  setModalData,
  setCommentUpdateData,
  setLanceUpdateData,
}: ICommentProps) => {
  const { user } = useContext(UserContext);

  const { setCommentModal, detailedAnnouncement } =
    useContext(AnnouncementContext);

  return (
    <Container
      onClick={() => {
        if (user?.id === comment!.User!.id) {
          setCommentModal(true);
          setModalData(comment!);
          setCommentUpdateData(comment!.content);
          setLanceUpdateData(comment!.content);
        }
      }}
      isOwner={user?.id === comment!.User!.id ? true : false}
    >
      <div className="userContainer">
        <UserImage name={comment!.User.name} className="userImage" />

        <BodyText
          className="userName"
          style="body-2"
          tag="p"
          weight="500"
          color="--color-grey1"
        >
          {splitName(comment!.User.name)}
        </BodyText>

        <BsDot className="userDot" />

        <span className="userCommentHistory">
          {dateFormatter(comment!.updatedAt)}
        </span>

        {user?.id === comment!.User!.id && (
          <FiEdit className="userCommentButton" />
        )}
      </div>

      <BodyText
        className="commentContent"
        style="body-2"
        tag="p"
        color="--color-grey2"
      >
        {detailedAnnouncement!.typeSale === "auction"
          ? `R$ ${currencyMask(comment!.content)}`
          : comment!.content}
      </BodyText>

      {detailedAnnouncement!.typeSale === "auction" &&
        user?.id === detailedAnnouncement!.User.id && (
          <Button
            width="64px"
            backgroundColor="--color-brand4"
            color="--color-brand1"
            borderLength="0"
            borderColor="--color-whiteFixed"
            className="auctionSellButton"
            onClick={() =>
              window.open(
                `https://wa.me/+${comment!.User.phone.replace(/[\D]/g, "")}`,
                "_blank"
              )
            }
          >
            Vender
          </Button>
        )}
    </Container>
  );
};

export default CommentCard;
