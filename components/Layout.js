import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div className='Layout'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap'
          rel='stylesheet'
        ></link>
        <link rel='icon' href='/favicon.ico' />
        <title>Ski Service les Menuires</title>
        <meta
          name='description'
          content='Réservez vos skis en lignes, faites entretenir votre martériel aux Menuires, dans le quartier des fontanettes.'
        />
        <meta property='og:image' content='Location de ski les Menuires' />
        <meta name='og:title' content='Ski Service Les Menuires' />
      </Head>
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
