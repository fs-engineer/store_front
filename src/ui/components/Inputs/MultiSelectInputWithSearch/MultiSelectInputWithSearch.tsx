'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
import s from '../SelectInputWithSearch/SelectInputWithSearch.module.css';
import { ISelectInputDataItem } from '@/interfaces';

interface Props {
    placeholder: string;
    data: ISelectInputDataItem[];
    onSelect: (ids: number[]) => void;
}

const SelectInputWithSearch: React.FC<Props> = ({ data, placeholder, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [options, setOptions] = useState<ISelectInputDataItem[]>([]);
    const [filteredOptions, setFilteredOptions] = useState<ISelectInputDataItem[]>([]);
    const [isOpenOptionsList, setIsOpenOptionsList] = useState(false);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

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

    const handleClick = (id: number) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((item) => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
        onSelect(selectedItems);
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
                            onClick={() => handleClick(option.id)}
                        >
                            {selectedItems.includes(option.id) ? '☑' : '☐'} {option.name}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default SelectInputWithSearch;
