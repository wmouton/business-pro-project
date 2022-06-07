import React from 'react';

const Landing = () => {
  return (
    <div className='min-h-screen flex flex-col text-white'>
      <main className='container mx-auto px-6 pt-16 flex-1 text-center'>
        <h2 className='text-2x1 md:text-4x1 1g:text-6x1 uppercase'>
          Welcome to
        </h2>
        <h1 className='text-3x1 md:text-6x1 1g:text-8x1 font-black uppercase mb-8'>
          Business Pro
        </h1>
      </main>
      <footer className='container mx-auto p-6 flex flex-col md:flex-row items-center justify-between text-white'>
        <p>Built with ReactJS &amp; Tailwind &bull; by WMouton</p>
        <div>
          <a href="#" className='mx-3 hover:opacity-80 duration-150'>About Us</a> | 
          <a href="#" className='mx-3 hover:opacity-80 duration-150'>Privacy Policy</a> | 
          <a href="#" className='mx-3 hover:opacity-80 duration-150'>Contract</a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
