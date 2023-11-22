import React from "react";
import "./card.scss";
import Link from "next/link";
import Image from "next/image";
import { Button } from "..";

const Card = () => {
  return (
    <div className="card">
      <div className="imgBox">
        <Image fill src="" alt="mouse corsair" className="mouse" />
      </div>

      <div className="contentBox">
        <div className="card_title">Mouse Corsair M65</div>
        <div className="card_text">
          61.<small>98</small> €
        </div>
        <Link href="/detail/1" className="buy">
          {" "}
          <Button text="More" className="more" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
