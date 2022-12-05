import './App.css'
import Heading from './components/Heading.jsx'
import Navbar from './components/Navbar.jsx'
import Money from './components/Money.jsx'
import {render} from 'react-dom'
import Carousel from './components/Carousel.jsx'; 
import SimpleBackdrop from './components/Backdrop1.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


/**
This is where the actual code being rendered in index.jsx is 
import './components/Heading.jsx'

Note, there can only be one export default per file. Classes are default. Functions and variables 
are named export with { } 
*/

export default function App() {

   
  
  return (

    
    
     <div>

      <Heading/>
      <img src = "./public/life_lion.jpg"/> 
      <h1 className="quote">We Are...saving lives.</h1>
      <SimpleBackdrop/> 
     
     </div>
  
   
  );
}

