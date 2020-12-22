import styles from '../styles/Navbar.module.scss';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>Ski Service</h1>
      <h3>Les Menuires</h3>
      <ul>
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
  );
};

export default Navbar;
