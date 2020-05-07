import React, { FC } from "react";
import styled from "styled-components";

interface HeaderProps {
  title: string;
}

const Header = styled.div`
  font-size: 1.5rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  /* POSITION */
  margin-bottom: 1rem;
`;

const HeaderComponent: FC<HeaderProps> = ({ title }) => {
  return <Header>{title}</Header>;
};

export default HeaderComponent;
