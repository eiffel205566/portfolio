import React, { Fragment, useState } from 'react'

const AmazingCarousel = () => {
  const [carouselX, setCarouselX] = useState({
    translateX: 0,
    extended: false,
  })

  return (
    <Fragment>
      <div
        className={`amazingCarouselGroup1 fixed flex transform transition-all -z-5 ease-linear duration-3000 -translate-x-${carouselX.translateX}/3`}
      >
        <div
          className={`amazingCarousel_1${
            carouselX.extended ? '_extended' : ''
          } h-screen w-screen ${carouselX.extended ? 'extended' : ''}`}
        ></div>
        <div
          className={`amazingCarousel_1a${
            carouselX.extended ? '_extended' : ''
          } h-screen w-screen ${carouselX.extended ? 'extended' : ''}`}
        ></div>
        <div className="amazingCarousel_1b h-screen w-screen"></div>
      </div>

      <div
        className={`amazingCarouselGroup2 fixed flex transform transition-all -z-8 ease-linear duration-3000 -translate-x-${carouselX.translateX}/3`}
      >
        <div className={'amazingCarousel_2 h-screen w-screen'}></div>
        <div className={'amazingCarousel_2a h-screen w-screen'}></div>
        <div className={'amazingCarousel_2b h-screen w-screen'}></div>
      </div>

      <div
        className={`amazingCarouselGroup3 fixed flex transform transition-all -z-8 ease-linear duration-3000 -translate-x-${carouselX.translateX}/3`}
      >
        <div className="amazingCarousel_3 h-screen w-screen"></div>
        <div className="amazingCarousel_3a h-screen w-screen"></div>
        <div className="amazingCarousel_3b h-screen w-screen"></div>
      </div>

      <div
        className={`amazingCarouselGroup4 fixed flex transform transition-all -z-8 ease-linear duration-3000 -translate-x-${carouselX.translateX}/3`}
      >
        <div className="amazingCarousel_4 h-screen w-screen"></div>
        <div className="amazingCarousel_4a h-screen w-screen"></div>
        <div className="amazingCarousel_4b h-screen w-screen"></div>
      </div>

      <div
        className={`amazingCarouselGroup5 fixed flex transform transition-all -z-8 ease-linear duration-3000 -translate-x-${carouselX.translateX}/3`}
      >
        <div className="amazingCarousel_5 h-screen w-screen"></div>
        <div className="amazingCarousel_5a h-screen w-screen"></div>
        <div className="amazingCarousel_5b h-screen w-screen"></div>
      </div>
    </Fragment>
  )
}

export default AmazingCarousel
