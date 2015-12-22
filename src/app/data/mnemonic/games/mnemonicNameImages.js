import MnemonicFemaleNameImages from "./mnemonicFemaleNameImages"
import MnemonicMaleNameImages from "./mnemonicMaleNameImages"

const MnemonicNameImages = {
  title: 'Namn',
  description: 'Låt oss öva på lite namn vetja! It be fun, they said...',
  start: 'Anna',
  stop: 'Filip',
  option: 'dropdown',
  data: [
    ...MnemonicFemaleNameImages,
    ...MnemonicMaleNameImages,
  ],
}

export default MnemonicNameImages
