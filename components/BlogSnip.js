import React from 'react'
import Card from './Card'

const BlogSnip = () => {
  return (
    <div className='mt-4 py-3 flex flex-col min-h-[350px] gap-3'>
        <h2 className='text-2xl font-[600]'>Recent Posts</h2>
        <div className="grid grid-rows-1 grid-cols-4 gap-3 grow">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default BlogSnip