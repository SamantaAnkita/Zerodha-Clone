import React from "react";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftImage
        imageURL="media/images/products-kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        learnMore=""
      />
      <RightImage 
      imageURL ="media/images/products-console.png" 
      productName="Coin" 
      productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
      learnMore=""/>
      <LeftImage
        imageURL="media/images/products-coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightImage 
      imageURL="media/images/landing.svg"
       productName="Kite Connect API" 
       productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
       learnMore=""/>
      <LeftImage
        imageURL="media/images/varsity-products.svg"
        productName="Varsity"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <p className="text-center">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
       
      <Universe />
    </>
  );
}

export default ProductPage;
