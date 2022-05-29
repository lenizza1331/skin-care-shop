import {useState} from "react";
import {useSelector} from "react-redux";
import bag from "../../icons/basket_96252.svg";
import {getBagItems, getTotalPrice, getTotalQuantity} from "../../redux/bagSlice";
import {BagList} from "./BagList";

export const Bag = () => {
    const [modalActive, setModalActive] = useState(false);
    const [thanks, setThanks] = useState(false);
    const bagItems = useSelector(getBagItems);
    const totalPrice = useSelector(getTotalPrice);
    const totalQuantity = useSelector(getTotalQuantity);
    let shipping = totalPrice >= 149;


    return (
        <div className="bag">
            <div  className="bag-icon"> 
                <img
                    className="bag-icon-image"
                    onClick={() => setModalActive(true)}
                    src={bag}
                    alt="my bag"
                />
                <p className="bag-inside">{totalQuantity}</p>
            </div>
            
            <div
                onClick={() => setModalActive(false)}
                className={modalActive ? "modal activated" : "modal"}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={
                        modalActive ? "modal__content activated" : "modal__content"
                    }
                >
                    <h2>Your Bag</h2>
                    <p>{totalQuantity} item(s)</p>

                    {bagItems.map((bagItem) => (
                        <BagList
                            bagItem={bagItem}
                            key={bagItem.id}
                        />
                    ))}
                    <div className="bag-info">
                        <h5>Total price:</h5>
                        <h5>${totalPrice}</h5>
                        <p>Shipping: </p>
                        <p>{shipping ? "Free" : "$15"}</p>
                    </div>
                    <div className="bag-checkout">
                        <button onClick={()=>setThanks(!thanks)}>CHECKOUT</button>
                        <div className={thanks ? "thanks showThanks" : "thanks"}>
                            <h5>Thank you, for choosing our market!</h5>
                            <p>Here must be form for payment, but it's not real shop</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};
