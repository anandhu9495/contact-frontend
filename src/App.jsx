import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import List from './Components/List';
import Add from './Components/Add';
import View from './Components/View';
import Upadate from './Components/Upadate';

function App() {
  return (
    <div className="App">

      <header>
        <Header/>
      </header>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/update/:id' element={<Upadate/>}/>
        
      </Routes>

      
      <footer>
        <Footer/>
      </footer>

      
     
    </div>
  );
}

export default App;
