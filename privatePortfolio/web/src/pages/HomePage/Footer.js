import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import SectionHeader from './SectionHeader'
import { FcUp } from 'react-icons/fc'

const Footer = () => {
  return (
    <footer className="h-20 w-full bg-overlay relative">
      <div
        className={
          'scrollToTop cursor-pointer h-10 w-10 bg-transparent border border-transparent rounded-full absolute top-0 right-1/2 transform -translate-y-1/2 translate-x-1/2'
        }
      >
        <div
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }}
          className="h-full flex flex-col justify-center animate-bounce"
        >
          <span className={'love text-xl text-center'}>
            <FcUp className="h-10 w-10 mx-auto" />
          </span>
        </div>
      </div>
      <div className="h-full flex flex justify-center">
        <a
          href="https://www.linkedin.com/in/sean-y-59bb1375/"
          className="h-full flex flex-col justify-center mx-2 cursor-pointer"
        >
          <AiFillLinkedin className="h-10 w-10 text-blue-300" />
        </a>
        <a
          href="https://github.com/eiffel205566"
          className="h-full flex flex-col justify-center mx-2 cursor-pointer"
        >
          <AiFillGithub className="h-10 w-10 text-gray-300" />
        </a>
        <a
          href="mailto:sean.yang56@outlook.com"
          className="h-full flex flex-col justify-center mx-2 cursor-pointer"
        >
          <AiOutlineMail className="h-10 w-10 text-yellow-300" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
