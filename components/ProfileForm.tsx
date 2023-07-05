'use client'

import React, {useState} from 'react';
import avatar from '../public/avatar.jpg'
import Image from 'next/image'
import {BsGenderMale} from "react-icons/bs";
import {IoMaleFemaleSharp} from "react-icons/io5";
import {StaticImageData} from "next/image";

type profileProps = {
    phone: string;
    name: string;
    isCreator: boolean;
    meet: string;
    gender: string;
    dob: string;
    year: boolean;
    country: string;
    language: string;
    bio: string;
}

const ProfileForm: React.FC<profileProps> = ({
                                                 phone,
                                                 name,
                                                 isCreator,
                                                 meet,
                                                 gender,
                                                 dob,
                                                 year,
                                                 country,
                                                 language,
                                                 bio
                                             }) => {
    const [selectedOption, setSelectedOption] = useState(gender);
    const [phno, setPhone] = useState(phone);
    const [naam, setName] = useState(name);
    const [creator, setIsCreator] = useState(isCreator);
    const [milo, setMeet] = useState(meet);
    const [gen, setGender] = useState(gender);
    const [dobVal, setDob] = useState(dob);
    const [yea, setYear] = useState(year);
    const [coun, setCountry] = useState(country);
    const [lang, setLanguage] = useState(language);
    const [bi, setBio] = useState(bio);
    const [uploadedImage, setUploadedImage] = useState<StaticImageData | null>(avatar);
    const handleOptionChange = (option:string) => {
        setSelectedOption(option);
    };
    const handleRemoveImage = () => {
        setUploadedImage(null);
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if(file){
            setUploadedImage(URL.createObjectURL(file as StaticImageData | null));
        }
    };
    return (
        <form className={'lg:mx-40 lg:shadow-2xl lg:shadow-black rounded-xl lg:p-8'}>
            <div className={'flex flex-col gap-2 items-center'}>
                <div>{uploadedImage ? '1 image uploaded' : 'No image uploaded'}</div>
                {uploadedImage ? (
                    <Image src={uploadedImage} alt={''} width={90} height={90} className={'shadow shadow-gray-500 shadow-lg rounded-lg'} />
                ) : (
                    <div className="relative">
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 opacity-0 w-full h-full cursor-pointer" />
                        <div className="bg-gray-200 w-32 h-32 rounded-lg flex items-center justify-center">Upload Image</div>
                    </div>
                )}
                {uploadedImage !== null && (
                    <button className={'text-[#6e41e2]'} onClick={handleRemoveImage}>
                        Remove
                    </button>
                )}
            </div>
            <div className={'flex flex-col gap-2'}>
                <div>
                    <label className={'text-lg'} htmlFor={'phno'}>
                        Your Email or phone number
                    </label>
                    <div className={'px-1 py-3 w-full flex gap-2 focus:outline-none border border-gray-500 rounded-lg'}>
                        <div className={''}>
                            <select className={'focus:outline-none border-r border-gray-500'}>
                                <option>+91</option>
                                <option>+0</option>
                            </select>
                        </div>
                        <input name={'phno'} id={'phno'} value={phno} onChange={(e)=>setPhone(e.target.value)} className={'flex-1 focus:outline-none'}/>
                    </div>
                </div>
                <div>
                    <label className={'text-lg'} htmlFor={'name'}>
                        Your Name
                    </label>
                    <input value={naam} onChange={(e)=>{setName(e.target.value)}} name={'name'} id={'name'} type={'text'} className={'px-1 py-3 w-full focus:outline-none border border-gray-500 rounded-lg'}/>
                </div>
                <div className={'flex gap-2 items-center'}>
                    <input name={'creator'} id={'creator'} type={'checkbox'} className={'w-4 h-4 focus:outline-none border border-gray-500 rounded-lg'}/>
                    <label className={'text-lg'} htmlFor={'creator'} checked={creator} onClick={(e)=>setYear(!creator)}>
                        Are you a creator?
                    </label>
                </div>
                <div>
                    <label className={'text-lg'} htmlFor={'phno'}>
                        I wish to meet...
                    </label>
                    <select value={milo} onChange={(e)=>setMeet(e.target.value)} name={'meet'} id={'meet'} className={'px-1 py-3 w-full focus:outline-none border border-gray-500 rounded-lg'}>
                        <option value={'men&women'}>Men & Women</option>
                        <option value={'women'}>Women</option>
                        <option value={'men'}>Men</option>
                    </select>
                </div>
                <div>
                    <label className={'text-lg'}>Your Gender</label>
                    <div className="flex w-full justify-between">
                        <div
                            className={`${
                                selectedOption === 'male' ? 'border-black' : 'border-gray-500'
                            } focus:border-black flex gap-1 cursor-pointer items-center border p-2 rounded-lg`}
                            onClick={() => handleOptionChange('male')}
                        >
                            <BsGenderMale size={25} />
                            Male
                        </div>
                        <div
                            className={`${
                                selectedOption === 'female' ? 'border-black' : 'border-gray-500'
                            } focus:border-black flex gap-1 cursor-pointer items-center border p-2 rounded-lg`}
                            onClick={() => handleOptionChange('female')}
                        >
                            <BsGenderMale size={25} />
                            Female
                        </div>
                        <div
                            className={`${
                                selectedOption === 'other' ? 'border-black' : 'border-gray-500'
                            } focus:border-black flex gap-1 cursor-pointer items-center border p-2 rounded-lg`}
                            onClick={() => handleOptionChange('other')}
                        >
                            <IoMaleFemaleSharp size={25} />
                            Other
                        </div>
                    </div>
                </div>
                <div>
                    <label className={'text-lg'} htmlFor={'dob'}>*Your Date of Birth</label>
                    <input value={dobVal} onChange={(e)=>setDob(e.target.value)} name={'dob'} id={'dob'} type={'date'} className={'px-1 py-3 w-full focus:outline-none border border-gray-500 rounded-lg'}/>
                </div>
                <div className={'flex gap-1 items-center'}>
                    <input name={'year'} id={'year'} type={'checkbox'} className={'w-4 h-4 focus:outline-none border border-gray-500 rounded-lg'} checked={yea} onClick={(e)=>setYear(!yea)}/>
                    <label className={'text-lg'} htmlFor={'year'}>
                        Yes, I confirm that I'm 18+ year old.
                    </label>
                </div>
                <div>
                    <label className={'text-lg'}>Your Country</label>
                    <select value={coun} onChange={(e)=>setCountry(e.target.value)} className={'px-1 py-3 w-full focus:outline-none border border-gray-500 rounded-lg'}>
                        <option value={'india'}>India</option>
                        <option value={'usa'}>USA</option>
                        <option value={'uk'}>UK</option>
                    </select>
                </div>
                <div>
                    <label className={'text-lg'}>Preferred Language</label>
                    <select value={lang} onChange={(e)=>setLanguage(e.target.value)} className={'px-1 py-3 w-full focus:outline-none border border-gray-500 rounded-lg'}>
                        <option value={'english'}>English</option>
                        <option value={'hindi'}>Hindi</option>
                        <option value={'spanish'}>Spanish</option>
                    </select>
                </div>
                <div>
                    <label className={'text-lg resize-none'} htmlFor={'bio'}>Your Bio</label>
                    <textarea value={bi} onChange={(e)=>setBio(e.target.value)} placeholder={'You could write something good, something interesting about yourself here...'} className={'px-1 py-3 h-32 w-full focus:outline-none border border-gray-500 rounded-lg'}></textarea>
                </div>
            </div>
        </form>
    );
};

export default ProfileForm;