import React from 'react';
import EventNav from "@/components/EventNav";
import EventCard from "@/components/EventCard";

const Page = () => {
    return (
        <main className={''}>
            <EventNav/>
            <div className={'mx-2 lg:mx-40 flex justify-around items-center my-2 border rounded-lg p-1 border-[#6e41e2] bg-gray-200'}>
                <div className={'bg-[#6e41e2] text-white p-1 rounded-lg flex items-center gap-1'}>
                    <div>Upcoming Events</div>
                    <div className={'bg-white flex items-center justify-center rounded-full text-[#6e41e2] w-4 h-4'}>1</div>
                </div>
                <div className={'font-bold text-black'}>Joined Events</div>
            </div>
            <div className="lg:px-40 px-4 grid gap-6 pt-4 pb-28 md:grid-cols-2 lg:grid-cols-3">
                <EventCard/>
                <EventCard/>
            </div>
        </main>
    );
};

export default Page;