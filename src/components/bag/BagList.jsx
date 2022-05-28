import { useDispatch } from "react-redux";
import { dataItems } from "../../data/dataItems";
import deleteBtn from '../../icons/trash_delete_remove_recycle_bin_icon_184605.svg';
import { removeItemFromCart } from "../../redux/bagSlice";

export const BagList = ({ bagItem }) => {
    const items = dataItems.find(item => item.id === bagItem.itemId);
    const dispatch = useDispatch();

    return (
        
            <div>
                <div className="bag-items">
                    <p>{items.name}</p>
                    <p>${items.price*bagItem.quantity}</p>
                    <p>{bagItem.quantity} item(s)</p>
                    <img 
                    onClick={()=>dispatch(removeItemFromCart({bagItemId : bagItem.id}))}
                    className="bag-trash" src={deleteBtn}/>
                </div>
            </div>
    )
}