import React from 'react'
import SearchIcon from '@/ui/components/icons/searchIcon'
import s from './searchBtn.module.css'

const SearchBtn: React.FC = () => {
    return (
        <button type="button" className={s.button}>
            <SearchIcon width={24} height={24} />
        </button>
    )
}

export default SearchBtn
