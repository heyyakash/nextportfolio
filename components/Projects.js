import React from 'react'
import Card from './Card'
import data from '../JSON/github.json'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Projects = () => {
    return (
        <section id="projects" className='mt-12 px-6 flex flex-col md:px-0'>
            <h2 className='text-2xl font-[600]'>Selected Projects</h2>
            <div className='mt-3 grid md:grid-cols-3 grid-rows-4 grid-cols-1 gap-6 md:grid-rows-2'>
                {data.map((file, index) => {
                    return (
                        <Card key={index} type="Container">
                            <div className=' relative flex flex-col'>
                                <img src={file?.Image} alt="image" className='w-full h-[138px] rounded-sm outline-dotted  outline-offset-4 outline-black  dark:outline-white/30' />
                                {/* <a rel="noopener noreferrer" href="https://github.com/heyyakash"><img src={file?.AVATAR} alt="githubprofile" className='gitprofile' />
                                </a> */}

                            </div>
                            
                            <div className='mt-6'>
                                    <h2 className='text-md font-semibold'>{file?.Name}</h2>
                                    <p>{file?.About}</p>
                                </div>
                            <div className='flex gap-2 mt-auto'>
                                <Card type="Container">
                                    <a href={file?.GithubLink} className="text-sm flex items-center justify-center" rel="noopener noreferrer" target="_blank">Github
                                        <FiArrowUpRight className='mt-[.05rem]' /></a>
                                </Card>
                                <Card type="Container">
                                    <a href={file?.Link} className="text-sm flex items-center  justify-center" rel="noopener noreferrer" target="_blank">App
                                        <FiArrowUpRight className='mt-[.05rem]' /></a>
                                </Card>

                            </div>
                        </Card>
                    )
                })}
            </div>
            <a href="https://github.com/heyyakash" rel="noopener noreferrer" target="_blank" className='mt-3 flex items-center gap-1 dark:text-white text-black'>Wanna see more ? <AiOutlineArrowRight className="dark:text-white" /></a>
        </section>
    )
}

export default Projects