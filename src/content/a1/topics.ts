import { GrammarTopic } from '../../data/types';

export const a1Topics: GrammarTopic[] = [
  {
    id: 'a1-verbs-present',
    level: 'A1',
    category: 'verb',
    order: 1,
    title: 'Present tense: regular verbs',
    explanation: `Most Dutch verbs are "weak" (regular). To conjugate one, find the stem by removing "-en" from the infinitive, then add endings.

The stem alone is used for "ik". Add "-t" for jij/je, u, hij, zij/ze, het. Use the plain infinitive (stem + en) for wij, jullie, zij (plural).

Spelling rule: Dutch keeps vowel sounds consistent between the infinitive and the stem. If removing "-en" would change a long vowel into a short one, double the vowel in the stem ("wonen" -> stem "woon", not "won"). If the stem already ends in "-t", don't add a second one ("praten" -> "hij praat", not "praatt").

One more wrinkle: when "jij"/"je" comes after the verb (in questions or after something fronted to the start of the sentence), drop the final "-t": "Werk jij hier?" not "Werkt jij hier?".`,
    examples: [
      { nl: 'Ik woon in Rotterdam.', en: 'I live in Rotterdam.' },
      { nl: 'Jij werkt in de stad.', en: 'You work in the city.' },
      { nl: 'Hij kookt elke dag.', en: 'He cooks every day.' },
      { nl: 'Wij leren Nederlands.', en: 'We are learning Dutch.' },
      { nl: 'Werk jij vandaag?', en: 'Are you working today?' },
    ],
  },
  {
    id: 'a1-word-order',
    level: 'A1',
    category: 'word-order',
    order: 2,
    title: 'Word order: subject-verb-object and V2',
    explanation: `A basic Dutch sentence follows subject - verb - object, just like English: "Ik lees het boek" (I read the book).

The important rule is "V2": the finite (conjugated) verb is always the second element of a main clause, no matter what comes first. If the subject starts the sentence, the verb naturally lands second. But if you start with something else, like a time word, the verb still has to stay in second position, so the subject moves after it.

Compare: "Ik werk vandaag thuis" (subject first, normal order) and "Vandaag werk ik thuis" (time word first, so verb and subject swap places). Both mean "I work from home today," just with different emphasis.

Questions work the same way: yes/no questions put the verb first, then the subject. Questions with a question word (waar, wat, wanneer...) put the question word first, then the verb, then the subject.`,
    examples: [
      { nl: 'Ik werk vandaag thuis.', en: 'I work from home today.' },
      { nl: 'Vandaag werk ik thuis.', en: 'Today I work from home.' },
      { nl: 'Het regent.', en: 'It is raining.' },
      { nl: 'Woon jij hier?', en: 'Do you live here?' },
      { nl: 'Waar woon jij?', en: 'Where do you live?' },
    ],
  },
  {
    id: 'a1-articles',
    level: 'A1',
    category: 'article',
    order: 3,
    title: 'De/het articles and plurals',
    explanation: `Dutch has two words for "the": "de" and "het". Roughly two-thirds of nouns are "de" words; the rest are "het" words, and there is no reliable rule for which is which, so each new noun is learned together with its article.

A few patterns do help: all plural nouns take "de", regardless of what the singular used. All diminutives (words ending in -je) take "het". Most words for people take "de".

For plurals, the two regular endings are "-en" (the most common: boek -> boeken, stoel -> stoelen) and "-s" (mostly on words ending in an unstressed -el, -er, -en, or -aar, and on many loanwords: tafel -> tafels, auto -> auto's, note the apostrophe after a vowel).

The same spelling rule from verb stems applies to plurals: vowels double or single up to keep the sound the same ("straat" -> "straten", one "a" because the syllable is now open), and consonants sometimes double to keep a vowel short ("kat" -> "katten"). A few common nouns also shift a final "s" or "f" to "z" or "v" in the plural: "huis" -> "huizen".`,
    examples: [
      { nl: 'het huis, de huizen', en: 'the house, the houses' },
      { nl: 'het boek, de boeken', en: 'the book, the books' },
      { nl: 'de tafel, de tafels', en: 'the table, the tables' },
      { nl: 'de auto, de auto\'s', en: 'the car, the cars' },
      { nl: 'het kind, de kinderen', en: 'the child, the children' },
    ],
  },
  {
    id: 'a1-pronouns',
    level: 'A1',
    category: 'pronoun',
    order: 4,
    title: 'Personal pronouns: subject vs. object',
    explanation: `Dutch pronouns change depending on whether they are the subject (doing the action) or the object (receiving it), similar to English "I" vs. "me".

Subject forms: ik, jij/je, u, hij, zij/ze, het, wij/we, jullie, zij/ze.
Object forms: mij/me, jou/je, u, hem, haar, het, ons, jullie, hen/hun/ze.

Most pronouns have a full form and a short, unstressed form (je, we, ze, me). The short forms are far more common in everyday speech; the full forms are used mainly for emphasis: "Ik zie je" (I see you, neutral) vs. "Ik zie JOU, niet hem" (I see YOU, not him).

For "them", "hen" and "hun" are both technically correct in different grammatical roles (hen after a preposition or as a direct object, hun as an indirect object), but in casual speech most people just use "ze" for both, and that is the safest default while you are learning.`,
    examples: [
      { nl: 'Ik zie hem.', en: 'I see him.' },
      { nl: 'Zij helpt mij.', en: 'She helps me.' },
      { nl: 'Kun je ons horen?', en: 'Can you hear us?' },
      { nl: 'Wij spelen met haar.', en: 'We play with her.' },
      { nl: 'Ik geef het boek aan hen.', en: 'I give the book to them.' },
    ],
  },
  {
    id: 'a1-prepositions',
    level: 'A1',
    category: 'preposition',
    order: 5,
    title: 'Common prepositions',
    explanation: `Prepositions link a noun to the rest of the sentence, and in Dutch they often don't translate word-for-word from English, so it's worth learning them inside fixed phrases rather than in isolation.

"In" and "op" both can mean "in/on", but "in" is for being inside something (in de stad, in het huis) while "op" is for being on top of a surface or at certain locations (op tafel, op school, op straat).

"Naar" means "to" in the sense of movement toward a place (naar huis, naar school). "Van" means "from" or "of" (van Amsterdam, het huis van mijn vriend). "Met" means "with" (met mij, met de auto). "Voor" means "for" or "in front of" depending on context. "Aan" is often "to/at" for people or attached surfaces (de tafel staat aan de muur). "Bij" means "at/near/with" in the sense of being at someone's place (bij mij, bij de school).`,
    examples: [
      { nl: 'Ik woon in de stad.', en: 'I live in the city.' },
      { nl: 'Het boek ligt op de tafel.', en: 'The book is lying on the table.' },
      { nl: 'Wij gaan naar huis.', en: 'We are going home.' },
      { nl: 'Zij komt van school.', en: 'She is coming from school.' },
      { nl: 'Ik werk met hem.', en: 'I work with him.' },
    ],
  },
  {
    id: 'a1-possessives',
    level: 'A1',
    category: 'possessive',
    order: 6,
    title: 'Possessives',
    explanation: `Possessives ("my", "your", "his"...) come before the noun, just like in English: mijn, jouw/je, uw, zijn, haar, ons/onze, jullie, hun.

Most possessives don't change at all, no matter what noun follows. The one exception is "ons/onze": use "ons" before a singular "het" word, and "onze" everywhere else (before a "de" word, singular or plural, and before any plural noun).

"Jouw" and "je" both mean "your" (informal, one person); "je" is the everyday unstressed form, "jouw" is used for emphasis, the same pattern as "jij/je" for the pronoun.`,
    examples: [
      { nl: 'Dit is mijn huis.', en: 'This is my house.' },
      { nl: 'Waar is jouw auto?', en: 'Where is your car?' },
      { nl: 'Ons huis is groot.', en: 'Our house is big.' },
      { nl: 'Onze tafel is oud.', en: 'Our table is old.' },
      { nl: 'Zij praat met haar vriend.', en: 'She talks with her friend.' },
    ],
  },
];
