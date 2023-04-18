import { connectToDB } from "@/lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await connectToDB();
    const db = client.db("skateBoardCompany");
    const usersCollection = db.collection("users");
    const user = await usersCollection.findOne({ email: data.email });

    // IF USERFOUND RETURN WISHLIST

    if (user) {
      client.close();
      res.status(200).json({ wishlist: user.wishlist });
      return;
    }
    // console.log(user);

    // client.close();
    // res.status(200).json({ message: "UserFound", user });
  }
}

export default handler;
