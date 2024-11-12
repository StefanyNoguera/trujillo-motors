"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [currentPage, setCurrentPage] = useState(1); // for pagination
  const [screenWidth, setScreenWidth] = useState(0);
  const isLargeScreen = screenWidth >= 1024;

  const products = [
    {
      name: "Brembo High-Performance Brake Kit",
      price: "$1,200", image: "/brembo-brake-kit.webp",
      description: "Complete front and rear brake kit with Brembo’s high-performance rotors and calipers for precision stopping power."
    },
    {
      name: "EBC Stage 5 SuperStreet Brake Kit",
      price: "$780",
      image: "/ebc-brake-kit.jpg",
      description: "High-performance brake pads and rotors designed for improved braking in high-speed or heavy-load situations."
    },
    {
      name: "Akebono Ceramic Brake Pads (Set of 4)",
      price: "$380",
      image: "/akebono-brake-pads.jpg",
      description: "High-quality ceramic brake pads offering quiet, low-dust performance with excellent stopping power."
    },
    {
      name: "MagnaFlow Performance Exhaust System",
      price: "$1,050",
      image: "/magnaflow-exhaust-system.jpg",
      description: "Premium stainless steel cat-back exhaust system designed for optimized flow and enhanced horsepower."
    },
    {
      name: "Borla ATAK Axle-Back Exhaust",
      price: "$1,150",
      image: "/borla-back-exhaust.jpg",
      description: "Aggressive sound and performance gains with Borla’s premium stainless steel axle-back exhaust system."
    },
    {
      name: "Bilstein B8 Shock Absorbers (Set of 4)",
      price: "$960",
      image: "/bilstein-shock-absorbers.webp",
      description: "Heavy-duty shock absorbers engineered to improve handling and control in all driving conditions."
    },
    {
      name: "K&N Cold Air Intake",
      price: "$420",
      image: "/kn-cold-air-intake.jpg",
      description: "Premium intake system boosting horsepower and throttle response, made from high-quality aluminum and featuring washable filters."
    },
    {
      name: "Holley Sniper EFI Kit",
      price: "$1,350",
      image: "/holley-efi-kit.jpg",
      description: "Modern EFI conversion kit for classic carbureted engines, designed for better fuel economy and performance."
    },
    {
      name: "Edelbrock Supercharger Kit",
      price: "$6,000",
      image: "/edelbrock-supercharger-kit.jpeg",
      description: "Complete supercharger kit to boost horsepower and torque, engineered for maximum performance in street applications."
    },
    {
      name: "AEM Engine Management System",
      price: "$1,600",
      image: "/aem-engine-system.png",
      description: "Full standalone engine management system for precise tuning and control over high-performance engines."
    },
    {
      name: "Mishimoto Aluminum Radiator",
      price: "$460",
      image: "/mishimoto-aluminum-radiator.webp",
      description: "High-quality aluminum radiator designed for improved cooling capacity and durability under high-stress conditions."
    },
    {
      name: "Optima RedTop AGM Battery",
      price: "$350",
      image: "/optima-agm-battery.jpg",
      description: "AGM battery with high starting power, specially designed for vehicles with heavy electrical loads."
    },
  ];

  const productsPerPage = {
    lg: 8, // 8 products on large screens
    md: 4, // 4 products on medium screens
    sm: 2, // 2 products on small screens
  };

  useEffect(() => {
    // Function to update screen width
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Initial check
    handleResize();

    // Add event listener on mount
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goToNextPage = () => {
    let itemsPerPage;

    if (screenWidth >= 1024) {
      itemsPerPage = productsPerPage.lg;
    } else if (screenWidth >= 768) {
      itemsPerPage = productsPerPage.md;
    } else {
      itemsPerPage = productsPerPage.sm;
    }

    const maxPage = Math.ceil(products.length / itemsPerPage);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, maxPage));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const getVisibleProducts = () => {
    // Determine the number of products to display based on screen size
    let itemsToShow;

    if (screenWidth >= 1024) {
      itemsToShow = productsPerPage.lg;
    } else if (screenWidth >= 768) {
      itemsToShow = productsPerPage.md;
    } else {
      itemsToShow = productsPerPage.sm;
    }

    const startIndex = (currentPage - 1) * itemsToShow;
    const endIndex = startIndex + itemsToShow;
    return products.slice(startIndex, endIndex);
  };

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
      <div className="snap-start h-screen bg-gradient-to-b from-gray to-black">
        <div className="flex justify-between pl-7">
          <div className="relative h-20 w-24 md:h-24 md:w-28 lg:w-36">
            <Image
              src="/logo.png"
              layout="fill"
              objectFit="contain"
              alt="Logo"
            />
          </div>
          <div className="flex items-top pt-4 md:pt-3 pr-5">
            <h3 className="md:p-4 p-2 text-xl md:text-2xl">
              <button onClick={handleClickCatalog} className='text-beige'>Catalog</button>
            </h3>
            <h3 className="md:p-4 p-2 text-xl md:text-2xl">
              <button onClick={handleClickCar} className="text-beige">Find your Car</button>
            </h3>
            <h3 className="md:p-4 p-2 text-xl md:text-2xl">
              <button onClick={handleClickContact} className='text-beige'>Contact</button>
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center pt-32 md:pt-20 lg:pt-1">
          <h1 className="text-beige break-sm break-md break-lg">
            The Parts You Need.
          </h1>
          <h4 className="text-f-dark-gray break-title-sm break-title-md break-title-lg md:text-2xl lg:text-3xl pb-6 pt-3">
            Discover premium parts for every make
          </h4>
          <h4 className="text-beige bg-red p-3 px-4">
           <button onClick={handleClickCatalog}>Find Your Part</button>
          </h4>
        </div>
        <div className="relative w-full h-3/5 overflow-hidden">
          <Image
            src={isLargeScreen ? "/carro.png" : "/carro-sm.png"}
            layout="fill"
            objectFit="cover"
            alt="Carro"
            className="pb-32 lg:pb-24"
          />
        </div>
      </div>

      <div className="snap-start h-screen bg-f-light-gray flex flex-col" id="catalog">
        <h1 className="text-center text-gray py-10 md:py-6 lg:py-4">Your Best Parts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 px-10 lg:px-6 gap-4  flex-grow">
          {getVisibleProducts().map((product, index) => (
            <div key={index} className="p-1 text-gray">
              <div className="relative h-40 mb-4">
                <Image
                  src={product.image}
                  layout="fill"
                  objectFit="cover"
                  alt={product.name}
                />
              </div>
              <div className="flex justify-between">
                <h3 className="font-bold text-xl">{product.name}</h3>
                <p className="text-gray">{product.price}</p>
              </div>
              <p className="text-gray text-sm mt-2 line-clamp-3">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-end md:pb-2 pb-5">
          {currentPage > 1 && (
            <button
              onClick={goToPreviousPage}
              className="text-gray bg-transparent p-2 rounded-full hover:bg-gray-200"
            >
              ←
            </button>
          )}

          {currentPage * (screenWidth >= 1024 ? productsPerPage.lg : screenWidth >= 768 ? productsPerPage.md : productsPerPage.sm) < products.length && (
            <button
              onClick={goToNextPage}
              className="text-gray bg-transparent p-2 rounded-full hover:bg-gray-200"
            >
              →
            </button>
          )}
        </div>
      </div>

      <div className="snap-start h-screen bg-gradient-to-b from-gray to-black flex items-center" id="find-car">
        <div className="flex flex-col lg:flex-row-reverse lg:justify-between w-full items-center px-6 h-full">
          <div className="relative lg:w-1/2 w-[95%] lg:h-[90%] h-[57%] lg:ml-6 mt-6 lg:mt-0">
            <Image
              src="/dream-car.jpg"
              layout="fill"
              objectFit="cover"
              alt="Dream Car"
            />
          </div>

          <div className="text-beige md:w-1/2 flex flex-col items-center justify-center text-center pr-6">
            <h1 className="mb-4 break-phrase mt-7 md:mt-10 lg:mt-0"></h1>
            <h4 className="text-f-dark-gray md:text-2xl lg:text-3xl lg:pb-12 lg:pt-3">
              Let us help you find the perfect vehicle to match your needs and lifestyle.
            </h4>
            <h4 className="text-beige bg-red p-2 px-3 mt-3 lg:p-3 lg:px-4">
              <button onClick={handleClickContact}>Contact us</button>
            </h4>
          </div>
        </div>
      </div>

      <div className="snap-start h-screen bg-f-light-gray flex flex-col" id="contact">

        <div className="flex items-center justify-center">
          <div className="text-gray lg:w-2/6 md:w-3/5 w-4/5">
            <h1 className="lg:pb-12 lg:pt-24 md:pt-28 md:pb-12 pt-32 pb-9">Contact us</h1>
            <div>
              <h4>Your Name</h4>
              <input
                type="text"
                className="w-full text-gray border-b border-gray bg-transparent mb-4 p-2 focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <h4>Email Address*</h4>
              <input
                type="text"
                className="w-full text-gray border-b border-gray bg-transparent mb-4 p-2 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h4>Your Message</h4>
              <textarea
                className="w-full text-gray border-b border-gray bg-transparent mb-4 p-2 focus:outline-none"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {/* Show error message */}
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="flex justify-end">
                <button className="text-beige bg-red p-3 px-4" onClick={handleSubmit}>
                  <h4>Send Now</h4>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-grow items-end px-5 lg:px-9 md:px-7">
          <div className="relative h-20 w-24  md:h-24 md:w-28 lg:w-36">
            <Image
              src="/logo-white.png"
              layout="fill"
              objectFit="contain"
              alt="Logo"
            />
          </div>

          <div className="lg:flex lg:py-9 md:py-6 py-5">
            <Link href="/privacy-policy">
              <h4 className="text-gray text-right lg:pr-6">Privacy Policy</h4>
            </Link>
            <Link href="/terms-and-conditions">
              <h4 className="text-gray text-right">Terms and Conditions</h4>
            </Link>
          </div>
        </div>
      </div>

      {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
              <h3 className="text-lg font-bold text-green-500 mb-4">Message Sent!</h3>
              <p>Your message has been successfully sent. We"ll get back to you shortly.</p>
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
