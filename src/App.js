import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Card } from "antd";
import styled from "styled-components";
import useSound from "use-sound";
import { rock, snare } from "./components/Sounds";

import { loadStripe } from "@stripe/stripe-js";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_1jQV5YWwGBHg9EU9mWW9EBUl");
const Container = styled.div`
  padding: 1rem;
`;

const SoundCard = styled(Card)`
  width: 8rem;
  height: 10rem;
  cursor: pointer;
  border: 1px solid #dadada;
  padding: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  /* EMOJIS */
  font-size: 40px;
  text-align: center;
`;

const SoundCardComponent = ({ combo }) => {
  const [play, { isPlaying, stop }] = useSound(combo.sound);
  return (
    <SoundCard
      onClick={() => {
        return isPlaying ? stop() : play();
      }}
    >
      {combo.image}
    </SoundCard>
  );
};

const Combos = [
  { image: "🥳", sound: rock },
  { image: "👀", sound: snare },
  { image: "😎", sound: rock },
  { image: "👏", sound: snare },
  { image: "🥁", sound: rock },
  { image: "😮", sound: snare },
  { image: "💸", sound: rock },
  { image: "🤣", sound: snare },
  { image: "😬", sound: rock },
  { image: "🚀", sound: snare },
];

function App() {
  const handleClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      items: [
        // Replace with the ID of your SKU
        { sku: "sku_HDLvEdoHAxi1IW", quantity: 1 },
      ],
      successUrl: "https://example.com/success",
      cancelUrl: "https://example.com/cancel",
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };

  const cards = Combos.map((combo) => <SoundCardComponent combo={combo} />);

  return (
    <Container>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{cards}</div>
      <button role="link" onClick={handleClick}>
        Checkout
      </button>
    </Container>
  );
}

export default App;
