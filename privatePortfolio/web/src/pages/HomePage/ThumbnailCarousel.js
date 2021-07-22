import { placeholderPicUrls } from './UtilRandomLetter'

export const ThumbnailCarousel = () => {
  const thumbNails = [
    placeholderPicUrls.thumbOne,
    placeholderPicUrls.thumbTwo,
    // placeholderPicUrls.thumbThree,
  ]
  return (
    <div className="thumbNailCarousel w-66 mx-auto h-20 z-30 flex justify-center">
      {thumbNails.map((thumbUrl, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${thumbUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            boxShadow:
              index === 1 ? 'rgba(255, 255, 100, 35) 0px 5px 15px' : '',
          }}
          className="h-full w-20 ml-1"
        ></div>
      ))}
    </div>
  )
}
