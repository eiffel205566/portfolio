import { useState, useEffect } from 'react'
const useLazyLoad = (src, setCarouselX) => {
  const [sourceLoaded, setSourceLoaded] = useState(null)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setSourceLoaded(src)
      setCarouselX((state) => {
        return {
          ...state,
          isLoadingPic: false,
        }
      })
    }
  }, [src])

  return sourceLoaded
}

export const LazyLoadPic = ({
  source,
  placeholder,
  className,
  setCarouselX,
}) => {
  const loaded = useLazyLoad(source, setCarouselX)
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${loaded || placeholder})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    />
  )
}
