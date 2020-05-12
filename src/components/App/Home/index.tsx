import React, { FC } from "react";
import "antd/dist/antd.css";

import Header from "../../Header";
import Favorites from "../../Favorites";
import Cards from "../../Cards";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components";
import ProfilePage from "../ProfilePage";

const Container = styled.div`
  padding: 1rem;
`;

const Home: FC<RouteComponentProps> = (user: any) => {
  return (
    <>
      <Container>
        <Header title="📣 Megaphone" />
        <ProfilePage />
        <Favorites />
        <Cards />
      </Container>
    </>
  );
};

export default Home;
