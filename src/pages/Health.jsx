import React from 'react'
import Category from './Category'

function Health() {
const HealthData = [
    {url:"https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-news-image-3.jpg",title:"15 Shocking Elon Musk Tweets About Stock Market",cateogry:"Stock Market",description:"Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus […]"},
    {url:"https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-health-news-image-1.jpg",title:"The Ultimate Guide to Stock Market ",cateogry:"Editors Pick, Stock Market",description:"Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"},
    {url:"https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-health-news-image-2.jpg",title:"15 Unbelievable Things You Never Knew About Stock Market",cateogry:"Editors Pick, Stock Market",description:"Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"},
    {url:"https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-health-news-image-3.jpg",title:"What Your Relationship With Stock Market Says About You",cateogry:"Stock Market",description:"Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"},
    {url:"https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-guest-posts-image-1.jpg",title:"How I Learned to Stop Worrying and Love Stock Market",cateogry:"Stock Market",description:""},
    {url:"https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-must-read-news-image-2.jpg",title:"Why Stock Market Affects Men and Women Differently",cateogry:"Stock Market",description:"Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus"},
]


  return (
    <div>
        <Category text='Health' data={HealthData}/>
    </div>
  )
}

export default Health