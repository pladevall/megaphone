import React, { useState } from "react";
import SoundCardComponent from "../SoundCard";
import { Row } from "antd";
import SearchComponent from "../Search";
import styled from "styled-components";
import { Combos } from "./CardList";
import CustomCardComponent from "../CustomCard";

const CardsHeader = styled.div`
  font-size: 1.25rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  color: rgba(0, 0, 0, 1);
  margin-right: auto;
`;

const Cards = () => {
  const [search, setSearch] = useState("");
  const cards = Combos.filter((combo) => {
    return (
      combo.name.toLowerCase().includes(search.toLowerCase()) ||
      combo.image === search
      // combo.tag.join().includes(search.toLowerCase())
    );
  }).map((combo) => <SoundCardComponent combo={combo} />);

  // console.log(cards.length);
  return (
    <>
      <Row align="middle">
        <CardsHeader>Cards</CardsHeader>
        <SearchComponent onChange={setSearch} />
      </Row>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {cards}
        <CustomCardComponent />
      </div>
    </>
  );
};

export default Cards;
