import Letter from 'src/components/Letter'
import { v4 as uuidv4 } from 'uuid'
import { ThumbnailCarousel } from './ThumbnailCarousel'

const SectionOne = ({ carouselX, setCarouselX }) => {
  const message = carouselX.displayedText
    ? Array.from(carouselX.displayedText)
    : null

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
      <div className="horizontalJustifyCenterWrapper h-full flex flex-col justify-center w-full">
        <div
          style={{
            background:
              '-webkit-linear-gradient(right, #3f87a6, #ebf8e1, #f69d3c)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
          className="welcomeMessage love text-4xl sm:text-6xl flex justify-center"
        >
          Welcome To My Site
        </div>
        <div className="text-3xl sm:text-5xl love mx-auto">
          {message
            ? message.map((letter, index, arr) => (
                <Letter
                  key={index}
                  index={index}
                  letter={letter}
                  len={arr.length}
                  forwardSpeed={100}
                  direction={carouselX.displayedTextOrientation}
                  additionalStyle={
                    letter === 'S' ||
                    letter === 'Y' ||
                    letter === 'W' ||
                    letter === 'D' ||
                    letter === 'P'
                      ? true
                      : false
                  }
                />
              ))
            : 'I am Sean'}
        </div>
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
          className="bgUpdateButtons relative my-2 select-none h-10 w-48 border rounded-3xl mx-auto z-10"
        >
          <div className="horizontalJustifyCenterWrapper h-full flex flex-col justify-center z-10 relative cursor-pointer transform transition-all duration-500 hover:text-green-500">
            <span className="love text-xl z-10 text-center">New Wallpaper</span>
          </div>
          <Burger carouselX={carouselX} setCarouselX={setCarouselX} />
        </div>
        <ThumbnailCarousel carouselX={carouselX} />
      </div>
      <div className="gray300overlay text-center h-full w-full bg-gray-500 bg-opacity-40 absolute top-0 left-0 -z-5"></div>
    </section>
  )
}

export default SectionOne

const Burger = ({ carouselX, setCarouselX }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        setCarouselX((state) => {
          return {
            ...state,
            burgerState: !state.burgerState,
          }
        })
      }}
      className="absolute burgerContainer h-10 w-10 top-0 -right-10 cursor-pointer"
    >
      <div className="transform transition-all h-full translate-y-1/2">
        <div
          className={`burgerline ${carouselX.burgerState ? 'open' : ''}`}
        ></div>
      </div>
    </div>
  )
}
