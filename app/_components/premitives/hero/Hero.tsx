import React from "react";
import "./Hero.scss";
import Image from "next/image";
import { Button, Container } from "@/_components";
import Link from "next/link";

const Hero = () => {
  return (
    <Container>
      <div className="hero start">
        <div className="hero_text_wrap">
          <div className="grad_text heading hero_text_title">iPhone 9</div>
          <div className="hero_text_desc text">
            {" "}
            An apple mobile which is nothing like apple
          </div>
          <Link href={"/details/1"}>
            <Button text="View" className="hero_btn" />
          </Link>
        </div>
        <div className="image_wrap"></div>
      </div>
    </Container>
  );
};

export default Hero;
