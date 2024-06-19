'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
import s from './SelectInputWithSearch.module.css';
import { ISelectInputDataItem } from '@/interfaces';
import ResetInputBtn from '@/ui/components/LinksAndButtons/ResetInputBtn/ResetInputBtn';

interface Props {
    name: string;
    placeholder: string;
    data: ISelectInputDataItem[];
    onSelect: (id: number | null) => void;
}

const SelectInputWithSearch: React.FC<Props> = ({ name, data, placeholder, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [options, setOptions] = useState<ISelectInputDataItem[]>([]);
    const [id, setId] = useState<number | null>(null);
    const [filteredOptions, setFilteredOptions] = useState<ISelectInputDataItem[]>([]);
    const [isOpenOptionsList, setIsOpenOptionsList] = useState(false);

    useEffect(() => {
        setOptions(data);
        setFilteredOptions(data);
    }, [data]);

    useEffect(() => {
        setFilteredOptions(options.filter((option) => option.name.toLowerCase().includes(searchTerm.toLowerCase())));
    }, [searchTerm, options]);

    useEffect(() => {
        onSelect(id);
    }, [id, onSelect]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleClick = (id: number, optionName: string) => {
        setId(id);
        setSearchTerm(optionName);
        toggleOptionsList();
    };

    const handleReset = () => {
        setId(null);
        setSearchTerm('');
    };

    const toggleOptionsList = () => {
        setIsOpenOptionsList((prevState) => !prevState);
    };

    return (
        <div className={s.wrapper}>
            <input
                name={name}
                className={s.input}
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={handleChange}
                onFocus={toggleOptionsList}
                autoComplete="off"
            />
            {id ? <ResetInputBtn onClick={handleReset} /> : null}
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
