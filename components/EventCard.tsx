'use client';

import React, {useState} from 'react';
import Image from "next/image";
import cardImage from '../public/eventCardImage.jpg'
import panda from '../public/panda.jpg'
import {
    AiFillClockCircle,
    AiFillDollarCircle, AiFillHeart,
    AiOutlineHeart,
    AiOutlinePlus,
    AiOutlineRight,
    AiOutlineShareAlt
} from "react-icons/ai";
import {MdAirplaneTicket} from "react-icons/md";

const EventCard = () => {
    const [isHearted, setIsHearted] = useState(false);
    const heartIt = ()=>{
        setIsHearted(!isHearted);
    }
    return (
        <div className={'bg-[#6e41e2] flex flex-col gap-2 text-white pt-4 rounded-xl'}>
            <div className={'mx-4'}>
                <Image src={cardImage} alt={''} className={'rounded-xl'}/>
            </div>
            <div className={'flex flex-col gap-2 mx-4'}>
                <div className={'flex w-full'}>
                    <div className={'w-full'}>
                       <p className={'text-xs'}>Oct-02 starting at 5:00PM</p>
                        <p className={'font-bold text-md'}>Art and Cultural event</p>
                    </div>
                    <div className={'flex gap-2 items-center'}>
                        <button className={'border border-white rounded-xl bg-white bg-opacity-30 p-1 flex items-center'}><AiOutlinePlus size={15} className={''}/>Add</button>
                        <div className={'cursor-pointer'} onClick={heartIt}>
                            {
                                !isHearted ? (<AiOutlineHeart/>): (<AiFillHeart/>)
                            }
                        </div>
                        <div className={'cursor-pointer'}>
                            <AiOutlineShareAlt/>
                        </div>
                    </div>
                </div>
                <div className={'flex gap-2 list-none border-b border-white pb-2'}>
                    <li className={'border border-white bg-white bg-opacity-30 rounded-lg p-1'}>Creativity</li>
                    <li className={'border border-white bg-white bg-opacity-30 rounded-lg p-1'}>Music</li>
                    <li className={'border border-white bg-white bg-opacity-30 rounded-lg p-1'}>Deriving</li>
                </div>
                <div className={'flex gap-2 w-full justify-between'}>
                    <div>
                        <p className={'text-xs'}>Event Price</p>
                        <div className={'flex gap-1 items-center'}><AiFillDollarCircle/> 100Rs</div>
                    </div>
                    <div className={'border-l border-r border-white px-1'}>
                        <p className={'text-xs'}>Ticket Left</p>
                        <div className={'flex gap-1 items-center'}>
                            <MdAirplaneTicket/> 10
                        </div>
                    </div>
                    <div>
                        <p className={'text-xs'}>Event will start</p>
                        <div className={'flex gap-1 items-center'}>
                            <AiFillClockCircle/> 10hrs 20min 10s
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex gap-1 w-full items-center justify-between bg-white bg-opacity-30 border-t border-white px-3 py-4'}>
                <div className={'flex items-center'}>
                    <Image src={panda} alt={''} className={'rounded-full'} width={40}/>
                </div>
                <div className={'flex-1 text-sm font-bold'}>
                    <p>
                        Organized by
                    </p>
                    <p>
                        Junto Community
                    </p>
                </div>
                <div className={'cursor-pointer'}>
                    <div className={'flex items-center gap-1 rounded-lg bg-opacity-100 py-2 px-1 bg-[#6e41e2]'}>Event Details <AiOutlineRight/></div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;