import { useContext, useState } from "react";

import { UserContext } from "../../../contexts/UserContext";

import UserImage from "../../UserImage/userImage";
import Modal from "../../Modal";
import Button from "../../Button";

import { splitName } from "../../../utils/createImage";
import dateFormatter from "../../../utils/dateFormatter";

import { BsDot } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

import { IComment } from "../../../contexts/AnnouncementContext.interfaces";

import { BodyText } from "../../../styles/typography";
import { Container } from "./style";

const CommentCard = ({ comment }: { comment: IComment }) => {
  const { user } = useContext(UserContext);

  const [modal, setModal] = useState<boolean>(false);
  const [commentUpdateData, setCommentUpdateData] = useState<string>(
    comment.content
  );

  return (
    <Container
      onClick={() => (user?.id === comment.User?.id ? setModal(true) : "")}
      isOwner={user?.id === comment.User?.id ? true : false}
    >
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

        {user?.id === comment.User?.id && (
          <FiEdit className="userCommentButton" />
        )}
      </div>

      <BodyText
        className="userName"
        style="body-2"
        tag="p"
        color="--color-grey2"
      >
        {comment.content}
      </BodyText>

      {modal && (
        <Modal
          key={comment.id}
          title="Editar Comentário"
          closeModal={() => setModal(false)}
        >
          <div className="commentUpdateContainer">
            <textarea
              className="commentUpdateTextarea"
              value={commentUpdateData}
              placeholder={comment.content}
              onChange={(e) => setCommentUpdateData(e.target.value)}
            />

            <div className="modalButtonsContainer">
              <Button
                width="108px"
                backgroundColor="--color-alert2"
                borderColor="--color-alert2"
                borderLength="1.5px"
                color="--color-alert1"
              >
                Excluir
              </Button>

              <Button
                width="108px"
                backgroundColor="--color-brand1"
                borderColor="--color-brand1"
                borderLength="1.5px"
                color="--color-whiteFixed"
              >
                Editar
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </Container>
  );
};

export default CommentCard;
