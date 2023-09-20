import jwt from "jsonwebtoken";
import "dotenv/config";

const secert_key: any = process.env.ACCESS_TOKEN_SECERT;

async function generateToken(user: any) {
  try {
    let header = user;
    let token = jwt.sign(header, secert_key);
    console.log(token);
    return token;
  } catch (error) {
    return console.log(error);
  }
}

export default generateToken;
