"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { GiEvilBook } from "react-icons/gi";

const NavBar = () => {
  return (
    <div className="flex justify-between  items-center  px-10 py-2 bg-orange-500 text-black ">
      <div className="flex justify-center items-center">
        <GiEvilBook size={50} />
        <h2>Fictional Store</h2>
      </div>
      <div className="flex gap-3 items-center justify-center">
        <Link href={"/create"}>
          <button className="flex justify-center items-center bg-black text-orange-200 px-3 py-2 rounded-md">
            Add Book
          </button>
        </Link>
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
  );
};

export default NavBar;
