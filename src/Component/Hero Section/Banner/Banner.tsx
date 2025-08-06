import React from 'react'
import johnrai from "../../../assets/johnrai.jpg"
import { Button } from 'antd';

function Banner() {
  return (
    <>
   
     <div
  className="p-[2px] rounded-2xl mb-10 "
  style={{
    background: "linear-gradient(30deg, rgba(255,255,255,0.2), rgba(255,255,225,0), rgba(237,72,32,0.4))",
    backgroundSize: "900% 1000%",
    animation: "borderGradientMove 5s ease infinite"
  }}
>
  <div className="rect px-10 py-10 rounded-2xl backdrop-blur-xl w-full bg-white/10 bg-gradient-to-br from-white/20 via-white/0 to-orange-700/15">
    <div className="flex gap-3 items-center items-start">
      <img className="w-8 rounded-full" src={johnrai} alt="" />
      <div className="text-[18px] md:text-[20px]">
        John Rai
        <br />
        <br />
        <p className="font-semibold text-2xl text-left md:text-3xl md:w-[90%] tracking-wider">
          Parkhirahechu High Pitch Vocal Challenge
        </p>
        <br />
        <p className="text-[15px]">3 days left</p>
        <br />
        <Button
          style={{
            backgroundColor: "#C1411F",
            borderColor: "#C1411F",
            color: "white",
            padding: "1px 10px",
            fontSize: "14.5px"
          }}
          variant="solid"
        >
          Enter Challenge
        </Button>
      </div>
      <br />
    </div>
  </div>

  {/* Inline keyframes */}
  <style>
    {`
      @keyframes borderGradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}
  </style>
</div>



    </ >
  )
}

export default Banner