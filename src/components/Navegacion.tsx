import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

export default function Navegacion() {
  return (
      <div className='flex justify-center items-center gap-4 md:gap-5 mt-3'>
        <a href="http://www.piedrasnegras.tecnm.mx/" target='_blank'><img src="./image/logotec.png" alt="Logo tec" className='w-16 h-16 hover:scale-110 ease-in-out duration-300 cursor-pointer opacity-70 hover:opacity-100' /> </a>
        <a href="https://programadelfin.org.mx/" target='_blank'><img src="./image/logodel.png" alt="Logo tec" className='w-[60px] h-[60px] hover:scale-110 ease-in-out duration-300 cursor-pointer  opacity-70 hover:opacity-100' /> </a>
      </div>
  );
}

