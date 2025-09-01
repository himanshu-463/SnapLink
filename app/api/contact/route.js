import { NextResponse } from "next/server";
import Contact from "@/app/contactUs/page";
import connectDB from "@/app/lib/mongodb";

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ name, email, message });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(e.messsage);
      }
      return NextResponse.json({msg: errorList})
    }
    else{
        return NextResponse.json({msg: "Unable to send message."})
    }
  }
}
