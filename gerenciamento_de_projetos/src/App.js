import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes, Router, Link } from 'react-router-dom'


function App() {
  return (
    <div >
       <Router>
      
            <Routes>
                <Route exact path = '/' element = {<Home/>}/>
                <Route  path = '/projetos' element = {<Projetos/>}/>
                <Route  path = '/empresa'  element = {<Empresa/>}/>
                <Router path = '/contato' element = {<Contatos/>}/>
            </Routes>


        </Router>
    </div>
  );
}

export default App;
