import React from 'react'

export const Delfin = () => {
    return (
        <>
            <section className='flex flex-col-reverse justify-center md:gap-2 items-center md:grid md:grid-cols-2 mt-8 mx-auto w-2/3 md:w-5/6 lg:w-7/12 '  data-aos="zoom-out-up">

                <div className='flex justify-center items-center mt-3 md:mt-0'>
                    <img src="./image/logodel.png" className='w-1/2 md:w-3/4 lg:w-10/12 neon' alt="Logo delfin" />
                </div>

                <div>
                    <p className='mb-3 font-mono text-cyan-500'>Pretende lograr</p>
                    <li className='tracking-tighter'>Mayor experiencia al aplicar y recibir directamente conocimientos y habilidades para la investigación y desarrollo tecnológico.</li>
                    <li className='tracking-tighter'>Relaciones personales e institucionales que en el futuro fortalecen las oportunidades de formación y trabajo.</li>
                    <li className='tracking-tighter'>Identificar vocaciones científicas y tecnológicas.</li>
                    <li className='tracking-tighter'>Fortalecer los valores de vida reflejados en el desarrollo personal.</li>
                    <li className='tracking-tighter'>Fortalecer su autoestima.</li>
                    <li className='tracking-tighter'>Influir en la decisión de integrarse a programas de posgrado en el país y el extranjero.</li>
                </div>


            </section>
        </>
    )
}

export default Delfin;
