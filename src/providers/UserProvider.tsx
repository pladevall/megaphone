import React, { Component, createContext } from "react";
import { auth, generateUserDocument } from "../Firebase/firebase";

interface UserModel {
  avatar?: string;
  displayName?: string;
  email?: string;
}

const defaultUser: UserModel = {
  avatar:
    "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png",
  displayName: "John",
  email: "you@email.com",
};

export const UserContext = createContext({ user: defaultUser });

class UserProvider extends Component {
  state = {
    user: {} as any,
  };

  componentDidMount = async () => {
    auth.onAuthStateChanged(async (userAuth: any) => {
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
    });
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
