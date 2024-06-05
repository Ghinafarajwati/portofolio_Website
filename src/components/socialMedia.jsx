import React from 'react'
import socialMedia from '../assets/data/socialMediaData.jsx'

const SocialMedia = () => {
  return (
    <div className="flex flex-col top-[35%] left-0 fixed z-50">
      <ul>
        {socialMedia.map(({id, child, href, style, download}) => (
          <li key={id} className={'flex justify-between items-center w-[9rem] h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-gray-200 to-purple-700 rounded-full' + style}>
          <a href={href} download={download} target='_blank' rel='noreferrer' className='flex justify-between items-center w-full text-white'>{child}</a>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialMedia
