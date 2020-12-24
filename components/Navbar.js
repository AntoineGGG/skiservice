import styles from '../styles/Navbar.module.scss';
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
          <li>Infos</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
