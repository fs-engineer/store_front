'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
import s from './SelectInputWithSearch.module.css';

interface DataItem {
    id: number;
    name: string;
}

interface Props {
    placeholder: string;
    data: DataItem[];
    onSelect: (id: number) => void;
}

const SelectInputWithSearch: React.FC<Props> = ({ data, placeholder, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [options, setOptions] = useState<DataItem[]>([]);
    const [filteredOptions, setFilteredOptions] = useState<DataItem[]>([]);
    const [isOpenOptionsList, setIsOpenOptionsList] = useState(false);

    useEffect(() => {
        setOptions(data);
        setFilteredOptions(data);
    }, [data]);

    useEffect(() => {
        setFilteredOptions(options.filter((option) => option.name.toLowerCase().includes(searchTerm.toLowerCase())));
    }, [searchTerm, options]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.trim());
    };

    const handleClick = (id: number, optionName: string) => {
        onSelect(id);
        setSearchTerm(optionName);
        toggleOptionsList();
    };

    const toggleOptionsList = () => {
        setIsOpenOptionsList((prevState) => !prevState);
    };

    return (
        <div>
            <input
                className={s.input}
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={handleChange}
                onFocus={toggleOptionsList}
            />
            {isOpenOptionsList ? (
                <ul className={s.list}>
                    {filteredOptions.map((option) => (
                        <li
                            className={s.listItem}
                            key={option.id}
                            id={option.id.toString().trim()}
                            onClick={() => handleClick(option.id, option.name)}
                        >
                            {option.name}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default SelectInputWithSearch;