import React from "react";
import "./card.scss";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/_components";

const Card = ({ item }: any) => {
  return (
    <div className="card">
      <div className="imgBox">
        <Image fill src={item?.thumbnail} alt="mouse corsair" className="img" />
      </div>

      <div className="contentBox">
        <div className="card_title">{item?.title}</div>
        <div className="card_text">${item?.price}</div>
        <Link href={`/detail/${item?.id}`} className="buy">
          {" "}
          <Button text="More" className="more" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
