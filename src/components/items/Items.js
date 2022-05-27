import { useSelector } from 'react-redux';
import { dataItems } from '../../data/dataItems';
import { getSelectedCategory } from '../../redux/itemsSlice';
import { Item } from './Item';




export const Items = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className='all-items'>
            {dataItems
            .filter(item => {
                if (selectedCategory === "ALL") return true;
                return selectedCategory === item.category;
            })
            .map(item => <Item item={item}/>)}
        </div>
    )
}