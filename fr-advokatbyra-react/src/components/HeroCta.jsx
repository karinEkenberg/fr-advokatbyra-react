import React from 'react'

const HeroCta = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-40'>
    <p className='text-white text-[32px] text-center pt-20 pb-5'>Fastighetsrådgivarna Advokatbyrå</p>
    <h1 className='text-white text-[48px] text-center font-slab'>Din juridiska partner inom fastighetsrätt</h1>
        <button className='text-white font-semibold border-white border-2 rounded px-4 text-[18px] mx-auto mt-5 py-2 hover:bg-white hover:text-primary'>
            Kontakta oss
        </button>
    </div>
  )
}

export default HeroCta