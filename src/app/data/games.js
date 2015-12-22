import MnemonicNumberImages from './mnemonic/games/mnemonicNumberImages'
import MnemonicThreeCharNumberImages from "./mnemonic/games/mnemonicThreeCharNumberImages"
import MnemonicMonthImages from "./mnemonic/games/mnemonicMonthImages"
import MnemonicDaysImages from "./mnemonic/games/mnemonicDaysImages"
import MnemonicAlphabetImages from "./mnemonic/games/mnemonicAlphabetImages"
import MnemonicFemaleNameImages from "./mnemonic/games/mnemonicFemaleNameImages"
import MnemonicMaleNameImages from "./mnemonic/games/mnemonicMaleNameImages"
import MnemonicNameImages from "./mnemonic/games/mnemonicNameImages"

/*
 * The following object maps the route to the correct game object
 * and also makes it possible for GetMnemonicImages to find the
 * corresponding data-object to each route.
 */
const Games = {
  twodigits: MnemonicNumberImages,
  threedigits: MnemonicThreeCharNumberImages,
  letters: MnemonicAlphabetImages,
  days: MnemonicDaysImages,
  month: MnemonicMonthImages,
  allName: MnemonicNameImages,
  femaleName: MnemonicFemaleNameImages,
  maleName: MnemonicMaleNameImages,
}

export default Games
