import { Fragment } from 'react'
import Letter from 'src/components/Letter'
import {
  Graphql,
  Netlify,
  Railway,
  ReactIcon,
  Tailwind,
} from 'src/components/svg'

const SectionThreeProjectOneLeft = ({ visible, content }) => {
  let wrappedContent = [
    ...Array.from(content.slice(0, 120)),
    { react: ReactIcon },
    ...Array.from(content.slice(120, 151)),
    { gql: Graphql },
    ...Array.from(content.slice(151, 189)),
    { tailwind: Tailwind },
    ...Array.from(content.slice(189, 232)),
    { railway: Railway },
    ...Array.from(content.slice(232, 259)),
    { netlify: Netlify },
    ...Array.from(content.slice(259, content.length)),
  ]

  return (
    <Fragment>
      <div
        id={'sectionThreeProjectOneLeft'}
        className={`sectionThreeProjectOneLeft${
          visible ? '_visible' : ''
        } w-full sm:w-1/2 sm:h-96 flex flex-col my-5 sm:my-10`}
      >
        <h3 className="love text-green-500 text-center text-xl w-full">
          ExpInsight - A Full Stack Project
        </h3>
        {visible ? (
          <h3 className="w-72 sm:w-80 md:w-96 mx-auto text-lg select-none">
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
          <h3 className="w-72 sm:w-80 md:w-96 mx-auto text-lg select-none text-opacity-0">
            {content}
          </h3>
        )}
      </div>
      <div
        id={'sectionThreeProjectOneLeftPlaceholder'}
        className="sectionThreeProjectOneLeftPlaceholder absolute h-96 w-1"
      ></div>
    </Fragment>
  )
}

export default SectionThreeProjectOneLeft
