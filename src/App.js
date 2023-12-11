import { Route, Routes } from 'react-router-dom';
import './App.css';
import CartSection from './Components.js/CartSection';
import CartPage from './Components.js/CartPage';
import { useState } from 'react';
import ModeContext from './Components.js/utils/ModeContext';
import { Provider } from 'react-redux';
import store from './Utils/store';


function App() {

  const [id,setId]=useState('')

  return (
    <Provider store={store}>
      <ModeContext.Provider value={[id,setId]}>
        <Routes>

          <Route path='/' element={<CartSection/>}/>

          <Route path='/cart' element={<CartPage/>}/>

        </Routes>
      </ModeContext.Provider>
    </Provider>
  );
}

export default App;
