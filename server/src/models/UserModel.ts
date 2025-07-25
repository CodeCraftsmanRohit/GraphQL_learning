import mongoose, { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  googleId: string;
  role: string;
  avatar: string;
  verified: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    googleId: { type: String, required: false },
    role: { type: String, default: 'user' },
    avatar: { type: String, required: false },
    verified: { type: String, default: 'false' },
  },
  { timestamps: true }
);

// Avoid model overwrite error in dev
export const UserModel = mongoose.models.User || model<IUser>('User', userSchema);
