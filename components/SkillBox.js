import React from 'react'
import {SiTailwindcss} from 'react-icons/si'

const SkillBox = ({icon,text,color}) => {
  return (
    <div className={`w-[80px] flex flex-col transitionAll ${color} bg-white drop-shadow-xl hover:filter-none p-2 cursor-pointer`}>
        <div className="flex-grow grid place-items-center h-[60px] text-xl">
            {/* <SiTailwindcss /> */}
            {icon}
        </div>
        <div className='grid place-items-center'>
          <p className="text-xs ">{text}</p>
        </div>
    </div>
  )
}

export default SkillBox