// const randomnizeLetters = (func) => {
//   let timeId = setTimeout(function t() {
//     const letters = 'abcdefghijklmnopqrstuvwxyz'
//     const allLetters = [...letters.split(''), letters.toUpperCase().split('')]
//     func((state) => {
//       console.log(allLetters[Math.floor(Math.random()) * allLetters.length])
//       // return {
//       //   ...state,
//       //   displayedText: allLeters[Math.floor(Math.random()) * allLetters.length],
//       // }
//     })
//     timeId = setTimeout(t(allLetters), 500)
//   }, 500)
//   setTimeout(() => clearTimeout(timeId), 3000)
// }

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

export default randomnizeLetters
