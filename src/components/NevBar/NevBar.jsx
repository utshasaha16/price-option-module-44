import React, { useState } from 'react';
import Link from '../NavLink/Link';
import { TfiMenuAlt } from "react-icons/tfi";
import { VscChromeClose } from "react-icons/vsc";

const NevBar = () => {
    const [nevOpen, setNevOpen] =useState(false);


    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:id", name: "User Profile" },
      ];
      
    return (
        <nav className='bg-yellow-500 p-6'>
            <div onClick={() => setNevOpen(!nevOpen)} className=' text-2xl  md:hidden'>
                {
                    nevOpen === true ? <VscChromeClose></VscChromeClose> : <TfiMenuAlt></TfiMenuAlt>
                }
            
            </div>
            <ul className={`md:flex duration-1000 absolute  rounded-xl bg-yellow-500 md:static ${nevOpen ? 'top-16' : '-top-60'}`}>
                {
                    routes.map(route => <Link route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NevBar;