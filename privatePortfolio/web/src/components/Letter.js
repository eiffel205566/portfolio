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

  const moreStyle = additionalStyle
    ? {
        backgroundImage:
          'url(https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)',
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
