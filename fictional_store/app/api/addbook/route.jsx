import { Books } from "@/app/db/db";

import { NextResponse } from "next/server";

export async function POST(req) {
  const bookDetails = await req.json();

  try {
    const book = await Books.create({
      title: bookDetails.title,
      author: bookDetails.author,
      price: Number(bookDetails.price),
      description: bookDetails.description,
      userEmail: bookDetails.userEmail,
    });

    if (book) {
      return NextResponse.json({
        success: true,
        message: "book is added",
      });
    }
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Server Error",
    });
  }
}
