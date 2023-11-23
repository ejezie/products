import React from "react";
import "./Hero.scss";
import Image from "next/image";
import { Button, Container } from "@/_components";
import Link from "next/link";
import { useGetAllProductsQuery } from "@/_services/product.service";

const Hero = () => {
  const { data } = useGetAllProductsQuery({});

  return (
    <Container>
      <div className="hero start">
        <div className="hero_text_wrap">
          <div className="grad_text heading hero_text_title">
            {data?.products[0]?.title}
          </div>
          <div className="hero_text_desc text">
            {" "}
            {data?.products[0]?.description}
          </div>
          <Link href={`/details/${data?.products[0]?.id}`}>
            <Button text="View" className="hero_btn" />
          </Link>
        </div>
        <div className="image_wrap">
          <Image
            fill
            src={data?.products[0]?.thumbnail}
            alt="mouse corsair"
            className="img"
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
