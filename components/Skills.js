import React from 'react'
import SkillBox from './SkillBox'
import {SiTailwindcss} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {IoLogoNodejs} from 'react-icons/io'
import {DiMongodb} from 'react-icons/di'
import Card from './Card'

const Skills = () => {
  return (
    <section id = "skills" className='mt-10 px-6 md:px-0'>
      <h2 className='text-2xl font-[600]'>Skills</h2>
      <div className='grid mt-3 gap-6 grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2'>
        <Card type = "Normal" height = "200px" icon = {<AiFillHtml5 className='text-[3rem]' />} iconText = "HTML" />
        <Card type = "Normal" height = "200px" icon = {<DiCss3 className='text-[3rem]' />} iconText = "CSS" />
        <Card type = "Normal" height = "200px" icon = {<SiJavascript className='text-[3rem]' />} iconText = "JS" />
        <Card type = "Normal" height = "200px" icon = {<FaReact className='text-[3rem]' />} iconText = "ReactJS" />
        <Card type = "Normal" height = "200px" icon = {<SiTailwindcss className='text-[3rem]' />} iconText = "TailwindCSS" />
        <Card type = "Normal" height = "200px" icon = {<TbBrandNextjs className='text-[3rem]' />} iconText = "NextJS" />
        <Card type = "Normal" height = "200px" icon = {<IoLogoNodejs className='text-[3rem]' />} iconText = "NodeJS" />
        <Card type = "Normal" height = "200px" icon = {<DiMongodb className='text-[3rem]' />} iconText = "MongoDB" />
      </div> 
    </section>
  )
}

export default Skills