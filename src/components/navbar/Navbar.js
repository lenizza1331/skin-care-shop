import { Bag } from '../bag/Bag';


export const Navbar = () => {

    return (
        <div className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__list__item'>Home</li>
                <li className='navbar__list__item'>Products</li>
                <li className='navbar__list__item'>Contact</li>
                <li className='navbar__list__item'><Bag/></li>

            </ul>
        </div>
    )
}