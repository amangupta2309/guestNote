import Note from "../Model/note.js";

export const createNote = async(req, res)=>{
    try{

        const newNote = new Note({
            email: req.body.email,
            name: req.body.name,
            content: req.body.content,
        })
        const savedPost = await newNote.save();

        res.status(201).json({message: "Note created successfully."});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}