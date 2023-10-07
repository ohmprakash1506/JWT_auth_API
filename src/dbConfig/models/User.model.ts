import { Schema, model } from "mongoose";
import IUser from "../interface/userInterface";

const userSchema = new Schema<IUser>(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: String,
      required: true,
    },
    contact_number: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "Male", "Female"],
      required: true,
    },
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
    timestamps: false,
  }
);

const user = model<IUser>("user", userSchema);

export default user;
