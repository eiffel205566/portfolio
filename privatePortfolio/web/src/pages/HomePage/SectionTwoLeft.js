import {
  Html5,
  Sass,
  ReactIcon,
  Graphql,
  Github,
  Python,
  Apollo,
  Css,
  Mongo,
  Javascript,
} from 'src/components/svg'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const SectionTwoLeft = () => {
  const [spinState, setSpinState] = useState({
    target: null,
    spinning: false,
  })

  const onMouseEnter = (identifier) => {
    setSpinState((state) => {
      return {
        ...state,
        spinning: true,
        target: identifier,
      }
    })
  }

  const onMouseLeave = () => {
    setSpinState((state) => {
      return {
        ...state,
        spinning: false,
        target: null,
      }
    })
  }

  return (
    <div className="mx-auto w-80 sm:w-96 my-5 flex flex-col select-none">
      <SectionTwoLeftOneRow
        identifier={'#1'}
        text="Sean, Web Dev"
        spinState={spinState}
        onMouseEnter={() => {
          onMouseEnter('#1')
        }}
        onMouseLeave={onMouseLeave}
      />

      <SectionTwoLeftOneRowComponent
        icons={[Html5]}
        iconClassNames={'h-14 w-14'}
        text={'html5'}
        spinState={spinState}
        setSpinState={setSpinState}
        identifier={'#0'}
      />

      <SectionTwoLeftOneRowComponent
        icons={[Javascript, Python]}
        iconClassNames={'h-14 w-14'}
        text={'ES6+, Python3'}
        spinState={spinState}
        setSpinState={setSpinState}
        identifier={'#2'}
      />
      <SectionTwoLeftOneRowComponent
        icons={[Css, Sass]}
        iconClassNames={'h-14 w-14'}
        text={'CSS3, SASS'}
        spinState={spinState}
        setSpinState={setSpinState}
        identifier={'#3'}
      />
      <SectionTwoLeftOneRowComponent
        icons={[Mongo, Graphql, Apollo]}
        iconClassNames={'h-14 w-14'}
        text={'Mongo, Graphql'}
        spinState={spinState}
        setSpinState={setSpinState}
        identifier={'#4'}
      />
      <SectionTwoLeftOneRowComponent
        icons={[ReactIcon]}
        iconClassNames={'h-14 w-14'}
        text={'ReactJS'}
        spinState={spinState}
        setSpinState={setSpinState}
        identifier={'#5'}
      />
      <SectionTwoLeftOneRowComponent
        icons={[Github]}
        iconClassNames={'h-14 w-14'}
        text={'Github'}
        spinState={spinState}
        setSpinState={setSpinState}
        identifier={'#6'}
      />
    </div>
  )
}

const SectionTwoLeftOneRowComponent = ({
  text,
  icons,
  iconClassNames,
  spinState,
  setSpinState,
  identifier,
}) => {
  const onMouseLeave = () => {
    setSpinState((state) => {
      return {
        ...state,
        spinning: false,
        target: null,
      }
    })
  }

  const iconContainerClassNames = 'iconContainer h-14 w-44 flex justify-center'
  return (
    <div className="oneRowContainer w-full h-14 flex justify-between">
      <div className={iconContainerClassNames}>
        {icons.map((Icon, index) => {
          return (
            <Icon
              key={index}
              identifier={`${identifier}_${index}`}
              className={iconClassNames}
              className={`${iconClassNames} ${
                spinState.spinning &&
                `${identifier}_${index}` === spinState.target
                  ? 'spinning'
                  : ''
              }`}
              onMouseEnter={(e) => {
                setSpinState((state) => {
                  return {
                    ...state,
                    spinning: true,
                    target: e.target.getAttribute('identifier'),
                  }
                })
              }}
              onMouseLeave={onMouseLeave}
            />
          )
        })}
      </div>
      <div className="h-14 text-white flex-grow flex flex-col justify-center">
        <span className="italic sm:ml-8 text-green-300">{text}</span>
      </div>
    </div>
  )
}
const SectionTwoLeftOneRow = ({
  text,
  onMouseEnter,
  onMouseLeave,
  spinState,
  identifier,
}) => {
  const iconContainerClassNames = 'iconContainer h-14 w-44 flex justify-center'
  return (
    <div className="oneRowContainer w-full h-14 flex justify-between">
      <div className={iconContainerClassNames}>
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`myHeadLiterally h-14 w-14 ${
            spinState.spinning && spinState.target === identifier
              ? 'spinning'
              : ''
          }`}
        />
      </div>
      <div className="h-14 text-white flex-grow flex flex-col justify-center">
        <span className="italic sm:ml-8 text-green-300">{text}</span>
      </div>
    </div>
  )
}

export default SectionTwoLeft

/* 
<div
  key={index}
  identifier={`${identifier}_${index}`}
  className={`h-14 w-14 border ${iconClassNames} ${
    spinState.spinning &&
    `${identifier}_${index}` === spinState.target
      ? 'spinning'
      : ''
  }`}
  onMouseEnter={(e) => {
    setSpinState((state) => {
      return {
        ...state,
        spinning: true,
        target: e.target.getAttribute('identifier'),
      }
    })
  }}
  onMouseLeave={onMouseLeave}
</div>
>

*/
