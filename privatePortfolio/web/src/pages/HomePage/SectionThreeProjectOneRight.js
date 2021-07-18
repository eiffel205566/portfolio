import { Github, Live } from 'src/components/svg'
const SectionThreeProjectOneRight = ({ setCarouselX, carouselX }) => {
  return (
    <>
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
        } h-102 w-66 border border-transparent mx-auto relative`}
      >
        {!carouselX.animateDemo || (
          <div className="sectionThreeProjectOneRightOverlay h-full w-full bg-gray-300 bg-opacity-40 absolute">
            <div className="h-full flex flex-col justify-center">
              <div className="mx-auto flex justify-between">
                <a
                  href="https://www.expinsight.com/"
                  className="h-12 w-12 cursor-pointer"
                >
                  <Live className="h-full w-full" />
                </a>
                <a
                  href="https://github.com/eiffel205566/redwood"
                  className="h-12 w-12 cursor-pointer"
                >
                  <Github className="h-full w-full" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        id={'sectionThreeProjectOneRightPlaceholder'}
        className="sectionThreeProjectOneRightPlaceholder absolute h-96 w-1 top-1/2 sm:top-0 left-100"
      ></div>
    </>
  )
}

export default SectionThreeProjectOneRight
