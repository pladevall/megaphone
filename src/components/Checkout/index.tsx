/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import styled from "styled-components";
import UpgradeModal from "./Modal";

const stripePromise = loadStripe("pk_test_1jQV5YWwGBHg9EU9mWW9EBUl");

const UpgradeButton = styled.button`
  font-family: "Inter";
  font-weight: 500;
  color: black;
  background: #F1C410;
  border: 2px solid black;
  -webkit-box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.83);
-moz-box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.83);
box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.83);


  cursor: pointer;
  &:hover {
    background: #d9b00d;
  }
  &:focus {
    outline: none;
  }
`;

const CheckoutComponent = () => {
  //   const handleClick = async (event: any) => {
  //     // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  //     // @ts-ignore
  //     const stripe = await stripePromise;
  //     const { error: any } = await stripe
  //       ?.redirectToCheckout({
  //         items: [{ sku: "sku_HDLvEdoHAxi1IW", quantity: 1 }],
  //         successUrl: "https://example.com/success",
  //         cancelUrl: "https://example.com/cancel",
  //       })
  //       .then(function (result) {
  //         if (result.error) {
  //           // If `redirectToCheckout` fails due to a browser or network
  //           // error, display the localized error message to your customer.
  //           var displayError = document.getElementById("error-message");
  //           displayError.textContent = result.error.message;
  //         }
  //       });
  //   };

  const handleClick = () => {
    console.log("Clicked Checkout");
  };

  const [state, setState] = useState({ visible: false });
  const showModal = () => {
    setState({
      visible: true,
    });
  };

  return (
    <>
      <UpgradeModal state={state} setState={setState} />
      <UpgradeButton role="link" onClick={showModal}>
        Upgrade to Pro!
      </UpgradeButton>

      <div id="error-message"></div>
    </>
  );
};

export default CheckoutComponent;
