import styles from './styles.module.scss'
import Link from 'next/link'



export function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <Link href="/">
                <img src="logo.jpeg" width={300} height={40} />
                </Link>
            </div>
        </header>
    )
}