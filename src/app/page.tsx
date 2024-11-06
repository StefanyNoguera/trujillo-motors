"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function Home() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleClickCatalog = () => {
    const element = document.getElementById('catalog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickCar = () => {
    const element = document.getElementById('find-car');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    // Clear the form fields
    if (!name || !email || !message) {
      setError('All fields must be filled out.');
      return;
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // If all validations pass, show modal and clear error
    setError('');

    setShowModal(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll">
      <div className="snap-start h-screen bg-gray">
        <div className='flex justify-between pl-7'>
          <div className='relative h-20 w-24 md:h-24 md:w-28 lg:w-36'>
            <Image
              src="/logo.png"
              layout="fill"
              objectFit="contain"
              alt="Logo"
            />
          </div>
          <div className='flex items-top pt-4 md:pt-3 pr-5'>
            <h3 className='md:p-4 p-2 text-xl md:text-2xl'>
              <button onClick={handleClickCatalog} className='text-beige'>Catalog</button>
            </h3>
            <h3 className='md:p-4 p-2 text-xl md:text-2xl'>
              <button onClick={handleClickCar} className='text-beige'>Find your Car</button>
            </h3>
            <h3 className='md:p-4 p-2 text-xl md:text-2xl'>
              <button onClick={handleClickContact} className='text-beige'>Contact</button>
            </h3>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center text-center pt-32 md:pt-20 lg:pt-6'>
          <h1 className="text-beige break-sm break-md break-lg">
            The Parts You Need.
          </h1>
          <h4 className='text-f-dark-gray break-title-sm break-title-md break-title-lg md:text-2xl lg:text-3xl pb-12 pt-3'>
            Discover premium parts for every make
          </h4>
          <h4 className='text-beige bg-red p-3 px-4'>
           Find Your Part
          </h4>
        </div>
        <div className="relative w-full h-3/5 overflow-hidden">
          <Image
            src="/carro-sm.png"
            layout="fill"
            objectFit="cover"
            alt="Carro"
            className="pb-32"
          />
        </div>
      </div>

      <div className="snap-start h-screen bg-f-light-gray" id='catalog'>

      </div>

      <div className="snap-start h-screen bg-gray" id='find-car'>
      </div>

      <div className="snap-start h-screen bg-f-light-gray flex flex-col" id='contact'>

        <div className='flex items-center justify-center'>
          <div className='text-gray lg:w-2/6 md:w-3/5 w-4/5'>
            <h1 className='lg:pb-12 lg:pt-24 md:pt-28 md:pb-12 pt-32 pb-9'>Contact us</h1>
            <div>
              <h4>Your Name</h4>
              <input
                type="text"
                className='w-full text-gray border-b border-gray bg-transparent mb-4 p-2 focus:outline-none'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <h4>Email Address*</h4>
              <input
                type="text"
                className='w-full text-gray border-b border-gray bg-transparent mb-4 p-2 focus:outline-none'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h4>Your Message</h4>
              <textarea
                className='w-full text-gray border-b border-gray bg-transparent mb-4 p-2 focus:outline-none'
                rows='4'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {/* Show error message */}
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className='flex justify-end'>
                <button className='text-beige bg-red p-3 px-4' onClick={handleSubmit}>
                  <h4>Send Now</h4>
                </button>
              </div>
            </div>
          </div>
        </div>




        <div className='flex justify-between flex-grow items-end px-5 lg:px-9 md:px-7'>
          <div className='relative h-20 w-24  md:h-24 md:w-28 lg:w-36'>
            <Image
              src="/logo-white.png"
              layout="fill"
              objectFit="contain"
              alt="Logo"
            />
          </div>

          <div className='lg:flex lg:py-9 md:py-6 py-5'>
            <h4 className='text-right lg:pr-6'>Privacy Policy</h4>
            <h4 className='text-right'>Terms and Conditions</h4>
          </div>
        </div>
      </div>
      {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
              <h3 className="text-lg font-bold text-green-500 mb-4">Message Sent!</h3>
              <p>Your message has been successfully sent. We'll get back to you shortly.</p>
              <div className="mt-8">
                <button
                  className="text-beige bg-red p-2 px-6 rounded-md"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
