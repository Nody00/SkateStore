import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { connectToDB } from "@/lib/db";
import { verifyPassword } from "@/lib/hash";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  secret: process.env.JWT_SECRET,
  session: {
    jwt: true,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const client = await connectToDB();

        const usersCollection = client
          .db("skateBoardCompany")
          .collection("users");

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("No such user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Could not log user in");
        }

        client.close();

        return {
          email: user.email,
        };
      },
    }),
  ],
};

export default NextAuth(authOptions);
