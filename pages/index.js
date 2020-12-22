import Head from 'next/head';
import styles from '../styles/Home.module.css';
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
        <Link href='https://location-ski.sport2000.fr/#resort/idResort/318/idShop/870/o/minisite'></Link>
        <div className={styles.reservez}></div>
      </section>
    </Layout>
  );
};

export default Index;
