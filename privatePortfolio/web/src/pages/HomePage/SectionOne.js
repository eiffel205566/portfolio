import React from 'react'

const SectionOne = ({ carouselX, setCarouselX, handleFetch }) => {
  return (
    <section className="sectionOneContainer h-screen w-screen -z-10 flex flex-col justify-center">
      <nav
        className={`navbar${
          carouselX.showNavbar ? '' : '_top'
        } h-14 w-full bg-gray-500 bg-opacity-80 fixed top-0 z-30 transform transition-all duration-500 ease-in-out`}
      >
        <div className="navbuttonContainer w-48 sm:w-96 h-full mx-auto flex">
          <a
            href="#landingPageContainer"
            className={`text-${
              carouselX.showNavbar ? 'gray-100' : 'transparent'
            } text-lg sm:text-2xl hover:text-green-300 love text-center h-full flex flex-col justify-center w-14 mx-auto cursor-pointer`}
          >
            <span className="">Home</span>
          </a>
          <a
            href="#sectionTwo"
            className={`text-${
              carouselX.showNavbar ? 'gray-100' : 'transparent'
            } text-lg sm:text-2xl hover:text-green-300 love text-center h-full flex flex-col justify-center w-14 mx-auto cursor-pointer`}
          >
            <span className="">Project</span>
          </a>
          <a
            href="#footer"
            className={`text-${
              carouselX.showNavbar ? 'gray-100' : 'transparent'
            } text-lg sm:text-2xl hover:text-green-300 love text-center h-full flex flex-col justify-center w-14 mx-auto cursor-pointer`}
          >
            <span className="">Contact</span>
          </a>
        </div>
      </nav>
      <div
        onClick={() => {
          setCarouselX((state) => {
            return {
              ...state,
              translateX: ++state.translateX,
              next: state.next === 3 ? 1 : ++state.next,
            }
          })
        }}
        className="bgUpdateButton select-none h-10 w-48 border rounded-3xl mx-auto hover:text-green-500 z-10 cursor-pointer transform transition-all duration-500"
      >
        <div className="horizontalJustifyCenterWrapper h-full flex flex-col justify-center z-10">
          <span className="love text-xl z-10 text-center">New Wallpaper</span>
        </div>
      </div>
      <div className="gray300overlay text-center h-full w-full bg-gray-300 bg-opacity-40 absolute top-0 left-0 -z-5">
        <div className="horizontalJustifyCenterWrapper h-full flex flex-col justify-center">
          <div className="welcomeMessage love text-7xl flex justify-center">
            {carouselX.displayedText.map((letter, index) => {
              if (index > 6) {
                return null
              } else {
                return <span key={index}>{letter}</span>
              }
            })}
          </div>
        </div>
      </div>
      {/*
  
   */}
    </section>
  )
}

export default SectionOne
