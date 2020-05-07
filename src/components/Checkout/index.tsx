/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_1jQV5YWwGBHg9EU9mWW9EBUl");

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

  return (
    <>
      <button role="link" onClick={handleClick}>
        Upgrade to Pro!
      </button>
      <div id="error-message"></div>
    </>
  );
};

export default CheckoutComponent;
