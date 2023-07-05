import React from 'react';
import {AiFillHeart, AiOutlineSearch} from "react-icons/ai";

const HomeNav = () => {
    return (
        <nav className={'bg-[#6e41e2] p-4 flex w-full justify-between text-white'}>
            <div className={'text-lg flex items-center gap-2'}><AiFillHeart/>ontheMoons</div>
            <AiOutlineSearch className={'text-[1.5rem]'}/>
        </nav>
    );
};

export default HomeNav;