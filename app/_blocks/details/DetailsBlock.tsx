"use client";
import React, { useEffect, useState } from "react";
import "./DetailsBlock.scss";
import { Button, Container } from "@/_components";
import { useGetSingleProductQuery } from "@/_services/product.service";
import { useParams } from "next/navigation";
import Image from "next/image";

const DetailsBlock = () => {
  const params = useParams();
  const id = params.slug[1];

  const { data } = useGetSingleProductQuery(id);

  console.log(data);

  return (
    <Container>
      <>
        <div className="details between">
          <div className="image_wrap">
            <div className="image_main">
              <img src={data?.thumbnail} alt="product" className="img" />
            </div>
            <div className="image_wrap_item between">
              {data?.images?.map((item: string, idx: number) => (
                <div key={idx} className="img_wrap">
                  <img src={item} alt="product" className="img_item" />
                </div>
              ))}
            </div>
          </div>
          <div className="details_text_wrap">
            <div className="grad_text heading details_text_title">
              {data?.title}
            </div>
            <div className="details_text_desc sub_heading">
              {" "}
              {data?.description}
            </div>
            <div className="details_text_desc text">brand: {data?.brand}</div>
            <div className="details_text_desc text">price: ${data?.price}</div>
            <div className="details_text_desc text">stock: {data?.stock}</div>
            <div className="details_text_desc text">rating: {data?.rating}</div>
          </div>
        </div>
      </>
    </Container>
  );
};

export default DetailsBlock;