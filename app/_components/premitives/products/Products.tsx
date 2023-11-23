import React, { useState } from "react";
import "./Products.scss";
import { Card } from "@/_components";
import Container from "@/_components/layout/container/Container";
import {
  useGetAllProductsQuery,
  useGetProductCategoriesQuery,
  useGetProductsOfCategoryQuery,
} from "@/_services/product.service";

const Products = () => {
  const [active, setActive] = useState("All");

  const { data, isLoading, isError, error } = useGetAllProductsQuery({});
  const { data: dataCategories } = useGetProductCategoriesQuery("");
  const { data: dataCategory, isLoading: isLoadingCategory } =
    useGetProductsOfCategoryQuery(active);

  const shownData = active === "All" ? data : dataCategory;
  console.log(dataCategories, "cats");
  return (
    <Container>
      <div className="tabs_wrap start">
        <div
          className={`tabs ${active === "All" && "active"}`}
          onClick={() => setActive("All")}
        >
          All
        </div>
        {dataCategories?.map((item: string, idx: number) => (
          <div
            className={`tabs ${active === item && "active"}`}
            key={idx}
            onClick={() => setActive(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="products">
        {shownData?.products?.map((item: any, idx: number) => (
          <div key={idx} className="product_item">
            <Card item={item} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Products;
