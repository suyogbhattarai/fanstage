import React, { useState } from 'react'
import { DownOutlined, } from '@ant-design/icons';
import { Button, Dropdown, Space, } from 'antd';
import type { MenuProps } from 'antd';
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx"; 
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { IoSearchCircle } from "react-icons/io5";


import { IoIosCloseCircleOutline } from "react-icons/io";


function Header() {
  // for side menu 
  const [isOpen, setIsOpen] = useState(false);
  // for navbar slide down 
  const [isClicked,setIsClicked]=useState(false);

  const menu1Items: MenuProps['items'] = [
    {
      label: 'Cover Challenge ',
      key: '1',

    },
    {
      label: 'Instrument Challege',
      key: '2',

    },
    {
      label: 'Solo Challenge',
      key: '3',


    },
    {
      label: 'High Pitch Challenge',
      key: '4',



    },
  ];

  const menu2Items: MenuProps['items'] = [
    {
      label: 'Guitar Course ',
      key: '1',

    },
    {
      label: 'Keyboard Course',
      key: '2',

    },
    {
      label: 'Singing Course',
      key: '3',


    },
    {
      label: 'High Pitch Challenge',
      key: '4',



    },
  ];

  return (
    <>
{/* navbar code here  */}
      <div className="py-5 z-20 fixed top-0 w-full px-10 border-b-[2px] backdrop-blur-lg bg-white/1 border-b-gray-400 ">
        <div className='flex items-center justify-between gap-[7vw] '>

      <div className="flex items-center gap-4">
        <RxHamburgerMenu onClick={() => setIsOpen(true)} className='text-[28px] cursor-pointer md-hidden' />

            <img className='w-29 lg:w-34' src={logo} alt="" />
      </div>

          <div className="items-center justify-between w-full text-[12px] md:text-[12px] lg:text-[14px] hidden md:flex ">
             <div className='flex items-center gap-4 cursor-pointer'>


            <Dropdown className='border-none' menu={{ items: menu1Items }} arrow   >

              <Space>
                Challenges
                <DownOutlined />
              </Space>
            </Dropdown>
          </div>

          <div className='relative hidden xl:flex'>
            <input className='rounded-full border-[1.7px] border-gray-400 px-3 py-2 2xl:w-lg xl:w-sm ' placeholder='What do you want to learn today?'></input>
            <IoIosSearch className='absolute top-[50%] translate-[-50%] right-2 text-gray-400 text-[20px]' />

          </div>

          <li>
            <Link to={""}>
              <Dropdown className='border-none' menu={{ items: menu2Items }} arrow   >
                <Space>
                  Courses
                  <DownOutlined />
                </Space>
              </Dropdown>
            </Link>
          </li>
          <li>
            <Link to={""}>Discover</Link>
          </li>
          <li>
            <Link to={""}>Leaderboard</Link>
          </li>



          </div>
          
         <div className="flex items-center justify-between gap-[4vw]">
<IoSearchCircle onClick={()=>setIsClicked(true)} className={`text-[white] text-[38px] cursor-pointer rounded-full xl:hidden ${isClicked ? "hidden" :"flex"}`} />
<IoIosCloseCircleOutline onClick={()=>setIsClicked(false)} className={`text-[white] text-[38px] cursor-pointer rounded-full xl:hidden ${isClicked ? "flex" :"hidden"}`}/>
               <Button  style={{
            backgroundColor: '#C1411F',
            borderColor: '#C1411F',
            color: 'white',
            padding:"1px 10px",
            fontSize: "12.5px",
          
          }} variant="solid">
            Upload
          </Button>
          

         </div>
     
        </div>
      </div>
{/*  */}
{/* nav bar side menu here */}
      <div id="sidemenu" className={`h-full w-58 border-r-2 border-gray-400 md:hidden fixed top-0 left-0 z-30 backdrop-blur-lg bg-white/1 transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0 " : "-translate-x-full "
      }`}>
      <IoIosCloseCircleOutline   onClick={() => setIsOpen(false)} size={30} className='absolute right-2 top-8 cursor-pointer' />

                  <img className='mx-7 mt-8 mb-5 w-28 ' src={logo} alt="" />
                  <hr className='mx-3 my-5 text-gray-400 border-b-1 ' />

      <ul className='mx-7 my-10 flex flex-col gap-[8vh] cursor-pointer'>

      <li><Link>Home</Link></li>
        <li>
 <Dropdown className='border-none' menu={{ items: menu1Items }} arrow   >
                <Space>
                  Challenges
                  <DownOutlined />
                </Space>
              </Dropdown>
              
        </li>
        
        <li>
         <Dropdown className='border-none' menu={{ items: menu2Items }} arrow   >
                <Space>
                  Courses
                  <DownOutlined />
                </Space>
              </Dropdown>
        </li>
        <li>
      <Link >Discover</Link>
        </li>
        <li>
         <Link>Leaderboard</Link>
        </li>
        <li>
         <Link>Login</Link>
        </li>
      </ul>
      </div>
{/*  */}
{/* dropdown searchbar here  */}

<div
  id="dropdown-search"
  className={`backdrop-blur-lg xl:hidden fixed top-20  bg-white/3  h-[50px] z-10 bg-gradient-to-br from-white/20 via-white/0 to-orange-700/15 w-full transition-all duration-500 ease-in-out ${
    isClicked
      ? "translate-y-0 opacity-100 pointer-events-auto"
      : "-translate-y-full opacity-0 pointer-events-none"
  }`}
>
  <div className="flex items-center px-10 gap-5 py-3 text-gray-400">
    <p>Search:</p>
    <input
      className="w-full text-gray-400 focus:outline-0"
      placeholder="What do you want to learn today?"
    />
  </div>
</div>



    </>
  )
}

export default Header