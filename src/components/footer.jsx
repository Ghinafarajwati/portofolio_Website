import React from 'react'

const year = new Date().getFullYear()
const Footer = () => {
  return (
    <div className='flex justify-center xl:py-16 md:py-8 bg-black'>
      <p className='font-roboto text-yellow'>Copyright {year} develop by GHINA FARAJ</p>
    </div>
  )
}

export default Footer
