import React from 'react';
import '../../public/styles/Navbar.css';
import Logo from './Logo';
import Menu from './MenuList';
import Shop from './Shop';

let image = 'images/icons8-nike-250.png';

function Navbar() {
    
    return (

        <header>

            <div className="logo">

                <Logo
                
                    image = {image}
                    
                />

            </div>
            <div className="menu">

                <Menu />

            </div>
            <div className="shop">

                <Shop />

            </div>

        </header>

    );

}

export default Navbar;