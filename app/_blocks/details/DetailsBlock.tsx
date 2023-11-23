"use client";
import React, { useEffect, useState } from "react";
import "./DetailsBlock.scss";
import { Button, Container, Shimmer } from "@/_components";
import { useGetSingleProductQuery } from "@/_services/product.service";
import { useParams } from "next/navigation";
import Image from "next/image";

const DetailsBlock = () => {
  const params = useParams();
  const id = params.slug[1];

  const { data, isLoading } = useGetSingleProductQuery(id);

  return (
    <Container>
      <>
        <div className="details between">
          <div className="image_wrap">
            {isLoading ? (
              <Shimmer height="55vh" width="95%" margin="20px 0px 20px 0px" />
            ) : (
              <div className="image_main">
                <Image
                  fill
                  src={data?.thumbnail}
                  alt="product"
                  className="img"
                />
              </div>
            )}
            {isLoading ? (
              <Shimmer height="120px" width="95%" margin="20px 0px 20px 0px" />
            ) : (
              <div className="image_wrap_item between">
                {data?.images?.map((item: string, idx: number) => (
                  <div key={idx} className="img_wrap">
                    <Image fill src={item} alt="product" className="img_item" />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="details_text_wrap">
            {isLoading ? (
              <Shimmer height="50px" width="95%" margin="20px 0px 20px 0px" />
            ) : (
              <div className="grad_text heading details_text_title">
                {data?.title}
              </div>
            )}
            {isLoading ? (
              <Shimmer height="100px" width="95%" margin="20px 0px 20px 0px" />
            ) : (
              <div className="details_text_desc sub_heading">
                {" "}
                {data?.description}
              </div>
            )}
            {isLoading ? (
              <Shimmer height="30px" width="150px" margin="20px 0px 20px 0px" />
            ) : (
              <div className="details_text_desc text">brand: {data?.brand}</div>
            )}
            {isLoading ? (
              <Shimmer height="30px" width="150px" margin="20px 0px 20px 0px" />
            ) : (
              <div className="details_text_desc text">
                price: ${data?.price}
              </div>
            )}
            {isLoading ? (
              <Shimmer height="30px" width="150px" margin="20px 0px 20px 0px" />
            ) : (
              <div className="details_text_desc text">stock: {data?.stock}</div>
            )}
            {isLoading ? (
              <Shimmer height="30px" width="150px" margin="20px 0px 20px 0px" />
            ) : (
              <div className="details_text_desc text">
                rating: {data?.rating}
              </div>
            )}
          </div>
        </div>
      </>
    </Container>
  );
};

export default DetailsBlock;
