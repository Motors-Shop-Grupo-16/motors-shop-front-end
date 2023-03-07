import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";
import DeleteUserModal from "../DeleteUserModal";
import EditAddressForm from "../EditAddressForm";
import EditUserForm from "../EditUserForm";

const CallModal = () => {
  const { user, isEditUser, isEditAddress, isDeleteUser } =
    useContext(UserContext);

  return (
    <>
      {user && isEditUser && <EditUserForm user={user} />}
      {user?.Address && isEditAddress && (
        <EditAddressForm address={user.Address} />
      )}
      {isDeleteUser && <DeleteUserModal />}
    </>
  );
};

export default CallModal;
