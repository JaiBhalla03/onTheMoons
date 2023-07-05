import React from 'react';
import heroImage from '../public/eventHero.jpg'
import Image from "next/image";

const HeroPage = () => {
    return (
        <div className={'flex flex-col gap-4'}>
            <div className={'lg:h-72'}>
                <Image src={heroImage} alt={''} className={'h-full w-full object-cover'}/>
            </div>
            <ul className={'lg:mx-40 flex justify-between px-2'}>
                <li className={'cursor-pointer py-2 px-3 text-gray-500 border border-gray-500 rounded-xl hover:bg-[#6e41e2] hover:text-white hover:border-[#6e41e2] duration-300 transition-all active:bg-[#6e41e2] active:text-white active:border-[#6e41e2]'}>All</li>
                <li className={'cursor-pointer py-2 px-3 text-gray-500 border border-gray-500 rounded-xl hover:bg-[#6e41e2] hover:text-white hover:border-[#6e41e2] duration-300 transition-all active:bg-[#6e41e2] active:text-white active:border-[#6e41e2]'}>Mixes</li>
                <li className={'cursor-pointer py-2 px-3 text-gray-500 border border-gray-500 rounded-xl hover:bg-[#6e41e2] hover:text-white hover:border-[#6e41e2] duration-300 transition-all active:bg-[#6e41e2] active:text-white active:border-[#6e41e2]'}>Music</li>
                <li className={'cursor-pointer py-2 px-3 text-gray-500 border border-gray-500 rounded-xl hover:bg-[#6e41e2] hover:text-white hover:border-[#6e41e2] duration-300 transition-all active:bg-[#6e41e2] active:text-white active:border-[#6e41e2]'}>Comedy Clubs</li>
            </ul>
        </div>
    );
};

export default HeroPage;