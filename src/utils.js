import { alias } from './data/bestiary'

// object, index
function getAttrPiece(obj) {
  let str = ''
  // check if different from 0 or in the top 5
  if (obj.attr != 0 || ['tp', 'ini', 'kb', 'rb', 's'].includes(obj.short)) {
    let short
    let val = obj.attr
    // check if emoji
    if (obj.emoji) {
      short = obj.emoji
    } else if (obj.bool) {
      short = obj.long
      val = ''
    } else {
      short = obj.long
    }
    str = `${short} ${val} / `
  } else {
  }
  return str
}

export function getAttrString(attr) {
    // <p>TODO ♥ {{attr.tp}} / INI 0 / KB 3 / 🛡 6 / 🗡 -1 / MP 12 / Spruchl 4 / SG4</p>
  let str = ''
  for(let i = 0; i < alias.length; i++) {
    str += getAttrPiece({
      ...alias[i],
      attr: attr[alias[i].short]
    })
  }
  return str
}
