import { MongoClient } from "mongodb";
import { connectToDB } from "@/lib/db";
import { hashPassword } from "@/lib/hash";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { name, email, password } = data;

    if (
      name === "" ||
      !email.includes("@") ||
      !email ||
      password.trim().length < 7
    ) {
      client.close();
      res.status(404).json({ message: "Invalid credentials" });
      return;
    }

    const client = await connectToDB();

    const db = client.db("skateBoardCompany");
    const userCollection = db.collection("users");
    const existingUser = await userCollection.findOne({ email: data.email });

    if (existingUser) {
      // USER ALREADY EXITS THROW ERROR
      client.close();
      res.status(404).json({ message: "User already exists" });
      return;
    }

    if (!existingUser) {
      // NEW USER VALIDATE INPUTS AND ADD TO DATABASE

      // PASSED VALIDATION
      // console.log("passed validation");
      const hashedPassword = await hashPassword(data.password);
      const result = userCollection.insertOne({
        email: data.email,
        name: data.name,
        password: hashedPassword,
        wishlist: [],
        cart: [],
      });

      res.status(200).json({ message: "Created Account" });
      return;
    }

    client.close();
  }
}

export default handler;
