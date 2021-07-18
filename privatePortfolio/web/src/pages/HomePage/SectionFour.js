import GroupIcons from './GroupIcons'
import SectionThreeProjectOneLeft from './SectionThreeProjectOneLeft'
import SectionThreeProjectOneRight from './SectionThreeProjectOneRight'
import { PROJECTTWO } from './UtilRandomLetter'

const SectionFour = ({ carouselX, setCarouselX }) => {
  return (
    <section className="sectionFour bg-overlay relative">
      <div className="pushDownTen w-full h-10 bg-overlay"></div>
      <div className="sectionThreeContainer max-w-5xl mx-auto flex flex-col sm:flex-row pb-5 sm:pb-0 overflow-hidden">
        <div
          onMouseEnter={() => {
            setCarouselX((state) => {
              return {
                ...state,
                animateDemoTwo: true,
              }
            })
          }}
          onMouseLeave={() => {
            setCarouselX((state) => {
              return {
                ...state,
                animateDemoTwo: false,
              }
            })
          }}
          id={'sectionFourLeft'}
          className="sectionFourLeft w-96 h-102 mx-auto relative"
        >
          {carouselX.animateDemoTwo && (
            <div className="h-full w-full bg-gray-300 bg-opacity-40 absolute">
              <GroupIcons
                liveUrl={'https://www.expenseinsight.ca/'}
                gitUrl={'https://github.com/eiffel205566/Expense_Insight'}
              />
            </div>
          )}
        </div>
        <SectionThreeProjectOneLeft
          content={PROJECTTWO}
          visible={carouselX.sectionFourProjectTwoRightVisible}
          placeholderId={'sectionFourProjectTwoRightPlaceholder'}
          title={'ExpenseInsigt - GoodO JS + CSS'}
          extraClassNames={'top-1/2 sm:top-0'}
          sectionId={'sectionFourProjectTwoRight'}
          animationOrientation={'sec4'}
          textColor={'text-gray-300'}
        />
      </div>
    </section>
  )
}

export default SectionFour
