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
    </BrowserRouter>
    </div>
  )
}

export default App
