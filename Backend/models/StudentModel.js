import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
    rollNumber: {
        type: String,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    grade: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    }
}, { timestamps: true })

export default mongoose.model("Students", StudentSchema)