import React,{useEffect} from 'react';
import './App.css';
import Home from './Home';

import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter ,  Routes ,Route} from "react-router-dom";
import auth from './Firebase';
// import auth from './firebase';
import { useStateValue } from './StateProvider';





function 
App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <BrowserRouter>

    <div className="App">   

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
