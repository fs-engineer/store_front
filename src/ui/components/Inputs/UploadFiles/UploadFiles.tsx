'use client';

import React, { useEffect, useId, useState } from 'react';
import s from './uploadFiles.module.css';

type Props = {
    placeholder?: string;
    onGetFiles: (files: FileList | null) => void;
};

const UploadFiles: React.FC<Props> = ({ placeholder = 'Select file', onGetFiles }) => {
    const [files, setFiles] = useState<FileList | null>(null);
    const id = useId();

    useEffect(() => {
        onGetFiles(files);
    }, [files, onGetFiles]);

    const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFiles(e.target.files);
    };

    return (
        <>
            <label className={s.label} htmlFor={id}>
                {placeholder}
            </label>
            <input
                className={s.input}
                type="file"
                name="file"
                id={id}
                placeholder={placeholder}
                accept="image/*,.jpg,.png"
                multiple={true}
                onChange={handleFilesChange}
            />
        </>
    );
};

export default UploadFiles;
