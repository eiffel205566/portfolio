import { NOTES } from './UtilRandomLetter'
import Letter from 'src/components/Letter'

const SectionTwoRight = () => {
  return (
    <div className="myIntroSectionTwoRight w-full sm:w-1/2 sm:h-96 flex flex-col text-white my-5 sm:my-10">
      <h3 className="love text-green-300 text-center text-xl w-full">
        Welcome To My Site
      </h3>
      <h3 className="w-72 sm:w-80 md:w-96 mx-auto text-lg text-white">
        {Array.from(NOTES).map((letter, index, arr) => (
          <Letter key={index} index={index} letter={letter} len={arr.length} />
        ))}
      </h3>
    </div>
  )
}

export default SectionTwoRight
