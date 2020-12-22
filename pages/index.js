import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
  return (
    <Layout>
      <img
        src='/images/skiservice-interieur.jpg'
        className={styles.interieur}
        alt='Interieur Magasin Ski Service'
      />
      <section className={styles.reservation}>
        <div className={styles.textReservation}>
          <p>
            Réserver votre matériels en ligne n'a jamais été aussi simple:
            {<br />}
            {<br />}
            Choisissez vos dates de séjours, le magasin Ski Service, et enfin le
            choix de votre équipements. Votre réservation effectuée en 5 minutes
            !!
          </p>
        </div>
        <a href='https://location-ski.sport2000.fr/#resort/idResort/318/idShop/870/o/minisite'>
          <div className={styles.reservez}>
            <div className={styles.buttonResa}>
              <p>Réservez votre matériel en ligne.</p>
            </div>
          </div>
        </a>
      </section>
      <section className={styles.descriptionShop}>
        <div className={styles.descriptionShopLocation}>
          <img
            src='/images/skiservice-location.jpg'
            alt='Ski service skis de location'
          />
          <p>
            Du matériel de location pour toutes les pratiques, tous les niveaux.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
