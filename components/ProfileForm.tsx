'use client'

import React, {useState} from 'react';
import avatar from '../public/avatar.jpg'
import Image from 'next/image'
import {BsGenderMale} from "react-icons/bs";
import {IoMaleFemaleSharp} from "react-icons/io5";
import Select from 'react-select';

type labelFlagProps = {
    label: string;
    flag: string;
}

const ProfileForm = () => {
    const [selectedOption, setSelectedOption] = useState('male');
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const handleOptionChange = (option:string) => {
        setSelectedOption(option);
    };

    const countryOptions = [
        { value: 'usa', label: 'United States', flag: '🇺🇸' },
        { value: 'uk', label: 'United Kingdom', flag: '🇬🇧' },
        // Add more country options here...
    ];

    const languageOptions = [
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'French' },
        // Add more language options here...
    ];

    const customCountryOption: React.FC<labelFlagProps> = ({ label, flag }) => (
        <div>
            <span role="img" aria-label={label}>
        {flag}
      </span>
            <span>{label}</span>
        </div>
    );
    return (
        <form>
            <div className={'flex flex-col gap-2 items-center'}>
                <div>1 image Uploaded</div>
                <Image src={avatar} alt={''} width={90} height={90} className={'shadow shadow-gray-500 shadow-lg rounded-lg'}/>
                <button className={'text-[#6e41e2]'}>Remove</button>
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
                        <input name={'phno'} id={'phno'} className={'flex-1 focus:outline-none'}/>
                    </div>
                </div>
                <div>
                    <label className={'text-lg'} htmlFor={'phno'}>
                        Your Name
                    </label>
                    <input name={'name'} id={'name'} type={'text'} className={'px-1 py-3 w-full focus:outline-none border border-gray-500 rounded-lg'}/>
                </div>
                <div className={'flex gap-2 items-center'}>
                    <input name={'creator'} id={'creator'} type={'checkbox'} className={'w-4 h-4 focus:outline-none border border-gray-500 rounded-lg'}/>
                    <label className={'text-lg'} htmlFor={'creator'}>
                        Are you a creator?
                    </label>
                </div>
                <div>
                    <label className={'text-lg'} htmlFor={'phno'}>
                        I wish to meet...
                    </label>
                    <select name={'meet'} id={'meet'} className={'px-1 py-3 w-full focus:outline-none border border-gray-500 rounded-lg'}>
                        <option>Men & Women</option>
                        <option>Women</option>
                        <option>Men</option>
                    </select>
                </div>
                <div>
                    <label className={'text-lg'}>Your Gender</label>
                    <div className="flex w-full justify-between">
                        <div
                            className={`${
                                selectedOption === 'male' ? 'border-black' : ''
                            } focus:border-black flex gap-1 items-center border border-gray-500 p-2 rounded-lg`}
                            onClick={() => handleOptionChange('male')}
                        >
                            <BsGenderMale size={25} />
                            Male
                        </div>
                        <div
                            className={`${
                                selectedOption === 'female' ? 'border-black' : ''
                            } focus:border-black flex gap-1 items-center border border-gray-500 p-2 rounded-lg`}
                            onClick={() => handleOptionChange('female')}
                        >
                            <BsGenderMale size={25} />
                            Female
                        </div>
                        <div
                            className={`${
                                selectedOption === 'other' ? 'border-black' : ''
                            } focus:border-black flex gap-1 items-center border border-gray-500 p-2 rounded-lg`}
                            onClick={() => handleOptionChange('other')}
                        >
                            <IoMaleFemaleSharp size={25} />
                            Other
                        </div>
                    </div>
                </div>
                <div>
                    <label className={'text-lg'} htmlFor={'dob'}>*Your Date of Birth</label>
                    <input name={'dob'} id={'dob'} type={'date'} className={'px-1 py-3 w-full focus:outline-none border border-gray-500 rounded-lg'}/>
                </div>
                <div className={'flex gap-1 items-center'}>
                    <input name={'year'} id={'year'} type={'checkbox'} className={'w-4 h-4 focus:outline-none border border-gray-500 rounded-lg'}/>
                    <label className={'text-lg'} htmlFor={'year'}>
                        Yes, I confirm that I'm 18+ year old.
                    </label>
                </div>
                <div>
                    <label className={'text-lg'}>Your Country</label>
                    <Select
                        options={countryOptions}
                        value={selectedCountry}
                        onChange={setSelectedCountry}
                        isSearchable
                        components={{ Option: customCountryOption }}
                    />
                </div>
                <div>
                    <label className={'text-lg'}>Preferred Language</label>
                    <Select
                        options={languageOptions}
                        value={selectedLanguage}
                        onChange={setSelectedLanguage}
                        isSearchable
                    />
                </div>
                <div>
                    <label className={'text-lg'} htmlFor={'bio'}>Your Bio</label>
                    <textarea placeholder={'You could write something good, something interesting about yourself here...'} className={'px-1 py-3 h-32 w-full focus:outline-none border border-gray-500 rounded-lg'}></textarea>
                </div>
            </div>
        </form>
    );
};

export default ProfileForm;