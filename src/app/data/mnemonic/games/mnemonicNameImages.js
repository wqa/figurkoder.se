import MnemonicFemaleNameImages from "./mnemonicFemaleNameImages"
import MnemonicMaleNameImages from "./mnemonicMaleNameImages"

const MnemonicNameImages = {
  title: 'Namn',
  description: 'Här är figurkoder för de 50 vanligaste kvinnonamnen och de 50 vanligaste mansnamnen.',
  start: 'Anna',
  stop: 'Filip',
  dropdown: true,
  data: [
    ...MnemonicFemaleNameImages.data,
    ...MnemonicMaleNameImages.data,
  ],
}

export default MnemonicNameImages
