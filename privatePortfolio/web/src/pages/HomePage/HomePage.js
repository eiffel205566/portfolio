import React, { useState } from 'react'

const HomePage = () => {
  const [carouselX, setCarouselX] = useState({
    translateX: 0,
  })

  return (
    <div className="landingPageContainer min-h-screen w-screen overflow-x-hidden">
      <div className="amazingCarousel_1 fixed -z-9 h-screen w-screen"></div>
      <div
        className={`fixed flex transform transition-all -z-10 ease-linear duration-3000 -translate-x-${carouselX.translateX}`}
      >
        <div className={'amazingCarousel_2 -z-10 h-screen w-screen'}></div>
        <div className={'amazingCarousel_2a -z-10 h-screen w-screen'}></div>
      </div>

      <div className="amazingCarousel_3 fixed -z-10 h-screen w-screen"></div>
      <div className="amazingCarousel_4 fixed -z-10 h-screen w-screen"></div>
      <div className="amazingCarousel_5 fixed -z-10 h-screen w-screen"></div>
      {/*
        <div
          className={`amazingCarousel_2 fixed -z-10 h-screen w-screen transform transition-all ease-linear duration-3000 translate-x-${carouselX.translateX}`}
        ></div>
      transform transition-all duration-500 ease-in-out
       */}

      <section
        onClick={() => {
          setCarouselX((state) => {
            return {
              ...state,
              translateX: '1/2',
            }
          })
          console.log(carouselX.translateX)
        }}
        className="placeholder h-screen w-screen -z-10"
      ></section>
      <Placeholder color="bg-gray-300 z-10" />
      <Placeholder color="bg-gray-400 z-10" />
      <Placeholder color="bg-gray-500 z-10" />
      <Placeholder color="bg-gray-300 z-10" />
      <Placeholder color="bg-gray-400 z-10" />
      <Placeholder color="bg-gray-500 z-10" />
      <Placeholder color="bg-gray-300 z-10" />
      <Placeholder color="bg-gray-400 z-10" />
      <Placeholder color="bg-gray-500 z-10" />
      <Placeholder color="bg-gray-300 z-10" />
      <Placeholder color="bg-gray-400 z-10" />
      <Placeholder color="bg-gray-500 z-10" />
      <Placeholder color="bg-gray-300 z-10" />
      <Placeholder color="bg-gray-400 z-10" />
      <Placeholder color="bg-gray-500 z-10" />
      <Placeholder color="bg-gray-300 z-10" />
      <Placeholder color="bg-gray-400 z-10" />
      <Placeholder color="bg-gray-500 z-10" />
      {/*
      
       */}
    </div>
  )
}

export default HomePage

const Placeholder = ({ color }) => {
  return <div className={`h-40 ${color} mx-auto text-center w-full`}>xxxx</div>
}
