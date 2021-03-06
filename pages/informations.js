import Layout from "../components/Layout";
import Head from "next/head";

import styles from "../styles/Informations.module.scss";
import Link from "next/link";

const Informations = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Ski Service les Menuires</title>
        <meta
          name="description"
          content="Vous nous trouverez dans le quartier des fontanettes aux Menuires pour louer votre matériel de glisse."
        />
        <meta
          property="og:title"
          content="Nous trouver aux Menuires"
          key="title"
        />
        <meta
          property="og:image"
          content="https://ski-service-les-menuires.fr/images/skiservice-interieur.webp"
        />
        <meta
          name="og:description"
          content="Vous nous trouverez dans le quartier des fontanettes aux Menuires pour louer votre matériel de glisse."
        />
        <meta
          property="og:url"
          content="https://ski-service-les-menuires.fr/informations"
        />
      </Head>
      <Layout>
        <div className={styles.infoContainer}>
          <div className={styles.infoText}>
            <h2>Informations</h2>
            <p>
              Notre magasin est situé <strong>rue des Grives</strong>, dans le
              quartier des <strong>Fontanettes aux Menuires.</strong> Vous
              pouvez nous contacter par téléphone au{" "}
              <a href="tel:0479006899">
                <strong>04.79.00.68.99</strong>{" "}
              </a>
              ou par mail à l'adresse suivante :{" "}
              <a href="mailto:sport2000.skiservice@gmail.com">
                <strong>sport2000.skiservice@gmail.com</strong>
              </a>
              .
              <br /> Vous pouvez également nous envoyer votre demande via le
              formulaire disponible sur la page de{" "}
              <Link href="/contact">contact.</Link>
            </p>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11221.67327418164!2d6.5373583!3d45.3201746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11333e2ae2ac0e3!2sSPORT%202000%20SKI%20SERVICE%20LES%20MENUIRES%20-%20Location%20ski%20Les%20Menuires!5e0!3m2!1sfr!2sfr!4v1609066682296!5m2!1sfr!2sfr"
              width="400"
              height="300"
              frameBorder="0"
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Ski Service Location"
            ></iframe>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Informations;
