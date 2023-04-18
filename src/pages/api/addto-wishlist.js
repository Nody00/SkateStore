import { connectToDB } from "@/lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { wishListItem, userEmail } = data;
    console.log(wishListItem, userEmail);

    const client = await connectToDB();
    const db = client.db("skateBoardCompany");
    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({ email: userEmail });

    if (user) {
      const userWishList = [...user.wishlist];

      const existingItem = userWishList.findIndex(
        (item) => item.id === wishListItem.id
      );

      if (existingItem !== -1) {
        client.close();
        res.status(200).json({ message: "Item already in wish list" });
        return;
      }

      userWishList.push(wishListItem);
      const result = await usersCollection.updateOne(
        { email: userEmail },
        { $set: { wishlist: userWishList } }
      );

      client.close();
      res.status(200).json({ message: "Wish list updated!" });
    }

    // GOOGLE IF THERE IS A SESSION BUT NO USER IN DB CREATE ONE
    if (!user) {
      const newUser = {
        email: userEmail,
        name: userEmail,
        password: "googleTest",
        wishlist: [],
      };

      newUser.wishlist.push(wishListItem);

      const result = await usersCollection.insertOne(newUser);
    }
    client.close();
    res.status(200).json({ message: "Wish list updated!" });
    return;
  }
}

export default handler;
