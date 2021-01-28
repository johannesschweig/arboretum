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

function getMoney(kl) {
  if (!kl) {
    return '0'
  } else if (kl < 10) {
    return `${Math.round(kl)} KL`
  } else if (kl < 100) {
    return `${Math.round(kl/10)} TT`
  } else if (kl < 100000) {
    return `${Math.round(kl/100)} GF`
  } else {
    return `${Math.round(kl/100000)} kGF`
  }
}

function getTreasure(sg) {
  if (!sg) {
    return {
      type: 'A',
      val: 0
    }
  }
  let t = (57.5306 * Math.pow(sg, 0.0461748)) - 58.4278
  return {
    type: 'ABCDEFG'[Math.round(t-1)],
    val: getMoney(Math.pow(10, t-1))
  }
}

export function getAttrString(attr, sg) {
  let str = ''
  for(let i = 0; i < alias.length; i++) {
    str += getAttrPiece({
      ...alias[i],
      attr: attr[alias[i].short]
    })
  }
  // calculate treasure
  let treasure = getTreasure(sg)
  return str += `SG ${sg} / Schatz ${treasure.val} (${treasure.type})`
}

export function getKP(attr, mod) {
  // attr is 0
  if (attr === 0) {
    return 0
  }
  // mod is an array
  if (Array.isArray(mod)) {
    if (attr > mod.length) { // attr not in range
      let last = mod[mod.length - 1]
      let next = (attr - mod.length) * (last - mod[mod.length - 2])
      return last + next
    } else {
      return mod[attr - 1]
    }
  }
  return attr * mod
}

export function getSG(kp) {
  // compute new difficulty level
  //          [1....., 2  , 3  , 4  ,...]
  let ranks = [1, 120, 180, 240, 300, 360, 420, 480, 540, 600, 800, 1000, 1200, 1400, 1600, 2000, 2400, 2800, 3200, 3600, 4200]
  let last = 0 // last creature points level
  for (let i = 0; i < ranks.length; i++) {
    if (kp < ranks[i]) {
      // partial sg
      let prog = kp - last
      let spread = ranks[i] - last
      let increment = Math.round(prog / spread * 10) / 10
      return i + increment
    }
    last = ranks[i] 
  }
}