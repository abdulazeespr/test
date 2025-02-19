"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import axios from "axios";
import React, { useContext, useState } from "react";
import { GiEvilBook } from "react-icons/gi";
import { UserDetailContex } from "../_context/UserDetailContext";
import { redirect } from "next/navigation";

const Addbook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const { userDetail, setUserDetail } = useContext(UserDetailContex);
  const { user } = useUser();
  //   title: { type: String, required: true },
  //   author: { type: String, required: true },
  //   price: { type: Number, required: true },
  //   description: { type: String, required: true },
  //   userEmail: { type: String, required: true },

  const AddBook = async () => {
    const book = await axios.post("/api/addbook", {
      title: title,
      author: author,
      price: price,
      description: description,
      userEmail: user?.primaryEmailAddress?.emailAddress,
    });

    redirect("/");
  };

  return (
    <div className="w-full h-screen bg-amber-100 text-black">
      <div className="flex justify-between  items-center  px-10 py-2 bg-orange-500 text-black ">
        <div className="flex justify-center items-center">
          <GiEvilBook size={50} />
          <h2>Fictional Store</h2>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
      <div className="w-full  flex flex-col justify-center items-center text-2xl font-semibold mt-10">
        <div className="">
          <h1>Add Book</h1>
        </div>
        <div className="flex flex-col text-black gap-2 border-2 px-4 py-3 border-black rounded-sm">
          <div className="flex justify-center items-center">
            <label>Title: </label>
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center">
            <label>Author: </label>
            <input
              type="text"
              placeholder="Author"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center">
            <label>Price: </label>
            <input
              type="text"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center">
            <label>Description: </label>
            <input
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center ">
            <button
              className="bg-black text-amber-200 px-4 py-2 rounded-sm w-1/3"
              onClick={() => AddBook()}
            >
              Add Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addbook;
