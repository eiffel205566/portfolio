export default RandomnizeLetters = (func) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  const allLetters = [...letters.split(''), letters.toUpperCase().split('')]

  func((state) => {
    return {
      ...state,
      displayedText: state.displayedText,
    }
  })
}
