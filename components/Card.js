import React, { useEffect, useRef, useState } from 'react'

const Card = () => {
    const [show, setShow] = useState(false)
    const boxRef = useRef(null)
    const [mousePos, setMousePos] = useState({});
    useEffect(() => {
        const handleMouseMove = (event) => {
            let rect = boxRef.current.getBoundingClientRect()
            setMousePos({ x: event.clientX -rect.left-20, y: event.clientY -rect.top-20 });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);
    console.log(mousePos)
    return (
        <div ref = {boxRef} className='relative p-[0.025px] overflow-hidden mt-4 rounded-xl' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>

            <div style = {{top:mousePos.y.toString()+'px',left:mousePos.x.toString()+'px'}} className={`absolute ${show ? "" : "hidden"} rounded-full h-[100px] w-[100px] bg-gradient-to-br from-[#c471f2] to-[#028cf3]`}></div>

            <div className='bg-white/70 dark:bg-black/30 flex flex-col w-full cursor-pointer h-full relative backdrop-blur-[50px]  p-4 transition-all drop-shadow-lg rounded-xl'>
                <h1 className='text-2xl font-[550]'>Creating H.care : A healthcare dashboard</h1>
                <p className='mt-auto'>29th January</p>
            </div>
        </div>
    )
}

export default Card