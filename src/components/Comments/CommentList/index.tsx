import { useContext } from "react";

import { AnnouncementContext } from "../../../contexts/AnnouncementContext";

import CommentCard from "../CommentCard";
import { BodyText } from "../../../styles/typography";

import { Container } from "./style";

const CommentList = () => {
  const { detailedAnnouncement } = useContext(AnnouncementContext);

  return (
    <Container>
      {detailedAnnouncement!.comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment}></CommentCard>
      ))}
    </Container>
  );
};

export default CommentList;
