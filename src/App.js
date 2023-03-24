
 import './App.css';
 import { BrowserRouter,Route,Routes } from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './comp/Nav/Nav';
import Login from './comp/logIn/Login';
import Mid from './comp/middle/Mid';
import Data from './comp/data/Data';
function App() {
  return (
    <div className="App">

       <BrowserRouter>
         <Nav/>
         <Mid/>
         <Data/>
         <Routes>
          <Route path='/login' element={<Login/>}/>
         </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
