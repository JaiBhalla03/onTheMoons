import React from 'react';
import {AiFillHeart, AiOutlineArrowLeft, AiOutlineEdit, AiOutlineSearch} from "react-icons/ai";

const ProfileNav = () => {
    return (
        <nav className={'bg-[#6e41e2] px-4 py-3 flex w-full justify-between text-white'}>
            <div className={'text-lg flex items-center gap-2'}><AiOutlineArrowLeft className={'text-[1.5rem]'}/> My Profile</div>
            <div>
                <div className={'flex gap-1 items-center bg-white text-[#6e41e2] p-1 rounded-lg'}>
                    Edit <AiOutlineEdit className={'text-[1.5rem]'}/>
                </div>
            </div>
        </nav>
    );
};

export default ProfileNav;