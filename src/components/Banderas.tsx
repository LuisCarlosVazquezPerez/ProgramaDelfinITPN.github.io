import React from 'react'


export const Banderas = () => {
  
  return (
    <>
      <p className='mt-6 font-outfit text-4xl md:text-5xl lg:text-6xl text-center opacity-10 tracking-tighter'>Países Afiliados</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2' >
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <img src="./image/banderas/Mexico.png" alt="Mexico" className='w-full lg:w-[500px] h-[111px] object-cover object-center lg:object-fill' />
          <p className='font-mono -tracking-wider text-center'>México</p>
        </div>
        <div>
          <img src="./image/banderas/USA.png" alt="USA" className='w-[500px] h-[111px] object-fill ' />
          <p className='font-mono -tracking-wider text-center'>Estados Unidos</p>
        </div>
        <div>
          <img src="./image/banderas/Colombia.png" alt="Colombia" className='w-[500px] h-[111px] object-fill ' />
          <p className='font-mono -tracking-wider text-center'>Colombia</p>
        </div>
        <div>
          <img src="./image/banderas/CostaRica.png" alt="CostaRica" className='w-[500px] h-[111px] object-fill ' />
          <p className='font-mono -tracking-wider text-center'>Costa Rica</p>
        </div>
        <div>
          <img src="./image/banderas/Ecuador.png" alt="Ecuador" className='w-[500px] h-[111px] object-fill ' />
          <p className='font-mono -tracking-wider text-center'>Ecuador</p>
        </div>
        <div>
          <img src="./image/banderas/Nicaragua.png" alt="Nicaragua" className='w-[500px] h-[111px] object-fill ' />
          <p className='font-mono -tracking-wider text-center'>Nicaragua</p>
        </div>
        <div>
          <img src="./image/banderas/Peru.jpg" alt="Peru" className='w-[500px] h-[111px] object-fill ' />
          <p className='font-mono -tracking-wider text-center'>Perú</p>
        </div>
      </div>

    </>
  )
}

export default Banderas;