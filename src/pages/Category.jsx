import React from 'react'
import { Link } from 'react-router-dom'

function Category({text = 'Sock Market', data = [] }) {


    return (
        <div className='max-w-screen-xl m-auto'>
            <div className='mt-12 p-12'>
                <h1 className='text-4xl text-blue-700 font-[Lora]'>{text}</h1>
            </div>
            <div className='flex'>
                <div className='category-right w-[90%] border-r-2 '>
                   {data.map((elem,index)=>(
                     <div key={index} className='p-16 border-b-2 '>
                     <img src={elem.url} alt="" />
                     <h1 className='font-[Lora] text-2xl my-5'>{elem.title}</h1>
                     <Link className='text-blue-800' to="/">{elem.cateogry}</Link>
                     <h3 className='my-8' >{elem.description}</h3>
                     <Link className='text-blue-800 '>Learn More...</Link>
                 </div>
                   ))}
                </div>
                <div className='Category-Left w-[40%] px-12'>
                    <h1 className='text-2xl font-[Lora]'>Recent Posts</h1>
                    <p className='text-blue-500 mt-5'>15 Shocking Elon Musk Tweets About Stock Market</p>
                    <p className='text-blue-500 mt-5'>Want a Career in Technology? Make This Your Secret Weapon</p>
                    <p className='text-blue-500 mt-5'>The Health Industry Is Changing Fast. Here’s How to Keep Pace</p>
                    <p className='text-blue-500 mt-5'>Everything You Ever Wanted to Know About Technology</p>
                    <p className='text-blue-500 mt-5'>The Frightening Affect of Climate Change on Government</p>
                    <img className='my-5' src="https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-promo-news-image-2.jpg" alt="" />
                    
                </div>
            </div>
        </div>
    )
}

export default Category