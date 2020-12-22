import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div className='Layout'>
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
