import React from 'react';
import NavIcon from "@/components/NavIcon";

const Navbar = () => {
    return (
        <nav className={'fixed bottom-0 w-full px-6 text-gray-500 py-4 bg-white rounded-t-3xl shadow shadow-2xl shadow-black'}>
            <ul className={'flex w-full justify-between'}>
                <NavIcon/>
                <NavIcon/>
                <NavIcon/>
            </ul>
        </nav>
    );
};

export default Navbar;