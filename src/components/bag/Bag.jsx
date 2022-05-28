import {useState} from "react";
import {useSelector} from "react-redux";
import bag from "../../icons/basket_96252.svg";
import {getBagItems, getTotalPrice, getTotalQuantity} from "../../redux/bagSlice";
import {BagList} from "./BagList";

export const Bag = () => {
    const [modalActive, setModalActive] = useState(false);
    const bagItems = useSelector(getBagItems);
    const totalPrice = useSelector(getTotalPrice);
    const totalQuantity = useSelector(getTotalQuantity);
    // const [shipping, setShipping] = useState(true);

    // function setNewShip (){
    // let newShip = totalPrice >=149;
    // setShipping(newShip ? "free" : "15");
    // }
    return (
        <div>
            <img
                onClick={() => setModalActive(true)}
                className="bag-icon"
                src={bag}
                alt="my bag"
            />
            <p className="bag-inside">{totalQuantity}</p>
            <div
                onClick={() => setModalActive(false)}
                className={modalActive ? "modal active" : "modal"}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={
                        modalActive ? "modal__content active" : "modal__content"
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
                        {/* <p>Shipping: </p>
                        <p>${()=> setNewShip}</p> */}
                    </div>
                    <div className="bag-checkout">
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
