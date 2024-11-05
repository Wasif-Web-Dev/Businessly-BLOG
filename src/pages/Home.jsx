import React from 'react'
import OnImgTxt from '../components/OnImgTxt'
import SubmitButton from '../components/SubmitButton'
import { FaArrowRightLong } from "react-icons/fa6";
import ThreeCardsSec from '../components/ThreeCardsSec';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


function Home() {
  const HeroRightData = [
    { url: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-news-image-2.jpg", link: "Technology", title: "Want a Career in Technology? Make This Your Secret Weapon", Date: "June 28, 2021" },
    { url: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-news-image-3.jpg", link: "Health", title: "The Health Industry Is Changing Fast. Here’s How to Keep Pace", Date: "June 28, 2021" },
    { url: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-news-image-4.jpg", link: "Style|GenZ", title: "Everything You Ever Wanted to Know About Technology", Date: "June 28, 2021" }
  ]

  const EditorPicks = [
    { title: "The Frightening Affect of Climate Change on Government", upper: "Politics" },
    { title: "The Ultimate Guide to Stock Market", upper: "Stock Market" },
    { title: "Don’t Share This Politics Insider Secret", upper: "Politics" },
    { title: "All Your Burning Technology Questions, Answered", upper: "Technology" },
    { title: "15 Unbelievable Things You Never Knew About Stock Market", upper: "Stock Market" },
    { title: "Automobile: All the Stats, Facts, and Data You’ll Ever Need to Know", upper: "Automobile" },
  ]

  const StockMarkertData = [
    { url: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-stock-market-news-image-1.jpg", title: "What Your Relationship With Stock Market Says About You", date: "akbarh June 28, 2021", desc: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ..." },
    { url: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-stock-market-news-image-2.jpg", title: "How I Learned to Stop Worrying and Love Stock Market", date: "akbarh June 28, 2021", desc: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ..." },
    { url: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-stock-market-news-image-3.jpg", title: "Why Stock Market Affects Men and Women Differently", date: "akbarh June 28, 2021", desc: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ..." },
  ]

  const Politscs = [
    { url: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-politic-news-image-1.jpg", title: "The Joy, Comfort, and Stress-Reducing Power of Politics", desc: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ..." },
    { url: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-politic-news-image-2.jpg", title: "What Politics Says About Your Personal Style", desc: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ..." },
    { url: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-politic-news-image-3.jpg", title: "8 Surprising Ways Politics Can Affect You", desc: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ..." },
  ]

  const LatestTechnologyData = [
    { url: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-technology-news-image-1.jpg", title: "This Will Fundamentally Change the Way You Look at Technology" },
    { url: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-technology-news-image-2.jpg", title: "Technology Changed My Life. Here’s My Story" },
  ]

  const automobile = [
    { url: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-editor-pick-img-6.jpg", title: "Automobile: All the Stats, Facts, and Data You’ll Ever Need to Know", desc: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet …", head: "AutoMobile" },
    { url: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-health-news-image-1.jpg", title: "The Top 11 Traits Health Ceos Have in Common", desc: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet …", head: "Health" },
    { url: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-automobile-news-image-2.jpg", title: "How Millennials Are Disrupting Automobile", desc: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, ...", head: "Health" },
    { url: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-health-news-image-2.jpg", title: "15 Counterintuitive Tips for Crushing Your Health Goals", desc: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, ...", head: "Health" },
  ]

  return (<>
    {/* <Navbar /> */}

    <div className='max-w-screen-xl mx-auto  h-full mt-12 font-[Lora] font-semibold px-8'>
      {/* front page content */}
      <div className='Hero flex items gap-5 border-b-2 border-[#9FA0AC] pb-10 '>
        <Link  to="/BlogDetails" className='overflow-hidden w-[50%] h-[67vh] relative'>
          <img className=' w-[100%] h-[100%]  object-cover ' src="https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-news-image-1.jpg" />
          <span className='absolute bottom-2 left-4 text-white'>
            <OnImgTxt title="15 Shocking Elon Musk Tweets About Stock Market" />
          </span>
        </Link>
        {/* Hero Right Data div */}
        <div className='w-[50%] h-[25vh] '>
          {HeroRightData.map((elem, index) => (
            <Link 
              to="/BlogDetails" // Adjust this route according to your setup
              state={{ data: elem }} // Pass the clicked item as state
              key={index}
              className='Hero-right overflow-hidden mt-4 flex items-center gap-5'
            >
              <div className='h-[20vh] w-full'>
                <img className='w-full h-full object-cover' src={elem.url} alt="" />
              </div>
              <div className='w-50% h-full'>
                <button className='px-1 bg-zinc-600 text-white'>{elem.link}</button>
                <h1 className='text-2xl w-[90%] leading-6'>{elem.title}</h1>
                <span className='text-'>June-18-2024</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Some links under hero Section */}
      <div className='editorsPick mt-8 flex overflow-hidden'>
        {EditorPicks.map((elem, index) => (



          <div className='w-52'>
            <h2 className='text-zinc-400'>Editors pick | {elem.upper}
              <h1 className='w-52 text-md text-zinc-950'>{elem.title}</h1>

            </h2>
          </div>
        ))}
      </div>

      {/* NewsLetter Under Hero Links */}
      <div className='subscrib/NewsLetter  mt-20 flex text-black'>
        <div className='img w-[70%]'><img src="https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/07/business-blog-wide-promo-banner.jpg" alt="" /></div>

        <div className='Email w-[40%] bg-zinc-100 p-5 flex flex-col items-start justify-between'>
          <h1 className='text-xl font-semibold'>Subscribe To Our Newsletter</h1>
          <h2 className='font-sans font-normal'>Egestas eu molestie lacus, rhoncus, gravida aliquet sociis vulputate faucibus tristique odio</h2>
          <div className='flex gap-2'><input className='w-[15vw] p-2 font-normal font-sans' type="email" name="Email Address" id="NewsLetter-Mail" placeholder='Email Address' /> <SubmitButton /></div>
        </div>

      </div>


      {/* Starting Stock Market section */}
      <ThreeCardsSec data={StockMarkertData} SectionTitle="Stock Market" />

      {/* Starting Latest Technology Div */}
      <div className='mt-12'>
        <div className='headingDiv flex items-center justify-between'>
          <h1 className='text-4xl font-semibold'>Latest Technology</h1>
          <h2 className='flex item-center gap-2'>View All <span className='flex items-center'><FaArrowRightLong /></span></h2>
        </div>
        <div className='flex gap-2 mt-5'>
          {LatestTechnologyData.map((elem,index) => (
            <div key={index} className='w-[50%] h-[50vh] overflow-hidden relative'>
              <img className='h-full w-full object-cover' src={elem.url} alt="" />
              <Link to="/BlogDetails" state={{data:elem}} key={index}  className='absolute left-2 bottom-0 text-white'>
                <OnImgTxt
                  title={elem.title}
                />
              </Link>
            </div>
          ))}

        </div>

      </div>

      {/* STARTING POLITICS SECTION */}
      <ThreeCardsSec data={Politscs} SectionTitle="Politics" />


      {/* four cards section */}
      <div className='cards justify-between flex flex-wrap'>
        {automobile.map(elem => (
          <div className='h-[40%] w-[49%] mt-12 mb-5 '>

            <div className='headingDiv flex items-center justify-between'>
              <h1 className='text-4xl font-semibold'>{elem.head}</h1>
              <h2 className='flex item-center gap-2'>View All <span className='flex items-center'><FaArrowRightLong /></span></h2>
            </div>


            <div className=''>

              <div className='img-sec'><img className='w-full' src={elem.url} alt="" /></div>
              <div className='box-text mt-6'>
                <h1 className='text-2xl'>{elem.title}</h1>
                <h2 className='font-normal font-sans mt-3'>akbarh June 28, 2021</h2>
                <h3 className='font-normal font-sans mt-3'>{elem.desc}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}
export default Home