"use client";
import React, { useEffect, useState } from "react";
import "./DetailsBlock.scss";
import { Button, Container, Shimmer } from "@/_components";
import { useGetSingleProductQuery } from "@/_services/product.service";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useAppDispatch } from "@/hooks";
import { openModal } from "@/_redux/slices/modal.slice";
import formatErrorResponse from "@/utils/formatErroResponse";
import { motion } from "framer-motion";

const DetailsBlock = () => {
  const params = useParams();
  const id = params.slug[1];

  const dispatch = useAppDispatch();

  const { data, isLoading, isError, error } = useGetSingleProductQuery(id);

  // handle error
  useEffect(() => {
    isError &&
      dispatch(
        openModal({
          title: "An Error Occured",
          message: formatErrorResponse(error),
        })
      );
  }, [isError, error, dispatch]);

  return (
    <Container>
      <>
        <div className="details between">
          <div className="image_wrap">
            {isLoading ? (
              <Shimmer height="55vh" width="95%" margin="20px 0px 20px 0px" />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0.5,
                  },
                }}
                viewport={{
                  once: true,
                }}
                className="image_main"
              >
                <Image
                  fill
                  src={data?.thumbnail}
                  alt="product"
                  className="img"
                />
              </motion.div>
            )}
            {isLoading ? (
              <Shimmer height="120px" width="95%" margin="20px 0px 20px 0px" />
            ) : (
              <div className="image_wrap_item between">
                {data?.images?.map((item: string, idx: number) => (
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.8,
                        delay: (0 + idx + 1) * 0.4,
                      },
                    }}
                    viewport={{
                      once: true,
                    }}
                    key={idx}
                    className="img_wrap"
                  >
                    <Image fill src={item} alt="product" className="img_item" />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
          <div className="details_text_wrap">
            {isLoading ? (
              <Shimmer height="50px" width="95%" margin="20px 0px 20px 0px" />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0.5,
                  },
                }}
                viewport={{
                  once: true,
                }}
                className="grad_text heading details_text_title"
              >
                {data?.title}
              </motion.div>
            )}
            {isLoading ? (
              <Shimmer height="100px" width="95%" margin="20px 0px 20px 0px" />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0.7,
                  },
                }}
                viewport={{
                  once: true,
                }}
                className="details_text_desc sub_heading"
              >
                {" "}
                {data?.description}
              </motion.div>
            )}
            {isLoading ? (
              <Shimmer height="30px" width="150px" margin="20px 0px 20px 0px" />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0.9,
                  },
                }}
                viewport={{
                  once: true,
                }}
                className="details_text_desc text"
              >
                brand: {data?.brand}
              </motion.div>
            )}
            {isLoading ? (
              <Shimmer height="30px" width="150px" margin="20px 0px 20px 0px" />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 1.2,
                  },
                }}
                viewport={{
                  once: true,
                }}
                className="details_text_desc text"
              >
                price: ${data?.price}
              </motion.div>
            )}
            {isLoading ? (
              <Shimmer height="30px" width="150px" margin="20px 0px 20px 0px" />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 1.4,
                  },
                }}
                viewport={{
                  once: true,
                }}
                className="details_text_desc text"
              >
                stock: {data?.stock}
              </motion.div>
            )}
            {isLoading ? (
              <Shimmer height="30px" width="150px" margin="20px 0px 20px 0px" />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 1.6,
                  },
                }}
                viewport={{
                  once: true,
                }}
                className="details_text_desc text"
              >
                rating: {data?.rating}
              </motion.div>
            )}
          </div>
        </div>
      </>
    </Container>
  );
};

export default DetailsBlock;
