import { Users } from "@/app/db/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const UserDetails = await req.json();

  try {
    const book = await Users.create({
      username: UserDetails.userName,
      userEmail: UserDetails.userEmail,
    });

    if (book) {
      return NextResponse.json({
        success: true,
        message: "user is added",
      });
    }
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Server Error",
    });
  }
}
