import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Userdeatails } from './components/Userdeatails';
import { Error } from './components/Error';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Userdeatails/:userid" element={<Userdeatails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
