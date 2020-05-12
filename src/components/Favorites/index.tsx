import React, { FC } from "react";
import styled from "styled-components";
import SoundCardComponent from "../SoundCard";
import { Combos } from "../Cards/CardList";

const FavoritesHeader = styled.div`
  font-size: 1.25rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  color: rgba(0, 0, 0, 1);
  margin-right: auto;
`;

const FavoritesComponent: FC = () => {
  const cards = Combos.filter(
    (combo) => combo.isFavorite === true
  ).map((combo) => <SoundCardComponent combo={combo} />);

  return (
    <>
      <FavoritesHeader>Favorites</FavoritesHeader>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{cards}</div>
    </>
  );
};

export default FavoritesComponent;
