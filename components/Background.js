import React from 'react'

export const Background = ({ dimension }) => {
    const { width, height } = dimension
    if (width !== null && height !== null) {
        const number = parseInt((width / 200) + 1);
        // if(number%2==0) number+=1
        Array(parseInt(number)).map(() => console.log("Hello "))
        return (
            <div className='absolute z-0 w-full inset-0 dark:bg-black'>
                {/* <div className='absolute  max-w-[1400px]  overflow-hidden inset-0 z-0 mx-auto w-[80%] py-[10rem]'>
                    <div className='relative'>
                        <div className='circle absolute z-[10] bg-[blue]'></div>
                        <div className='circle absolute z-[0] left-20 top-[3rem]'></div>
                    </div>
                </div> */}
                <div className={`w-full h-full backdrop-blur-[150px] bg-white/60 dark:bg-white/[.05] z-10 flex gap-[200px]`}>
                    {
                        [...Array(number)].map(() => <span className={`h-[${height}px] w-[.75px] bg-black/10 dark:bg-white/[.08]`}></span>)
                    }
                </div>
            </div>
        )
    }
}
``