import React from "react";
import CurrencyFormat from "react-currency-format";

import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket.length} items):
              <strong>{`$ ${getBasketTotal(basket)}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains gifts
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="subtotal__button">Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
