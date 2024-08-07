'use client';

import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import s from '../SelectInputWithSearch.module.css';
import { ISelectInputDataItem } from '@/interfaces';
import ResetInputBtn from '@/ui/components/ButtonsAndLinks/ResetInputBtn/ResetInputBtn';
import SearchInputList from '@/ui/components/Inputs/SelectInputsWithSearch/SearchInputList/SearchInputList';

interface Props {
    name: string;
    placeholder: string;
    data: ISelectInputDataItem[];
    getSelectedId: (id: number | null) => void;
    autoComplete?: 'on' | 'off';
    selectedId: number | null;
}

const SelectInputWithSearch: React.FC<Props> = ({
    name,
    data,
    placeholder,
    getSelectedId,
    autoComplete = 'off',
    selectedId,
}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [options, setOptions] = useState<ISelectInputDataItem[]>([]);
    // const [id, setId] = useState<number | null>(null);
    const [filteredOptions, setFilteredOptions] = useState<ISelectInputDataItem[]>([]);
    const [isOpenOptionsList, setIsOpenOptionsList] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setOptions(data);
        setFilteredOptions(data);
    }, [data]);

    useEffect(() => {
        if (searchTerm === '') {
            getSelectedId(null);
        }
    }, [searchTerm, getSelectedId]);

    useEffect(() => {
        setFilteredOptions(options.filter((option) => option.name.toLowerCase().includes(searchTerm.toLowerCase())));
    }, [searchTerm, options]);

    // useEffect(() => {
    //     onSelect(id);
    // }, [id, onSelect]);

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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleClose = () => {
        setIsOpenOptionsList(false);
    };

    const handleOpen = () => {
        setIsOpenOptionsList(true);
    };

    const handleClick = (id: number, optionName: string) => {
        // setId(id);
        getSelectedId(id);

        setSearchTerm(optionName);
        handleClose();
    };

    const handleReset = () => {
        // setId(null);
        getSelectedId(null);
        setSearchTerm('');
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
                autoComplete={autoComplete}
            />
            {selectedId ? <ResetInputBtn onClick={handleReset} /> : null}
            {isOpenOptionsList ? (
                <SearchInputList onClose={handleClose} onSelect={handleClick} options={filteredOptions} />
            ) : null}
        </div>
    );
};

export default SelectInputWithSearch;
