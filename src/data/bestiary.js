// TODO add descriptions
// TODO ungenau RB, Zauberresistenz, regeneration, Nachladen, Elementare Angriffe, Gift

export const alias = [
  {
    short: 'tp',
    long: 'Trefferpunkte',
    mod: 3,
    emoji: '❤️',
    help: 'Trefferpunkte der Kreatur'
  },
  {
    short: 'ini',
    long: 'Initiative',
    mod: 5,
    help: 'Der Initiative-Wert inklusive aller Bonusse und Malusse (insbesondere die durch Waffen). Maximaler negative Initiative -3.'
  },
  {
    short: 'kb',
    long: 'Kampfbonus',
    mod: 20,
    help: 'Der Kampfbonus inklusive aller Bonusse und Malusse. Mehrfachangriffe werden aufsummiert.'
  },
  {
    short: 'rb',
    long: 'Rüstungsbonus',
    mod: 10,
    emoji: '🛡️',
    help: 'Der Rüstungswert der Kreatur. Dieser kann auch durch Magie oder durch seine Art/Konstruktion zustande kommen.'
  },
  {
    short: 's',
    long: 'Schaden',
    mod: 10,
    emoji: '🗡️',
    help: 'Der Schadensbonus inklusive aller Bonusse und Malusse (insbesondere die durch Waffen). Maximaler negativer Schaden -3.'
  },
  {
    short: 'mb',
    long: 'Magiepunkte',
    mod: 5,
    help: 'Magiepunkte, die der Kreatur zur Verfügung stehen'
  },
  {
    short: 'spelll',
    long: 'Spruchliste',
    mod: 10,
    help: 'Diese sind mit Rang angegeben'
  },
  {
    short: 'targetedspells',
    long: 'Gezielte Sprüche',
    mod: 20,
    help: ''
  },
  {
    short: 'magres',
    long: 'Zauberresistenz',
    mod: 15,
    help: 'Wenn eine Kreatur gegen Zauber resistent ist, dann erhällt sie einen Bonus in der angegebenen Höhe auf ihre Rüstung gegen gezielte Zauber.'
  },
  {
    short: 'reg',
    long: 'Regeneration',
    mod: 15,
    help: 'Die Fähigkeit einer Kreatur, Trefferpunkte von Natur aus wiederzuerhalten. Üblicherweise gewinnt die Kreatur so viele TP pro Runde wieder, wie dort als Zahl angegeben sind. Beispielsweise würde Regeneration 2 bedeuten, dass die Kreatur 2TP pro Runde regeneriert.'
  },
  {
    short: 'reload',
    long: 'Nachladen',
    mod: 30,
    help: ''
  },
  {
    short: 'elemenatt',
    long: 'Elementare Angriffe',
    mod: 15,
    help: ''
  },
  {
    short: 'fear',
    long: 'Angst',
    mod: 20,
    help: 'Die Kreatur löst Angst aus, die mit Einflussnahme oder einem Intelligenzmanöver überwunden werden kann. Der SG ist der jeweiligen Beschreibung zu entnehmen. Ansonsten flieht der Verängstigte und wird einen Würfelwurf in Stunden nicht zurückkehren können.'
  },
  {
    short: 'venom',
    long: 'Gift',
    mod: 30,
    help: ''
  },
  {
    short: 'flying',
    long: 'Fliegend',
    mod: 40,
    bool: true,
    help: 'Eine fliegende Kreatur kann sich über Hindernisse hinwegbewegen usw. Für sie gelten ansonsten die gleichen Regeln zur Bewegung (analog), Deckung und Entfernung.'
  },
  {
    short: 'bodiless',
    long: 'Körperlos',
    mod: 60,
    bool: true,
    help: 'Körperlose Kreaturen können nur durch Magie (Artefakte, Zauber oder Wunder) wirkungsvoll bekämpft werden. Alle anderen Einwirkungen richten nur den halben Schaden an.'
  },
  {
    short: 'scream',
    long: 'Schrei',
    mod: 40,
    bool: true,
    help: ''
  },
  {
    short: 'pack',
    long: 'Jagdrudel',
    mod: 60,
    bool: true,
    help: ''
  },
  {
    short: 'reborn',
    long: 'Wiederauferstehung',
    mod: 120,
    bool: true,
    help: ''
  },
  {
    short: 'doesnotdie',
    long: 'Stirbt nicht',
    mod: 240,
    bool: true,
    help: ''
  },
  {
    short: 'yielding',
    long: 'Nachgiebig',
    mod: 30,
    bool: true,
    help: ''
  },
  {
    short: 'spread',
    long: 'Ausbreitung',
    mod: 360,
    bool: true,
    help: ''
  },
  {
    short: 'sensitive',
    long: 'Verletzlich',
    mod: -60,
    bool: true,
    help: ''
  },
  {
    short: 'vulnerable',
    long: 'Verwundbar',
    mod: -180,
    bool: true,
    help: ''
  }
]