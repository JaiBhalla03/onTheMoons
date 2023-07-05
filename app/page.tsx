import Image from 'next/image'
import HomeNav from "@/components/HomeNav";
import HeroPage from "@/components/HeroPage";
import EventCard from "@/components/EventCard";

export default function Home() {
  return (
    <main className="">
      <HomeNav/>
      <HeroPage/>
        <div className="lg:px-40 px-4 grid gap-6 pt-4 pb-28 md:grid-cols-2 lg:grid-cols-3">
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </div>
    </main>
  )
}
