'use client';

import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import s from '../SelectInputWithSearch.module.css';
import { ISelectInputDataItem } from '@/interfaces';
import ResetInputBtn from '@/ui/components/LinksAndButtons/ResetInputBtn/ResetInputBtn';
import SearchInputList from '@/ui/components/Inputs/SelectInputsWithSearch/SearchInputList/SearchInputList';

interface Props {
    placeholder: string;
    data: ISelectInputDataItem[];
    onSelect: (ids: number[]) => void;
    name: string;
}

const SelectInputWithSearch: React.FC<Props> = ({ data, placeholder, onSelect, name }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [options, setOptions] = useState<ISelectInputDataItem[]>([]);
    const [filteredOptions, setFilteredOptions] = useState<ISelectInputDataItem[]>([]);
    const [isOpenOptionsList, setIsOpenOptionsList] = useState(false);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setOptions(data);
        setFilteredOptions(data);
    }, [data]);

    useEffect(() => {
        setFilteredOptions(options.filter((option) => option.name.toLowerCase().includes(searchTerm.toLowerCase())));
    }, [searchTerm, options]);

    useEffect(() => {
        onSelect(selectedItems);
    }, [selectedItems, onSelect]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                handleClose();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [containerRef]);

    const handleOpen = () => {
        setIsOpenOptionsList(true);
    };

    const handleClose = () => {
        setIsOpenOptionsList(false);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.trim());
    };

    const handleClick = (id: number) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((item) => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const handleReset = () => {
        setSelectedItems([]);
        setSearchTerm('');
        setIsOpenOptionsList(false);
    };

    return (
        <div className={s.container} ref={containerRef}>
            <input
                name={name}
                className={s.input}
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={handleChange}
                onFocus={handleOpen}
            />
            {selectedItems.length > 0 ? <ResetInputBtn onClick={handleReset} /> : null}
            {isOpenOptionsList ? (
                <SearchInputList
                    onClose={handleClose}
                    onSelect={handleClick}
                    options={filteredOptions}
                    selectedItems={selectedItems}
                />
            ) : null}
        </div>
    );
};

export default SelectInputWithSearch;
