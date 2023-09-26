import mongoose, { ConnectOptions } from "mongoose";
import "dotenv/config";

const mongodbURL = process.env.MONGO_DB_URL;
const mongodbName = process.env.MONGO_DB_NAME;

const databaseUrl = `${mongodbURL}/${mongodbName}`;

mongoose
  .connect(databaseUrl)
  .then(() => {
    console.log(`Mongo db connection successfull at host : ${databaseUrl} `);
  })
  .catch((error) => {
    console.log(`db connection failed, somthing went wrong`);
  });

const db = mongoose.connection;

db.on("disconnected", () => {
  console.log(`database disconnected from mongo db`);
});

export default db;
