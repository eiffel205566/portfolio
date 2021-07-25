import {
  Graphql,
  Prisma,
  Railway,
  Redwood,
  Tailwind,
  ReactIcon,
  Netlify,
  Javascript,
  Css,
  Github,
} from 'src/components/svg'
const Letter = ({
  letter,
  index,
  len,
  direction,
  forwardSpeed = 20,
  backwardSpeed = 10,
  additionalStyle = false,
  additionalStyleColor = '',
  animationName,
}) => {
  let ms
  let style
  const Icons = {
    react: ReactIcon,
    gql: Graphql,
    tailwind: Tailwind,
    railway: Railway,
    netlify: Netlify,
    javascript: Javascript,
    css: Css,
    github: Github,
  }
  let iconName = typeof letter === 'string' ? null : Object.keys(letter)[0]
  let Icon = iconName ? Icons[iconName] : null
  let background = additionalStyleColor
    ? `-webkit-linear-gradient(right, ${additionalStyleColor})`
    : '-webkit-linear-gradient(right, #3f87a6, #ebf8e1, #f69d3c)'

  const moreStyle = additionalStyle
    ? {
        background,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      }
    : {}

  if (Object.is(undefined, direction) || direction === 'forward') {
    //forward
    ms = index * forwardSpeed + 'ms'
    style = {
      opacity: '0',
      animationName: 'letterOpacity',
      animationTimingFunction: 'ease-in-out',
      animationDuration: '0.2s',
      animationDelay: ms,
      animationIterationCount: 1,
      animationDirection: 'normal',
      animationFillMode: 'forwards',
      ...moreStyle,
    }
  } else {
    //backwards
    ms = (len - index) * backwardSpeed + 'ms'
    style = {
      opacity: '1',
      animationName: 'letterOpacityBack',
      animationTimingFunction: 'ease-in-out',
      animationDuration: '0.2s',
      animationDelay: ms,
      animationIterationCount: 1,
      animationDirection: 'normal',
      animationFillMode: 'forwards',
      ...moreStyle,
    }
  }

  return (
    <span index={index} style={{ ...style }} className="letter relative inline">
      {typeof letter === 'string' ? (
        letter
      ) : (
        <Icon className="w-5 h-5 inline" />
      )}
    </span>
  )
}

export default Letter
