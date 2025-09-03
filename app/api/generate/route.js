// import clientPromise from "@/lib/mongodb";

// export async function POST(request) {

//     const body = await request.json();
//     const client = await clientPromise;
//     const db = client.db("snaplink");
//     const collection = db.collection("url");

//     //check if the URL already exists
//     const doc = await collection.findOne({ shorturl: body.shorturl });
//     if (doc) {
//         return Response.json({
//             success: false,
//             error: true,
//             message: "URL already exists",
//         });
//     }

//     const result = await collection.insertOne({
//         url: body.url,
//         shorturl: body.shorturl,
//     });

//     return Response.json({
//         success: true,
//         error: false,
//         message: "URL Generated Successfully",
//     });
// }

import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const { url, shorturl } = body;

    if (!url || !shorturl) {
      return Response.json(
        { success: false, error: true, message: "Missing url or shorturl" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("snaplink");
    const collection = db.collection("url");

    // Check if short URL already exists
    const existing = await collection.findOne({ shorturl });
    if (existing) {
      return Response.json(
        { success: false, error: true, message: "URL already exists" },
        { status: 409 }
      );
    }

    // Insert new short URL
    await collection.insertOne({ url, shorturl });

    return Response.json(
      { success: true, error: false, message: "URL Generated Successfully", shorturl },
      { status: 201 }
    );
  } catch (err) {
    console.error("API Error:", err);
    return Response.json(
      { success: false, error: true, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
