
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter ,  Routes ,Route} from "react-router-dom";

// import auth from './firebase';
import { useStateValue } from './StateProvider';





function App() {
  const [{}, dispatch] = useStateValue();
  
    // will only run once when the app element loads...
   
   //onClick={handleAuthenticaton} 
  return (
    <BrowserRouter>
    <div className="App">   
<Header/>
<Routes > 

<Route path="/"  element={<Home/>}/>


<Route path='/login'  element={<Login/>}/>
    <Route path='/checkout'  element={<Checkout/>}/>

    </Routes>
    </div>
    </BrowserRouter>
    
  )
}

export default App;
