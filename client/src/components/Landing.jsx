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
        {/* Members */}
        <div className='text-lg md:text-2x1 lg:text-3x1 py-2 px-4 md:py-4 md:px-10 1g:py-6 1g:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full'>
          3,929,876 members
        </div>

        {/* Form */}

        <form
          action='https://www.getrevue.co/profile/business-pro/add_subscriber'
          method='post'
          id='revue-form'
          name='revue-form'
          target='_blank'
        >
          <div className='flex flex-col md:flex-row justify-center mb-4'>
            {/* <label for='member_email'>Email address</label> */}
            <input
              className='revue-form-field'
              placeholder='Your email address...'
              type='email'
              name='member[email]'
            />
          </div>
          <div className='revue-form-actions'>
            <input
              type='submit'
              value='Join today'
              name='member[subscribe]'
            />
          </div>
          <div className='opacity-75 italic'>
            By subscribing, you agree with Revue’s{' '}
            <a target='_blank' href='https://www.getrevue.co/terms'  className='hover:opacity-80 duration-150'>
              Terms of Service
            </a>{' '}
            and{' '}
            <a target='_blank' href='https://www.getrevue.co/privacy' className='hover:opacity-80 duration-150'>
              Privacy Policy
            </a>
            .
          </div>
        </form>
      </main>

      <footer className='container mx-auto p-6 flex flex-col md:flex-row items-center justify-between text-white'>
        <p>Built with ReactJS &amp; Tailwind &bull; by WMouton</p>

        <div className='flex -mx-6'>
          <a href='#' className='mx-3 hover:opacity-80 duration-150'>
            About Us
          </a>{' '}
          |
          <a href='#' className='mx-3 hover:opacity-80 duration-150'>
            Privacy Policy
          </a>{' '}
          |
          <a href='#' className='mx-3 hover:opacity-80 duration-150'>
            Contract
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
