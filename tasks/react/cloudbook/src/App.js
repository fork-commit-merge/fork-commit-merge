import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/Notes/noteState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useContext } from 'react';
import alertContext from './Context/Alert/alertContext';
import LoadingBar from 'react-top-loading-bar';
import loadingContext from './Context/LoadingBar/loaderContext';


function App() {

  const context = useContext(alertContext);
  const { alert } = context

  const loadingcontext = useContext(loadingContext);
  const { progress, setProgress } = loadingcontext

  return (
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#2adbe8'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route exact path="/cloudbook" element={<Home />} />
            <Route exact path="/cloudbook/about" element={<About />} />
            <Route exact path="/cloudbook/login" element={<Login />} />
            <Route exact path="/cloudbook/signup" element={<Signup />} />
            <Route path="/cloudbook/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
