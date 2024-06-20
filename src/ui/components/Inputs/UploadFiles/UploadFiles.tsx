'use client';

import React, { useEffect, useId, useState } from 'react';
import s from './uploadFiles.module.css';
import { formatFileQuantityText } from '@/ui/components/Inputs/UploadFiles/helpers';

type Props = {
    name: string;
    placeholder?: string;
    onGetFiles: (files: FileList | []) => void;
    accept?: string;
};

const UploadFiles: React.FC<Props> = ({
    name,
    placeholder = 'Select file',
    onGetFiles,
    accept = 'image/*,.jpg,.png',
}) => {
    const [files, setFiles] = useState<FileList | []>([]);
    const id = useId();

    useEffect(() => {
        if (!files) return;

        onGetFiles(files);
    }, [files, onGetFiles]);

    const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFiles(e.target.files || []);
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
