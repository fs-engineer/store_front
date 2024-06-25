import React, { useState } from 'react';
import Image from 'next/image';
import s from './productImagePreview.module.css';

type Props = {
    images: FileList | [];
};

const ProductImagePreview: React.FC<Props> = ({ images }) => {
    const imageLinkArray = Array.from(images).map((file) => URL.createObjectURL(file)) || [];
    const [selectedImage, setSelectedImage] = useState<string | null>(imageLinkArray[0] || null);
    console.log(selectedImage, 'selected image');

    return (
        <div className={s.container}>
            <ul className={s.imageList}>
                {imageLinkArray.length > 0 &&
                    imageLinkArray.map((link) => (
                        <li key={link} className={s.imageListItem}>
                            <Image
                                className={s.smallImage}
                                src={link}
                                alt={link}
                                width={86}
                                height={86}
                                onClick={() => setSelectedImage(link)}
                            />
                        </li>
                    ))}
            </ul>
            <div>
                <div className={s.bigImageWrapper}>
                    {selectedImage && (
                        <Image
                            src={selectedImage}
                            alt={'product preview'}
                            className={s.bigImage}
                            width={388}
                            height={412}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductImagePreview;
