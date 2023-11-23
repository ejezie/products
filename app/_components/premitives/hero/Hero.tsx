import React, { useEffect, useState } from "react";
import "./Hero.scss";
import Image from "next/image";
import { Button, Container, Shimmer } from "@/_components";
import Link from "next/link";
import { useGetSingleProductQuery } from "@/_services/product.service";

const Hero = () => {
  const [random, setRandom] = useState(300);
  const { data, isLoading } = useGetSingleProductQuery(random);

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    setRandom(randomNumber);
  }, []);

  return (
    <Container>
      <div className="hero start">
        <div className="hero_text_wrap">
          {isLoading ? (
            <Shimmer height="50px" width="95%" margin="0px 0px 20px 0px" />
          ) : (
            <div className="grad_text heading hero_text_title">
              {data?.title}
            </div>
          )}
          {isLoading ? (
            <Shimmer height="100px" width="95%" margin="0px 0px 20px 0px" />
          ) : (
            <div className="hero_text_desc sub_heading"> {data?.description}</div>
          )}
          {isLoading ? (
            <Shimmer height="60px" width="250px" margin="0px 0px 20px 0px" />
          ) : (
            <Link href={`/details/${data?.id}`}>
              <Button text="View" className="hero_btn" />
            </Link>
          )}
        </div>

        <div className="image_wrap">
          {isLoading ? (
            <Shimmer height="60vh" margin="0px 0px 20px 0px" />
          ) : (
            <Image
              fill
              src={data?.thumbnail}
              alt="mouse corsair"
              className="img"
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Hero;
