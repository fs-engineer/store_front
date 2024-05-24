import React from 'react';
import SearchIcon from '@/ui/components/Icons/SearchIcon';
import s from '../iconButtons.module.css';

const SearchBtn: React.FC = () => {
    return (
        <button type="button" className={s.button}>
            <SearchIcon width={24} height={24} />
        </button>
    );
};

export default SearchBtn;