import mongoose from "mongoose";
import Contact from "../../../models/contact";

const uri = process.env.MONGODB_URI;

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    return;
  }
  await mongoose.connect(uri);
}

export async function POST(request) {
  await connectToDatabase();

  const body = await request.json();

  try {
    const contact = new Contact(body);
    await contact.save();
    return new Response(
      JSON.stringify({ message: "Contact saved successfully!", data: contact }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to save contact", error }),
      { status: 500 }
    );
  }
}
