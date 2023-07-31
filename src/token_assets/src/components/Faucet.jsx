import React, { useState } from "react";
import { token } from "../../../declarations/token";

function Faucet() {
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Gimme Gimme")
  async function handleClick(event) {
    setDisabled(true);
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
      <label>Get your free SANGela tokens here! Claim 10,000 SANG coins to your account.</label>
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
