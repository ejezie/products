import React from "react";
import "./DetailsBlock.scss";
import { Button, Container } from "@/_components";

const DetailsBlock = () => {
  return (
    <Container>
      <>
        <div className="details between">
          <div className="image_wrap">
            <div className="image_main">
                
            </div>
            <div className="image_wrap_item between">
              <div className="image_item"></div>
              <div className="image_item"></div>
              <div className="image_item"></div>
            </div>
          </div>
          <div className="details_text_wrap">
            <div className="grad_text heading details_text_title">iPhone 9</div>
            <div className="details_text_desc text">
              {" "}
              An apple mobile which is nothing like apple
            </div>
          </div>
        </div>
      </>
    </Container>
  );
};

export default DetailsBlock;
