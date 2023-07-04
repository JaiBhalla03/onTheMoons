import React from 'react';
import {AiOutlineHome} from "react-icons/ai";

const NavIcon = () => {
    return (
        <div className={'flex flex-col items-center justify-center'}>
            <AiOutlineHome size={25}/>
            <div className={'text-lg'}>Home</div>
        </div>
    );
};

export default NavIcon;