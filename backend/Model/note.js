import mongoose from "mongoose";

// Define the Post schema
const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}
,{timestamps: true}
);


const Note = mongoose.model('Note', PostSchema);

export default Note;