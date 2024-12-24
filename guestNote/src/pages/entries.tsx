import React, {useState, useEffect} from 'react';
import { Skeleton} from '@mui/material';
import axios from 'axios';
import Note from '../components/note';
import Pagination from '../components/pagination';
// import Post from '@/components/post';
// import Pagination from '@/components/pagination';
// import NoteAddIcon from '@mui/icons-material/NoteAdd';
var pageSize = 3;

export const getAllNotes = async()=>{
    try{
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/getAllNotes`);
    //   console.log(response.data);
      return response.data;
      }
      catch(err:any){
      console.log(err.message);
  }
  }


const Entries = () =>{
    const [loader, setLoader] = useState(true);
    const [allNotes, setAllNotes] = useState([]);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        const fetchPosts = async() => {
            try {
                const allNotes = await getAllNotes();
                allNotes.map((notes:any)=>{
                    notes.visible = true;
                    return notes;
                })
                setAllNotes(allNotes);
            } catch (error) {
                console.error('Failed to fetch posts', error);
            } finally {
                setLoader(false);
            }
        };
        fetchPosts();
    }, []);
    let noteLength = 0;
    allNotes.map((note:any)=>{
        if(note.visible){
        noteLength += 1;
        }
    })
    let totalPage = Math.ceil(noteLength/`${pageSize}`);
    // let totalPage = Math.ceil(noteLength/3);

    let index = (page-1)*`${pageSize}`;
    var notesOnPage = allNotes.filter((note)=> note.visible).slice(index, index+`${pageSize}`);

    return(
        <div className='flex flex-col items-center w-full pt-4 overflow-auto'>
            <div className='flex flex-col items-center justify-center w-[30rem] gap-4'>
                {loader && <div>Loading notes from server and it may take some time initially.</div>}
                {loader && <Skeleton className='w-full'/>}
                {loader && <Skeleton className='w-full'/>}
                {loader && <Skeleton className='w-full'/>}
                {loader && <Skeleton className='w-full'/>}

                {notesOnPage && notesOnPage.map((note) => (
                    <Note key={note._id} note={note} />
                ))}
            </div>
            {notesOnPage.length && <div className="ml-auto">
              <Pagination page={page} setPage={setPage} postLength={noteLength} />
            </div> }
        </div>
    )
}

export default Entries;