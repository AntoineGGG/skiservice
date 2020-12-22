import styles from '../styles/Navbar.module.scss';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>Ski Service</h1>
      <h3>Les Menuires</h3>
      <ul>
        <li>Accueil</li>
        <li>Infos</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
