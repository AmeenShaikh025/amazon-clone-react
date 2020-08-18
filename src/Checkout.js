import React from "react";

import { useStateValue } from "./StateProvider";
import amazonad from "./amazon-adlaptop.jpg";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={amazonad} alt="image" />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping bassket is empty</h2>
            <p>You have no items in your basket.</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>

            {/* All checkout products */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <h1>subtotal</h1>
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
