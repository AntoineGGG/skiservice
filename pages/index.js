import styles from "../styles/Home.module.scss";
import Head from "next/head";

import Layout from "../components/Layout";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "/images/cairn-ski-service-les-menuires.webp",
  "/images/chaussures-skis-location-les-menuires.webp",
  "/images/electric-goggle-ski-service-les-menuires-2.webp",
  "/images/electric-goggle-ski-service-les-menuires.webp",
  "/images/skis-location-junior-ski-service-les-menuires.webp",
  "/images/skis-location-ski-service-les-menuires.webp",
  "/images/smith-helmet-ski-service-les-menuires.webp",
];

const Index = () => {
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
          content="Location de ski - ski de rando et snowboard aux Menuires dans la quartier des fontanettes, bienvenu chez Ski Service - Sport2000"
        />
        <meta
          property="og:title"
          content="Bienvenu chez Ski Service Sport2000 aux Menuires"
          key="title"
        />
        <meta
          property="og:image"
          content="https://ski-service-les-menuires.fr/images/skiservice-interieur.webp"
        />
        <meta
          name="og:description"
          content="Location de ski- ski de rando et snowboard aux Menuires dans le quartier des fontanettes, bienvenu chez Ski Service - Sport2000"
        />
        <meta property="og:url" content="https://ski-service-les-menuires.fr" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
        <div className={styles.indexContainer}>
          <div className={styles.presentation}>
            <h2>Bienvenue chez Ski Service Sport2000</h2>
            <p>
              Depuis 10 ans notre équipe vous conseille dans votre choix de
              matériel pour la pratique du{" "}
              <strong>
                ski alpin, de randonnée et de snowboard dans le quartier des{" "}
                <strong>Fontanettes,</strong>
              </strong>{" "}
              aux <strong>Menuires</strong>, dans le domaine des{" "}
              <strong>3 Vallées.</strong>
            </p>
            <img src="/images/sport2000-logo.webp" alt="sport2000 logo" />
          </div>
          <section className={styles.reservation}>
            <div className={styles.textReservation}>
              <p>
                Réserver votre matériel en ligne n'a jamais été aussi simple :
                {<br />}
                {<br />}
                Choisissez vos dates de <strong>séjour</strong>, le{" "}
                <strong>magasin Ski Service</strong>, et enfin le choix de votre{" "}
                <strong>équipement</strong>. Votre{" "}
                <strong>réservation aux Menuires</strong> effectuée en 5 minutes
                !
              </p>
            </div>
            <a href="https://location-ski.sport2000.fr/#resort/idResort/318/idShop/870/o/minisite">
              <div className={styles.reservez}>
                <div className={styles.buttonResa}>
                  <p>Réservez votre matériel en ligne.</p>
                </div>
              </div>
            </a>
          </section>
          <section className={styles.descriptionShopContainer}>
            <h2>Nos Prestations</h2>
            <div className={styles.descriptionShop}>
              <h3>Location de skis et snowboards</h3>
              <img
                src="/images/skiservice-rental.webp"
                alt="Ski service skis de location"
              />
              <p>
                Du <strong>matériel de location</strong> pour toutes les
                pratiques. Plus de 300 paires de skis répartis en plusieurs
                catégories, du skieur débutant au skieur expert.
              </p>
            </div>
            <div className={styles.descriptionShop}>
              <h3>Vente d'accessoires de sports d'hiver</h3>
              <img
                src="/images/skiservice-vente.webp"
                alt="Ski Service vente accessoires"
              />
              <p>
                Vous trouverez tout l'équipement nécessaire à votre protection
                et votre sécurité pour la{" "}
                <strong>pratique des sports d'hiver</strong>, du casque à la
                crème solaire.
              </p>
            </div>
            <div className={styles.descriptionShop}>
              <h3>Entretien et réparation skis et snowboard</h3>
              <img
                src="/images/skiservice-entretien.webp"
                alt="Ski Service entretien de ski"
              />
              <p>
                Nous réparons et entretenons votre matériel de glisse :{" "}
                <strong>fartage, affûtage, surmoulage</strong> pour le ski
                loisir ou la compétition. Déposez vos <strong>skis</strong> le
                soir, ils seront prêt le lendemain.
              </p>
            </div>
            <div className={styles.descriptionShop}>
              <h3>Bootfitting</h3>
              <img
                src="/images/skiservice-bootfitting.webp"
                alt="Ski Service vente de chaussures et bootfitting"
              />
              <p>
                A l'aide de nos bootfitters professionnels, nous vous aidons à
                trouver la
                <strong> chaussure de ski</strong> qui vous convient. Vous avez
                des douleurs aux pieds dans vos propres chaussures de ski ? Le{" "}
                <strong>bootfitting</strong> est la solution, la douleur n'est
                pas une fatalité !
              </p>
            </div>
            <div className={styles.descriptionShop}>
              <h3>Location de skis de randonnée</h3>
              <img
                src="/images/skiservice-rando.webp"
                alt="Ski Service location de ski de randonnée"
              />
              <p>
                Parce que nous sommes amoureux des{" "}
                <strong>espaces vierges</strong>, en{" "}
                <strong>pleine nature</strong>, nous souhaitons vous partager
                notre passion, vous trouverez dans notre magasin{" "}
                <strong>Ski Service</strong> aux <strong>Fontanettes</strong>{" "}
                une sélection de <strong>matériel de ski de randonnée</strong>{" "}
                pour partir explorer le domaine des <strong>3 Vallées</strong> !
              </p>
            </div>
          </section>
          <div className={styles.imageAccueil}>
            <img
              src="/images/skiservice-interieur.webp"
              className={styles.interieur}
              alt="Interieur Magasin Ski Service"
            />
          </div>

          <div className={styles.slideContainer}>
            <Zoom>
              {slideImages.map((each, index) => (
                <img
                  key={index}
                  src={each}
                  alt="ski service pictures caroussel"
                />
              ))}
            </Zoom>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
