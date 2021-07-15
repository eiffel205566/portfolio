const randomnizeLetters = (func) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  const allLetters = [...letters.split(''), letters.toUpperCase().split('')]
  let timeId = setTimeout(function t() {
    let randomLetter = allLetters[Math.floor(Math.random() * allLetters.length)]
    // console.log(allLetters[Math.floor(Math.random() * allLetters.length)])
    func((state) => {
      return {
        ...state,
        displayedText: randomLetter,
      }
    })

    timeId = setTimeout(t, 100)
  }, 100)
  setTimeout(() => clearTimeout(timeId), 500)
}

export const NOTES =
  'After working many years in finance industry writing scripting programs, automation tools, web crawlers, macros and deeply-nested-hard-to-understand-yet-necessary Excel functions, I finally relinquished every shred of doubt in my mind and decided that I would not work on anything other than programming and coding, so I taught myself HTML, CSS, Javascript, React, Graphql, Prisma, Apollo, MangoDB in last year, and now I am web dev...'

export default randomnizeLetters
