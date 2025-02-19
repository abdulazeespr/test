import React from "react";

export const Card = ({ title, author, price, description }) => {
  return (
    <div className="w-60 h-full flex flex-col  bg-amber-400 px-5 py-5 rounded-lg">
      <div className="w-30 h-40 bg-black text-white">image</div>
      <div className="flex flex-col text-md ">
        <h2>Title: {title}</h2>
        <p>Author: {author}</p>
        <p>price: {price}</p>
        <p>Description:{description}</p>
      </div>
    </div>
  );
};
