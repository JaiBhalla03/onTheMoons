'use client'
import React from 'react';
import ProfileNav from "@/components/ProfileNav";
import ProfileForm from "@/components/ProfileForm";

const Page = () => {
    return (
        <main>
            <ProfileNav/>
            <div className={'px-4 pt-4 pb-28'}>
                <ProfileForm
                    phone="9415483472"
                    name="Jai Bhalla"
                    isCreator={false}
                    meet="women"
                    gender="male"
                    dob="2003-07-15"
                    year={true}
                    country="india"
                    language="english"
                    bio="I like coding and singing."
                />
            </div>
        </main>
    );
};

export default Page;