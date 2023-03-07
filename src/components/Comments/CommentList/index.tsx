import { useContext } from "react";

import { AnnouncementContext } from "../../../contexts/AnnouncementContext";

import CommentCard from "../CommentCard";

import { ICommentProps } from "../CommentCard/interfaces";

import { Container } from "./style";

const CommentList = ({ setModalData, setCommentUpdateData }: ICommentProps) => {
  const { detailedAnnouncement } = useContext(AnnouncementContext);

  return (
    <Container>
      {detailedAnnouncement!.comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
          setModalData={setModalData}
          setCommentUpdateData={setCommentUpdateData}
        ></CommentCard>
      ))}
    </Container>
  );
};

export default CommentList;
