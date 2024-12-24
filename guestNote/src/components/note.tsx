import { useState } from "react";
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card";
import { Avatar } from "@mui/material";

const Note = ({note})=>{

    const noteId = note._id;
    // console.log(note);
    
    return(
        <Card key={note._id} className='flex flex-col p-2 w-full h-[14rem]'>
                    <CardHeader className="bg-red-200 rounded-md">
                        <div className="flex flex-row gap-4 items-center">
                            <Avatar />
                            <CardTitle>{note.name}</CardTitle>
                        </div>
                    </CardHeader>
                    
                    <CardContent>
                        {note.content}
                    </CardContent>
                </Card>
    )
}

export default Note;