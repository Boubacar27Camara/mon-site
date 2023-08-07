import './App.css';
import { Home } from './screens/Home';
import { Ressources } from './screens/Ressources';
import { Contact } from './screens/Contact';
import {Routes, Route, NavLink } from 'react-router-dom';


function App() {

  return (
    <div className='container mt-10'>
     <header className='flex justify-between items-center mb-5'>
      <img className='w-20' src='./images/equipe1.jpg' alt='Logo de Camara' />
      <nav className='flex justify-end'>
          <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to="/">Accueil</NavLink><br></br>
          <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to="/ressources">Ressources</NavLink><br></br>
          <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to="/contact">Contact</NavLink>
      </nav>
     </header>
       <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path="Ressources" element={ <Ressources/> }/>
          <Route path='/contact' element={ <Contact/> } />
       </Routes>
       
       <footer>
        
       </footer>
    </div>
   
  );
}

export default App;
