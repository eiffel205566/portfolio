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
  'by grouping entries into different types with fully customizable tags in user specified time frame. ' +
  'Hover over picture to see a gif demo.'

export const PROJECTTWO =
  'ExpenseInsight.com is a web application writing in plain, good O Javascript and Css, ' +
  'no framework, no libraries, just flex box, grid, and good old document.querySelectorAll. ' +
  'With help of IndexDB (async browser based database), I was able to "mock" as if there is an' +
  ' actual database. Again, deployed thru Netlify with repo on Github as always.'

export const PROJECTTHREE =
  'Personal Portfolio is a simple website written with React and Tailwind to' +
  ' demonstrate some of my favorite styling techniques like class-based component display, ' +
  'IntersectionObserver for scroll detection, lazy-loading with custom hook, and usage of svg pictures. ' +
  'Finally, everytime user refresh page, app will hit Unsplash API and grab 10 new wallpapers!'

export const placeholderPicUrls = {
  thumbOne:
    'https://images.unsplash.com/photo-1448375240586-882707db888b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDc1OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjY3NTMyNjY&ixlib=rb-1.2.1&q=80&w=200',
  thumbTwo:
    'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDc1OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjY3NTMyNjY&ixlib=rb-1.2.1&q=80&w=200',
  regularOne:
    'https://images.unsplash.com/photo-1448375240586-882707db888b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDc1OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjY3NTMyNjY&ixlib=rb-1.2.1&q=80&w=1080',
  regularTwo:
    'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDc1OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjY3NTMyNjY&ixlib=rb-1.2.1&q=80&w=1080',
  key: 'ip0uGEjY9rQhmfupiHJo4QYnurAjcWYoC-F8rBTlc-4',
}
