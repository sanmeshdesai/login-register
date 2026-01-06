import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
            sparse: true,
        },
        password: {
            type: String,
            select: false,
        },
        provider: {
            type: String,
            enum: ['local','google','github'],
            default: 'local',
        },

        providerId: String,
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

export default User;