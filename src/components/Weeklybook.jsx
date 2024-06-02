import React from "react";
import book from "../images/books/Untitled design (2).png";
const Weeklybook = () => {
  return (
    <>
      <div className="flex  items-center justify-center">
        <img src={book} alt="" width="150px" />
      </div>
      <h5 className="font-semibold text-center">Book of the week</h5>
      <br />
      <p className="font-semibold text-center">"Stay With Me"</p>
      <p className="font-semibold text-center">by Hana K</p>
    </>
  );
};

export default Weeklybook;
