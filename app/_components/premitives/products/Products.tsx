import React, { useState } from "react";
import "./Products.scss";
import { Button, Card } from "@/_components";
import Container from "@/_components/layout/container/Container";
import {
  useGetAllProductsQuery,
  useGetProductCategoriesQuery,
  useGetProductsOfCategoryQuery,
} from "@/_services/product.service";

const Products = () => {
  const [active, setActive] = useState("All");
  const [skip, setSkip] = useState(0);

  const { data, isLoading, isError, error } = useGetAllProductsQuery({skip});
  const { data: dataCategories } = useGetProductCategoriesQuery("");
  const { data: dataCategory, isLoading: isLoadingCategory } =
    useGetProductsOfCategoryQuery(active);

  const shownData = active === "All" ? data : dataCategory;
  console.log(shownData, "cats");

  const hamdlePage = (type: string) => {
    if (type === "next") {
      skip <= 96 && setSkip((prev) => prev + 6);
    } else {
      skip >= 6 && setSkip((prev) => prev - 6);
    }
  };
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
      {active === "All" && (
        <div className="end btn_wrap">
          <Button
            text="Prvious"
            className="prod_pg_prev"
            onClick={() => hamdlePage("prev")}
            disabled={skip === 0}

          />
          <Button
            text="Next"
            className="prod_pg_next"
            onClick={() => hamdlePage("next")}
            disabled={skip >= 96}
          />
        </div>
      )}
    </Container>
  );
};

export default Products;
