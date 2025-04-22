import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import CardFive from "../_core/CardFive";

const Product = () => {
  return (
    <div className="px-5 md:px-8 lg:px-12 py-16 flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-[32px] md:text-[44px] text-center lg:text-[64px] font-bold">
        Future-Ready Platforms{" "}
      </h2>
      <div className="flex text-white flex-col text-center md:flex-row gap-2 mt-3">
        <Button className="order-2 md:order-1">
          <span>Get Started</span>
          <ArrowRight />
        </Button>
      </div>

      {/* Products Grid */}
      <div className="mt-10 flex flex-wrap gap-6">
        {[
          {
            title: "Transformer and substation equipment",
            imageUrl: "/png/Product1.png",
          },
          {
            title: "Smart and prepaid meters",
            imageUrl: "/png/Product2.png",
          },
          {
            title: "Load management systems",
            imageUrl: "/png/Product3.png",
          },
          {
            title: "Load management systems",
            imageUrl: "/png/Product4.png",
          },
        ].map((product, index) => (
          <CardFive key={index} imageUrl={product.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Product;
