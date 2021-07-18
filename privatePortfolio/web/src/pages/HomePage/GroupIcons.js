import { Github, Live } from 'src/components/svg'

const GroupIcons = ({ liveUrl, gitUrl }) => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="mx-auto flex justify-between">
        <a href={liveUrl} className="h-12 w-12 cursor-pointer">
          <Live className="h-full w-full" />
        </a>
        <a href={gitUrl} className="h-12 w-12 cursor-pointer">
          <Github className="h-full w-full" />
        </a>
      </div>
    </div>
  )
}

export default GroupIcons
