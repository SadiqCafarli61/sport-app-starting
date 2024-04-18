import React, { useEffect, useState } from 'react'
import url1 from '../assets/url1.jpg'
import url2 from '../assets/url2.jpg'
import url3 from '../assets/url3.jpg'
import { Link } from 'react-router-dom'
import { RiShoppingBasketFill } from "react-icons/ri";
import Aos from 'aos'
const Header:React.FC = () => {

    type HeaderLink = {
        id:string,
        url: string,
    }

    const links:HeaderLink[] = [
        {
            id:1,
            url: "Home"
        },
        {
            id:2,
            url: "About"
        },
        {
            id:3,
            url: "Posts"
        },
        {
            id:4,
            url: "Shop"
        },
        {
            id:5,
            url:"Contact"
        }
    ]

    interface Props {
        id:number,
        url:any,
        title:string,
        content:string,
        desc:string
    }
    const data:Props[] =[
        {
            id:1,
            url:url1,
            title: "Inspire Yourself",
            content: "for enjoy life",
            desc: "The theme is so flexible  It does yoga with you" 
          
        },
        {
            id:2,
            url:url1,
            title: "Flexibility",
            content: "is the key to success.",
            desc: "The theme is so flexible  It does yoga with you" 
        },
        {
            id:3,
            url:url3,
            title: "Inspire Yourself",
            content: "for enjoy life",
            desc: "The theme is so flexible  It does yoga with you" 

        }
    ]

    const [current,setCurrent] = useState<number>(0)

    useEffect(() => {
Aos.init({duration:500})
    }, [])

    
  return (
    <>
    
<div
 style={{
    backgroundImage:  ` linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${data[current].url})`
 }}
className="header__main flex   justify-center bg-fixed flex-col bg-center bg-no-repeat bg-cover">
<div style={{
    zIndex:"30"
}} className='header__section overflow-x-hidden  fixed bg-transparent w-[100%] flex items-center top-0  justify-around p-3'>
  <div className="logo mt-3">
    <span className=' text-white font-bold text-2xl'>Yoga Fit</span>
  </div>
  <div className="links mt-3">
    {
        Array.from(links).map(item => (
            <Link className=' uppercase text-white font-serif text-sm m-3' id={item.id} to= ''>{item.url}</Link>
        ))
    }
  </div>
  <button className=' loginBtn w-[120px] h-[40px] border transition-colors hover:bg-orange-600 hover:border-0 border-slate-200 rounded-md text-white font-bold text-md mt-4'>
<Link to=''>Login</Link>
</button>

  <div className="shop__login  mt-3  ">
<button className=' w-[40px]  h-[40px] border border-slate-200 m-2  rounded-md text-white font-bold flex items-center justify-center transition-colors hover:bg-orange-600 cursor-pointer'>
    <RiShoppingBasketFill />
</button>

  </div>
    </div>
    <section className=' main__home flex items-center justify-center h-[100vh]'>
        <div className="buttons">
            <button>

            </button>
        </div>
<div data-aos="fade-up"  className="main w-[600px]">
    <div className="content">
    <h5 className=' text-7xl font-bold tracking-wider text-pink-400 overflow-hidden'>{data[current].title}</h5>
    <p className=' pt-3 text-6xl text-blue-400 tracking-wider overflow-hidden'>{data[current].content}</p>
    </div>
    <div className="desc  pt-16 flex items-center">
        <button className=' uppercase w-[90px] h-[90px] bg-pink-500 rounded-full cursor-pointer text-white text-sm font-bold flex items-center justify-center'>
Book Now!
        </button>
        <p className=' w-[300px] px-3 text-slate-200 text-lg'>{data[current].desc}</p>
    </div>
   
</div>
    </section>
</div>
  
    </>
  )
}

export default Header