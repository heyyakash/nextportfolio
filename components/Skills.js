import React from 'react'
import SkillBox from './SkillBox'
import {SiTailwindcss} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'

const Skills = () => {
  return (
    <div className='mt-[9rem] flex gap-[5rem]'>
        <div className="w-[600px]">
          <img src="https://mixpanel.com/wp-content/uploads/2021/05/Data-Stack-Hero-Census-Blog-1100x616.png" className='object-cover h-[500px]' alt="" />
        </div>
        <div className=''>
          <h1 className='text-[6rem] leading-[6rem]'>What Do I Help With?</h1>
          <p className='m-2'>My Tech Stack Includes :</p>
          <div className='flex gap-5'>
            <SkillBox icon={<AiFillHtml5 />} text = "HTML" color = "text-red-500" />
            <SkillBox icon={<DiCss3 />} text = "CSS" color = "text-yellow-500" />
            <SkillBox icon={<SiJavascript />} text = "JS" color = "text-yellow-300" />
            <SkillBox icon={<FaReact />} text = "ReactJS" color = "text-blue-500" />
            <SkillBox icon={<SiTailwindcss />} text = "Tailwind" color = "text-blue-500" />
          </div>
        </div>
    </div>
  )
}

export default Skills