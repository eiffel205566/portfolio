import React from 'react'

const SectionOne = ({ carouselX, setCarouselX }) => {
  return (
    <section className="sectionOneContainer h-screen w-screen -z-10 flex flex-col justify-center">
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
