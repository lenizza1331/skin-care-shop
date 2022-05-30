import React from 'react';
import { motion } from "framer-motion";
import { forwardRef } from 'react';
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/bagSlice";
import { ChangeQuantity } from "../bag/ChangeQuantity";


export const Item = forwardRef(({item}, ref) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();



    const [overlayClass, setOverlayClass] = useState(false);
    
    const newEvent = ()=>{
        dispatch(addItemToCart({item, quantity}))
        setOverlayClass(!overlayClass)
    }




    return (
        <div 
            className="item"
            ref={ref}
        >
            <div className='item__image'>
                <img className="image-item" src={`${item.image}.jpg`} alt="products"/>
                <div onClick={()=> setOverlayClass(false)}  className={overlayClass ? "overlay" : "overlay-hide"}>
                    <p className='overlay__par'>{quantity} item(s)</p>
                    <p className='overlay__par'>added to bag</p>
                </div>
            </div>
            <h5 className="item__name">{item.name}</h5>
            <p className="item__desc">{item.desc}</p>
            <h5 className="item__price">${item.price}</h5>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button 
            className="item__bag"
            // onClick={()=> dispatch(addItemToCart({item, quantity}))} 
            // onMouseDown={()=> setOverlayClass(true)}
            // onMouseUp={()=> setOverlayClass(false)}
            onClick={newEvent}
            >ADD TO BAG</button>
        </div>
    )
})

export const MItem = motion(Item);