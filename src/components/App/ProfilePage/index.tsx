import React, { useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";

const ProfilePage = () => {
  const user = useContext(UserContext) || {};

  const { avatar, displayName, email } = user as any;
  return (
    <div>
      <div
        style={{
          background: `url(${
            avatar ||
            "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"
          })  no-repeat center center`,
          backgroundSize: "cover",
          height: "50px",
          width: "50px",
        }}
      ></div>
      <div>
        <h2>{displayName || "No Name"}</h2>
        <h3>{email || "No Email"}</h3>
      </div>
    </div>
  );
};
export default ProfilePage;
