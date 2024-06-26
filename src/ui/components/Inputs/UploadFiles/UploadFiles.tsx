'use client';

import React, { useEffect, useId, useState } from 'react';
import s from './uploadFiles.module.css';
import { formatFileQuantityText } from '@/ui/components/Inputs/UploadFiles/helpers';
import { toast } from 'react-toastify';

type Props = {
    name: string;
    placeholder?: string;
    onGetFiles: (files: FileList | []) => void;
    accept?: string;
    quantity?: number;
};

const UploadFiles: React.FC<Props> = ({
    name,
    placeholder = 'Select file',
    onGetFiles,
    accept = 'image/*,.jpg,.png',
    quantity = 3,
}) => {
    const [files, setFiles] = useState<FileList | []>([]);
    const id = useId();

    useEffect(() => {
        if (!files) return;

        onGetFiles(files);
    }, [files, onGetFiles]);

    const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > quantity) {
            toast.error('Можна додати максимум 5 файлів');
            return;
        }
        setFiles(files || []);
    };

    return (
        <>
            <label className={s.label} htmlFor={id}>
                {formatFileQuantityText(files.length, placeholder)}
            </label>
            <input
                className={s.input}
                type="file"
                name={name}
                id={id}
                placeholder={placeholder}
                accept={accept}
                multiple={true}
                onChange={handleFilesChange}
            />
        </>
    );
};

export default UploadFiles;
