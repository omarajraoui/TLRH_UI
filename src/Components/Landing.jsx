import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import Laptop from '../Assets/laptop.jpg'
import Typed from 'react-typed';
import { useNavigate } from "react-router-dom";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';
  
const Landing = () => {
      const [nav,setNav] = useState(true)

  const handleNav = () =>{
    setNav(!nav)
  }

  let navigate = useNavigate();


  return (
    <div>
       

    <div className=' text-white'>
        <div className="max-w-[800px] mt-[-96px] w-full h-screen text-center mx-auto flex flex-col justify-center ">
            <p className='text-[#00df9a] font-bold p-2 uppercase'> Growing As a developer  </p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with SQLi</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast , Flexible tracking for </p>
                          
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'
                    strings={['Collabs','Managers','HR',]}
                    typeSpeed={150}
                    backSpeed={200}
                    loop
                     />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 mt-2 md:pl-4'>Monitor your progress to increase your chances to get promoted</p>
            <button onClick={()=>{navigate('/register', { replace: true })}} className='bg-[#00df9a] hover:bg-[#00865c]  w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        
        </div>
       
    </div>

    {/* end hero section */}

    <div className='w-full bg-white py-16 px-4' id='analytics'> 
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
      <img src={Laptop} alt="laptop pic" className='w-[500px] mx-auto my-4' />
      <div className=" flex flex-col justify-center">
        <p className='text-[#00df9a] font-bold text-center'>COLLABS DATA ANALYTICS DASHBOARD</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center pb-6'> Manage your career and progression</h1>
        <p className='text-center'>TLRH is a way to manage collabs careers , Standardize best practices within its agencies, to strengthen the quality of teams at individual and collective level. Make Human Resources management a criterion of differentiation in order to attract the best candidates and retain employees.</p>
        <button className='text-[#00df9a] hover:bg-[#191919]  w-[200px] rounded-md font-medium my-6 mx-auto  py-3 bg-black '>Get Started</button>
      </div>

        
    </div>
        
    </div>

    {/* analytics */}

    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ' id='contact'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>TLRH.</h1>
        <p className='py-4'>SQLI is a company that favors networking and promotes the mobilization of its employees on cross-functional projects.This project has just concretized this conception of management, which allows the company on the one hand to involve its employees in the management of Human Resources with a centralized and purely administrative approach.</p>
        <div className='flex justify-between md:w-[75%] md:mx-auto my-6'>
            <FaFacebookSquare size={30}  />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
    {/* end of foooter */}


        
    </div>
  )
}

export default Landing