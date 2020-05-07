import React from "react";
import "antd/dist/antd.css";
import "./App.css";

import SoundCardComponent from "./components/SoundCard";
import Header from "./components/Header";
import Search from "./components/Search";
import Favorites from "./components/Favorites";

import styled from "styled-components";
import {
  snare,
  wow,
  hyena,
  applause,
  babylaugh,
  beep,
  boo,
  chaching,
  dixiehorn,
  fart,
  foghorn,
  news,
  partyhorn,
  rooster,
  train,
  woosh,
  trex,
} from "./components/Sounds";
import Checkout from "./components/Checkout";
import CustomCardComponent from "./components/CustomCard";

const Container = styled.div`
  padding: 1rem;
`;

const Combos = [
  { name: "", isFavorite: false, plan: "free", image: "🥳", sound: partyhorn },
  { name: "", isFavorite: false, plan: "free", image: "👏", sound: applause },
  { name: "", isFavorite: false, plan: "free", image: "🥁", sound: snare },
  { name: "", isFavorite: false, plan: "free", image: "😮", sound: wow },
  { name: "", isFavorite: false, plan: "free", image: "💸", sound: chaching },
  { name: "", isFavorite: false, plan: "free", image: "👀", sound: "" },
  { name: "", isFavorite: false, plan: "free", image: "😎", sound: "" },
  { name: "", isFavorite: false, plan: "free", image: "🤣", sound: "" },
  { name: "", isFavorite: false, plan: "free", image: "😬", sound: "" },
  { name: "", isFavorite: false, plan: "free", image: "🚀", sound: "" },
  { name: "", isFavorite: false, plan: "pro", image: "🐓", sound: rooster },
  { name: "", isFavorite: false, plan: "pro", image: "🚂", sound: train },
  { name: "", isFavorite: false, plan: "pro", image: "💨", sound: fart },
  { name: "", isFavorite: false, plan: "pro", image: "👎", sound: boo },
  { name: "", isFavorite: false, plan: "pro", image: "👶", sound: babylaugh },
  { name: "", isFavorite: false, plan: "pro", image: "🔥", sound: "fire" },
  { name: "", isFavorite: false, plan: "pro", image: "🤬", sound: beep },
  { name: "", isFavorite: false, plan: "pro", image: "👊", sound: "" },
  { name: "", isFavorite: false, plan: "pro", image: "😴", sound: "" },
  { name: "", isFavorite: false, plan: "pro", image: "😈", sound: "" },
];

function App() {
  const cards = Combos.map((combo) => <SoundCardComponent combo={combo} />);

  return (
    <Container>
      <Header title="📣 Megaphone" />
      <Search />
      <Favorites />
      <Checkout />
      <CustomCardComponent />
      <div style={{ display: "flex", flexWrap: "wrap" }}>{cards}</div>
    </Container>
  );
}

export default App;
