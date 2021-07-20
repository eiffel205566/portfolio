import { useState, useEffect } from 'react'
const useLazyLoad = (src) => {
  const [sourceLoaded, setSourceLoaded] = useState(null)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setSourceLoaded(src)
    }
  }, [src])

  return sourceLoaded
}

export const LazyLoadPic = ({ source, placeholder, className }) => {
  const loaded = useLazyLoad(source)
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
