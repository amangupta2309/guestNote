import {NavLink, useNavigate, Router} from 'react-router-dom';


const Nav = ()=>{
    const navigate = useNavigate();

    const handleHome = ()=>{
        navigate('/');
    }
    const handleEntries = ()=>{
        navigate('/entries');
    }
    const handleCreate = ()=>{
        navigate('/newNote');
    }

    return(
        <div className='fixed left-0 right-0 flex bg-blue-300 h-16 items-center z-10'>
            <div className='ml-4 text-white text-4xl select-none cursor-pointer' onClick={handleHome}>
                GuestNote
            </div>
            <div className='flex items-center space-x-4 ml-auto mr-8'>
                <div className="select-none cursor-pointer hover:text-white" onClick={handleHome}>
                    Home
                </div>
                <div className="select-none cursor-pointer hover:text-white" onClick={handleCreate}>
                    Create Note
                </div>
                <div className="select-none cursor-pointer hover:text-white" onClick={handleEntries}>
                    Entries
                </div>
            </div>
        </div>
    )
}

export default Nav;