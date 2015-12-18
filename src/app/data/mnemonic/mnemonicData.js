import MnemonicNumberImages from "./mnemonicNumberImages"
import MnemonicMonthImages from "./mnemonicMonthImages"
import MnemonicDaysImages from "./mnemonicDaysImages"
import MnemonicAlphabetImages from "./mnemonicAlphabetImages"
import {MnemonicFemaleNameImages, MnemonicMaleNameImages, MnemonicNameImages} from "./mnemonicNameImages"
import MnemonicThreeCharNumberImages from "./mnemonicThreeCharNumberImages"
import MnemonicHelper from "./mnemonicHelper"

const mnemonicData = {
  getAlphabetImages(options) {
    options = options || {}
    let begin = options.begin || null,
    end = options.end || null, random = options.random || null

    if (!begin && !end) {
      return MnemonicAlphabetImages
    } else {
      MnemonicHelper.checkRange(begin, end, MnemonicAlphabetImages.length)
    }
    if (begin || end) {
      let straightArray = MnemonicHelper.pushArray(begin, end + 1, MnemonicAlphabetImages)
    }
    if (!random) {
      return straightArray
    }
    if (random) {
      return MnemonicHelper.shuffleArray(straightArray)
    }
  },

  getDaysImages(options) {
    options = options || {}
    let begin = options.begin || null,
    end = options.end || null, random = options.random || null

    if (!begin && !end) {
      return MnemonicDaysImages
    } else {
      MnemonicHelper.checkRange(begin, end, MnemonicDaysImages.length)
    }
    if (begin || end) {
      let straightArray = MnemonicHelper.pushArray(begin, end + 1, MnemonicDaysImages)
    }
    if (!random) {
      return straightArray
    }
    if (random) {
      return MnemonicHelper.shuffleArray(straightArray)
    }
  },

  getMonthsImages(options) {
    options = options || {}
    let begin = options.begin || null,
    end = options.end || null, random = options.random || null

    if (!begin && !end) {
      return MnemonicMonthImages
    } else {
      MnemonicHelper.checkRange(begin, end, MnemonicMonthImages.length)
    }
    if (begin || end) {
      let straightArray = MnemonicHelper.pushArray(begin, end + 1, MnemonicMonthImages)
    }
    if (!random) {
      return straightArray
    }
    if (random) {
      return MnemonicHelper.shuffleArray(straightArray)
    }
  },

  getNumberImages(options) {
    options = options || {}
    let begin = options.begin || null,
    end = options.end || null, random = options.random || null

    if (!begin && !end) {
      return MnemonicNumberImages
    } else {
      MnemonicHelper.checkRange(begin, end, MnemonicNumberImages.length)
    }
    if (begin || end) {
      let straightArray = MnemonicHelper.pushArray(begin, end + 1, MnemonicNumberImages)
    }
    if (!random) {
      return straightArray
    }
    if (random) {
      return MnemonicHelper.shuffleArray(straightArray)
    }
  },

  getThreeCharNumberImages(options) {
    options = options || {}
    let begin = options.begin || null,
    end = options.end || null, random = options.random || null

    if (!begin && !end) {
      return MnemonicThreeCharNumberImages
    } else {
      MnemonicHelper.checkRange(begin, end, MnemonicThreeCharNumberImages.length)
    }
    if (begin || end) {
      let straightArray = MnemonicHelper.pushArray(begin, end + 1, MnemonicThreeCharNumberImages)
    }
    if (!random) {
      return straightArray
    }
    if (random) {
      return MnemonicHelper.shuffleArray(straightArray)
    }
  },

  getNameImages(options) {
    options = options || {}
    let begin = options.begin || null,
    end = options.end || null, random = options.random || null

    if (!begin && !end) {
      return MnemonicNameImages
    } else {
      MnemonicHelper.checkRange(begin, end, MnemonicNameImages.length)
    }
    if (begin || end) {
      let straightArray = MnemonicHelper.pushArray(begin, end + 1, MnemonicNameImages)
    }
    if (!random) {
      return straightArray
    }
    if (random) {
      return MnemonicHelper.shuffleArray(straightArray)
    }
  },

  getFemaleNameImages(options) {
    options = options || {}
    let begin = options.begin || null,
    end = options.end || null, random = options.random || null

    if (!begin && !end) {
      return MnemonicFemaleNameImages
    } else {
      MnemonicHelper.checkRange(begin, end, MnemonicFemaleNameImages.length)
    }
    if (begin || end) {
      let straightArray = MnemonicHelper.pushArray(begin, end + 1, MnemonicFemaleNameImages)
    }
    if (!random) {
      return straightArray
    }
    if (random) {
      return MnemonicHelper.shuffleArray(straightArray)
    }
  },

  getMaleNameImages(options) {
    options = options || {}
    let begin = options.begin || null,
    end = options.end || null, random = options.random || null

    if (!begin && !end) {
      return MnemonicMaleNameImages
    } else {
      MnemonicHelper.checkRange(begin, end, MnemonicMaleNameImages.length)
    }
    if (begin || end) {
      let straightArray = MnemonicHelper.pushArray(begin, end + 1, MnemonicMaleNameImages)
    }
    if (!random) {
      return straightArray
    }
    if (random) {
      return MnemonicHelper.shuffleArray(straightArray)
    }
  },
}

export default mnemonicData
