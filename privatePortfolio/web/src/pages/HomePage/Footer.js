import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { FcUp } from 'react-icons/fc'
import { useState } from 'react'
import FooterIcon from './FooterIcon'

const Footer = () => {
  const [translateY, setTranslateY] = useState(null)

  return (
    <footer id={'footer'} className=" w-full bg-overlay relative flex flex-col">
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
      <div className="h-full flex flex justify-center mt-2">
        <FooterIcon
          Icon={AiFillLinkedin}
          href={'https://www.linkedin.com/in/sean-y-59bb1375/'}
          textColor={'blue-300'}
        />

        <FooterIcon
          Icon={AiFillGithub}
          href="https://github.com/eiffel205566"
          textColor={'gray-300'}
        />

        <FooterIcon
          Icon={AiOutlineMail}
          href="mailto:sean.yang56@outlook.com"
          textColor={'yellow-300'}
        />
      </div>
      <div className="h-10 text-center text-white text-lg text-gray-500">
        SEAN YANG ©2021
      </div>
    </footer>
  )
}

export default Footer
