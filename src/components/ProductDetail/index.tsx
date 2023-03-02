import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

import Loading from "../Loading";

const ProductDetail = () => {
  const { detailedAnnouncement, loading } = useContext(AnnouncementContext);

  if (loading) return <Loading />;

  if (!detailedAnnouncement) return <Navigate to={"/"} />;

  return <>{console.log(detailedAnnouncement)}</>;
};

export default ProductDetail;
