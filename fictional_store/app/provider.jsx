"use client";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { UserDetailContex } from "./_context/UserDetailContext";
import NavBar from "./_components/NavBar";

const Provider = ({ children }) => {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState();
  //save user data

  useEffect(() => {
    user && CheckUserAuth();
  }, [user]);

  const CheckUserAuth = async () => {
    //save user to database
    try {
      const result = await axios.post("api/users", {
        userName: user?.fullName,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      });

      console.log(result.data);
      setUserDetail(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <UserDetailContex.Provider value={{ userDetail, setUserDetail }}>
        <div>{children}</div>
      </UserDetailContex.Provider>
    </div>
  );
};

export default Provider;
