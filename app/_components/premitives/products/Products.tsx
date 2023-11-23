import React, { useEffect, useState } from "react";
import "./Products.scss";
import { Button, Card, Shimmer } from "@/_components";
import Container from "@/_components/layout/container/Container";
import {
  useGetAllProductsQuery,
  useGetProductCategoriesQuery,
  useGetProductsOfCategoryQuery,
} from "@/_services/product.service";
import { useAppDispatch } from "@/hooks";
import { openModal } from "@/_redux/slices/modal.slice";
import formatErrorResponse from "@/utils/formatErroResponse";

const Products = () => {
  const [active, setActive] = useState("All");
  const [skip, setSkip] = useState(0);

  const dispatch = useAppDispatch();

  // request to server
  const { data, isLoading, isError, error } = useGetAllProductsQuery({ skip });
  const { data: dataCategories, isLoading: isLoadingCategories } =
    useGetProductCategoriesQuery("");
  const {
    data: dataCategory,
    isLoading: isLoadingCategory,
    isError: isErrorCategory,
    error: errorCategory,
  } = useGetProductsOfCategoryQuery(active);

  // select data to show
  const shownData = active === "All" ? data : dataCategory;

  // Handle pagination
  const hamdlePage = (type: string) => {
    if (type === "next") {
      skip <= 96 && setSkip((prev) => prev + 6);
    } else {
      skip >= 6 && setSkip((prev) => prev - 6);
    }
  };

  // handle error
  useEffect(() => {
    isError &&
      dispatch(
        openModal({
          title: "An Error Occured",
          message: formatErrorResponse(error),
        })
      );
    isErrorCategory &&
      dispatch(
        openModal({
          title: "An Error Occured",
          message: formatErrorResponse(errorCategory),
        })
      );
  }, [isError, error, errorCategory, isErrorCategory, dispatch]);

  return (
    <Container>
      <div className="tabs_wrap start">
        {isLoadingCategories ? (
          <Shimmer height="30px" width="100px" margin="20px 0px 20px 0px" />
        ) : (
          <div
            className={`tabs ${active === "All" && "active"}`}
            onClick={() => setActive("All")}
          >
            All
          </div>
        )}
        {isLoadingCategories
          ? [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]?.map((_, idsx) => (
              <div key={idsx}>
                <Shimmer
                  height="30px"
                  width="100px"
                  margin="20px 0px 20px 0px"
                />
              </div>
            ))
          : dataCategories?.map((item: string, idx: number) => (
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
        {isLoading || isLoadingCategory
          ? [1, 1, 1, 1, 1, 1]?.map((_, idsx) => (
              <div key={idsx}>
                <Shimmer height="380px" margin="20px 0px 20px 0px" />
              </div>
            ))
          : shownData?.products?.map((item: any, idx: number) => (
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
