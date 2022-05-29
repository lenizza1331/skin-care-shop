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
                <li ><a className='navbar__list__item' href="/">Home</a></li>
                <li ><a className='navbar__list__item' href="#product">Products</a></li>
                <li ><a className='navbar__list__item' href="#contacts">Contacts</a></li>
                <li ><Bag/></li>
            </ul>
            
        </div>
    )
}