import Image from 'next/image'
import HomeNav from "@/components/HomeNav";
import HeroPage from "@/components/HeroPage";
import EventCard from "@/components/EventCard";

export default function Home() {
  return (
    <main className="">
      <HomeNav/>
      <HeroPage/>
        <div className={'px-4 flex flex-col gap-6 pt-4 pb-28'}>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </div>
    </main>
  )
}
