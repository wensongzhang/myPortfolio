// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import ID from './Components/ID';
import UX from './Components/UXUI';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import KidzCuk from './Components/ID/KidzCuk';
import Unwind from './Components/UX/Unwind';
import Vroom from './Components/UX/Vroom';
import ScrollButton from './Components/ScrollButton';
import './App.css';

function App() {
  return (
    <div className='main-app'>
      <NavBar />
      <div className='div-line'></div>
      <Routes>
        <Route path="/" element={<ID />} />
        <Route path="/home" element={<ID />} />
        <Route path="/id" element={<ID />} />
        <Route path="/ux" element={<UX />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/id/kidzcuk" element={<KidzCuk />} />
        <Route path="/ux/unwind" element={<Unwind />} />
        <Route path="/ux/vroom" element={<Vroom />} />
        <Route path="*" element={<ID />} />
      </Routes>
      <div className='div-buttom'>Mengdian Xing Design</div>
      <ScrollButton />
    </div>
  );
}

export default App;
