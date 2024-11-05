import React, { useEffect } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import OnImgTxt from '../components/OnImgTxt'
import { Link, useLocation } from 'react-router-dom';
import Comment from '../components/Comment';

function BlogDetail() {


  const location = useLocation()
  const { data } = location.state || {};

  const LatestTechnologyData = [
    { url: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-technology-news-image-1.jpg", title: "This Will Fundamentally Change the Way You Look at Technology" },
    { url: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-technology-news-image-2.jpg", title: "Technology Changed My Life. Here's My Story" },
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (


    <>
      {/* Dynamic Data Goes in This Div*/}
      <div className=' max-w-screen-lg  mx-auto p-28 mt-20 bg-zinc-200'>
        {data ? (
          <>
            <img className='m-auto' src={data.url} alt="" />
            <Link className=' mt-5 text-blue-600' to="MustRead">Leave a Comment/ {data.link}</Link>

            <h1 className='text-2xl mt-5 font-[Lora] font-medium'>{data.title}</h1>
            <h2 className='mt-10 text-xl font-[Lora]'></h2>
            <p className='mt-5 '>In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet.</p>
          </>
        ) : ("data is not available")}

        <p className='mt-5 '>Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus non arcu suspendisse ac nibh tortor, eget elementum lacus, libero sem viverra elementum.</p>
        <p className='mt-8 border-l-4 border-zinc-50 pl-8'>Nulla pharetra, massa feugiat nisi, tristique nisi, adipiscing dignissim sit magna nibh purus erat nulla enim id consequat faucibus luctus volutpat senectus montes.
          <p className='mt-5'>Lorem Ipsum</p>
        </p>
        <h1 className='mt-5  text-xl font-semibold'>Magna enim, convallis ornare
        </h1>
        <p className='mt-5'>Sollicitudin bibendum nam turpis non cursus eget euismod egestas sem nunc amet, tellus at duis suspendisse commodo lectus accumsan id cursus facilisis nunc eget elementum non ut elementum et facilisi dui ac viverra sollicitudin lobortis luctus sociis sed massa accumsan amet sed massa lectus id dictum morbi ullamcorper.</p>
        <p className='mt-3'>Morbi ut viverra massa mattis vitae blandit ut integer non vestibulum eros, diam in in et hac mauris maecenas sed sapien fermentum et eu.</p>

      </div>
      <div className='mt-12 max-w-screen-lg  mx-auto p-24 bg-zinc-200'>

        <h1 className='text-4xl font-semibold'>Must Read</h1>

        <div className='flex gap-2 mt-5'>
          {LatestTechnologyData.map((elem, index) => (
            <>
              <div key={index} className='w-[50%] h-[50vh] '>
                <img className='h-full w-full object-cover' src={elem.url} alt="" />
                <h1 className='text-xl font-[Lora]'>The Incredible Stock Market Product I Can’t Live Without</h1>
                <Link key={index} className='text-blue-600' to="MustRead">Must Read</Link>
              </div>
            </>
          ))}
        </div>


      </div>
      <div className='mt-10'>
        <Comment />

      </div>
    </>
  )
}

export default BlogDetail