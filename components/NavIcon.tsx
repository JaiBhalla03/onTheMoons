import React from 'react';
import {AiOutlineHome} from "react-icons/ai";
import {IconType} from "react-icons";

type navIconProps = {
    heading: string;
    icon: IconType
}


const NavIcon: React.FC<navIconProps> = ({heading, icon}) => {
    const iconStyle = {
        fontSize: '1.5rem'
    }
    return (
        <div className={'flex flex-col items-center justify-center'}>
            {React.createElement(icon, {style: iconStyle})}
            <div className={'text-lg'}>{heading}</div>
        </div>
    );
};

export default NavIcon;