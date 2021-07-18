import Letter from 'src/components/Letter'
import { Graphql, Netlify, Redwood } from 'src/components/svg'

const SectionTwoRight = ({ visible, content }) => {
  //! wrappedContent is used to insert svg into the array so a svg can be displayed among some letters
  let wrappedContent = [
    ...Array.from(content.slice(0, 50)),
    // { netlify: Netlify },
    ...Array.from(content.slice(50, content.length)),
  ]

  return (
    <div
      id="sectionTwoRightContainer"
      className={`myIntroSectionTwoRight${
        visible ? '_visible' : ''
      } w-full sm:w-1/2 sm:h-96 flex flex-col text-white my-5 sm:my-10`}
    >
      <h3 className="love text-green-300 text-center text-xl w-full">
        Welcome To My Site
      </h3>
      {visible ? (
        <h3 className="w-72 sm:w-80 md:w-96 mx-auto text-lg text-white select-none">
          {/* {Array.from(content).map((letter, index, arr) => (
            <Letter
              key={index}
              index={index}
              letter={letter}
              len={arr.length}
            />
          ))} */}
          {wrappedContent.map((letter, index, arr) => (
            <Letter
              key={index}
              index={index}
              letter={letter}
              len={arr.length}
            />
          ))}
        </h3>
      ) : (
        <h3 className="w-72 sm:w-80 md:w-96 mx-auto text-lg text-white select-none text-opacity-0">
          {content}
        </h3>
      )}
    </div>
  )
}

export default SectionTwoRight
