const FooterIcon = ({ href, Icon, textColor }) => {
  return (
    <a
      href={href}
      className="h-full w-14 flex mx-2 cursor-pointer overflow-y-hidden "
    >
      <div className="footerIconContainer relative h-14 w-14 m-auto flex flex-col justify-center transform transition-all duration-500 hover:bg-gray-500 overflow-y-hidden">
        <Icon className={`footerIcon h-8 w-8 m-auto text-${textColor}`} />
        <Icon
          className={`footerIcon2 absolute h-8 w-8 m text-${textColor} right-3`}
        />
      </div>
    </a>
  )
}

export default FooterIcon
