import { useDispatch, useSelector } from "react-redux"; 
import { getSelectedCategory, filterCategory } from "../../redux/itemsSlice";


export const Filter = ({category}) => {
    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();

    return (
        <div className="filter__items">
            <h2 onClick={()=>{dispatch(filterCategory(category))}} className={selectedCategory === category ? "filter__active" : "filter__hover" }>{category}</h2>
        </div>
    )
}