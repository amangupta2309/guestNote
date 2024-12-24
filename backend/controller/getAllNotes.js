import Note from "../Model/note.js";
export const getAllNotes = async(req, res)=>{
    try{
        const notes = await Note.find().sort({ createdAt: -1 });
        console.log(notes);
        res.status(200).json(notes);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}