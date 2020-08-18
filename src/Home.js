import React from "react";

import Product from "./Product";
import banner from "./amazonDevi.jpg";
import prodHome from "./prod-home.jpg";
import prodMob from "./prod-mobile.jpg";
import prodMixi from "./prod-mixi.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img className="home__image" src={banner} alt="amazon prime" />

      <div className="home__row">
        <Product
          id="1234"
          title="For a productive home office"
          price={1.34}
          rating={4}
          image={prodHome}
        />
        <Product
          id="1235"
          title="Mixi"
          price={1.34}
          rating={4}
          image={prodMixi}
        />
      </div>

      <div className="home__row">
        <Product
          id="1236"
          title="For a productive home office"
          price={1.34}
          rating={4}
          image={prodHome}
        />
        <Product
          id="1237"
          title="Mixi"
          price={1.34}
          rating={4}
          image={prodMixi}
        />
        <Product
          id="1238"
          title="For a productive home office"
          price={1.34}
          rating={4}
          image={prodHome}
        />
      </div>

      <div className="home__row">
        <Product
          id="1239"
          title="Mixi"
          price={1.34}
          rating={4}
          image={prodMob}
        />
      </div>
    </div>
  );
}

export default Home;
