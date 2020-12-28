import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
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
              <li>Accueil</li>
            </Link>
            <li>
              <a href='https://location-ski.sport2000.fr/#resort/idResort/318/idShop/870/o/minisite'>
                Réservations
              </a>
            </li>
            <Link href='/informations'>
              <li>Informations</li>
            </Link>
            <Link href='/contact'>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
