import React, { useEffect, useState } from "react";
import "./Hero.scss";
import Image from "next/image";
import { Button, Container, Shimmer } from "@/_components";
import Link from "next/link";
import { useGetSingleProductQuery } from "@/_services/product.service";
import { motion } from "framer-motion";

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
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0.5,
                },
              }}
              viewport={{
                once: true,
              }}
              className="grad_text heading hero_text_title"
            >
              {data?.title}
            </motion.div>
          )}
          {isLoading ? (
            <Shimmer height="100px" width="95%" margin="0px 0px 20px 0px" />
          ) : (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 1,
                },
              }}
              viewport={{
                once: true,
              }}
              className="hero_text_desc sub_heading"
            >
              {" "}
              {data?.description}
            </motion.div>
          )}
          {isLoading ? (
            <Shimmer height="60px" width="250px" margin="0px 0px 20px 0px" />
          ) : (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 1.5,
                },
              }}
              viewport={{
                once: true,
              }}
            >
              <Link href={`/details/${data?.id}`}>
                <Button text="View" className="hero_btn" />
              </Link>
            </motion.div>
          )}
        </div>

        <div className="image_wrap">
          {isLoading ? (
            <Shimmer height="60vh" margin="0px 0px 20px 0px" />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 1.5,
                },
              }}
              viewport={{
                once: true,
              }}
            >
              <Image
                fill
                src={data?.thumbnail}
                alt="mouse corsair"
                className="img"
              />
            </motion.div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Hero;
