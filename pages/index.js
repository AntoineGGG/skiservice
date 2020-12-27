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
      <div className={styles.presentation}>
        <h2>Bienvenue chez Ski Service Sport2000</h2>
        <p>
          Depuis 10 ans notre équipe vous conseille dans votre choix de matériel
          pour la pratique du{' '}
          <strong>
            ski alpin, de randonnée et de snowboard dans le quartier des{' '}
            <strong>Fontanettes,</strong>
          </strong>{' '}
          aux <strong>Menuires</strong>, dans le domaine des{' '}
          <strong>3 Vallées.</strong>
        </p>
      </div>
      <section className={styles.reservation}>
        <div className={styles.textReservation}>
          <p>
            Réserver votre matériels en ligne n'a jamais été aussi simple :
            {<br />}
            {<br />}
            Choisissez vos dates de <strong>séjour</strong>, le{' '}
            <strong>magasin Ski Service</strong>, et enfin le choix de votre{' '}
            <strong>équipement</strong>. Votre{' '}
            <strong>réservation aux Menuires</strong> effectuée en 5 minutes !
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
          <h3>Location de skis et snowboards</h3>
          <img
            src='/images/skiservice-rental.png'
            alt='Ski service skis de location'
          />
          <p>
            Du <strong>matériel de location</strong> pour toutes les pratiques,
            tous les niveaux. Un choix d'achat de ski pour la piste, le hors
            piste.
          </p>
        </div>
        <div className={styles.descriptionShop}>
          <h3>Vente accessoires sports d'hiver</h3>
          <img
            src='/images/skiservice-vente.png'
            alt='Ski Service vente accessoires'
          />
          <p>
            Nous vendons tout l'équipement nécessaires à votre protection, votre
            sécurité pour la <strong>pratique des sports d'hiver</strong>, du
            casque à la crème solaire.
          </p>
        </div>
        <div className={styles.descriptionShop}>
          <h3>Entretien et réparation skis et snowboards</h3>
          <img
            src='/images/skiservice-entretien.png'
            alt='Ski Service entretien de ski'
          />
          <p>
            Nous réparons, entretenons votre matériel de glisse :{' '}
            <strong>fartage, affutage, surmoulage</strong>, préparation
            compétition et ski loisir. Déposez vos <strong>skis</strong> le
            soir, ils seront prêt le lendemain.
          </p>
        </div>
        <div className={styles.descriptionShop}>
          <h3>Bootfitting</h3>
          <img
            src='/images/skiservice-bootfitting.png'
            alt='Ski Service vente de chaussures et bootfitting'
          />
          <p>
            A l'aide de nos bootfitter professionnels, nous vous aidons à
            trouver la
            <strong>chaussure de skis</strong> qui vous convient. Vous avez des
            douleurs au pied dans vos propre chaussures de skis? Le{' '}
            <strong>bootfitting</strong>
            est la solution, la douleur n'est pas une fatalité!
          </p>
        </div>
        <div className={styles.descriptionShop}>
          <h3>Location skis de randonnée</h3>
          <img
            src='/images/skiservice-rando.png'
            alt='Ski Service location de ski de randonnée'
          />
          <p>
            Car nous sommes amoureux des espaces vierges, en pleine nature, vous
            trouverez une sélection de{' '}
            <strong>matériel de ski de randonnée</strong> pour partir explorer
            le domaine des <strong>3 Vallées</strong> !
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
