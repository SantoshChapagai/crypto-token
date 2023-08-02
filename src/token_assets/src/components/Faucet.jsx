import React, { useState } from "react";
import { token, canisterId, createActor } from "../../../declarations/token";
import { AuthClient } from "@dfinity/auth-client";


function Faucet(props) {
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Gimme Gimme")
  async function handleClick(event) {
    setDisabled(true);
    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();
    const authenticatedCanister = createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });
    const result = await token.payOut();
    setButtonText(result);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free SANG tokens here! Claim 10,000 SANG coins to {props.userPrincipal}.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick}
          disabled={disabled}
        >
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
