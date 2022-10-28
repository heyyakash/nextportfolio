import React from 'react'

export const Background = ({ dimension }) => {
    const { width, height } = dimension
    if (width !== null && height !== null) {
        const number = parseInt((width / 200) + 1);
        // if(number%2==0) number+=1
        Array(parseInt(number)).map(() => console.log("Hello "))
        return (
            <div className='absolute z-0'>
                <div className='absolute inset-0 z-0 mx-auto w-[80%] py-[10rem]'>
                    <div className='relative'>
                        <div className='circle absolute z-[10] bg-[blue]'></div>
                        <div className='circle absolute z-[0] left-20 top-[3rem]'></div>
                    </div>
                </div>
                <div style={{ height }} className={`w-full backdrop-blur-3xl bg-white/60 z-10 flex gap-[200px]`}>
                    {
                        [...Array(number)].map(() => <span className={`h-[${height}px] w-[1px] bg-black/10`}></span>)
                    }
                </div>
            </div>
        )
    }
}
``