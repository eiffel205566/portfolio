const SectionThreeProjectOneRight = ({ setCarouselX, carouselX }) => {
  return (
    <div
      onMouseEnter={() => {
        setCarouselX((state) => {
          return {
            ...state,
            animateDemo: true,
          }
        })
      }}
      onMouseLeave={() => {
        setCarouselX((state) => {
          return {
            ...state,
            animateDemo: false,
          }
        })
      }}
      id={'sectionThreeProjectOneRight'}
      className={`sectionThreeProjectOneRight${
        carouselX.sectionThreeProjectOneRightVisible ? '_visible' : ''
      } expinsight${
        carouselX.animateDemo ? 'Demo' : ''
      } h-102 w-66 border border-transparent cursor-pointer mx-auto`}
    ></div>
  )
}

export default SectionThreeProjectOneRight
