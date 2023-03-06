import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";
import EditAddressForm from "../EditAddressForm";
import EditUserForm from "../EditUserForm";

const CallModal = () => {
  const { user, isEditUser, isEditAddress } = useContext(UserContext);

  return (
    <>
      {user && isEditUser && <EditUserForm user={user} />}
      {user?.Address && isEditAddress && (
        <EditAddressForm address={user.Address} />
      )}
    </>
  );
};

export default CallModal;
