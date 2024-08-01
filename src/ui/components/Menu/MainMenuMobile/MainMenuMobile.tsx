'use client';

import React from 'react';
import BurgerBtn from '@/ui/components/ButtonsAndLinks/BurgerBtn/BurgerBtn';
import useWindowSize from '@/hooks/useWindowSize';

const MainMenuMobile = () => {
    const { width } = useWindowSize();
    return <>{width && width < 600 ? <BurgerBtn /> : null}</>;
};

export default MainMenuMobile;
