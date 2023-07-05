import React from 'react';
import {AiFillHeart, AiOutlineArrowLeft, AiOutlineEdit, AiOutlineSearch} from "react-icons/ai";
import Link from "next/link";

const ProfileNav = () => {
    return (
        <nav className={'bg-[#6e41e2] px-4 py-3 flex w-full justify-between text-white'}>
            <div className={'cursor-pointer text-lg flex items-center gap-2'}>
                <Link href={'/'} className={'flex items-center gap-2'}>
                    <AiOutlineArrowLeft className={'text-[1.5rem]'}/> My Profile
                </Link>
            </div>
            <div>
                <div className={'cursor-pointer flex gap-1 items-center bg-white text-[#6e41e2] p-1 rounded-lg'}>
                    Edit <AiOutlineEdit className={'text-[1.5rem]'}/>
                </div>
            </div>
        </nav>
    );
};

export default ProfileNav;