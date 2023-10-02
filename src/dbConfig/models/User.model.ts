import { Schema, model } from "mongoose";
import IUser from "../interface/userInterface";

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "Admin",
    },
    status: {
      type: String,
      required: true,
      default: "Active",
    },
    createdTime: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    updatedTime: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

const user = model<IUser>("user", userSchema);

export default user;