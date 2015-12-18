import mnemonicData from './mnemonic/mnemonicData'

const Games = {
  twodigits: {
    title: 'Siffror',
    description: 'Låt oss öva på lite siffror vetja! It be fun, they said...',
    start: '00',
    stop: '99',
    option: 'textbox',
    get: mnemonicData.getNumberImages,
  },
  threedigits: {
    title: 'Siffror',
    description: 'Låt oss öva på lite siffror vetja! It be fun, they said...',
    start: '000',
    stop: '999',
    option: 'textbox',
    get: mnemonicData.getThreeCharNumberImages,
  },
  letters: {
    title: 'Bokstäver',
    description: 'Låt oss öva på lite bokstäver vetja! It be fun, they said...',
    start: 'A',
    stop: 'Ö',
    option: 'dropdown',
    get: mnemonicData.getAlphabetImages,
  },
  days: {
    title: 'Veckodagar',
    description: 'Låt oss öva på lite veckodagar vetja! It be fun, they said...',
    start: 'Måndag',
    stop: 'Söndag',
    option: 'dropdown',
    get: mnemonicData.getDaysImages,
  },
  month: {
    title: 'Månaderna',
    description: 'Låt oss öva på lite månaderna vetja! It be fun, they said...',
    start: 'Januari',
    stop: 'December',
    option: 'dropdown',
    get: mnemonicData.getMonthsImages,
  },
  allName: {
    title: 'Namn',
    description: 'Låt oss öva på lite namn vetja! It be fun, they said...',
    start: 'Anna',
    stop: 'Filip',
    option: 'dropdown',
    get: mnemonicData.getNameImages,
  },
  femaleName: {
    title: 'Kvinnonamn',
    description: 'Låt oss öva på lite namn vetja! It be fun, they said...',
    start: 'Anna',
    stop: 'Jessica',
    option: 'dropdown',
    get: mnemonicData.getFemaleNameImages,
  },
  maleName: {
    title: 'Mansnamn',
    description: 'Låt oss öva på lite namn vetja! It be fun, they said...',
    start: 'Lars',
    stop: 'Filip',
    option: 'dropdown',
    get: mnemonicData.getMaleNameImages,
  },
}

export default Games
