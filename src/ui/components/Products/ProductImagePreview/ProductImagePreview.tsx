import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import s from './productImagePreview.module.css';

type Props = {
    images: FileList | [];
};

const ProductImagePreview: React.FC<Props> = ({ images }) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const imageLinkArray = Array.from(images).map((file) => URL.createObjectURL(file)) || [];

        setSelectedImage(imageLinkArray[0]);
        setImageUrls(imageLinkArray);
    }, [images]);

    return (
        <div className={s.container}>
            <ul className={s.imageList}>
                {imageUrls.length > 0 &&
                    imageUrls.map((link) => (
                        <li key={link} className={s.imageListItem} onClick={() => setSelectedImage(link)}>
                            <Image className={s.smallImage} src={link} alt={link} width={86} height={86} />
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
                            height={388}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductImagePreview;
