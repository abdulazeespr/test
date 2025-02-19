import { cloudinaryRes } from "@/app/config/cloudinary";
import { Books } from "@/app/db/db";

import { NextResponse } from "next/server";

export async function POST(req) {
  const bookDetails = await req.json();

  let imageUrl = "";
  try {
    try {
      // Upload an image
      imageUrl = await cloudinaryRes(bookDetails.imageUrl);
    } catch (e) {
      console.log(e);
      return NextResponse.json({
        message: "media error",
      });
    }
    console.log(imageUrl.secure_url);
    const book = await Books.create({
      title: bookDetails.title,
      author: bookDetails.author,
      price: Number(bookDetails.price),
      description: bookDetails.description,
      image: imageUrl.secure_url,
      userEmail: bookDetails.userEmail,
    });

    if (book) {
      return NextResponse.json({
        success: true,
        message: "book is added",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Server Error",
    });
  }
}
