import Nav from './components/nav';
import LandingPage from './pages/landingPage';
import { Routes, Route} from 'react-router-dom';
import Entries from './pages/entries';
import NewNote from './pages/newNote';


function App() {
  
  return (
    <div className="App">
      <Nav />
      <div className='min-h-screen pt-16 pb-5 bg-red-100'>
        <Routes>
            <Route path='/' element= {<LandingPage />} />
            <Route path='/entries' element= {<Entries/>} />
            <Route path='/newnote' element= {<NewNote/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
