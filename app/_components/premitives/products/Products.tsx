import React from "react";
import "./Products.scss";
import { Card } from "@/_components";
import Container from "@/_components/layout/container/Container";

const Products = () => {
  return (
    <Container>
      <div className="products">
        {[1, 2, 3, 4, 5, 6].map((_, idx) => (
          <div key={idx} className="product_item">
            <Card />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Products;
