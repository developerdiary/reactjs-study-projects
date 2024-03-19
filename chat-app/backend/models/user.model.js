import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, "Please enter your full name"],
            trim: true
        },
        username: {
            type: String,
            required: [true, "Please enter your username"],
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: [true, "Please enter your password"],
            minlength: [6, "Password must be at least 6 characters long"]
        },
        gender: {
            type: String,
            required: true,
            enum: ["male", "female"]
        },
        profilePic: {
            type: String,
            default: ""
        }
    },
    { timestamps: true }
)

const User = mongoose.model("User", userSchema);

export default User;