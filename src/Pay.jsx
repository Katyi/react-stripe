import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';

const KEY = 'pk_test_51MmWn9EOca5G6BVEdgvNlSvi6NpmB8FxtzwBJNGS7MWA5UT8zpA7Y61DFracxkwZVM6PgAhDaL2KRQxARhUBCyUf000vpW9oRo';

const Pay =() => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(()=>{
    const makeRequest = async () => {
      try{
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          },
        );
        console.log(res.data);
        navigate("/success");
      }catch(err){
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate])


  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (<span>Processing. Please wait...</span>) : (
        <StripeCheckout 
          name = "Alex Shop" 
          img="https://avatars.githubusercontent.com/u/1486366?v=4"
          billingAddress
          shippingAddress
          description = "Your total is $20"
          amount = {2000}
          token = {onToken}
          stripeKey={KEY}
          >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;