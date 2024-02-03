import React from 'react'

const TabData = [
    {
        title:"educations",
        id:"educations",
        content: (
            <div className='mt-16 md:mt-0 md:ml-[10rem] ml-[3rem] border-l pl-[2rem] py-5'>
                <div className='flex flex-col mb-5 md:ml-[45px]'>
                <h1 className='text-2xl md:mb-1'>Altera Academy</h1>
                <p className='text-md font-semibold mb-2'>React JS Front-End Developer </p>
                <p className='text-md p-1 w-[7rem] bg-gradient-to-r from-gray-500 to-gray-700 hover:bg-blue rounded-full text-center'>2022-2022</p>
                </div>
                <div className='flex flex-col mb-5 md:ml-[45px]'>
                <h1 className='text-2xl md:mb-1'>Skilvul</h1>
                <p className='text-md font-semibold mb-2'>Fullstack Developer </p>
                <p className='text-md p-1 w-[7rem] bg-gradient-to-r from-gray-500 to-gray-700 hover:bg-blue rounded-full text-center'>2021-2022</p>
                </div>
                <div className='flex flex-col mb-5 md:ml-[45px]'>
                <h1 className='text-2xl md:mb-1'>Universitas Negeri Malang</h1>
                <p className='text-md font-semibold mb-2 mb-2'>[GPA: 3.67]</p>
                <p className='text-md p-1 w-[7rem] bg-gradient-to-r from-gray-500 to-gray-700 hover:bg-blue rounded-full text-center'>2019-2021</p>
                </div>
            </div>
        )
    },
    {
        title: 'certificate',
        id:'certificate',
        content: (
            <div className='mt-16 md:mt-0 md:ml-[10rem] ml-[3rem] border-l py-5'>
                <div className='flex flex-col mb-5 md:ml-[45px]'>
                <ul>
                    <a href='https://skilvul.com/challenges/serrum-platform-remedial/student/ckrmt0hmi3zqt0722fdu8jf3i' target='_blank' rel="noreferrer"><li className='text-lg text-white hover:text-yellow'>- Skilvul Bootcamp [Kampus Merdeka]</li></a>
                    <a href='https://drive.google.com/file/d/1hrkTQl87AlXUyRNEn7cspDYPLF3oFmmd/view?usp=sharing' target='_blank' rel="noreferrer"><li className='text-lg text-white hover:text-yellow'>- Alterra Bootcamp [Kampus Merdeka]</li></a>
                    <a href='https://drive.google.com/file/d/1_6qIX-9a9SVhcyL4LmuE8gOd8wrSdeK-/view?usp=sharing' target='_blank' rel="noreferrer"><li className='text-lg text-white hover:text-yellow'>- Sanbercode UI/UX</li></a>
                    <a href='https://drive.google.com/file/d/1_nU32qP6UXRYuqmrN6w-m3kdGO67fQnr/view?usp=sharing' target='_blank' rel="noreferrer"><li className='text-lg text-white hover:text-yellow'>- Inspiration Factory Foundation [Humanitarian organization for children]</li></a>
                </ul>
                </div>
            </div>
        )
    }
]

export default TabData
