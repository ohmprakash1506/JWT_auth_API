import { Document } from "mongoose";

interface IUser extends Document {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  contact_number: string;
  gender: string;
  username: string;
  password: string;
  role: string;
  status: string;
  createdTime: Date;
  updatedTime: Date;
}

export default IUser;
