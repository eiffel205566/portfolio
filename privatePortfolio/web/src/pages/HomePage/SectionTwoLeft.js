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

const SectionTwoLeft = () => {
  return (
    <div className="mx-auto w-80 sm:w-96 my-5 flex flex-col select-none">
      <SectionTwoLeftOneRow text="Sean, Web Dev" />
      {/* <SectionTwoLeftOneRow text="Sean, Web Dev" /> */}

      <SectionTwoLeftOneRowComponent
        icons={[Html5]}
        iconClassNames={'h-14 w-14'}
        text={'html5'}
      />

      <SectionTwoLeftOneRowComponent
        icons={[Javascript, Python]}
        iconClassNames={'h-14 w-14'}
        text={'ES6+, Python3'}
      />
      <SectionTwoLeftOneRowComponent
        icons={[Css, Sass]}
        iconClassNames={'h-14 w-14'}
        text={'CSS3, SASS'}
      />
      <SectionTwoLeftOneRowComponent
        icons={[Mongo, Graphql, Apollo]}
        iconClassNames={'h-14 w-14'}
        text={'Mongo, Graphql'}
      />
      <SectionTwoLeftOneRowComponent
        icons={[ReactIcon]}
        iconClassNames={'h-14 w-14'}
        text={'ReactJS'}
      />
      <SectionTwoLeftOneRowComponent
        icons={[Github]}
        iconClassNames={'h-14 w-14'}
        text={'Github'}
      />
    </div>
  )
}

const SectionTwoLeftOneRowComponent = ({ text, icons, iconClassNames }) => {
  const iconContainerClassNames = 'iconContainer h-14 w-44 flex justify-center'
  return (
    <div className="oneRowContainer w-full h-14 flex justify-between">
      <div className={iconContainerClassNames}>
        {icons.map((Icon, index) => {
          return <Icon key={index} className={iconClassNames} />
        })}
      </div>
      <div className="h-14 text-white flex-grow flex flex-col justify-center">
        <span className="italic sm:ml-8 text-green-300">{text}</span>
      </div>
    </div>
  )
}
const SectionTwoLeftOneRow = ({ text }) => {
  const iconContainerClassNames = 'iconContainer h-14 w-44 flex justify-center'
  return (
    <div className="oneRowContainer w-full h-14 flex justify-between">
      <div className={iconContainerClassNames}>
        <div className="myHeadLiterally h-14 w-14" />
      </div>
      <div className="h-14 text-white flex-grow flex flex-col justify-center">
        <span className="italic sm:ml-8 text-green-300">{text}</span>
      </div>
    </div>
  )
}

export default SectionTwoLeft
