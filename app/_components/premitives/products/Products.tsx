import React from "react";
import "./Products.scss";
import { Card } from "@/_components";
import Container from "@/_components/layout/container/Container";
import { useGetAllProductsQuery } from "@/_services/product.service";

const Products = () => {
  const { data, isLoading, isError, error } = useGetAllProductsQuery({});
  return (
    <Container>
      <div className="products">
        {data?.products?.map((item: any, idx: number) => (
          <div key={idx} className="product_item">
            <Card item={item} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Products;
