import React from 'react';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';

type NavIconProps = {
    heading: string;
    icon: IconType;
    isActive: boolean;
    onClick: () => void;
};

const NavIcon: React.FC<NavIconProps> = ({ heading, icon: Icon, isActive, onClick }) => {
    const iconStyle: IconBaseProps = {
        fontSize: '1.5rem',
        color: isActive ? '#6e41e2' : undefined,
    };

    return (
        <div className="flex flex-col items-center justify-center" onClick={onClick}>
            <Icon style={iconStyle} />
            <div className="text-lg" style={{ color: isActive ? '#6e41e2' : undefined }}>
                {heading}
            </div>
        </div>
    );
};

export default NavIcon;
