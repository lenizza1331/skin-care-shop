import { useState } from "react";
import { useSelector } from "react-redux";
import bag from "../../icons/basket_96252.svg";
import { getBagItems, getTotalPrice } from "../../redux/bagSlice";
import { BagList } from "./BagList";

export const Bag = () => {
    const [modalActive, setModalActive] = useState(false);
    const bagItems = useSelector(getBagItems);
    
    const totalPrice = useSelector(getTotalPrice);


    return (
        <div>
            <img onClick={()=>setModalActive(true)} className="bag-icon" src={bag} alt="my bag"/>
            <div 
        onClick={()=> setActive(false)} 
        className={active ? "modal active":"modal"}
        >
            <div 
            onClick={e => e.stopPropagation()} 
            className={active ? "modal__content active":"modal__content"}
            >
                <h2>Your Bag</h2>
            {bagItems.map(bagItem => <BagList active={modalActive} setActive={setModalActive} bagItem={bagItem} totalPrice={totalPrice}  /> )}
            <div className="bag-info">
                    <h5>Total:</h5>
                    <h5>${totalPrice}</h5>
                    <p>Shipping: </p>
                    <p>FREE</p>
                </div>
                </div>
                </div>
        </div>
    )

}