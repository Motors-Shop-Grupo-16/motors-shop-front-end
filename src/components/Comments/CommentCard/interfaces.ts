import { Dispatch, SetStateAction } from "react";

import { IComment } from "../../../contexts/AnnouncementContext.interfaces";

export interface ICommentProps {
  comment?: IComment;
  setModalData: Dispatch<SetStateAction<IComment | undefined>>;
  setCommentModal: Dispatch<SetStateAction<boolean>>;
  setCommentUpdateData: Dispatch<SetStateAction<string>>;
}
