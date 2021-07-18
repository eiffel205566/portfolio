import { Github, Live } from 'src/components/svg'
import GroupIcons from './GroupIcons'
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
        {carouselX.animateDemo && (
          <div className="sectionThreeProjectOneRightOverlay h-full w-full bg-gray-300 bg-opacity-40 absolute">
            <GroupIcons
              liveUrl={'https://www.expinsight.com/'}
              gitUrl={'https://github.com/eiffel205566/redwood'}
            />
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
