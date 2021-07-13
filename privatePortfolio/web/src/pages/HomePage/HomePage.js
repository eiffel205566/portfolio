import React, { useState, useEffect } from 'react'
import randomnizeLetters from './UtilRandomLetter'

const HomePage = () => {
  const [carouselX, setCarouselX] = useState({
    translateX: 0,
    extended: false,
    current: 1,
    currentA: 1,
    displayedText: ['x'],
    randomnizationCount: 0,
    timeId: null,
  })

  const randomPick = () => {
    const toPickFrom = [1, 2, 3, 4, 5]
    return toPickFrom[Math.floor(Math.random() * toPickFrom.length)]
  }

  useEffect(() => {
    if (carouselX.translateX % 2 === 1) return
    setCarouselX((state) => {
      return {
        ...state,
        current: randomPick(),
      }
    })
  }, [carouselX.translateX])

  useEffect(() => {
    if (carouselX.translateX % 2 === 0) return
    setCarouselX((state) => {
      return {
        ...state,
        currentA: randomPick(),
      }
    })
  }, [carouselX.translateX])

  //* Mocking typing effect && constant
  const letters = 'celwmon'
  const allLetters = [...letters.split('')]
  const correctLetters = {
    0: 'w',
    1: 'e',
    2: 'l',
    3: 'c',
    4: 'o',
    5: 'm',
    6: 'e',
  }

  /*
  * Mocking random typing effect
  * welcome is 7 letters, each time Math.random take a letter from allLetters match against correctLetters at index of carouselX.randomnizationCount
  * if match, ++carouselX.randomnizationCount, once carouselX.randomnizationCount is greater than 6, clear carouselX.timeId 
  {0: 'w', 1: 'e', 2: 'l', 3:'c', 4:'o', 5: 'm', 6: 'e'}
  //! [...arr.slice(0, n),'x' ,...arr.slice(n+1 , arr.length)] where n is index
  */
  useEffect(() => {
    if (carouselX.randomnizationCount > 6) {
      return () => {
        clearTimeout(carouselX.timeId)
      }
    } else {
      if (
        correctLetters[carouselX.randomnizationCount] ===
        carouselX.displayedText[carouselX.randomnizationCount]
      ) {
        setCarouselX((state) => {
          return {
            ...state,
            randomnizationCount: ++state.randomnizationCount,
          }
        })
      }
    }

    setTimeout(() => {
      setCarouselX((state) => {
        const randomPick =
          allLetters[Math.floor(Math.random() * allLetters.length)]
        return {
          ...state,
          displayedText: [
            ...state.displayedText.slice(0, state.randomnizationCount),
            randomPick,
            ...state.displayedText.slice(
              state.randomnizationCount + 1,
              state.displayedText.length
            ),
          ],
        }
      })
    }, 100)
  }, [carouselX.displayedText])

  return (
    <div className="landingPageContainer min-h-screen w-screen overflow-x-hidden">
      <div
        className={`amazingCarousel_${carouselX.current} ${
          carouselX.translateX % 2 === 1 ? 'fading' : ''
        } h-screen w-screen fixed -z-10`}
      ></div>

      {carouselX.translateX ? (
        <div
          className={`amazingCarousel_${carouselX.currentA}a ${
            carouselX.translateX % 2 === 0 ? 'fading' : ''
          } h-screen w-screen fixed -z-11`}
        ></div>
      ) : null}
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

const Placeholder = ({ color, content, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`h-40 ${color} mx-auto text-center w-full`}
    >
      {content ? content : 'xxx'}
    </div>
  )
}
