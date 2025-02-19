"use client";
import NavBar from "./_components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./_components/Card";

export default function Home() {
  const [books, setbooks] = useState([]);

  const getBooks = async () => {
    const res = await axios.get("/api/getbook");

    setbooks(res.data.books);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="w-full h-screen bg-amber-100">
      <NavBar />
      <div className="flex flex-wrap m-10 gap-3 px-2 py-2">
        {books?.map((item, index) => (
          <div key={index}>
            <Card
              title={item.title}
              author={item.author}
              price={item.price}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
