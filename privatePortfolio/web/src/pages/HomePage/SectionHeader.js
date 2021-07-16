const SectionHeader = ({ text, color, textColor }) => {
  return (
    <div
      className={`introHeader h-10 w-48 bg-${color} border border-transparent rounded-3xl absolute top-0 right-1/2 transform -translate-y-1/2 translate-x-1/2`}
    >
      <div className="h-full flex flex-col justify-center">
        <span className={`love text-xl text-center text-${textColor}`}>
          {text}
        </span>
      </div>
    </div>
  )
}

export default SectionHeader
