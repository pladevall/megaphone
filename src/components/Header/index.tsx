import React, { FC, useContext } from "react";
import styled from "styled-components";
import { Row } from "antd";
import UpgradeButton from "../Checkout";
import { Link } from "@reach/router";
import { auth } from "../../Firebase/firebase";
import { UserContext } from "../../providers/UserProvider";

interface HeaderProps {
  title: string;
}

const Header = styled.div`
  font-size: 1.5rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  color: rgba(0, 0, 0, 1);
  margin-right: auto;
`;

const SignInButton = styled.button`
  font-family: "Inter";
  font-weight: 500;
  color: black;
  background: #f1f5f8;
  border: none;
  border: 2px solid black;
  margin-right: 0.5rem;
  height: 100%;
  padding: 0 1rem;

  cursor: pointer;
  &:hover {
    background: #dae1e7;
  }
  &:active {
    background: #b8c2cc;
  }
  &:focus {
    outline: none;
  }
`;

const HeaderComponent: FC<HeaderProps> = ({ title }) => {
  const user = useContext(UserContext);
  return (
    <Row justify="space-between">
      <Header>{title}</Header>
      {user ? (
        <SignInButton
          onClick={() => {
            auth.signOut();
          }}
        >
          Sign Out
        </SignInButton>
      ) : (
        <>
          <Link to="/signIn" style={{ textDecoration: "none" }}>
            <SignInButton>Sign In</SignInButton>
          </Link>

          <UpgradeButton />
        </>
      )}
    </Row>
  );
};

export default HeaderComponent;
