import { Link, RouteComponentProps } from "@reach/router";
import { useState, FC } from "react";
import React from "react";
// import { auth } from "../../../Firebase/firebase";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

import Form, { Item, Field } from "../../Form";
import styled from "styled-components";
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

const SignIn: FC<RouteComponentProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (
    event: any,
    email: any,
    password: any
  ) => {
    event.preventDefault();
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
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
            <Header>Login</Header>
          </Item>
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
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
            prefix={<LockOutlined />}
          />
          <SubmitButton
            style={{ marginBottom: "1rem" }}
            // onClick={(event) => {
            //   const signInWithEmailAndPasswordHandler = (
            //     event: any,
            //     email: any,
            //     password: any
            //   ) => {
            //     event.preventDefault();
            //     auth
            //       .signInWithEmailAndPassword(email, password)
            //       .catch((error: any) => {
            //         setError(
            //           "Error signing in with password and email!" as any
            //         );
            //         console.error(
            //           "Error signing in with password and email",
            //           error
            //         );
            //       });
            //   };
            // }}
          >
            Login
          </SubmitButton>
          {console.log(signInWithEmailAndPasswordHandler, setError)}
          <Small>
            Don&apos;t have an account?&nbsp;
            <Link to={"/signUp"}>Signup</Link>
          </Small>
        </Form>
      </Container>
      {/* <div className="mt-8">
        <h1 className="text-3xl mb-2 text-center font-bold">Sign In</h1>
        <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
          {error !== null && (
            <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
              {error}
            </div>
          )}
          <form className="">
            <label htmlFor="userEmail" className="block">
              Email:
            </label>
            <input
              type="email"
              name="userEmail"
              value={email}
              placeholder="Your Email"
              id="userEmail"
              onChange={(event) => onChangeHandler(event)}
            />
            <label htmlFor="userPassword" className="block">
              Password:
            </label>
            <input
              type="password"
              name="userPassword"
              value={password}
              placeholder="Your Password"
              id="userPassword"
              onChange={(event) => onChangeHandler(event)}
            />
            <button
             
              onClick={(event) => {
                const signInWithEmailAndPasswordHandler = (
                  event: any,
                  email: any,
                  password: any
                ) => {
                  event.preventDefault();
                  auth
                    .signInWithEmailAndPassword(email, password)
                    .catch((error: any) => {
                      setError(
                        "Error signing in with password and email!" as any
                      );
                      console.error(
                        "Error signing in with password and email",
                        error
                      );
                    });
                };
              }}
            >
              Sign in
            </button>
          </form>
          <p className="text-center my-3">or</p>
          <button className="bg-red-500 hover:bg-red-600 w-full py-2 text-white">
            Sign in with Google
          </button>
          <p className="text-center my-3">
            Don't have an account?{" "}
            <Link to="/signUp" className="text-blue-500 hover:text-blue-600">
              Sign up here
            </Link>{" "}
            <br />{" "}
            <Link
              to="/passwordReset"
              className="text-blue-500 hover:text-blue-600"
            >
              Forgot Password?
            </Link>
          </p>
        </div>
      </div> */}
    </Background>
  );
};
export default SignIn;
