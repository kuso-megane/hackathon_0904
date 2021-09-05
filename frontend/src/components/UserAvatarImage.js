import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Image } from "react-bootstrap";

const UserAvatarImage = ({ className }) => {
  const { user } = useAuth0();
  
  return (
    <Image
      style={{ width: "24px" }}
      src={user.picture}
      className={className}
      roundedCircle
    />
  );
};

export default UserAvatarImage;