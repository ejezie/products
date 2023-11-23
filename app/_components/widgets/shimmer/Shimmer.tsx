import React from "react";
import "./Shimmer.scss";

interface ShimmerProps {
  height?: string;
  width?: string;
  margin?: string;
}

const Shimmer = ({ height, width, margin }: ShimmerProps) => {
  const style = {
    height: `${height || "10px"}`,
    width: `${width || "100%"}`,
    margin: `${margin || "0px"}`,
  };

  return (
    <div className="shimmer-wrapper" style={style}>
      <div className="shimmer"></div>
    </div>
  );
};

export default Shimmer;
