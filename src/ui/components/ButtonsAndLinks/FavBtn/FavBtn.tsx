import React, { useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import s from './FavBtn.module.css';

type Props = {
    favorite: boolean;
};

const FavBtn: React.FC<Props> = ({ favorite = false }) => {
    const [isFavorite, setIsFavorite] = useState(favorite);

    const handleClick = () => {
        setIsFavorite((prevState) => !prevState);
    };

    return (
        <button className={s.button} onClick={handleClick}>
            {isFavorite ? <MdFavorite className={s.icon} /> : <MdFavoriteBorder className={s.icon} />}
        </button>
    );
};

export default FavBtn;
