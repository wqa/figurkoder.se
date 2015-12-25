import Games from '../games'
import MnemonicHelper from "./mnemonicHelper"

const GetMnemonicImages = ({
  begin: begin = null,
  end: end = null,
  random: random = false,
  type: type = null,
}) => {
  const arr = Games[type].data
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
