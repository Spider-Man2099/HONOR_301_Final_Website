import './App.css'
import {Heading} from './components/Heading.jsx'
import {Navbar} from './components/Navbar.jsx'
/**
This is where the actual code being rendered in index.jsx is 
import './components/Heading.jsx'

Note, there can only be one export default per file. 
*/

export default function App() {
  return (
  
    <main>
    
      <Heading/>
       <img src = "./public/helicopter.jpg"/> 
     
    </main>
  )
}
