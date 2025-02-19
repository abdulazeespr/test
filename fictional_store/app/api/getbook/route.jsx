import { Books } from "@/app/db/db";

import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const books = await Books.find();

    if (books) {
      return NextResponse.json({
        books: books,
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
