'use client';
import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BsCalendarEvent } from 'react-icons/bs';
import Link from 'next/link';
import NavIcon from '@/components/NavIcon';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <nav className="fixed bottom-0 w-full px-6 text-gray-500 py-4 bg-white rounded-t-3xl shadow shadow-2xl shadow-black">
            <ul className="flex w-full justify-between">
                <Link href="/">

                        <NavIcon
                            heading="Home"
                            icon={AiOutlineHome}
                            isActive={activeTab === 'home'}
                            onClick={() => handleTabClick('home')}
                        />

                </Link>
                <Link href="/events">

                        <NavIcon
                            heading="Events"
                            icon={BsCalendarEvent}
                            isActive={activeTab === 'events'}
                            onClick={() => handleTabClick('events')}
                        />

                </Link>
                <Link href="/profile">

                        <NavIcon
                            heading="Profile"
                            icon={AiOutlineUser}
                            isActive={activeTab === 'profile'}
                            onClick={() => handleTabClick('profile')}
                        />

                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
