import { Fragment } from 'react'
const SectionThreeProjectOneLeft = ({ visible, content }) => {
  return (
    <Fragment>
      <div
        id={'sectionThreeProjectOneLeft'}
        className={`sectionThreeProjectOneLeft${
          visible ? '_visible' : ''
        } w-full sm:w-1/2 sm:h-96 flex flex-col my-5 sm:my-10 text-center`}
      >
        <h3 className="love text-green-500 text-center text-xl w-full">
          ExpInsight - A Full Stack Project
        </h3>
        <div className="w-72 sm:w-80 md:w-96 mx-auto text-lg">{content}</div>
      </div>
      <div
        id={'sectionThreeProjectOneLeftPlaceholder'}
        className="sectionThreeProjectOneLeftPlaceholder absolute h-96 w-1"
      ></div>
    </Fragment>
  )
}

export default SectionThreeProjectOneLeft
