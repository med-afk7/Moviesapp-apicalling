import './css/App.css'

import Favorites from "./pages/Favorites";
import Home from './pages/home';
import Nav from './components/Nav';

import {Routes , Route} from "react-router-dom"



function App() {
 
 

  return (
  <div>

    <Nav />

    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Favorites" element={<Favorites />}/>
      </Routes>


    </main>
    </div>
  );
}




export default App
