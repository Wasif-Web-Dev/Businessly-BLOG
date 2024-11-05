import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function ThreeCardsSec({ data, SectionTitle }) {



    return (
        <div>
            <div className='divForMainStockMarket mt-20 border-b-2 pb-16 border-[#9FA0AC  ]'>

                <div className='headingDiv flex items-center justify-between'>
                    <h1 className='text-4xl font-semibold'>{SectionTitle}</h1>
                    <h2 className='flex item-center gap-2'>View All <span className='flex items-center'><FaArrowRightLong /></span></h2>
                </div>

                <div className='flex justify-between items-center'>


                    {data.map((elem, index) => (
                        <Link to="/BlogDetails" key={index} state={{ data: elem }} className='box w-[24vw] h-[65vh]  mt-8'>
                            <div className='box-img  h-[35vh] overflow-hidden'><img className='w-[100%] object-cover h-[100%]' src={elem.url} alt="" /></div>
                            <div className='box-text mt-12'>
                                <h1 className='text-2xl'>{elem.title}</h1>
                                <h2 className='font-normal font-sans mt-3'>{elem.date}</h2>
                                <h3 className='font-normal font-sans mt-3'>{elem.desc}</h3>
                            </div>
                        </Link>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default ThreeCardsSec