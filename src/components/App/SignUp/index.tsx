import React, { useState, FC } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import styled from "styled-components";
import { generateUserDocument, auth } from "../../../Firebase/firebase";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import Form, { Item, Field } from "../../Form";
import SubmitButton from "../../Button";
import { Alert } from "antd";

const Background = styled.div`
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
`;

const Container = styled.div`
  padding: 1rem;
  background: white;
  border: 2px solid #dadada;
  border-radius: 2;
`;

const Header = styled.h1`
  margin: 0;
  font-family: "Inter";
  font-size: 1.5rem;
  font-weight: 700;
`;

const Small = styled.span`
  line-height: 1rem;
  &:hover a {
    text-decoration: underline;
  }
`;

const GoogleButton = styled.button`
  margin-bottom: 1rem;
`;

const SignUp: FC<RouteComponentProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (
    event: any,
    email: any,
    password: any
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError("Error Signing up with email and password" as any);
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = (event: any) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };
  return (
    <>
      <Background>
        <Container>
          <Form>
            {error !== null && (
              <Alert
                message="Error"
                description={error}
                type="error"
                showIcon
                closable
              />
            )}
            <Item align="center">
              <Header>Sign Up</Header>
            </Item>

            <Field.Input
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Your Name"
              id="displayName"
              onChange={(event) => onChangeHandler(event)}
              prefix={<UserOutlined />}
            />
            <Field.Input
              type="email"
              name="userEmail"
              value={email}
              placeholder="Your Email"
              id="userEmail"
              onChange={(event) => onChangeHandler(event)}
              prefix={<MailOutlined />}
            />
            <Field.Input
              type="password"
              name="userPassword"
              id="userPassword"
              value={password}
              placeholder="Your Password"
              onChange={(event) => onChangeHandler(event)}
              prefix={<LockOutlined />}
            />
            <SubmitButton
              onClick={(event) => {
                createUserWithEmailAndPasswordHandler(event, email, password);
              }}
              style={{ marginBottom: "1rem" }}
            >
              Sign Up
            </SubmitButton>
            <p style={{ textAlign: "center" }}>or</p>
            <GoogleButton>Sign Up with Google</GoogleButton>
            <Small>
              Already have an account? <Link to="/signIn">Sign in here</Link>
            </Small>
          </Form>
        </Container>
      </Background>
    </>
  );
};
export default SignUp;
