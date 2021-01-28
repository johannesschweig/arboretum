// TODO spruchl inaccurate

export const alias = [{
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
    mod: [ 10, 20, 30, 40, 50, 75, 100, 125 ],
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
    short: 'mp',
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
    help: 'Auch die Kreaturen brauchen für Gezielte Sprüche ein Manöver - analog zum Kampf.'
  },
  {
    short: 'magres',
    long: 'Zauberresistenz',
    mod: [ 15, 30, 45, 60, 75, 95, 115, 135, 155, 175, 195 ],
    help: 'Wenn eine Kreatur gegen Zauber resistent ist, dann erhält sie einen Bonus in der angegebenen Höhe auf ihre Rüstung gegen gezielte Zauber.'
  },
  {
    short: 'reg',
    long: 'Regeneration',
    mod: [ 15, 30, 45, 60, 75, 95, 115, 135, 155, 175, 195 ],
    help: 'Die Fähigkeit einer Kreatur, Trefferpunkte von Natur aus wiederzuerhalten. Üblicherweise gewinnt die Kreatur so viele TP pro Runde wieder, wie dort als Zahl angegeben sind. Beispielsweise würde Regeneration 2 bedeuten, dass die Kreatur 2TP pro Runde regeneriert.'
  },
  {
    short: 'reload',
    long: 'Nachladen',
    mod: [ 30, 60, 90, 120, 150, 200, 250, 300, 350, 400, 500 ],
    help: 'Diese besondere Eigenschaft regeneriert Magiepunkte pro Runde.'
  },
  {
    short: 'elemenatt',
    long: 'Elementare Angriffe',
    mod: [ 15, 30, 45, 60, 75, 95, 115, 135, 155, 175, 195 ], 
    help: 'Eine Kreatur, die über diese Besondere Eigenschaft verfügt, richtet zusätzlich zum normalen Schaden - der ebenfalls dem Element schon entspringt, noch einen Schaden in Höhe des hier angegeben Wertes an. Elementarangriffe können Sekundärschäden verursachen. Ein Feuerschaden kann beispielsweise auch Entzünden.'
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
    mod: [ 30, 60, 90, 120, 150, 210, 270, 330, 390, 450, 650 ],
    help: 'Der Biss einiger Tiere oder der Verzehr bestimmter Pflanzen kann giftig sein.'
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
    help: 'Der Schrei kann ein Opfer eine Runde lang lähmen, in der Zeit ist es handlungsunfähig (keine Manöver, Bewegungen, Angriffe oder Zauber). Einflussnahme oder Intelligenz-Manöver MS 12 können dies vermeiden.'
  },
  {
    short: 'pack',
    long: 'Jagdrudel',
    mod: 60,
    bool: true,
    help: 'Diese Kreaturen sind meistens im Rudel unterwegs und erhalten dann ein +1 auf die Initative und ein +1 auf den Kampfbonus.'
  },
  {
    short: 'reborn',
    long: 'Wiederauferstehung',
    mod: 120,
    bool: true,
    help: 'Die Kreatur wird beliebig oft wieder innerhalb eines Tages auferstehen, sofern sie nicht tatsächlich "zerstört" wird. Die tastächlich Zerstörung kann eine spezielle Handlung erfordern, wie beispielsweise das (restlose) Verbrennen des leblosen Körpers.'
  },
  {
    short: 'doesnotdie',
    long: 'Stirbt nicht',
    mod: 240,
    bool: true,
    help: 'Die Kreatur wird beliebig oft wieder innerhalb 1w10 Runden auferstehen, sofern sie nicht tatsächlich "zerstört" wird. Die tastächlich Zerstörung kann eine spezielle Handlung erfordern, wie beispielsweise das (restlose) Verbrennen des leblosen Körpers.'
  },
  {
    short: 'yielding',
    long: 'Nachgiebig',
    mod: 30,
    bool: true,
    help: 'Stumpfe Waffen und Einwirkungen verursachen nur halben Schaden.'
  },
  {
    short: 'spread',
    long: 'Ausbreitung',
    mod: 360,
    bool: true,
    help: 'Die Kreatur wird, wenn sie die Hälfte ihrer Trefferpunkte verloren hat, ihre Brut abwerfen. Diese besteht aus sechs kleineren Kreaturen der Spezies: TP 6, INI +1, KB +2, Schaden -1, Rüstung 1. Die Kreatur wird erneut acht kleinere Kreaturen abwerfen, wenn sie kurz vor dem Tod ist.'
  },
  {
    short: 'sensitive',
    long: 'Verletzlich',
    mod: -60,
    bool: true,
    help: 'Die Kreatur ist gegenüber einer bestimmten Sache verletzlich und erhält bei Einwirkungen mit der bestimmten Sache doppelten Schaden. (Beispielsweise Wasser bei einem Feuerwesen.)'
  },
  {
    short: 'vulnerable',
    long: 'Verwundbar',
    mod: -180,
    bool: true,
    help: 'Die Kreatur ist gegenüber einer bestimmten Sache extrem empfindlich und erhält bei Einwirkungen mit der bestimmten Sache vierfachen Schaden. (Beispielsweise Wasser bei einem Feuerwesen.)'
  }
]

// list of creatures
export const creatures = [{
    name: 'Bär',
    weapon: 'Pranken oder Maul',
    orgSg: 4, 
    info: 'Orgsg 4',
    attr: {
      tp: 25,
      ini: 1,
      kb: 6,
      rb: 6,
      s: 1
    }
  },
  {
    name: 'Berglöwe',
    weapon: 'Krallen oder Maul',
    info: 'Orgsg 4',
    attr: {
      tp: 15,
      ini: 2,
      kb: 8,
      rb: 6,
      s: 1
    }
  },
  {
    name: 'Dämon',
    weapon: 'Waffe',
    info: 'Schwarze Magie Rang 3 Schatz E, Orgsg 6',
    attr: {
      tp: 30,
      ini: 1,
      kb: 6,
      rb: 9,
      s: 0,
      mp: 20,
      spelll: 3,
      targetedspells: 3
    }
  },
  {
    name: 'Feuerelementar',
    weapon: 'Elementarwaffe',
    info: '2 elementarschaden feuer, Orgsg 6',
    attr: {
      tp: 30,
      ini: 0,
      kb: 6,
      rb: 8,
      s: 1,
      magres: 1,
      reg: 3,
      elemenatt: 2
    }
  },
  {
    name: 'Wasserelementar',
    weapon: 'Elementarwaffe',
    info: 'Orgsg 6',
    attr: {
      tp: 60,
      ini: 0,
      kb: 6,
      rb: 8,
      s: 1,
      magres: 1,
      reg: 3
    }
  },
  {
    name: 'Erdeelementar',
    weapon: 'Elementarwaffe',
    info: 'Orgsg 6',
    attr: {
      tp: 30,
      ini: 0,
      kb: 6,
      rb: 10,
      s: 1,
      magres: 1,
      reg: 3,
      elemenatt: 0
    }
  },
  {
    name: 'Luftelementar',
    weapon: 'Elementarwaffe',
    info: 'Orgsg 6',
    attr: {
      tp: 30,
      ini: 0,
      kb: 6,
      rb: 8,
      s: 1,
      magres: 1,
      reg: 3,
      flying: 1,
      bodiless: 1
    }
  },
  {
    name: 'Gargoyle',
    weapon: 'Krallen',
    info: 'schwarze magie rang 2, schatz e, Orgsg 8',
    attr: {
      tp: 50,
      ini: -1,
      kb: 8,
      rb: 10,
      s: 2,
      mp: 6,
      spelll: 2,
      targetedspells: 3,
      reg: 1,
      flying: 1
    }
  },
  {
    name: 'Geist',
    weapon: 'Krallen',
    info: 'schatz c, Orgsg 3',
    attr: {
      tp: 20,
      ini: 0,
      kb: 2,
      rb: 8,
      s: -1,
      fear: 1,
      bodiless: 1
    }
  },
  {
    name: 'Ghul',
    weapon: 'Klauen oder Biss',
    info: 'schatz c; krankheiten wundbrand potentiell, Orgsg 6',
    attr: {
      tp: 40,
      ini: 0,
      kb: 6,
      rb: 6,
      s: 1,
      fear: 1
    }
  },
  {
    name: 'Goblin',
    weapon: 'Dolch',
    info: 'schatz a, Orgsg 1',
    attr: {
      tp: 4,
      ini: 0,
      kb: 2,
      rb: 6,
      s: -2
    }
  },
  {
    name: 'Harpyie',
    weapon: 'Krallen',
    info: 'freie magie 4; schatz e, Orgsg 8',
    attr: {
      tp: 30,
      ini: 2,
      kb: 10,
      rb: 7,
      s: 1,
      mp: 12,
      spelll: 4,
      flying: 1,
      scream: 1
    }
  },
  {
    name: 'Kraken',
    weapon: 'Mehrfachangriff: acht Angriffe mit Tentakel',
    info: 'schatz e, Orgsg 8',
    attr: {
      tp: 120,
      ini: -2,
      kb: 2,
      rb: 6,
      s: 0
    }
  },
  {
    name: 'Lindwurm',
    weapon: 'Krallen/Schwanz/Feueratem',
    info: 'Krallen 8/ 8Schwanz/Feueratem 12 (1.5m breiter Strahl 12m lang), freie magie bis 6, schwarze magie bis 2, schatz g, Orgsg 18',
    attr: {
      tp: 400,
      ini: 1,
      kb: 0,
      rb: 11,
      s: 3,
      mp: 80,
      spelll: 8,
      magres: 5,
      reg: 5
    }
  },
  {
    name: 'Meerechse',
    weapon: 'Biss',
    info: 'schatz c, Orgsg 5',
    attr: {
      tp: 50,
      ini: 2,
      kb: 8,
      rb: 8,
      s: 1
    }
  },
  {
    name: 'Oger',
    weapon: 'Keule/Morgenstern/Flegel/Einhand-Axt (Schade nach Waffe)',
    info: 'schatz B, Orgsg 4',
    attr: {
      tp: 30,
      ini: -1,
      kb: 8,
      rb: 7,
      s: 0
    }
  },
  {
    name: 'Ork',
    weapon: 'Kurzbogen/Morgenstern/Kurzschwert/Einhand-Axt (Schaden nach Waffe)',
    info: 'schatz b, Orgsg 2',
    attr: {
      tp: 12,
      ini: 0,
      kb: 3,
      rb: 7,
      s: 0
    }
  },
  {
    name: 'Riese',
    weapon: 'Keule/Steine',
    info: 'schatz F / kb keule 15 / kb steine 8; riese steinwurf malus auf entfernung, Orgsg 15',
    attr: {
      tp: 250,
      ini: -2,
      kb: 11,
      rb: 8,
      s: 0
    }
  },
  {
    name: 'Riesenechse',
    weapon: 'Biss',
    info: 'schatz c, Orgsg 6',
    attr: {
      tp: 60,
      ini: 2,
      kb: 9,
      rb: 8,
      s: 1
    }
  },
  {
    name: 'Riesenmoskitos',
    weapon: 'Stachel',
    info: '10 tiere, Orgsg 1',
    attr: {
      tp: 10,
      ini: 2,
      kb: 2,
      rb: 5,
      s: -2,
      flying: 1
    }
  },
  {
    name: 'Riesenspinne',
    weapon: 'Stachel',
    info: 'schatz E; gift 3 runden lähmen / ms 10 befreien, Orgsg 5',
    attr: {
      tp: 23,
      ini: 2,
      kb: 6,
      rb: 7,
      s: 1,
      venom: 3
    }
  },
  {
    name: 'Skelett',
    weapon: 'Waffe, schaden nach waffe',
    info: 'schatz c, Orgsg 2',
    attr: {
      tp: 8,
      ini: 1,
      kb: 2,
      rb: 5,
      s: 0
    }
  },
  {
    name: 'Troll',
    weapon: 'Keule/Morgenstern/Flegel/einhand-axt, Schaden nach waffe',
    info: 'schatz c, Orgsg 6',
    attr: {
      tp: 30,
      ini: 0,
      kb: 8,
      rb: 7,
      s: 0,
      reg: 1
    }
  },
  {
    name: 'Wolf',
    weapon: 'Maul',
    info: 'Orgsg 3',
    attr: {
      tp: 12,
      ini: 2,
      kb: 4,
      rb: 6,
      s: 1,
      pack: 1
    }
  },
  {
    name: 'Zombie',
    weapon: 'Klauen',
    info: 'schatz c, Orgsg 2',
    attr: {
      tp: 20,
      ini: -2,
      kb: 1,
      rb: 5,
      s: 0
    }
  },
  {
    name: 'Stadtwache',
    weapon: 'div. hier Kurzschwert',
    info: 'Schade nach waffe, schatz c, Orgsg 3',
    attr: {
      tp: 30,
      ini: 0,
      kb: 5,
      rb: 7,
      s: -1
    }
  },
  {
    name: 'Hauptmann',
    weapon: 'Langschwert',
    info: 'schatz d; begleitung 6 stadtwachen, Orgsg 5',
    attr: {
      tp: 50,
      ini: 1,
      kb: 7,
      rb: 8,
      s: 1
    }
  },
  {
    name: 'Ritter',
    weapon: 'Langschwert',
    info: 'schatz e, reiten 4 streitross, Orgsg 8',
    attr: {
      tp: 88,
      ini: 0,
      kb: 10,
      rb: 10,
      s: 1
    }
  },
  {
    name: 'Zauberlehrling',
    weapon: 'Dolch',
    info: 'schatz b, Orgsg 3',
    attr: {
      tp: 12,
      ini: -1,
      kb: 1,
      rb: 5,
      s: -2,
      mp: 9,
      spelll: 3
    }
  },
  {
    name: 'Weißer Zauberer',
    weapon: 'Dolch',
    info: 'schatz d, Orgsg 8',
    attr: {
      tp: 32,
      ini: 0,
      kb: 3,
      rb: 6,
      s: -2,
      mp: 60,
      spelll: 9
    }
  },
  {
    name: 'Wandernder Priester',
    weapon: 'Kriegshammer',
    info: 'schatz d, heiliges symbol, Orgsg 4',
    attr: {
      tp: 32,
      ini: 0,
      kb: 2,
      rb: 6,
      s: 1,
      mp: 24,
      spelll: 6
    }
  },
  {
    name: 'Illusionist',
    weapon: 'Schleuder',
    info: 'schatz d, gnom, Orgsg 6',
    attr: {
      tp: 24,
      ini: 1,
      kb: 2,
      rb: 7,
      s: -1,
      mp: 40,
      spelll: 7
    }
  },
  {
    name: 'Schwarzer Zauberer',
    weapon: 'Stab',
    info: 'schatz f, Orgsg 10',
    attr: {
      tp: 40,
      ini: 0,
      kb: 3,
      rb: 6,
      s: -1,
      mp: 66,
      spelll: 13
    }
  },
  {
    name: 'Taschendieb',
    weapon: 'Florett',
    info: '(Halbling) schatz d, list 2, Orgsg 2',
    attr: {
      tp: 14,
      ini: 2,
      kb: 2,
      rb: 7,
      s: 0
    }
  },
  {
    name: 'Bandit',
    weapon: 'Flegel',
    info: 'schatz c, Orgsg 2',
    attr: {
      tp: 20,
      ini: 1,
      kb: 3,
      rb: 7,
      s: 1
    }
  },
  {
    name: 'Assassine',
    weapon: 'Armbrust',
    info: 'Gifte, List 6, Athletik 6, schatz e, Orgsg 6',
    attr: {
      tp: 36,
      ini: 2,
      kb: 6,
      rb: 6,
      s: 1
    }
  },
  {
    name: 'Spurenleser',
    weapon: 'Langbogen',
    info: 'schatz d, natur 3, Orgsg 3',
    attr: {
      tp: 24,
      ini: 1,
      kb: 4,
      rb: 6,
      s: 0,
      mp: 6
    }
  },
  {
    name: 'Hüter des Waldes',
    weapon: 'Langbogen',
    info: 'Elf, schatz e, heilkräuter, natur 5, Orgsg 6',
    attr: {
      tp: 46,
      ini: 2,
      kb: 5,
      rb: 6,
      s: 0,
      mp: 16
    }
  },
  {
    name: 'Schildwache',
    weapon: 'Einhand-Axt',
    info: 'Zwerg, schatz e, Orgsg 4',
    attr: {
      tp: 48,
      ini: -1,
      kb: 8,
      rb: 7,
      s: 0
    }
  }
]

export const base = {
  tp: 0,
  ini: 0,
  kb: 0,
  rb: 0,
  s: 0,
  mp: 0,
  spelll: 0,
  targetedspells: 0,
  magres: 0,
  reg: 0,
  reload: 0,
  elemenatt: 0,
  fear: 0,
  venom: 0,
  flying: 0,
  bodiless: 0,
  scream: 0,
  pack: 0,
  reborn: 0,
  doesnotdie: 0,
  yielding: 0,
  spread: 0,
  sensitive: 0,
  vulnerable: 0
}

export const myCreatures = [
  {
    name: 'Flanna',
    weapon: '',
    info: 'Rang 4 Schamenmagie',
    attr: {
      tp: 20,
      ini: 0,
      kb: 3,
      rb: 6,
      s: -1,
      spelll:  4,
      mp: 12
    }
  },
  {
    name: 'Ronan',
    weapon: 'Dolch',
    info: '',
    attr: {
      tp: 12,
      ini: 0,
      kb: 3,
      rb: 6,
      s: -1
    }
  },
  {
    name: 'Skelett(s)',
    weapon: 'Kurzschwert',
    info: '',
    attr: {
      tp: 20,
      ini: 1,
      kb: 4,
      rb: 6,
      s: 1,
      magres: 1
    }
  },
  {
    name: 'Skelettfürst',
    weapon: '',
    info: '',
    attr: {
      tp: 45,
      ini: 2,
      kb: 4,
      rb: 7,
      s: 2,
      fear: 1
    }
  },
  {
    name: 'Riesenskorpion',
    weapon: '',
    info: 'behäbig, 3x1TP Schaden. Mehrere Treffer stacken und erhöhen den Schaden 1-2-4-8-12',
    attr: {
      tp: 16,
      ini: 0,
      kb: 2,
      rb: 6,
      s: 0,
      venom: 1
    }
  },
  {
    name: 'Schwarzer Skorpion',
    weapon: '',
    info: 'gift verursacht 1/3 tp schaden pro runde/stunde; wenn man sich nicht bewegt, nur pro tag. das gift klingt nach 4 Ticks oder 6 Stunden ab.',
    attr: {
      tp: 4,
      ini: 0,
      kb: 0,
      rb: 6,
      s: -3,
      venom: 3
    }
  },
  {
    name: 'Geier',
    weapon: '',
    info: '',
    attr: {
      tp: 12,
      ini: 1,
      kb: 2,
      rb: 6,
      s: 0,
      flying: 1
    }
  },
  {
    name: 'Ork',
    weapon: 'Kurzbogen(S-1)/morgenstern(S1)/Kurzschwert(S-1)/Einhand-Axt(S0)',
    info: '',
    attr: {
      tp: 12,
      ini: 0,
      kb: 3,
      rb: 7,
      s: 0
    }
  },
  {
    name: 'Ork Schamane',
    weapon: 'Stab',
    info: 'Rang 3 Schamenmagie Heilen, Trance, Heiliger Bezirk',
    attr: {
      tp: 20,
      ini: 0,
      kb: 4,
      rb: 6,
      s: 0,
      mp: 20,
      spelll: 3
    }
  },
]

export const allCreatures = creatures.concat(myCreatures)