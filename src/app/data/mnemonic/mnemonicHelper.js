const MnemonicHelper = {
  checkRange(begin, end, lenght) {
    if (begin < 0) {
      throw new RangeError("\"begin: number\" must be more than zero!")
    }
    if (!end) {
      throw new RangeError("\"end: number\" must be more than zero when using \"begin: number\"!")
    }
    if (begin > end) {
      throw new RangeError("\"end: number\" must be greater than \"begin: number\"!")
    }
    if (end > (lenght - 1)) {
      throw new RangeError("Out of range (\"begin\" - \"end\" > " + (lenght - 1) + ") !")
    }
  },

  // A big thanks to Anton K. Andersson, http://antonkandersson.se/, for teaching me the following code
  pushArray(begin, end, source) {
    return source.filter((element, index, array) => {
      return index >= begin && index < end
    })
  },

  // From http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  },
}

export default MnemonicHelper
