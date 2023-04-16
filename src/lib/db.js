import { MongoClient } from "mongodb";

export async function connectToDB() {
  const client = await MongoClient.connect(
    "mongodb+srv://dinokrcic2077:sD59TAEz389ZMbAY@clusterv0.o80titn.mongodb.net/?retryWrites=true&w=majority"
  );

  return client;
}
