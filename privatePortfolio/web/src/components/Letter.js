import {
  Graphql,
  Prisma,
  Railway,
  Redwood,
  Tailwind,
  ReactIcon,
  Netlify,
} from 'src/components/svg'
const Letter = ({ letter, index, len, direction }) => {
  let ms
  let style
  const Icons = {
    react: ReactIcon,
    gql: Graphql,
    tailwind: Tailwind,
    railway: Railway,
    netlify: Netlify,
  }
  let iconName = typeof letter === 'string' ? null : Object.keys(letter)[0]
  let Icon = iconName ? Icons[iconName] : null

  if (Object.is(undefined, direction) || direction === 'forward') {
    //forward
    ms = index * 20 + 'ms'
    style = {
      opacity: '0',
      animationName: 'letterOpacity',
      animationTimingFunction: 'ease-in-out',
      animationDuration: '0.2s',
      animationDelay: ms,
      animationIterationCount: 1,
      animationDirection: 'normal',
      animationFillMode: 'forwards',
    }
  } else {
    //backwards
    ms = (len - index) * 10 + 'ms'
    style = {
      opacity: '1',
      animationName: 'letterOpacityBack',
      animationTimingFunction: 'ease-in-out',
      animationDuration: '0.2s',
      animationDelay: ms,
      animationIterationCount: 1,
      animationDirection: 'normal',
      animationFillMode: 'forwards',
    }
  }

  return (
    <span index={index} style={{ ...style }} className="letter relative inline">
      {typeof letter === 'string' ? (
        letter
      ) : (
        <Icon className="w-4 h-4 inline" />
      )}
    </span>
  )
}

export default Letter
