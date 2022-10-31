import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles/app.css' 
import Home from "./pages/Home";
import CdCoeur from "./pages/CdCoeur";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
  
      <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/coupdecoeur" element={<CdCoeur/>}/>
      </Routes>
      <ToastContainer />
      
    </BrowserRouter>
    
    </div>
  )
}

export default App
