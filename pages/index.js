import Head from 'next/head';
import Container from '../components/Container';
import { useEffect,useState,useLayoutEffect } from 'react';
import { Background } from '../components/Background';

export default function Home() {
  const [width,setWidth] = useState(null)
  const [dimension,setDimension] = useState({
    width:null,
    height:null
  })
  const [height,setHeight] = useState(null)  // const bodyRef = useCallback(node=>{
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setDimension({width:window.innerWidth,height:window.innerHeight})
    window.addEventListener('resize',handleResize,false)
  },[])

  useEffect(()=>{
    const mode = localStorage.getItem(mode)
    if(!mode || mode==='dark'){
      document.documentElement.classList.add('dark')
      localStorage.setItem('mode','dark')
    }
    setLoading(false)
  })

  const handleResize = ()=>{
    setDimension({width:window.innerWidth,height:window.innerHeight})
    // console.log(window.innerWidth,window.innerHeight)
  }
  if(loading){
    return(
      <div className='h-[100vh] w-full grid place-items-center'>
        <img src = "/loading.gif" className='w-[50px] h-[50px]' alt = "loading" />
      </div>
    )
  }
  return (
    <div>
      <Head>
        <title>Akash Sharma | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="author" content="Akash Sharma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='relative min-h-[100vh]'>
        <Background dimension = {dimension} />
        <Container />
      </main>
    </div>
  )
}
