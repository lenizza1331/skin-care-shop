import { useState } from 'react';
import { Bag } from '../bag/Bag';


export const Navbar = () => {

    const [fixNav, setFixNav] = useState(false);
    function setFixNavBar () {
        if (window.scrollY >= 115) {
            setFixNav(true)
        }
        else setFixNav(false)
    }
    window.addEventListener('scroll', setFixNavBar)




    return (
        <div className={fixNav ? "navbar fixed" : "navbar"}>
            <ul className='navbar__list'>
                <li className='navbar__list__item'>Home</li>
                <li className='navbar__list__item'>Products</li>
                <li className='navbar__list__item'>Contact</li>
                <li className='navbar__list__item'><Bag/></li>
            </ul>
        </div>
    )
}