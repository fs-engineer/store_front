import { FC } from 'react';

import React from 'react';
import LogoIcon from '@/ui/components/icons/LogoIcon';
import Link from 'next/link';

const Logo: FC = () => {
    return (
        <Link href="/">
            <LogoIcon />
        </Link>
    );
};

export default Logo;
