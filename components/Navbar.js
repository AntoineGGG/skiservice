import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.navContainer}>
      <div className={styles.navbar}>
        <Link href='/'>
          <h1>Ski Service Les Menuires</h1>
        </Link>
        <div className={styles.menuToggle}>
          <input type='checkbox' />
          <span></span>
          <span></span>
          <span></span>
          <ul className={styles.menuNav}>
            <Link href='/'>
              <li className={router.pathname === '/' ? styles.active : ''}>
                Accueil
              </li>
            </Link>
            <li>
              <a href='https://location-ski.sport2000.fr/#resort/idResort/318/idShop/870/o/minisite'>
                Réservations
              </a>
            </li>
            <Link href='/informations'>
              <li
                className={
                  router.pathname === '/informations' ? styles.active : ''
                }
              >
                Informations
              </li>
            </Link>
            <Link href='/contact'>
              <li
                className={router.pathname === '/contact' ? styles.active : ''}
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
