import React from 'react';
import ProfileIcon from '@/ui/components/icons/ProfileIcon';
import s from '../iconButtons.module.css';

const ProfileBtn = () => {
    return (
        <button type="button" className={s.button}>
            <ProfileIcon width={23} height={23} />
        </button>
    );
};

export default ProfileBtn;
