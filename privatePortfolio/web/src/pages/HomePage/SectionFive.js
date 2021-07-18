import GroupIcons from './GroupIcons'
import SectionThreeProjectOneLeft from './SectionThreeProjectOneLeft'
import { PROJECTTHREE } from './UtilRandomLetter'

const SectionFive = ({ carouselX, setCarouselX }) => {
  return (
    <section className="sectionThree bg-gray-300 relative">
      <div id={'projectOnePushDown'} className="h-10 w-full"></div>
      <div className="sectionThreeContainer max-w-5xl mx-auto flex flex-col sm:flex-row pb-5 sm:pb-0 overflow-hidden">
        <SectionThreeProjectOneLeft
          content={PROJECTTHREE}
          visible={carouselX.sectionFiveProjectThreeLeftVisible}
          placeholderId={'sectionFiveProjectThreeLeftPlaceholder'}
          title={'Personal Portfolio'}
          sectionId={'sectionFiveProjectThreeLeft'}
          animationOrientation={'sec5'}
        />

        <div className="sectionThreeContainer max-w-5xl mx-auto flex flex-col sm:flex-row pb-5 sm:pb-0 overflow-hidden">
          <div
            onMouseEnter={() => {
              setCarouselX((state) => {
                return {
                  ...state,
                  animateDemoThree: true,
                }
              })
            }}
            onMouseLeave={() => {
              setCarouselX((state) => {
                return {
                  ...state,
                  animateDemoThree: false,
                }
              })
            }}
            className="sectionFiveRight w-66 h-102 mx-auto relative"
          >
            {carouselX.animateDemoThree && (
              <div className="h-full w-full bg-gray-300 bg-opacity-40 absolute">
                <GroupIcons
                  liveUrl={'#'}
                  gitUrl={'https://github.com/eiffel205566/portfolio'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFive
