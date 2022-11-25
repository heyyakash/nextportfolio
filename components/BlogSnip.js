import React, { useEffect, useState } from 'react'
import { getBlogs } from '../functions/fetchblog'
import Card from './Card'

const BlogSnip = () => {

  const [data,setData] = useState([])
  const arr = [0,1,2,3]

  useEffect(() => {
    getBlogs().then((res) => setData(res?.items))
  }, [])



  return (
    <div className='mt-[5rem] md:mt-4 py-3 md:px-0 px-6 flex flex-col min-h-[600px] md:min-h-[350px] gap-3'>
      <h2 className='text-2xl font-[600]'>Recent Posts</h2>
      <div className="grid md:grid-rows-1 md:grid-cols-4 grid-cols-2 grid-rows-2 gap-3 grow">
        {arr.map((post)=><Card type = "Blog" key = {post} post = {data[post] || null} />)}
      </div>
    </div>
  )
}

export default BlogSnip