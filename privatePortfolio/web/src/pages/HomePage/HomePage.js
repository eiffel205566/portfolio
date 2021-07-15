import { useState, useEffect, useRef } from 'react'
import SectionOne from './SectionOne'
import SectionTwoLeft from './SectionTwoLeft'
import SectionTwoRight from './SectionTwoRight'

import { AiOutlineHtml5 } from 'react-icons/ai'

const HomePage = () => {
  const [carouselX, setCarouselX] = useState({
    translateX: 0,
    extended: false,
    current: 1, //1st picture layer
    currentA: 1, //2nd picture layer
    displayedText: ['x'],
    randomnizationCount: 0,
    timeId: null,
    loaded: false,
    sectionTwoLeftVisible: false,
    sectionTwoRightVisible: false,
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

  //! handling viewport visibility check with  IntersectionObserver
  const sectionTwoLeftContainer = document.getElementById(
    'sectionTwoLeftContainer'
  )
  const sectionTwoRightContainer = document.getElementById(
    'sectionTwoRightContainer'
  )

  const landingPageContainer = document.getElementById('landingPageContainer')
  const landingPageContainerRef = useRef(landingPageContainer)

  useEffect(() => {
    if (sectionTwoLeftContainer) {
      //! initiate observer
      const observerSectionTwoLeft = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // console.log(entry.isIntersecting)
            setCarouselX((state) => {
              return {
                ...state,
                sectionTwoLeftVisible: entry.isIntersecting,
              }
            })
          })
        },
        { threshold: 0.3 }
      )

      const observerSectionTwoRight = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setCarouselX((state) => {
              return {
                ...state,
                sectionTwoRightVisible: entry.isIntersecting,
              }
            })
          })
        },
        { threshold: 0.3 }
      )

      //! actually observe things
      observerSectionTwoLeft.observe(sectionTwoLeftContainer)
      observerSectionTwoRight.observe(sectionTwoRightContainer)

      return () => {
        //! clear observer when unmount
        if (sectionTwoLeftContainer) {
          observerSectionTwoLeft.unobserve(sectionTwoLeftContainer)
        }

        if (sectionTwoRightContainer) {
          observerSectionTwoRight.unobserve(sectionTwoRightContainer)
        }
      }
    }
  }, [carouselX.loaded])

  // ! useRef of the top level div, and watch its existance with useEffect
  // ! flip loaded to true once it is not null so all other can just watch loaded
  useEffect(() => {
    setCarouselX((state) => {
      return {
        ...state,
        loaded: true,
      }
    })

    return () => {
      setCarouselX((state) => {
        return {
          ...state,
          loaded: false,
        }
      })
    }
  }, [landingPageContainerRef.current])

  return (
    <div
      id="landingPageContainer"
      ref={landingPageContainerRef}
      className="landingPageContainer min-h-screen w-screen overflow-x-hidden"
    >
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

      <SectionOne carouselX={carouselX} setCarouselX={setCarouselX} />

      <div className="pushDownTen w-full h-10 bg-gray-300 bg-opacity-40"></div>

      <section className="sectionTwo bg-overlay relative">
        <div className="introHeader h-10 w-48 bg-gray-300 border rounded-3xl absolute top-0 right-1/2 transform -translate-y-1/2 translate-x-1/2">
          <div className="h-full flex flex-col justify-center">
            <span className="love text-xl text-center text-gray-700">
              Myself
            </span>
          </div>
        </div>

        <div className="sectionTwoContainer max-w-5xl mx-auto flex flex-col sm:flex-row">
          <SectionTwoLeft visible={carouselX.sectionTwoLeftVisible} />
          <SectionTwoRight visible={carouselX.sectionTwoRightVisible} />
        </div>
      </section>

      <section className="sectionThreeContainermax-w-5xl mx-auto bg-gray-300 min-h-full"></section>

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
