import React from 'react';
import ProfileNav from "@/components/ProfileNav";
import ProfileForm from "@/components/ProfileForm";

const Page = () => {
    return (
        <main>
            <ProfileNav/>
            <div className={'px-4 pt-4 pb-28'}>
                <ProfileForm/>
            </div>
        </main>
    );
};

export default Page;