import React from 'react';
import heroImage from '../public/eventHero.jpg'
import Image from "next/image";

const HeroPage = () => {
    return (
        <div className={'flex flex-col gap-4'}>
            <div>
                <Image src={heroImage} alt={''}/>
            </div>
            <ul className={'flex w-full justify-between px-2'}>
                <li className={'py-2 px-3 text-gray-500 border border-gray-500 rounded-xl hover:bg-[#6e41e2] hover:text-white hover:border-[#6e41e2] duration-300 transition-all active:bg-[#6e41e2] active:text-white active:border-[#6e41e2]'}>All</li>
                <li className={'py-2 px-3 text-gray-500 border border-gray-500 rounded-xl hover:bg-[#6e41e2] hover:text-white hover:border-[#6e41e2] duration-300 transition-all active:bg-[#6e41e2] active:text-white active:border-[#6e41e2]'}>Mixes</li>
                <li className={'py-2 px-3 text-gray-500 border border-gray-500 rounded-xl hover:bg-[#6e41e2] hover:text-white hover:border-[#6e41e2] duration-300 transition-all active:bg-[#6e41e2] active:text-white active:border-[#6e41e2]'}>Music</li>
                <li className={'py-2 px-3 text-gray-500 border border-gray-500 rounded-xl hover:bg-[#6e41e2] hover:text-white hover:border-[#6e41e2] duration-300 transition-all active:bg-[#6e41e2] active:text-white active:border-[#6e41e2]'}>Comedy Clubs</li>
            </ul>
        </div>
    );
};

export default HeroPage;