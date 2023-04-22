
import './App.css';
 
import { Routes, Route } from 'react-router-dom';
import Answer from './componets/Answer'
import Navbar from './componets/Navbar'
import Home from './componets/Home';
import Error from './componets/Error';
function App() {
  
  return (
    <>
    <Navbar></Navbar>
   <Routes>
    <Route   path='/'  element={<Home/>}  />
    <Route   path='/Answer'  element={<Answer/>}  />
    <Route   path='*'  element={<Error/>}  />
   </Routes>
</>
    
  );
}

export default App;