import React from 'react'
import Card from './Card'

const Contact = () => {
    return (
        <section id="contact" className='mt-12 px-6 md:px-0'>
            <h2 className='text-2xl font-[600]'>Contact Me</h2>
            <div className='mt-3 pb-5 flex flex-col md:flex-row gap-6 items-center justify-between'>
                <Card type = "Container">
                <form className='w-full space-y-3'>
                    <div className='flex inputContainer flex-col gap-2'>
                        <label htmlFor="Name" className='text-sm'>Name*</label>
                        <input type="text" name="Name" id="Name" required className='formInput' />
                    </div>
                    <div className='flex inputContainer flex-col gap-2'>
                        <label htmlFor="Email" className='text-sm'>Email*</label>
                        <input type="email" name="Email" id="Email" required className='formInput' />
                    </div>
                    <div className='flex inputContainer flex-col gap-2'>
                        <label htmlFor="Message" className='text-sm'>Message*</label>
                        <textarea  name="Message" id="Message" required className='formInput h-[90px]' />
                    </div>
                    <Card type = "Container">
                        <button type="submit">Submit</button>
                    </Card>
                </form>
                </Card>
                <Card type = "Container" style ={"backdrop-blur-[20px] dark:backdrop-blur-[40px] cursor-none"}>
                    <p className='font-[500]'>Find me</p>
                    <img src="/stencil.png" className='h-[342px] object-cover invert dark:invert-0 opacity-50 dark:opacity-20' alt="" />
                </Card>
            </div>
        </section>
    )
}

export default Contact