import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
  return (
    <Layout>
      <div className={styles.imageAccueil}>
        <img
          src='/images/skiservice-interieur.jpg'
          className={styles.interieur}
          alt='Interieur Magasin Ski Service'
        />
      </div>
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
      <section className={styles.descriptionShopContainer}>
        <h2>Nos Prestations</h2>
        <div className={styles.descriptionShop}>
          <img
            src='/images/skiservice-rental.png'
            alt='Ski service skis de location'
          />
          <p>
            Du matériel de location pour toutes les pratiques, tous les niveaux.
            Un choix d'achat de ski pour la piste, le hors piste.
          </p>
        </div>
        <div className={styles.descriptionShop}>
          <img
            src='/images/skiservice-vente.png'
            alt='Ski Service vente accessoires'
          />
          <p>
            Nous vendons tout l'équipement nécessaires à votre protection, votre
            sécurité, du casque à la crème solaire.
          </p>
        </div>
        <div className={styles.descriptionShop}>
          <img
            src='/images/skiservice-entretien.png'
            alt='Ski Service entretien de ski'
          />
          <p>
            Nous réparons, entretenons votre matériel de glisse : fartage,
            affutage, surmoulage, préparation compétition et ski loisir. Déposez
            vos skis le soir, ils seront prêt le lendemain.
          </p>
        </div>
        <div className={styles.descriptionShop}>
          <img
            src='/images/skiservice-bootfitting.png'
            alt='Ski Service vente de chaussures et bootfitting'
          />
          <p>
            A l'aide de nos technicien diplomés, nous vous aidons à trouver la
            chaussure qui vous convient parmi notre choix. Vous avez des
            douleurs au pied dans vos propre chaussures de skis? Le bootfitting
            est la solution, la douleur n'est pas une fatalité!
          </p>
        </div>
        <div className={styles.descriptionShop}>
          <img
            src='/images/skiservice-rando.png'
            alt='Ski Service location de ski de randonnée'
          />
          <p>
            Car nous sommes des amoureux des espaces vierges, en pleine nature,
            vous trouverez une sélection de matériel de ski de randonnée pour
            partir explorer le domaine des 3 Vallées !
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
