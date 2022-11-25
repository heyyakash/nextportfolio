import React, { useEffect, useRef, useState, type, Children } from 'react'

const Card = ({ post, icon, iconText, type, height, children, style }) => {
    const [show, setShow] = useState(false)
    const boxRef = useRef(null)
    const [mousePos, setMousePos] = useState({});
    useEffect(() => {
        const handleMouseMove = (event) => {
            let rect = boxRef.current.getBoundingClientRect()
            setMousePos({ x: event.clientX - rect.left - 40, y: event.clientY - rect.top - 40 });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    return (
        <div ref={boxRef} style={{ height }} className={`relative ${type === "Container" ? "w-full" : ""} p-[.5px]  grid place-items-center overflow-hidden mt-4 rounded-xl`} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>

            <div style={{ top: mousePos?.y?.toString() + 'px', left: mousePos?.x?.toString() + 'px' }} className={`absolute ${show ? "" : "hidden"} rounded-full h-[120px] w-[120px] bg-gradient-to-br from-[#c471f2] to-[#028cf3]`}></div>
            {type === "Normal" ?
                (<>
                    <div className='bg-white/80 font-rubik grid place-items-center dark:bg-black/30  w-full cursor-pointer h-full relative backdrop-blur-[70px]  p-4 transition-all drop-shadow-lg rounded-xl'>
                        <h1 className='text-lg absolute bottom-2 left-[50%] -translate-x-[50%] font-bold'>{iconText && iconText}</h1>
                        {icon}
                        {/* <p className='mt-auto'>{post?.pubDate && post?.pubDate?.split(' ')[0]}</p> */}
                    </div>
                </>)
                :
                (<>
                </>)}

            {type === "Blog" ? (<>
                <a href={post?.link ? post?.link : "#"} target={!post ? "" : "_blank"} rel="noopenner noreferrer" className='bg-white/80 font-rubik dark:bg-black/30 flex flex-col w-full cursor-pointer h-full relative backdrop-blur-[70px]  p-4 transition-all drop-shadow-lg rounded-xl'>
                    <h1 className='text-xl md:text-2xl font-[500]'>{post?.title && post?.title}</h1>
                    <p className='mt-auto'>{post?.pubDate && post?.pubDate?.split(' ')[0]}</p>
                </a>
            </>) : (<></>)}

            {type === "Container" ? (<>
                <div className={`bg-white/80 font-rubik p-6 dark:bg-black/30 flex flex-col w-full cursor-pointer h-full relative ${style?style:"backdrop-blur-[70px]"} transition-all drop-shadow-lg rounded-xl`}>
                    {children}
                </div>
            </>) : (<>
            </>)}


        </div>
    )


}

export default Card