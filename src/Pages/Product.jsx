import React from "react";
import ProductHero from "../Components/productComponents/productHero";
import WhyHoruVision from "../Components/productComponents/WhyHoruVision";
import KeyCapabilities from "../Components/productComponents/KeyCapabilities";
import ProductCTA from "../Components/productComponents/ProductCTA";

export default function Product() {
  return (
    <>
      <ProductHero />

      <WhyHoruVision />

      <KeyCapabilities />

      <ProductCTA />
    </>
  );
}
