import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    name: {
        type: String,
    },
    author: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    },

}, { timestamps: true })

export default mongoose.model("Books", BookSchema)