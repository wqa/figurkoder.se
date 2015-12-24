import Games from '../games'
import MnemonicHelper from "./mnemonicHelper"

const GetMnemonicImages = (options) => {
  options = options || {}
  let begin = options.begin || null,
  end = options.end || null, random = options.random || null

  const arr = Games[options.type].data
  if (!arr) { throw new Error("Unknown type: " + options.type) }

  if (!begin && !end) {
    return arr
  } else {
    MnemonicHelper.checkRange(begin, end, arr.length)
  }
  if (begin || end) {
    let straightArray = MnemonicHelper.pushArray(begin, end + 1, arr)
  }
  if (!random) {
    return straightArray
  }
  if (random) {
    return MnemonicHelper.shuffleArray(straightArray)
  }
}

export default GetMnemonicImages