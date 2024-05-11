import { FC } from 'react'

import React from 'react'
import LogoIcon from '@/ui/components/icons/logoIcon'
import Link from 'next/link'

const Logo: FC = () => {
    return (
        <Link href="/public">
            <LogoIcon />
        </Link>
    )
}

export default Logo
