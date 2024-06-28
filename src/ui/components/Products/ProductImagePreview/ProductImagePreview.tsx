'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import s from './productImagePreview.module.css';

type Props = {
    imageUrls: string[];
};

const ProductImagePreview: React.FC<Props> = ({ imageUrls }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        setSelectedImage(imageUrls[0]);
    }, [imageUrls]);

    return (
        <div className={s.container}>
            <ul className={s.imageList}>
                {imageUrls.length > 0 &&
                    imageUrls.map((link) => (
                        <li key={link} className={s.imageListItem} onClick={() => setSelectedImage(link)}>
                            <Image
                                className={s.smallImage}
                                src={link}
                                alt={'Маленька іконка попереднього перегляду'}
                                width={52}
                                height={52}
                            />
                        </li>
                    ))}
            </ul>
            <div>
                {selectedImage && (
                    <div className={s.bigImageWrapper}>
                        <Image
                            src={selectedImage}
                            alt={'Велика іконка попереднього перегляду'}
                            className={s.bigImage}
                            width={388}
                            height={388}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductImagePreview;
