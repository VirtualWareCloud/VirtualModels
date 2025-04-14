import mongoose, { Document, Model, Schema } from 'mongoose';

interface IUser extends Document {
  fullName: string;
  email: string;
  profileImage: string;
  bio: string;
}

const userSchema: Schema<IUser> = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profileImage: { type: String, required: true },
  bio: { type: String, required: false },
}, { timestamps: true });

const UserModel: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default UserModel;