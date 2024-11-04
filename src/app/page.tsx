"use client";
import Image from 'next/image';

export default function Home() {
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

      <div className="snap-start h-screen bg-beige" id='catalog'>

      </div>

      <div className="snap-start h-screen bg-gray" id='contact'>

      </div>
    </div>
  );
}
