import React from 'react';
import NavIcon from "@/components/NavIcon";
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {BsCalendarEvent} from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className={'fixed bottom-0 w-full px-6 text-gray-500 py-4 bg-white rounded-t-3xl shadow shadow-2xl shadow-black'}>
            <ul className={'flex w-full justify-between'}>
                <Link href={'/'}>
                    <NavIcon heading={'Home'} icon={AiOutlineHome}/>
                </Link>
                <Link href={'/events'}>
                    <NavIcon heading={'Events'} icon={BsCalendarEvent}/>
                </Link>
                <Link href={'/profile'}>
                    <NavIcon heading={'Profile'} icon={AiOutlineUser}/>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;