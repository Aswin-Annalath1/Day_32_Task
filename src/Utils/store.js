import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice';



const store=configureStore({
    //Store will contain the Slices and put inside reducer
    reducer:{
    // The key is user defined and value is imported..    
        cart:cartSlice
    }

})
export default store;
//Configured the store.

//Then we have to build bridge b/w UI and Data layer .so use Provider in app.js