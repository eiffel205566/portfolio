import { useState, useEffect, useRef } from 'react'
import SectionOne from './SectionOne'
import SectionTwoLeft from './SectionTwoLeft'
import SectionTwoRight from './SectionTwoRight'
import SectionHeader from './SectionHeader'
import { CONTACT, NOTES, PROJECTONE, typingMessage } from './UtilRandomLetter'
import Footer from './Footer'
import {
  placeholderPicUrls,
  typingMessages,
  mockPictureUrl,
} from './UtilRandomLetter'

import { AiOutlineHtml5 } from 'react-icons/ai'
import SectionThreeProjectOneRight from './SectionThreeProjectOneRight'
import SectionThreeProjectOneLeft from './SectionThreeProjectOneLeft'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import { LazyLoadPic } from 'src/components/LazyLoading'
import Letter from 'src/components/Letter'
import { Javascript, Tailwind } from 'src/components/svg'
import { ContactForm } from './ContactForm'

const HomePage = () => {
  const [carouselX, setCarouselX] = useState({
    showNavbar: false,
    burgerState: false,
    translateX: 0,
    isLoadingPic: false,
    extended: false,
    current: 1, //1st picture layer
    currentA: 1, //2nd picture layer
    pictures: mockPictureUrl, //null,
    displayedText: 'I am Sean Yang',
    displayedTextPick: 0,
    displayedTextOrientation: 'forward',
    lastLetter: null,
    pickedLetter: [],
    randomnizationCount: 0,
    timeId: null,
    typingTimeId: null,
    loaded: false,
    sectionTwoLeftVisible: false,
    sectionTwoRightVisible: false,
    animateDemo: false,
    animateDemoTwo: false,
    animateDemoThree: false,
    sectionThreeProjectOneRightVisible: false,
    sectionThreeProjectOneLeftVisible: false,
    sectionFourProjectTwoRightVisible: false,
    sectionFiveProjectThreeLeftVisible: false,
    contactFormVisible: false,
    isSubmitingForm: false,
  })

  const randomPick = () => {
    const toPickFrom = [1, 2, 3, 4, 5]
    return toPickFrom[Math.floor(Math.random() * toPickFrom.length)]
  }

  useEffect(() => {
    //first layer
    if (carouselX.translateX % 2 === 1) return
    setCarouselX((state) => {
      return {
        ...state,
        current: randomPick(),
      }
    })
  }, [carouselX.translateX])

  useEffect(() => {
    //2nd layer
    if (carouselX.translateX % 2 === 0) return
    setCarouselX((state) => {
      return {
        ...state,
        currentA: randomPick(),
      }
    })
  }, [carouselX.translateX])

  //* Mocking typing effect && constant

  /*
  * Mocking random typing effect
  * welcome is 7 letters, each time Math.random take a letter from allLetters match against correctLetters at index of carouselX.randomnizationCount
  * if match, ++carouselX.randomnizationCount, once carouselX.randomnizationCount is greater than 6, clear carouselX.timeId 
  {0: 'w', 1: 'e', 2: 'l', 3:'c', 4:'o', 5: 'm', 6: 'e'}
  //! [...arr.slice(0, n),'x' ,...arr.slice(n+1 , arr.length)] where n is index
  */
  const typingMessage = () => {
    let timeId = setTimeout(() => {
      setCarouselX((state) => {
        return {
          ...state,
          displayedTextOrientation: 'backward',
          typingTimeId: timeId,
        }
      })
      timeId = setTimeout(() => {
        setCarouselX((state) => {
          const next =
            state.displayedTextPick === 2 ? 0 : ++state.displayedTextPick
          return {
            ...state,
            displayedTextOrientation: 'forward',
            displayedTextPick: next,
            displayedText: typingMessages[next],
            typingTimeId: timeId,
          }
        })
      }, 2000)
      timeId = setTimeout(typingMessage, 2000)
      setCarouselX((state) => {
        return {
          ...state,
          typingTimeId: timeId,
        }
      })
    }, 6000)
  }

  useEffect(() => {
    typingMessage(setCarouselX)

    return () => {
      clearTimeout(carouselX.typingTimeId)
      setCarouselX((state) => {
        return {
          ...state,
          typingTimeId: null,
          displayedTextPick: 0,
          displayedTextOrientation: 'forward',
        }
      })
    }
  }, [carouselX.loaded])

  //! handling viewport visibility check with  IntersectionObserver
  const sectionTwoLeftContainer = document.getElementById(
    'sectionTwoLeftContainer'
  )
  const sectionTwoRightContainer = document.getElementById(
    'sectionTwoRightContainer'
  )
  // 'sectionThreeProjectOneRight'
  const sectionThreeProjectOneRight = document.getElementById(
    'sectionThreeProjectOneRightPlaceholder'
  )

  const sectionThreeProjectOneLeft = document.getElementById(
    'sectionThreeProjectOneLeftPlaceholder'
  )

  const sectionFourProjectTwoRight = document.getElementById(
    'sectionFourProjectTwoRightPlaceholder'
  )

  const sectionFiveProjectThreeLeft = document.getElementById(
    'sectionFiveProjectThreeLeftPlaceholder'
  )

  const contactForm = document.getElementById('contactContainer')

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
                sectionTwoLeftVisible:
                  entry.isIntersecting === false
                    ? state.sectionTwoLeftVisible
                    : entry.isIntersecting,
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
                sectionTwoRightVisible:
                  entry.isIntersecting === false
                    ? state.sectionTwoRightVisible
                    : entry.isIntersecting,
              }
            })
          })
        },
        { threshold: 0.3 }
      )

      const observerSectionThreeProjectOneRight = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setCarouselX((state) => {
              return {
                ...state,
                sectionThreeProjectOneRightVisible:
                  entry.isIntersecting === false
                    ? state.sectionThreeProjectOneRightVisible
                    : entry.isIntersecting,
              }
            })
          })
        },
        { threshold: 0.3 }
      )

      const observerSectionThreeProjectOneLeft = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setCarouselX((state) => {
              return {
                ...state,
                sectionThreeProjectOneLeftVisible:
                  entry.isIntersecting === false
                    ? state.sectionThreeProjectOneLeftVisible
                    : entry.isIntersecting,
              }
            })
          })
        },
        { threshold: 0.3 }
      )

      //sectionFourProjectTwoRightPlaceholder
      const observerSectionFourProjectTwoRight = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setCarouselX((state) => {
              return {
                ...state,
                sectionFourProjectTwoRightVisible:
                  entry.isIntersecting === false
                    ? state.sectionFourProjectTwoRightVisible
                    : entry.isIntersecting,
              }
            })
          })
        },
        { threshold: 0.3 }
      )

      const observerSectionFiveProjectThreeLeft = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setCarouselX((state) => {
              return {
                ...state,
                sectionFiveProjectThreeLeftVisible:
                  entry.isIntersecting === false
                    ? state.sectionFiveProjectThreeLeftVisible
                    : entry.isIntersecting,
              }
            })
          })
        },
        { threshold: 0.3 }
      )

      const observerContactForm = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setCarouselX((state) => {
              return {
                ...state,
                contactFormVisible:
                  entry.isIntersecting === false
                    ? state.contactFormVisible
                    : entry.isIntersecting,
              }
            })
          })
        },
        { threshold: 0.5 }
      )

      //! actually observe things
      observerSectionTwoLeft.observe(sectionTwoLeftContainer)
      observerSectionTwoRight.observe(sectionTwoRightContainer)
      observerSectionThreeProjectOneRight.observe(sectionThreeProjectOneRight)
      observerSectionThreeProjectOneLeft.observe(sectionThreeProjectOneLeft)
      observerSectionFourProjectTwoRight.observe(sectionFourProjectTwoRight)
      observerSectionFiveProjectThreeLeft.observe(sectionFiveProjectThreeLeft)
      observerContactForm.observe(contactForm)

      return () => {
        //! clear observer when unmount
        if (sectionTwoLeftContainer) {
          observerSectionTwoLeft.unobserve(sectionTwoLeftContainer)
        }

        if (sectionTwoRightContainer) {
          observerSectionTwoRight.unobserve(sectionTwoRightContainer)
        }

        if (sectionThreeProjectOneRight) {
          observerSectionThreeProjectOneRight.unobserve(
            sectionThreeProjectOneRight
          )
        }

        if (sectionThreeProjectOneLeft) {
          observerSectionThreeProjectOneLeft.unobserve(
            sectionThreeProjectOneLeft
          )
        }

        if (sectionFourProjectTwoRight) {
          observerSectionFourProjectTwoRight.unobserve(
            sectionFourProjectTwoRight
          )
        }

        if (sectionFiveProjectThreeLeft) {
          observerSectionFiveProjectThreeLeft.unobserve(
            sectionFiveProjectThreeLeft
          )
        }

        if (contactForm) {
          observerContactForm.unobserve(contactForm)
        }
      }
    }
  }, [carouselX.loaded])

  // ! useRef of the top level div, and watch its existance with useEffect
  // ! flip loaded to true once it is not null so all other can just watch loaded
  const watchScroll = function () {
    if (window.pageYOffset > 100) {
      setCarouselX((state) => {
        return {
          ...state,
          showNavbar: true,
        }
      })
    } else {
      setCarouselX((state) => {
        return {
          ...state,
          showNavbar: false,
        }
      })
    }
  }
  useEffect(() => {
    setCarouselX((state) => {
      return {
        ...state,
        loaded: true,
      }
    })

    //!navbar
    window.addEventListener('scroll', watchScroll)

    return () => {
      setCarouselX((state) => {
        return {
          ...state,
          loaded: false,
        }
      })
      window.removeEventListener('scroll', watchScroll)
    }
  }, [landingPageContainerRef.current])

  /* 
  ! Fetch from unsplash 
  */
  const handleFetchFromUnsplash = async () => {
    try {
      const data = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${placeholderPicUrls.key}&query=nature&orientation=landscape&count=11`
      )
      const json = await data.json()
      const pictureUrls = json.map((each) => {
        const {
          urls: { regular, thumb, ...insideRest },
          ...rest
        } = each
        return { regular, thumb }
      })

      setCarouselX((state) => {
        return {
          ...state,
          pictures: pictureUrls,
        }
      })
    } catch (error) {
      setCarouselX((state) => {
        return {
          ...state,
          pictures: null,
        }
      })
    }
  }

  //! async fetch from unsplpash
  useEffect(() => {
    handleFetchFromUnsplash()
    return () => {
      setCarouselX((state) => {
        return {
          ...state,
          pictures: null,
        }
      })
    }
  }, [carouselX.loaded])

  return (
    <div
      id="landingPageContainer"
      ref={landingPageContainerRef}
      className="landingPageContainer min-h-screen w-screen overflow-x-hidden"
    >
      {/* adding a fix LazyLoadPic component to avoid jumping onMount because async fetch */}
      {carouselX.translateX < 2 ? (
        <LazyLoadPic
          setCarouselX={setCarouselX}
          source={placeholderPicUrls.regularTwo}
          placeholder={placeholderPicUrls.thumbTwo}
          className={`xamazingCarousel_${carouselX.current} ${
            carouselX.translateX % 2 === 1 ? 'fading' : ''
          } h-screen w-screen fixed -z-10`}
        />
      ) : (
        <LazyLoadPic
          setCarouselX={setCarouselX}
          source={
            carouselX.pictures
              ? carouselX.pictures[carouselX.current]['regular']
              : placeholderPicUrls.regularTwo
          }
          placeholder={
            carouselX.pictures
              ? carouselX.pictures[carouselX.current]['thumb']
              : placeholderPicUrls.thumbTwo
          }
          className={`xamazingCarousel_${carouselX.current} ${
            carouselX.translateX % 2 === 1 ? 'fading' : ''
          } h-screen w-screen fixed -z-10`}
        />
      )}

      <LazyLoadPic
        setCarouselX={setCarouselX}
        source={
          carouselX.pictures
            ? carouselX.pictures[carouselX.currentA + 5]['regular']
            : placeholderPicUrls.regularOne
        }
        placeholder={
          carouselX.pictures
            ? carouselX.pictures[carouselX.currentA + 5]['thumb']
            : placeholderPicUrls.thumbOne
        }
        className={`xamazingCarousel_${carouselX.currentA}a ${
          carouselX.translateX % 2 === 0 && carouselX.translateX !== 0
            ? 'fading'
            : ''
        } h-screen w-screen fixed -z-11`}
      />

      <SectionOne carouselX={carouselX} setCarouselX={setCarouselX} />

      <section id={'sectionTwo'} className="sectionTwo bg-overlay relative">
        <SectionHeader text="Myself" color={'gray-300'} />

        <div className="sectionTwoContainer max-w-5xl mx-auto flex flex-col sm:flex-row pb-5 sm:pb-0">
          <SectionTwoLeft visible={carouselX.sectionTwoLeftVisible} />
          <SectionTwoRight
            visible={carouselX.sectionTwoRightVisible}
            content={NOTES}
          />
        </div>
      </section>

      <section className="sectionThree bg-gray-300 relative">
        <SectionHeader
          text={'My Works'}
          color={'sideDark'}
          textColor={'gray-100'}
        />
        <div id={'projectOnePushDown'} className="h-10 w-full"></div>
        <div className="sectionThreeContainer max-w-5xl mx-auto flex flex-col sm:flex-row pb-5 sm:pb-0 overflow-hidden">
          <SectionThreeProjectOneLeft
            content={PROJECTONE}
            visible={carouselX.sectionThreeProjectOneLeftVisible}
            placeholderId={'sectionThreeProjectOneLeftPlaceholder'}
            title={'ExpInsight - A Full Stack Project'}
            sectionId={'sectionThreeProjectOneLeft'}
            animationOrientation={'sec3'}
          />
          <SectionThreeProjectOneRight
            setCarouselX={setCarouselX}
            carouselX={carouselX}
          />
        </div>
      </section>

      <SectionFour carouselX={carouselX} setCarouselX={setCarouselX} />
      <SectionFive carouselX={carouselX} setCarouselX={setCarouselX} />
      <ContactForm carouselX={carouselX} setCarouselX={setCarouselX} />

      <Footer />
    </div>
  )
}

export default HomePage
