import { Fragment } from 'react'
import Letter from 'src/components/Letter'
import {
  Graphql,
  Netlify,
  Railway,
  ReactIcon,
  Tailwind,
  Javascript,
  Css,
  Github,
} from 'src/components/svg'
import {
  PROJECTONE,
  PROJECTTWO,
  PROJECTTHREE,
} from 'src/pages/HomePage/UtilRandomLetter'

const SectionThreeProjectOneLeft = ({
  visible,
  content,
  placeholderId,
  sectionId,
  title,
  extraClassNames,
  animationOrientation,
  textColor,
}) => {
  let wrappedContent =
    content === PROJECTONE
      ? [
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
      : content === PROJECTTWO
      ? [
          ...Array.from(content.slice(0, 75)),
          { javascript: Javascript },
          ...Array.from(content.slice(76, 83)),
          { css: Css },
          ...Array.from(content.slice(83, 311)),
          { netlify: Netlify },
          ...Array.from(content.slice(311, 331)),
          { github: Github },
          ...Array.from(content.slice(331, content.length)),
        ]
      : content === PROJECTTHREE
      ? [
          ...Array.from(content.slice(0, 57)),
          { react: ReactIcon },
          ...Array.from(content.slice(57, 70)),
          { tailwind: Tailwind },
          ...Array.from(content.slice(70, content.length)),
        ]
      : [...Array.from(content)]

  return (
    <Fragment>
      <div
        id={sectionId}
        className={`sectionThreeProjectOneLeft${
          visible ? '_visible' : ''
        } w-full sm:w-1/2 sm:h-96 flex flex-col my-5 sm:my-10 ${animationOrientation}`}
      >
        <h3 className="love text-green-500 text-center text-xl w-full">
          {title}
        </h3>
        {visible ? (
          <h3
            className={`w-72 sm:w-80 md:w-96 mx-auto text-lg select-none ${
              textColor ? textColor : ''
            }`}
          >
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
        id={placeholderId}
        className={`sectionThreeProjectOneLeftPlaceholder absolute h-96 w-1 ${
          extraClassNames ? extraClassNames : ''
        }`}
      ></div>
    </Fragment>
  )
}

export default SectionThreeProjectOneLeft
