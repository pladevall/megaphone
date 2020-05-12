import React, { useState, FC } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import { auth } from "../../../Firebase/firebase";
import Form, { Item, Field } from "../../Form";
import SubmitButton from "../../Button";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Alert } from "antd";

interface ErrorMessage {
  value?: React.SetStateAction<null>;
}

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
`;

const PasswordReset: FC<RouteComponentProps> = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
  const onChangeHandler = (event: {
    currentTarget: { name: any; value: any };
  }) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = (event: any) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch(() => {
        setError("Error resetting password" as any);
      });
  };

  return (
    <Background>
      <Container>
        <Form>
          {emailHasBeenSent && (
            <Alert
              message="An email has been sent to you!"
              type="success"
              showIcon
              closable
            />
          )}
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
            <Header>Reset Your Password</Header>
          </Item>
          <Field.Input
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Your Email"
            onChange={onChangeHandler}
            prefix={<MailOutlined />}
          />

          <SubmitButton
            style={{ marginBottom: "1rem" }}
            onClick={sendResetEmail}
          >
            Reset Password
          </SubmitButton>
          <Small>
            &larr; Back to<Link to={"/signUp"}> Sign In </Link>
          </Small>
        </Form>
      </Container>
    </Background>
  );
};
export default PasswordReset;
