import React from 'react'
import {FiArrowUpRight} from 'react-icons/fi'

const NavLinks = ({heading,text,link,setShow}) => {
    return (
        <a href = {link} onClick={()=>setShow(false)} className='navlink'>
            <div className='flex justify-between'>
                <h4 className='text-[.85rem] font-bold'>{heading}</h4>
                <FiArrowUpRight className='mt-[.05rem]' />
            </div>
            <p className=' mt-0.5 text-[.55rem] md:hidden '>
                {text}
            </p>
        </a>
    )
}

export default NavLinks