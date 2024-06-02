import React from "react";
import { Books } from "../bookData";
const TopSellingbook = () => {
  return (
    <>
      <div className="mx-20 my-10">
        <h1 className="text-4xl text-center font-bold my-8 mb-5 font-serif">
          Top Selling Books
        </h1>
        <swiper-container slides-per-view="6" enabled="true" navigation="true">
          {Books.map((books, i) => (
            <swiper-slide>
              <div className="flex-col items-center  px-10">
                {" "}
                <a href="">
                  <img src={books.bookcover} alt="" className="w-20" />
                </a>
                <p className="font-semibold">
                  {" "}
                  ₹ {books.price}{" "}
                  <span className="line-through text-xs">{books.mrp}</span>{" "}
                </p>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </>
  );
};

export default TopSellingbook;
