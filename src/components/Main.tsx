import React, { useEffect } from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Main = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <main className='flex flex-col-reverse md:grid grid-cols-2 gap-7 mt-4 mx-auto w-3/4'>

        <div className='flex justify-center items-center'>
          <img src="./image/fot03.png" alt="LOGO DELFIN" className='w-[500px] h-[350px] object-cover' />
        </div>

        <div className='flex flex-col justify-center items-start order-2 md:order-none'  data-aos="fade-right">
          <p className='mb-3 font-mono text-cyan-500'>Aportaciones</p>
          <p className='md:text-xl tracking-tighter'>Despertar el interés de los estudiantes por la ciencia y la tecnología.
            Contribuir en su desarrollo personal, académico y cultural.
            Fortalecer la cultura científica de nuestros estados, regiones y país.</p>
        </div>

        <div className='flex flex-col justify-center items-start' data-aos="fade-right"> 
          <p className='mb-3 font-mono text-cyan-500'>Consiste</p>
          <p className='md:text-xl tracking-tighter'>El Verano de la Investigación Científica y Tecnológica del Pacífico, consiste en una estancia de siete semanas, en la que participan estudiantes de licenciatura del cuarto semestre en adelante, con promedio mínimo general de 8.5 para todas las áreas del conocimiento.</p>
        </div>
        <div className='flex justify-center items-center order-1 md:order-none'>
          <img src="./image/fot01.jpg" alt="LOGO DELFIN" className='w-[500px] h-[350px] object-cover' />
        </div>


      </main>
    </>
  )
}


export default Main;
