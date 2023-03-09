import { Dispatch, SetStateAction } from "react";

import { IComment } from "../../../contexts/AnnouncementContext.interfaces";

export interface ICommentProps {
  comment?: IComment;
  setModalData: Dispatch<SetStateAction<IComment | undefined>>;
  setCommentUpdateData: Dispatch<SetStateAction<string>>;
  setLanceUpdateData: Dispatch<SetStateAction<string>>;
}
