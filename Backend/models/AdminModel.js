import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    }
}, { timestamps: true })

export default mongoose.model("Admins",AdminSchema)