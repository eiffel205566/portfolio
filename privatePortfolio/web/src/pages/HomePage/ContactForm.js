import { CONTACT } from './UtilRandomLetter'
import { toast, Toaster } from '@redwoodjs/web/toast'

export const ContactForm = ({ carouselX }) => {
  const onSubmit = (e) => {
    e.preventDefault()
    const formItems = Array.from(e.target.elements).filter((item) => {
      if (item?.id) {
        return item
      }
    })
    // const dataToSubmit = formItems
    //   .map(
    //     (element) =>
    //       encodeURIComponent(element.name) +
    //       '=' +
    //       encodeURIComponent(element.value)
    //   )
    //   .join('&')

    // console.log(dataToSubmit)
    formItems.forEach((item) => (item.value = ''))
    toast.success('Thanks for reaching out!')
  }

  return (
    <>
      <Toaster timeout={2000} />
      <section
        id={'contactContainer'}
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=600)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="contactSection bg-gray-500 relative h-102"
      >
        {carouselX.contactFormVisible && (
          <div className="contactContainer max-w-5xl h-full mx-auto flex flex-col pb-5 sm:pb-0 overflow-hidden">
            <div className="text-4xl flex mx-auto love mb-5">
              {Array.from(CONTACT).map((letter, index) => (
                <div key={index} className="transform w-min transition-all">
                  <div
                    className="spinningOnce"
                    style={{
                      opacity: 0,
                      animationName: 'spinningOnce',
                      animationTimingFunction: 'linear',
                      animationDelay: (index + 5) * 100 + 'ms',
                      animationIterationCount: 1,
                      animationDirection: 'normal',
                      animationFillMode: 'forwards',
                      background:
                        '-webkit-linear-gradient(right, #3f87a6, #ebf8e1, #f69d3c)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    {letter}
                  </div>
                </div>
              ))}
            </div>
            <form
              className="z-40 mx-auto love text-white popin"
              name="contact"
              method="post"
              onSubmit={(e) => onSubmit(e)}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p>
                <label className="hidden" htmlFor="name">
                  Name
                </label>{' '}
                <br className="hidden" />
                <input
                  className="bg-overlay w-72 h-10 p-1"
                  placeholder={'Your Name'}
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </p>
              <p>
                <label className="hidden" htmlFor="email">
                  Email
                </label>{' '}
                <br className="hidden" />
                <input
                  className="my-1 bg-overlay w-72 h-10 p-1"
                  placeholder={'Your Email'}
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </p>
              <p>
                <label className="hidden" htmlFor="message">
                  Message
                </label>{' '}
                <br className="hidden" />
                <textarea
                  placeholder={'Your Message'}
                  className="bg-overlay w-72 h-36 p-1"
                  id="message"
                  name="message"
                  required
                ></textarea>
              </p>
              <p>
                <input
                  className="bg-opcaity-100 bg-overlay border w-20 hover:text-green-300 cursor-pointer"
                  type="submit"
                  value="Submit"
                />
              </p>
            </form>
          </div>
        )}
      </section>
    </>
  )
}
