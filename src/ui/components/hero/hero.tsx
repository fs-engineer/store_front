import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import s from './hero.module.css';

const Hero = () => {
    return (
        <section className={s.section}>
            <div className={s.imgWrap}>
                <Image src="/images/hero/mobile/hero_1.jpg" alt="червоні квіти" width={213} height={289} />
                <Image src="/images/hero/mobile/hero_2.jpg" alt="чарівна жінка" width={215} height={289} />
            </div>
            <p className={s.description}>
                Незалежно від вашого типу шкіри чи ваших потреб, Nevitaly пропонує широкий вибір косметичних засобів, що
                допоможуть вам відчувати себе краще кожен день. Дозвольте нам допомогти вам відкрити вашу справжню
                красу.
            </p>
            <div className={s.imgWrap}>
                <Image
                    src="/images/hero/mobile/hero_3.jpg"
                    alt="руда жінка"
                    width={190}
                    height={289}
                    className={clsx(s.imgMargin, s.imgMargin)}
                />
                <Image src="/images/hero/mobile/hero_4.jpg" alt="руда жінка з кремом в руці" width={190} height={289} />
            </div>
        </section>
    );
};

export default Hero;
