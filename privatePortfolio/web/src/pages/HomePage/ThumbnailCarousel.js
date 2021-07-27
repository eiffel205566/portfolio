import { placeholderPicUrls } from './UtilRandomLetter'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useState, useEffect } from 'react'

export const ThumbnailCarousel = ({ carouselX }) => {
  const placeHolderThumbNails = [
    placeholderPicUrls.thumbOne,
    placeholderPicUrls.thumbTwo,
  ]

  //carouselX.pictures ?
  //when caorusel.pictures is null (fetching fail from unsplash) : carouselX.translateX % 2 === 1 ? 1 : 0
  //default thumbnail when carouselX === 0 is always placeholderPicUlrs.thumbTwo
  const thumbNails = carouselX.pictures
    ? carouselX.pictures.map((urlGroup, index) => {
        if (index === 0) {
          return placeholderPicUrls.thumbTwo
        } else {
          return urlGroup['thumb']
        }
      })
    : placeHolderThumbNails

  //! start a local state Index so left/right arrow key can directly control this component
  let pictureIndex = carouselX.pictures //did fetch success
    ? carouselX.translateX % 2 === 1 //which layer is in front
      ? carouselX.currentA + 5 //2nd layer pick url from index carouselX.currentA + 5
      : carouselX.current //1st layer pick url from carouselX.current
    : carouselX.translateX % 2 === 1 //fectch fail, pick either default 1 or 0 index
    ? 1
    : 0

  const [pIndex, setPIndex] = useState({
    pictureIndex: 1,
  })

  const [localPindex, setLocalPindex] = useState({
    localPictureIndex: null,
  })

  useEffect(() => {
    setPIndex((state) => {
      return {
        ...state,
        pictureIndex: pictureIndex,
      }
    })

    setLocalPindex((state) => {
      return {
        ...state,
        localPictureIndex: null,
      }
    })
  }, [carouselX.translateX, pIndex.pictureIndex])

  return (
    <div
      className={`thumbnailCarouselContainer w-62 overflow-x-hidden mx-auto relative transform transition-all duration-500 ${
        carouselX.burgerState ? '' : 'translate-y-20 opacity-0'
      }`}
    >
      <div
        style={{
          backgroundImage:
            'linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8) 90%)',
        }}
        className="edgeFading absolute h-20 w-20 left-0 top-0 z-40"
      >
        <div
          onClick={() => {
            setLocalPindex((state) => {
              const nextValue = Object.is(state.localPictureIndex, null)
                ? pictureIndex === 0
                  ? 0
                  : --pictureIndex
                : state.localPictureIndex === 0
                ? 0
                : --state.localPictureIndex

              return {
                ...state,
                localPictureIndex: nextValue,
              }
            })
          }}
          className="h-full flex flex-col justify-center cursor-pointer text-gray-500 hover:text-green-500"
        >
          <IoIosArrowBack className="h-8 w-8" />
        </div>
      </div>
      <div
        onClick={() => {
          setLocalPindex((state) => {
            const nextValue = Object.is(state.localPictureIndex, null)
              ? pictureIndex === 10
                ? 10
                : ++pictureIndex
              : state.localPictureIndex === 10
              ? 10
              : ++state.localPictureIndex
            return {
              ...state,
              localPictureIndex: nextValue,
            }
          })
        }}
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8) 90%)',
        }}
        className="edgeFading absolute h-20 w-20 right-0 top-0 z-40"
      >
        <div className="h-full flex flex-col justify-center cursor-pointer text-gray-500 hover:text-green-500">
          <IoIosArrowForward className="h-8 w-8 ml-auto" />
        </div>
      </div>

      <div
        className={`thumbNailCarousel w-231 mx-auto h-20 z-30 flex transform transition-all duration-500 ${
          carouselX.translateX
            ? pIndex.pictureIndex === 0 ||
              localPindex?.localPictureIndex === 0 ||
              pIndex.pictureIndex === 0
              ? 'translate-x-1/11'
              : `-translate-x-${
                  !Object.is(localPindex?.localPictureIndex, null)
                    ? localPindex?.localPictureIndex - 1
                    : pIndex.pictureIndex - 1
                }/11`
            : 'translate-x-1/11'
        } `}
      >
        {thumbNails.map((thumbUrl, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${thumbUrl})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              boxShadow:
                index === pIndex.pictureIndex
                  ? 'rgba(255, 255, 0, 1) 0px 5px 15px'
                  : '',
            }}
            className={`h-full w-20 ${
              index ? 'ml-1' : ''
            } transform translate-all duration-500`}
          ></div>
        ))}
      </div>
    </div>
  )
}
