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
  'After working many years in finance industry as data analyst and system admin writing scripting programs,' +
  ' automation tools, web crawlers, macros and deeply-nested-hard-to-understand' +
  '-yet-necessary Excel functions, I finally relinquished every shred of doubt' +
  ' in my mind and decided that I would not work on anything other than programming' +
  ' and coding. I taught myself HTML, CSS, Javascript, React, Graphql, Prisma,' +
  ' Apollo, MangoDB, and now I am a web dev...'

export default randomnizeLetters

export const PROJECTONE =
  'Expinsight is a full stack web application to help user tracking daily expense ' +
  'and record income. It is written in React for frontend, Graphql & Prisma for backend,' +
  ' styled with Tailwind CSS, connected to Postgres database on Railway, and deployed thru Netlify.' +
  ' The application provides users ability to analyze expense & income ' +
  'by grouping entries into different types with fully customizable tags in user specified time frame. '
