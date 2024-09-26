import React from "react";

const HeroSection = () => {
  return (
    <main className="main-container ">
      <div className="container-Content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="container-button">
          <button>Shop Now</button>
          <button className="secondry-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/flipkart.png" alt="flipkart-logo" />
            <img src="/images/amazon.png" alt="amazon-logo" />
          </div>
        </div>
      </div>
      <div className="container-img">
        <img src="/images/shoe_image.png" alt="shoe_image" />
      </div>
    </main>
  );
};

export default HeroSection;
