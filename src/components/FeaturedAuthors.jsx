import React from "react";
import { Authors } from "../bookData";
const FeaturedAuthors = () => {
  return (
    <>
      <h1 className="text-4xl text-center font-bold my-8 font-serif">
        Featured Authors
      </h1>
      <div className="flex justify-around">
        {Authors.map((author, index) => (
          <div>
            <img
              src={author.authorcover}
              alt={author.name}
              className="mx-auto mb-4  w-28 h-28 rounded-[12px] "
            />
            <h5 className="font-semibold text-center">{author.name} </h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedAuthors;
