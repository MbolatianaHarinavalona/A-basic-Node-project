import react from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Read from './Read'
import Edit from './Edit'

import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
   <BrowserRouter>
   <Routes>

 <Route path='/' element={<Home/>} />
 <Route path='/create' element={<Create/>} />
 <Route path='/read/:idRecup' element={<Read/>} />
 <Route path='/edit/:idRecup' element={<Edit/>} />


   </Routes> 
   
   </BrowserRouter>
  );
}

export default App;
