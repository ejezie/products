"use client";
import React, { useEffect } from "react";
import "./HomeBlock.scss";
import { Hero, Products } from "@/_components";

const HomeBlock = () => {
  return (
    <div className="home_block">
      <Hero />
      <Products />
    </div>
  );
};

export default HomeBlock;
