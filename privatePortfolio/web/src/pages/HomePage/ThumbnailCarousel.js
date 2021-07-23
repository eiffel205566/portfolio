import { placeholderPicUrls } from './UtilRandomLetter'

export const ThumbnailCarousel = ({ carouselX }) => {
  const placeHolderThumbNails = [
    placeholderPicUrls.thumbOne,
    placeholderPicUrls.thumbTwo,
  ]

  //carouselX.pictures ?
  //when caorusel.pictures is null (fetching fail from unsplash) : carouselX.translateX % 2 === 1 ? 1 : 0
  const thumbNails = carouselX.pictures
    ? carouselX.pictures.map((urlGroup) => urlGroup['thumb'])
    : placeHolderThumbNails

  const pictureIndex = carouselX.pictures //did fetch success
    ? carouselX.translateX % 2 === 1 //which layer is in front
      ? carouselX.currentA + 5 //2nd layer pick url from index carouselX.currentA + 5
      : carouselX.current //1st layer pick url from carouselX.current
    : carouselX.translateX % 2 === 1 //fectch fail, pick either default 1 or 0 index
    ? 1
    : 0

  return (
    <div className="w-63 overflow-x-hidden mx-auto relative">
      <div
        style={{
          backgroundImage:
            'linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8) 90%)',
        }}
        className="edgeFading absolute h-20 w-20 left-0 top-0 z-40"
      ></div>
      <div
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8) 90%)',
        }}
        className="edgeFading absolute h-20 w-20 right-0 top-0 z-40"
      ></div>

      <div
        className={`thumbNailCarousel w-231 mx-auto h-20 z-30 flex transform transition-all duration-500 -translate-x-${
          pictureIndex - 1
        }/11`}
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
                index === pictureIndex
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
