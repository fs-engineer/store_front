import React, { useEffect } from 'react';
import s from '../SelectInputWithSearch.module.css';
import { ISelectInputDataItem } from '@/interfaces';
import clsx from 'clsx';

type Props = {
    selectedItems?: number[];
    onClose: () => void;
    onSelect: (id: number, name: string) => void;
    options: ISelectInputDataItem[];
};

const SearchInputList: React.FC<Props> = ({ onClose, onSelect, options, selectedItems = [] }) => {
    useEffect(() => {
        function handleEscKey(e: KeyboardEvent) {
            if (e.code === 'Escape') {
                onClose();
            }
        }

        window.addEventListener('keydown', handleEscKey);
        return () => {
            window.removeEventListener('keydown', handleEscKey);
        };
    }, [onClose]);

    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={s.overlay} onClick={handleClose}>
            <ul className={s.list}>
                {options.map((option) => (
                    <li
                        className={
                            selectedItems.includes(option.id) ? clsx(s.listItem, s.listItemSelected) : s.listItem
                        }
                        key={option.id}
                        id={option.id.toString().trim()}
                        onClick={() => onSelect(option.id, option.name)}
                    >
                        {option.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchInputList;
