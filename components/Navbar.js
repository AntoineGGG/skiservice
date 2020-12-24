import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>Ski Service Les Menuires</h1>
      <div className={styles.menuToggle}>
        <input type='checkbox' />
        <span></span>
        <span></span>
        <span></span>
        <ul className={styles.menuNav}>
          <li>Accueil</li>
          <li>
            <a href='https://location-ski.sport2000.fr/#resort/idResort/318/idShop/870/o/minisite'>
              Réservations
            </a>
          </li>
          <li>Informations</li>
          <Link href='/contact'>
            <li>Contact</li>
          </Link>

          <li>04.79.00.68.99</li>
          <li>sport2000.skiservice@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
