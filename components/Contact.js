import React, { useState } from 'react'
import { sendMail } from '../functions/sendemail'
import Card from './Card'

const Contact = () => {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[message,setMessage] = useState("")
    const [success,setSuccess] = useState(false)
    const [error,setError] = useState(false)
    const[process,setProcess] = useState(false)
    const sendEmail = async (e) => {
        e.preventDefault()
        setProcess(true)
        const res = await sendMail(name,email,message)
        setProcess(false)
        if(res){
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 10000);
        }
        else{
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 10000);
        }

    }

    return (
        <section id="contact" className='mt-12 px-6 md:px-0'>
            <h2 className='text-2xl font-[600]'>Contact Me</h2>
            <div className='mt-3 pb-5 flex flex-col md:flex-row gap-6 items-center justify-between'>
                <Card type = "Container">
                <form className='w-full space-y-3'>
                    <div className='flex inputContainer flex-col gap-2'>
                        <label htmlFor="Name" className='text-sm'>Name*</label>
                        <input value={name} onChange = {(e)=>setName(e.target.value)} type="text" name="Name" id="Name" required className='formInput' />
                    </div>
                    <div className='flex inputContainer flex-col gap-2'>
                        <label htmlFor="Email" className='text-sm'>Email*</label>
                        <input value={email} onChange = {(e)=>setEmail(e.target.value)} type="email" name="Email" id="Email" required className='formInput' />
                    </div>
                    <div className='flex inputContainer flex-col gap-2'>
                        <label htmlFor="Message" className='text-sm'>Message*</label>
                        <textarea value={message} onChange = {(e)=>setMessage(e.target.value)} name="Message" id="Message" required className='formInput h-[90px]' />
                    </div>
                    <Card type = "Container">
                        <button disabled = {process?true:false} onClick={sendEmail} className = "disabled:opacity-50" type="submit">
                            <p className={`${success || error?"text-[0px]":"text-lg"} transitionaAll `}>Send</p>
                            <p className={`${success?"text-lg":"text-[0px]"} transitionAll`}>Thank You! Your message is sent</p>
                            <p className={`${error?"text-lg":"text-[0px]"} transitionAll`}>Oops! Some error occured</p>
                        </button>
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