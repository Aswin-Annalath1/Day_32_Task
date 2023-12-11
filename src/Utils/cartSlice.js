import { createSlice } from "@reduxjs/toolkit";



const cartSlice=createSlice({
// name of slice given
    name:"cart",
// initial value of object is given here(example: cart page values is declared here in array form)
    initialState:{
        items:[]
    },
//Here Functions provided with action to perform when we Dispatch an action(onclick)
    reducers:{
        // state is Initial state and action is to modify data.
        addItem:(state,action)=>{
            // Logic to modify the store is written//(payload always help to store passed data)
            state.items.push(action.payload)
        },
        // action not required to modify here
        removeItem:(state,action)=>{state.items.pop()},
        
        clearCart:(state,action)=>{state.items=[]}
    }
})
// we have to export (actions=>plural) seperately because need to Dispatch action.
export const{addItem,removeItem,clearCart}=cartSlice.actions;

// export (reducer=>singular).Because we export all reducer altogether.
export default cartSlice.reducer;