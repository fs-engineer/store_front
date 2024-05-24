import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';

interface DataItem {
    _id: string;
    name: string;
}

interface DropdownWithSearchProps<T> {
    apiEndpoint: string;
    placeholder: string;
    transformData?: (data: any) => T;
}

const SelectInputWithSearch = <T extends DataItem>({
    apiEndpoint,
    placeholder,
    transformData,
}: DropdownWithSearchProps<T>) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [options, setOptions] = useState<T[]>([]);
    const [filteredOptions, setFilteredOptions] = useState<T[]>([]);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await axios.get<T[]>(apiEndpoint);
                const data = transformData ? response.data.map(transformData) : response.data;

                setOptions(data);
                setFilteredOptions(data);
            } catch (error) {
                console.error('Error fetching options:', error);
            }
        };

        fetchOptions();
    }, [apiEndpoint, transformData]);

    useEffect(() => {
        setFilteredOptions(options.filter((option) => option.name.toLowerCase().includes(searchTerm.toLowerCase())));
    }, [searchTerm, options]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <input type="text" placeholder={placeholder} value={searchTerm} onChange={handleChange} />
            <ul>
                {filteredOptions.map((option) => (
                    <li key={option._id}>{option.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SelectInputWithSearch;
