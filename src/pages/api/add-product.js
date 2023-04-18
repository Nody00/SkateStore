import { connectToDB } from "@/lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // validation

    if (
      data.name.trim() === "" ||
      data.name.trim().length > 35 ||
      data.price.trim() === "" ||
      data.type !== "skateboard" ||
      data.front.trim() === "" ||
      data.back.trim() === ""
    ) {
      res
        .status(400)
        .json({ message: "Invalid inputs,please check all input fields!" });
      return;
    }

    // PASSED VALIDATION

    const client = await connectToDB();
    const db = client.db("skateBoardCompany");
    const productsCollection = db.collection("products");

    const result = await productsCollection.insertOne({
      productName: data.name,
      price: data.price,
      type: data.type,
      front: data.front,
      back: data.back,
      sales: "0",
    });

    res.status(200).json({ message: "Added product!" });
    return;
  }
}

export default handler;
