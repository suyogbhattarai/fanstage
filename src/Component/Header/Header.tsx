import React from 'react'
import { DownOutlined, } from '@ant-design/icons';
import { Button, Dropdown, Space, } from 'antd';
import type { MenuProps } from 'antd';
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx"; 
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"

function Header() {

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
      <div className="py-5 px-10 border-b-[2px] border-b-gray-400 ">
        <div className='flex items-center justify-between gap-[7vw] '>

      <div className="flex items-center gap-4">
        <RxHamburgerMenu className='text-[28px] cursor-pointer md-hidden' />

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
          <IoIosSearch  className=' text-[black] text-[28px]  bg-[#FEFDFE] cursor-pointer rounded-full p-1 xl:hidden' />

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
    </>
  )
}

export default Header