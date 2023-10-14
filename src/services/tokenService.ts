import jwt from "jsonwebtoken";
import "dotenv/config";

const access_secert_key: any = process.env.ACCESS_TOKEN_SECERT;
const refresh_secert_key: any = process.env.REFRESH_TOKEN_SECERT;

export default class TokenService {
  accessToken = async (data: any) => {
    try {
      let header = data;
      let accessToken = jwt.sign(header, access_secert_key, {
        expiresIn: "15m",
      });
      return accessToken;
    } catch (error) {
      return error;
    }
  };

  refreshToken = async (data: any) => {
    try {
      let header = data;
      let refreshTokenoken = jwt.sign(header, refresh_secert_key, {
        expiresIn: "7d",
      });
      return refreshTokenoken;
    } catch (error) {
      return error;
    }
  };
}
