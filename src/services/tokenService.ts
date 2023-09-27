import jwt from "jsonwebtoken";
import "dotenv/config";

const secert_key: any = process.env.ACCESS_TOKEN_SECERT;

async function generateToken(data: any) {
  try {
    let header = data;
    let token = jwt.sign(header, secert_key);
    return token;
  } catch (error) {
    return error;
  }
}

export default generateToken;
