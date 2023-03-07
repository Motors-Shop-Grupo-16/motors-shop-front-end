import { useContext, useState } from "react";

import { UserContext } from "../../../contexts/UserContext";

import UserImage from "../../UserImage/userImage";
import Modal from "../../Modal";
import Button from "../../Button";

import { splitName } from "../../../utils/createImage";
import dateFormatter from "../../../utils/dateFormatter";

import { BsDot } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

import { ICommentProps } from "./interfaces";

import { BodyText } from "../../../styles/typography";
import { Container } from "./style";

const CommentCard = ({
  comment,
  setModalData,
  setCommentModal,
  setCommentUpdateData,
}: ICommentProps) => {
  const { user } = useContext(UserContext);

  return (
    <Container
      onClick={() => {
        if (user?.id === comment!.User?.id) {
          setCommentModal(true);
          setModalData(comment!);
          setCommentUpdateData(comment!.content);
        }
      }}
      isOwner={user?.id === comment!.User?.id ? true : false}
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

        {user?.id === comment!.User?.id && (
          <FiEdit className="userCommentButton" />
        )}
      </div>

      <BodyText
        className="userName"
        style="body-2"
        tag="p"
        color="--color-grey2"
      >
        {comment!.content}
      </BodyText>
    </Container>
  );
};

export default CommentCard;
