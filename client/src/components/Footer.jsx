import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className='container mx-auto p-6 flex flex-col md:flex-row items-center justify-between text-white'>
        <p>Built with ReactJS &amp; Tailwind &bull; by WMouton</p>
        <div>
          <a href="#" className='mx-3 hover:opacity-80 duration-150'>About Us</a>
          <a href="#" className='mx-3 hover:opacity-80 duration-150'>Privacy Policy</a>
          <a href="#" className='mx-3 hover:opacity-80 duration-150'>Contract</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
