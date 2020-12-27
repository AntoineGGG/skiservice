import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerText}>
        <p>
          <strong>Ski Service</strong> est un magaisn de{' '}
          <strong>location de ski</strong> situé dans le quartier des{' '}
          <strong>Fontanettes aux Menuires</strong>. Location de ski et
          snowboard, ski de randonnée, vente d'accessoires de sécurité et
          protection, entretien et réparation de votre matériel.
        </p>
      </div>
      <div className={styles.footercontact}>
        <p>
          <strong>Ski Service - Les Menuires</strong> - Rue des Grives -
          Quartier les <strong>Fontanettes</strong>
          <br /> 73440 <strong>Les Belleville</strong>
        </p>
        <p>04.79.00.68.99</p>
        <p>sport2000.skiservice@gmail.com</p>
        <p>Contact - Mentions légales - Infos</p>
      </div>
    </div>
  );
};

export default Footer;
