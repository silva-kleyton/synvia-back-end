import { AppError } from './../errors/AppError';
import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
    _id: string;
    name: string;
    email: string;
    password: string
}

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: false },
}, {
    timestamps: true
});


/** encrypt */
UserSchema.pre<IUser>("save", async function (next) {
    try {
        if (this.password) {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(this.password, salt);
            this.password = hashPassword;
        }
        next();
    } catch (error) {
        throw new AppError("Error ao criar usuario")
    }
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User