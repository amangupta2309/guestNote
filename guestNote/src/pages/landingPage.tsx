import React, {useState, useEffect} from 'react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';



const Landing = () =>{
    const navigate = useNavigate();
    const handleEntries = ()=>{
        navigate('/newNote');
    }
    return(
        <div className='flex flex-col items-center w-full overflow-auto bg-white p-4 rounded-md'>
            <div className='text-4xl p-4'>
            "Hi there! Ready to share your notes with the world? Let’s get started!"
            </div>
            <Button onClick={handleEntries}>get started</Button>
        </div>
    )
}

export default Landing;