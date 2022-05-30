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

    return (
        <div 
            className="item"
            ref={ref}
        >
            <img className="item__image" src={`${item.image}.jpg`} alt="products"/>
            <h5 className="item__name">{item.name}</h5>
            <p className="item__desc">{item.desc}</p>
            <h5 className="item__price">${item.price}</h5>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={()=> dispatch(addItemToCart({item, quantity})) } className="item__bag">ADD TO BAG</button>
        </div>
    )
})

export const MItem = motion(Item);