import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Bridal from './components/bridal/Bridal';
import Dandruff from './components/dandruff/Dandruff';
import Skin from './components/skin/Skin';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bridal' element={<Bridal/>}/>
        <Route path='/dandruff' element={<Dandruff/>}/>
        <Route path='/skin' element={<Skin/>}/>
        <Route/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
