import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const mongoUri = process.env.BETTER_AUTH_MONGODB || process.env.BETTER_AUTH_MONGOBD;

if (!mongoUri) {
  throw new Error("BETTER_AUTH_MONGODB or BETTER_AUTH_MONGOBD is not defined in .env");
}

const client = new MongoClient(mongoUri);
const db = client.db("BETTER_AUTH");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  database: mongodbAdapter(db, {
    client,
  }),
});