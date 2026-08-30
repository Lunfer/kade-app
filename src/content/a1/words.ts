import { Word } from '../../data/types';

// `surfaceForms` lists inflected forms (plurals, conjugations) that should
// still resolve to this word's translation when they appear inside an
// example sentence or drill prompt. Defaults to [nl] when omitted.
export interface WordSeed extends Word {
  surfaceForms?: string[];
}

export const a1Words: WordSeed[] = [
  // People & family
  { id: 'w-man', nl: 'de man', en: 'the man', themeId: 'theme-people', firstIntroducedTopicId: 'a1-pronouns', surfaceForms: ['man', 'de man'] },
  { id: 'w-vrouw', nl: 'de vrouw', en: 'the woman', themeId: 'theme-people', firstIntroducedTopicId: 'a1-pronouns', surfaceForms: ['vrouw', 'de vrouw'] },
  { id: 'w-kind', nl: 'het kind', en: 'the child', themeId: 'theme-people', firstIntroducedTopicId: 'a1-articles', surfaceForms: ['kind', 'het kind', 'kinderen', 'de kinderen'] },
  { id: 'w-vriend', nl: 'de vriend', en: 'the friend', themeId: 'theme-people', firstIntroducedTopicId: 'a1-possessives', surfaceForms: ['vriend', 'de vriend', 'vrienden'] },
  { id: 'w-leraar', nl: 'de leraar', en: 'the teacher', themeId: 'theme-work-school', firstIntroducedTopicId: 'a1-articles', surfaceForms: ['leraar', 'de leraar'] },

  // Home
  { id: 'w-huis', nl: 'het huis', en: 'the house', themeId: 'theme-home', firstIntroducedTopicId: 'a1-articles', surfaceForms: ['huis', 'het huis', 'huizen', 'de huizen'] },
  { id: 'w-tafel', nl: 'de tafel', en: 'the table', themeId: 'theme-home', firstIntroducedTopicId: 'a1-articles', surfaceForms: ['tafel', 'de tafel', 'tafels'] },
  { id: 'w-stoel', nl: 'de stoel', en: 'the chair', themeId: 'theme-home', firstIntroducedTopicId: 'a1-articles', surfaceForms: ['stoel', 'de stoel', 'stoelen'] },
  { id: 'w-kamer', nl: 'de kamer', en: 'the room', themeId: 'theme-home', firstIntroducedTopicId: 'a1-prepositions', surfaceForms: ['kamer', 'de kamer', 'kamers'] },
  { id: 'w-boek', nl: 'het boek', en: 'the book', themeId: 'theme-home', firstIntroducedTopicId: 'a1-articles', surfaceForms: ['boek', 'het boek', 'boeken', 'de boeken'] },

  // Food & drink
  { id: 'w-brood', nl: 'het brood', en: 'the bread', themeId: 'theme-food', firstIntroducedTopicId: 'a1-articles', surfaceForms: ['brood', 'het brood'] },
  { id: 'w-koffie', nl: 'de koffie', en: 'the coffee', themeId: 'theme-food', firstIntroducedTopicId: 'a1-verbs-present', surfaceForms: ['koffie', 'de koffie'] },
  { id: 'w-water', nl: 'het water', en: 'the water', themeId: 'theme-food', firstIntroducedTopicId: 'a1-articles', surfaceForms: ['water', 'het water'] },
  { id: 'w-koken', nl: 'koken', en: 'to cook', themeId: 'theme-food', firstIntroducedTopicId: 'a1-verbs-present', surfaceForms: ['koken', 'kook', 'kookt'] },

  // Travel & the city
  { id: 'w-auto', nl: 'de auto', en: 'the car', themeId: 'theme-travel', firstIntroducedTopicId: 'a1-articles', surfaceForms: ['auto', 'de auto', "auto's", "de auto's"] },
  { id: 'w-stad', nl: 'de stad', en: 'the city', themeId: 'theme-travel', firstIntroducedTopicId: 'a1-prepositions', surfaceForms: ['stad', 'de stad', 'steden'] },
  { id: 'w-land', nl: 'het land', en: 'the country', themeId: 'theme-travel', firstIntroducedTopicId: 'a1-articles', surfaceForms: ['land', 'het land', 'landen'] },
  { id: 'w-straat', nl: 'de straat', en: 'the street', themeId: 'theme-travel', firstIntroducedTopicId: 'a1-prepositions', surfaceForms: ['straat', 'de straat', 'straten'] },

  // Work & school
  { id: 'w-werken', nl: 'werken', en: 'to work', themeId: 'theme-work-school', firstIntroducedTopicId: 'a1-verbs-present', surfaceForms: ['werken', 'werk', 'werkt'] },
  { id: 'w-leren', nl: 'leren', en: 'to learn', themeId: 'theme-work-school', firstIntroducedTopicId: 'a1-verbs-present', surfaceForms: ['leren', 'leer', 'leert'] },
  { id: 'w-school', nl: 'de school', en: 'the school', themeId: 'theme-work-school', firstIntroducedTopicId: 'a1-prepositions', surfaceForms: ['school', 'de school', 'scholen'] },

  // Weather
  { id: 'w-weer', nl: 'het weer', en: 'the weather', themeId: 'theme-weather', firstIntroducedTopicId: 'a1-word-order', surfaceForms: ['weer', 'het weer'] },
  { id: 'w-regenen', nl: 'regenen', en: 'to rain', themeId: 'theme-weather', firstIntroducedTopicId: 'a1-word-order', surfaceForms: ['regenen', 'regent'] },

  // Daily life
  { id: 'w-wonen', nl: 'wonen', en: 'to live (reside)', themeId: 'theme-daily-life', firstIntroducedTopicId: 'a1-verbs-present', surfaceForms: ['wonen', 'woon', 'woont'] },
  { id: 'w-spelen', nl: 'spelen', en: 'to play', themeId: 'theme-daily-life', firstIntroducedTopicId: 'a1-verbs-present', surfaceForms: ['spelen', 'speel', 'speelt'] },
  { id: 'w-praten', nl: 'praten', en: 'to talk', themeId: 'theme-daily-life', firstIntroducedTopicId: 'a1-verbs-present', surfaceForms: ['praten', 'praat'] },
  { id: 'w-horen', nl: 'horen', en: 'to hear', themeId: 'theme-daily-life', firstIntroducedTopicId: 'a1-verbs-present', surfaceForms: ['horen', 'hoor', 'hoort'] },
  // Auxiliary & modal verbs
  { id: 'w-zijn', nl: 'zijn', en: 'to be', themeId: 'theme-daily-life', firstIntroducedTopicId: 'a1-verbs-zijn-hebben', surfaceForms: ['zijn', 'ben', 'bent', 'is'] },
  { id: 'w-hebben', nl: 'hebben', en: 'to have', themeId: 'theme-daily-life', firstIntroducedTopicId: 'a1-verbs-zijn-hebben', surfaceForms: ['hebben', 'heb', 'hebt', 'heeft'] },
  { id: 'w-kunnen', nl: 'kunnen', en: 'can, to be able to', themeId: 'theme-daily-life', firstIntroducedTopicId: 'a1-modal-verbs', surfaceForms: ['kunnen', 'kan', 'kunt'] },
  { id: 'w-willen', nl: 'willen', en: 'to want to', themeId: 'theme-daily-life', firstIntroducedTopicId: 'a1-modal-verbs', surfaceForms: ['willen', 'wil', 'wilt'] },
  { id: 'w-moeten', nl: 'moeten', en: 'must, to have to', themeId: 'theme-daily-life', firstIntroducedTopicId: 'a1-modal-verbs', surfaceForms: ['moeten', 'moet'] },
  { id: 'w-mogen', nl: 'mogen', en: 'may, to be allowed to', themeId: 'theme-daily-life', firstIntroducedTopicId: 'a1-modal-verbs', surfaceForms: ['mogen', 'mag'] },
];
