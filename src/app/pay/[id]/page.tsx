"use client";

import React, { useEffect, useState } from "react";
import CheckoutForm from "@/components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Pay = ({ params }: { params: { id: string } }) => {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = params;

  useEffect(() => {
    const makeReq = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/create-intent/${id}`,
          {
            method: "POST",
          }
        );
        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };
  }, [id]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
