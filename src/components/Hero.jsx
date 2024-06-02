import React from "react";
import { Books, Authors } from "../bookData";

const Hero = () => {
  return (
    <>
      <div className="mx-4 flex gap-14">
        <div>
          <h1 className="mx-8 text-sky-800 text-6xl">
            Eplore the World <br /> By Turning Pages...
          </h1>
          <p className="text-gray-300 text-xl mx-8 text-lg">
            "Journey through the pages, find solace in words and let the story
            shape your World."
          </p>
        </div>
        <div className="w-72">
          <swiper-container effect="cards" autoplay="true">
            {Books.map((book, index) => (
              <swiper-slide>
                <img src={book.bookcover} alt={book.title} width="150px" />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#9a9a9a"
          fillOpacity="1"
          d="M0,192L40,208C80,224,160,256,240,266.7C320,277,400,267,480,224C560,181,640,107,720,74.7C800,43,880,53,960,90.7C1040,128,1120,192,1200,202.7C1280,213,1360,171,1400,149.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default Hero;
