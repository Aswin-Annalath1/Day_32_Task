import React, { useContext, useState } from 'react'
import ModeContext from './utils/ModeContext'
import { product } from '../Utils/Constants';
import { useNavigate } from 'react-router-dom';
import { addItem, clearCart, removeItem } from '../Utils/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const CartPage=()=>{

    const [id]=useContext(ModeContext)

    const navigate = useNavigate();
    
    // Created to for ADD and Remove
    const [show,setShow]=useState(false)
    const [btnText,setBtnText]=useState("ADD")

    const productid = product[id]

    // Taking details from store by subscribing...
    const cartItems=useSelector(store=>store.cart.items)

    const dispatch=useDispatch()
    //Descrining the functions of button
                                        //clearCart is discribed in cartSlice component.
    const ClearCartAll=()=>{dispatch(clearCart())}
    const removeLastItem=()=>{dispatch( removeItem())}

    const handleAddItem=(productid)=>{
        //Create dispatch an action(import useDispatch, and also declare on top)
                //addItem is the cartSlice element that we have to dispatch.
        dispatch(addItem(productid))
      }


  return (
    
    <div className='box0'>
        <div className='box00'>
        <button onClick={() => navigate('/')} type="button" class="btn btn-outline-dark">Home</button>
        </div>
        <div className='box1'>
                <img className='box2' src={product[id].images[0]} alt=''/>
                <span className='box9'>
                    <h3 className='box10'>{product[id].title}</h3>
                    <h4 >{product[id].description}</h4>
                    <h5>Brand : {product[id].brand}</h5>
                    <h5>Rating : {product[id].rating}</h5>
                    <h5>Discount : {product[id].discountPercentage}%</h5>
                    <h5>Stock Left : {product[id].stock}</h5>         
                </span>
            
            <div className='box11'>
            {show &&
            <span class="dropdown" className='box13'>
                <button onClick={()=>handleAddItem(productid)} type="button" class="btn btn-outline-success btn-sm ">▲</button>
                <button type="button" class="btn btn-warning m-2 p-3 fs-3">{cartItems.length}</button>
                <button onClick={()=>removeLastItem()} type="button" class="btn btn-outline-danger btn-sm">▼</button>
            </span>
            }
            ${product[id].price}
             <div className='box12'><button className='box14' onClick={()=>{
                setShow(!show)
                btnText==="ADD"? setBtnText("REMOVE"):setBtnText("ADD")
                btnText==="REMOVE"? ClearCartAll():ClearCartAll()
                }}>{btnText}</button>
                </div>
            </div>
        </div>
        <br/>
        <hr></hr>
        <div className='box8'>
            <div className='box3'>SUBTOTAL:<span>$ {product[id].price*cartItems.length}</span></div>
            <div className='box4'>SHIPPING:<span>$ {cartItems.length === 1 ? 20 :'FREE'}</span></div>
        </div>
        <hr></hr>
        <div className='box15'>
        <div className='box5'>TOTAL:<span>$ {(product[id].price*cartItems.length)+(cartItems.length === 1 ? 20 : 0)}</span></div>
        <div className='box6'>Get Daily Cash With Nespola Card</div>
        </div>
    </div>
  )
}

export default CartPage