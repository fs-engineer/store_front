import styles from './page.module.css';
import Hero from '@/ui/components/hero/hero';
import Bestsellers from '@/ui/components/bestsellers/bestsellers';

export default function Home() {
    return (
        <main className={styles.main}>
            <Hero />
            <Bestsellers />
        </main>
    );
}
