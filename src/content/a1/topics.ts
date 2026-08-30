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
  {
    id: 'a1-negation',
    level: 'A1',
    category: 'negation',
    order: 7,
    title: 'Negation: niet vs. geen',
    explanation: `Dutch has two main negation words, and choosing the right one is mostly about what you're negating. Use "geen" to negate an indefinite noun — anywhere English would use "no" or "not a/any": "Ik heb geen auto" (I don't have a car / I have no car). Use "niet" for everything else: negating a verb, an adjective, an adverb, or a definite/specific noun.

A useful shortcut: if the English sentence could be rephrased with "no" instead of "not a / not any", Dutch wants "geen". "I don't have a car" -> "I have no car" -> "Ik heb geen auto." But "I don't have the car" (a specific, definite car) takes "niet": "Ik heb de auto niet."

Word order-wise, "niet" usually sits as late in the sentence as possible — right before whatever it's actually negating. If it's negating the whole action rather than one specific part, that means it lands right at the end, or just before a second verb, prepositional phrase, or separable-verb prefix at the very end of the sentence. Compare "Ik werk niet" (I don't work / I'm not working) with "Ik werk vandaag niet" (I don't work today): "niet" slides to the end past whatever else is in the sentence.

A handful of common negation words build on "niet": "niet meer" (not anymore), "nog niet" (not yet), "helemaal niet" (not at all), "niet eens" (not even).`,
    examples: [
      { nl: 'Ik heb geen tijd.', en: 'I don\'t have time.' },
      { nl: 'Ik heb geen auto, maar wel een fiets.', en: 'I don\'t have a car, but I do have a bike.' },
      { nl: 'Ik versta het niet.', en: 'I don\'t understand it.' },
      { nl: 'Zij werkt vandaag niet.', en: 'She isn\'t working today.' },
      { nl: 'Dat is niet mijn boek.', en: 'That is not my book.' },
      { nl: 'Ik ben er nog niet klaar mee.', en: 'I\'m not done with it yet.' },
    ],
  },
  {
    id: 'a1-questions',
    level: 'A1',
    category: 'question',
    order: 8,
    title: 'Asking questions: yes/no and question words',
    explanation: `Dutch forms questions the way English used to before it needed "do" — by simply putting the conjugated verb before the subject. There's no equivalent of "do/does" to insert.

A yes/no question (a "closed" question, since the only possible answers are ja or nee) is made by inverting the normal subject-verb order: "Jij werkt hier" (You work here) becomes "Werk jij hier?" (Do you work here?). Just swap the first two elements and add a question mark.

An "open" question — one that starts with a question word and can't be answered with just yes or no — puts the question word first, then still inverts the verb and subject right after it: question word + verb + subject. "Waar woon jij?" (Where do you live?), "Wat doe je?" (What are you doing?).

The most common Dutch question words: wie (who), wat (what), waar (where), wanneer (when), hoe (how), waarom (why), hoeveel (how much/many), and welke/welk (which — welke before de-words and plurals, welk before het-words).`,
    examples: [
      { nl: 'Woon jij in Amsterdam?', en: 'Do you live in Amsterdam?' },
      { nl: 'Werkt hij vandaag?', en: 'Is he working today?' },
      { nl: 'Wie is dat?', en: 'Who is that?' },
      { nl: 'Wat eet je?', en: 'What are you eating?' },
      { nl: 'Waarom kom je niet?', en: 'Why aren\'t you coming?' },
      { nl: 'Welke trui vind je mooi?', en: 'Which sweater do you like?' },
    ],
  },
  {
    id: 'a1-simple-past',
    level: 'A1',
    category: 'verb',
    order: 9,
    title: "Simple past tense: regular verbs (the 't kofschip rule)",
    explanation: `To put a regular verb in the simple past, you first need to know whether it's a "t-verb" or a "d-verb" — and that depends on the very last letter of the verb's crude stem (the stem before any vowel-doubling spelling adjustments). If that last letter is one of t, k, f, s, ch, or p, it's a t-verb; every other verb is a d-verb. A popular memory trick is the consonant cluster "'t kofschip" ("the koff-ship") or "'t fokschaap" ("the breeding sheep") — both words contain exactly those t-verb consonants, so if the stem ends in a letter from either word, you've got a t-verb.

t-verbs add -te (singular) or -ten (plural) to the stem. d-verbs add -de (singular) or -den (plural). "Werken" (to work) has the stem "werk", ending in k — a 't kofschip letter — so: ik werkte, jij werkte, hij werkte, wij werkten, jullie werkten, zij werkten. "Wonen" (to live) has the stem "woon", ending in n — not in 't kofschip — so it's a d-verb: ik woonde, wij woonden.

If the stem already ends in -t, you don't skip doubling it (a Dutch syllable never ends in two identical consonants written together as separate morphemes, but -t + -te genuinely does give -tte): "praten" -> stem "praat" -> ik praatte. Likewise "antwoorden" -> stem "antwoord" -> ik antwoordde.

Dutch uses the simple past mainly for something that happened in the past and is now finished and unrelated to the present, for describing a state of affairs during a past event, and after "toen" (when, referring to one specific past moment). For general "I did X" statements in everyday conversation, Dutch actually prefers the present perfect (see the next topic) — the simple past shows up more in writing and storytelling.`,
    examples: [
      { nl: 'Ik werkte gisteren tot laat.', en: 'I worked late yesterday.' },
      { nl: 'Wij woonden vroeger in Utrecht.', en: 'We used to live in Utrecht.' },
      { nl: 'Zij speelde de hele middag buiten.', en: 'She played outside all afternoon.' },
      { nl: 'Toen ik klein was, woonde ik bij mijn oma.', en: 'When I was little, I lived with my grandma.' },
      { nl: 'Hij praatte urenlang met zijn vriend.', en: 'He talked with his friend for hours.' },
    ],
  },
  {
    id: 'a1-present-perfect',
    level: 'A1',
    category: 'verb',
    order: 10,
    title: 'Talking about the past: the present perfect',
    explanation: `Even though English speakers reach for the simple past ("I worked", "she ate") by default, spoken Dutch actually leans on the present perfect for most everyday talk about the past — "Ik heb gewerkt" is far more common in conversation than "Ik werkte." So this tense is worth learning early.

The present perfect is built from a conjugated auxiliary verb (hebben or zijn) plus a past participle, which goes all the way to the end of the sentence: "Ik heb het boek gelezen" (I have read the book / I read the book).

To build the past participle of a regular verb: ge + stem + t/d, using the same t-verb/d-verb split as the simple past (see the previous topic). "Maken" (t-verb, stem "maak") -> gemaakt. "Luisteren" (d-verb, stem "luister") -> geluisterd. Two small exceptions: a participle never doubles its final letter (so "rusten" -> gerust, not "gerustt"), and verbs starting with the unstressed prefixes be-, er-, ge-, her-, ont-, or ver- skip the ge- entirely ("betalen" -> betaald, not "gebetaald").

Most verbs take hebben as their auxiliary. A smaller set — mostly verbs of motion or change of state, like gaan (to go), komen (to come), worden (to become), and zijn itself — take zijn instead: "Ik ben naar huis gegaan" (I went home), not "Ik heb naar huis gegaan."

As a rough rule of thumb, if you're not sure whether to use the simple past or the present perfect, the present perfect is very rarely wrong.`,
    examples: [
      { nl: 'Ik heb vanochtend koffie gedronken.', en: 'I drank coffee this morning.' },
      { nl: 'Heb je dat al gedaan?', en: 'Have you already done that?' },
      { nl: 'Wij hebben de hele film gezien.', en: 'We watched the whole movie.' },
      { nl: 'Zij is gisteren naar Parijs gegaan.', en: 'She went to Paris yesterday.' },
      { nl: 'Ik ben nog nooit in Japan geweest.', en: 'I have never been to Japan.' },
    ],
  },
  {
    id: 'a1-verbs-zijn-hebben',
    level: 'A1',
    category: 'verb',
    order: 11,
    title: 'Zijn and hebben: to be, to have (and as auxiliaries)',
    explanation: `Zijn (to be) and hebben (to have) are two of the most important verbs in Dutch, both because you need them constantly on their own and because — as you just saw in the present perfect topic — they double as the auxiliary verbs that build every compound past tense.

Both are irregular, so their forms just need to be memorized rather than derived from a stem rule.

Zijn, simple present: ik ben, jij/u bent, hij/zij/het is, wij zijn, jullie zijn, zij zijn. Zijn, simple past: ik/jij/hij was, wij/jullie/zij waren. Past participle: geweest.

Hebben, simple present: ik heb, jij/u hebt, hij/zij/het heeft, wij hebben, jullie hebben, zij hebben. Only the hij/zij/het form is truly irregular (heeft instead of a predictable "hebt"); jij/je also commonly takes "heb" instead of "hebt" once it follows the verb, as in a question: "Heb jij een pen?" Hebben, simple past: ik/jij/hij had, wij/jullie/zij hadden. Past participle: gehad.`,
    examples: [
      { nl: 'Ik ben moe.', en: 'I am tired.' },
      { nl: 'Wij zijn al laat.', en: 'We are already late.' },
      { nl: 'Ik heb twee broers.', en: 'I have two brothers.' },
      { nl: 'Heeft zij een hond?', en: 'Does she have a dog?' },
      { nl: 'Vroeger was ik verlegen.', en: 'I used to be shy.' },
      { nl: 'Wij hadden gisteren geen tijd.', en: 'We didn\'t have time yesterday.' },
    ],
  },
  {
    id: 'a1-modal-verbs',
    level: 'A1',
    category: 'verb',
    order: 12,
    title: 'Modal verbs: kunnen, willen, moeten, mogen',
    explanation: `Dutch modal verbs work much like their English counterparts (can, want, must, may) — they're followed directly by a bare infinitive at the end of the sentence, with no "te" in between: "Ik kan zwemmen" (I can swim), "Ik moet werken" (I have to work).

All four are irregular in the present tense. Kunnen (can, to be able to): ik kan, jij/u kan/kunt, hij/zij/het kan, wij kunnen, jullie kunnen, zij kunnen. Mogen (may, to be allowed to): ik mag, jij/u mag, hij/zij/het mag, wij mogen, jullie mogen, zij mogen. Willen (to want to): ik wil, jij/u wil/wilt, hij/zij/het wil, wij willen, jullie willen, zij willen. Moeten (must, to have to): ik moet, jij/u moet, hij/zij/het moet, wij moeten, jullie moeten, zij moeten — moeten's stem already ends in -t, so no extra -t gets added for jij/hij, the same spelling rule that applies to any verb whose stem already ends in -t.

Simple past forms: kon/konden (kunnen), mocht/mochten (mogen), wilde or the more colloquial wou/wilden or wouden (willen), moest/moesten (moeten).

Past participles (gekund, gemogen, gewild, gemoeten) exist but are rarely used on their own — when a modal verb combines with another verb in the present perfect, Dutch typically uses a second bare infinitive instead of the past participle: "Ik heb dat niet kunnen doen" (I couldn't do that), not "Ik heb dat niet gekund doen."`,
    examples: [
      { nl: 'Kun je me helpen?', en: 'Can you help me?' },
      { nl: 'Ik wil graag een koffie.', en: 'I would like a coffee.' },
      { nl: 'Je moet dit lezen.', en: 'You have to read this.' },
      { nl: 'Mag ik naar binnen?', en: 'May I come in?' },
      { nl: 'Wij konden het niet vinden.', en: 'We couldn\'t find it.' },
      { nl: 'Ze moesten vroeg weg.', en: 'They had to leave early.' },
    ],
  },
  {
    id: 'a1-diminutives',
    level: 'A1',
    category: 'diminutive',
    order: 13,
    title: 'Diminutives: noun + -je',
    explanation: `Diminutives are everywhere in everyday Dutch — far more than just "small versions" of things. They're also used for things considered cute, casual, or informal, so learning to recognize and form them is essential even at a basic level.

The core rule is simple: diminutive = noun + je, and a diminutive is always a het-word, regardless of what article the noun originally took: "de tafel" (the table) -> "het tafeltje" (the little table).

Depending on how the noun ends, the -je changes shape to keep the pronunciation smooth. There are four alternative endings. -tje, for nouns ending in a vowel, in a long vowel + r/l/n, or in an unstressed -er/-el/-en/-or ("auto" -> "autootje", "deur" -> "deurtje", "tafel" -> "tafeltje"). -etje, for nouns ending in a short vowel followed by a single r/l/n/m/ng ("man" -> "mannetje", "bal" -> "balletje" — the consonant doubles to keep the vowel short). -pje, for nouns ending in a long vowel + m, or an unstressed -um/-em ("oom" -> "oompje"). -kje, for nouns ending in unstressed -ing, dropping the g ("koning" -> "koninkje").

A few diminutives are irregular and just need to be learned as-is: "schip" (ship) -> "scheepje", not "schipje"; "glas" (glass) -> "glaasje". A couple of words — like "meisje" (girl) — only exist in diminutive form.`,
    examples: [
      { nl: 'Wil je een kopje koffie?', en: 'Would you like a cup of coffee?' },
      { nl: 'Het kindje slaapt.', en: 'The little child is sleeping.' },
      { nl: 'Even een momentje, alsjeblieft.', en: 'Just a moment, please.' },
      { nl: 'Zij heeft een schattig hondje.', en: 'She has a cute little dog.' },
      { nl: 'Kun je het raampje dichtdoen?', en: 'Can you close the window?' },
    ],
  },
  {
    id: 'a1-conjunctions',
    level: 'A1',
    category: 'conjunction',
    order: 14,
    title: 'Joining sentences: en, maar, want, of, dus',
    explanation: `The five most common Dutch coordinating conjunctions link two complete sentences together without disturbing either one's word order: en (and), maar (but), of (or), want (because/as), and dus (so). Whatever came before the conjunction keeps its normal word order, and whatever comes after starts fresh with its own normal word order too.

"Ik werk vandaag en morgen ga ik naar het strand" (I'm working today and tomorrow I'm going to the beach) — notice "morgen" (tomorrow) is followed directly by the verb "ga", exactly like it would be in its own separate sentence: the conjunction doesn't push anything around.

This is the key difference from subordinating conjunctions like omdat (because), als (if), or dat (that), which do change the word order of the clause that follows them, pushing the verb all the way to the end — that's a topic for later. For now, these five coordinating conjunctions are the safe, simple way to link ideas.`,
    examples: [
      { nl: 'Ik lees en zij schrijft.', en: 'I read and she writes.' },
      { nl: 'Het is koud, maar de zon schijnt.', en: 'It\'s cold, but the sun is shining.' },
      { nl: 'Wil je thee of koffie?', en: 'Do you want tea or coffee?' },
      { nl: 'Ik blijf thuis, want ik ben ziek.', en: 'I\'m staying home, because I\'m sick.' },
      { nl: 'Het regent, dus ik neem een paraplu.', en: 'It\'s raining, so I\'m taking an umbrella.' },
    ],
  },
  {
    id: 'a1-adjectives',
    level: 'A1',
    category: 'adjective',
    order: 15,
    title: 'Adjective endings: when to add -e',
    explanation: `Unlike English, a Dutch adjective sometimes changes form depending on the noun it describes — mainly by gaining an -e ending. The good news: an adjective describing the subject after a verb like zijn (to be) or worden (to become) — the "predicate" position — never changes: "Het huis is groot" (The house is big), "De tuin is mooi" (The garden is beautiful). The rules below only apply when the adjective sits directly in front of the noun (the "attributive" position).

In front of a de-word, singular or plural, always add -e: "de grote tuin" (the big garden), "de mooie huizen" (the beautiful houses).

In front of a het-word, it depends on whether the noun is definite or indefinite. With a definite het-word (using het, dit, or dat), add -e: "het grote huis" (the big house). With an indefinite singular het-word — after een, geen, or no article at all, and also after elk, ieder, menig, veel, welk, or zo'n — don't add -e: "een groot huis" (a big house), "groot huis" with no article at all, "warm water" (warm water), "vers brood" (fresh bread).

A few adjectives never take -e in any position: those already ending in -en (mostly materials, like houten "wooden" or gouden "golden") and the two words linker (left) and rechter (right).

One more small pattern: after iets (something), niets (nothing), veel (much), weinig (little), or wat (something), an adjective takes -s instead of -e: "iets moois" (something beautiful), "niets nieuws" (nothing new).`,
    examples: [
      { nl: 'De kleine hond blaft.', en: 'The small dog is barking.' },
      { nl: 'Het is een groot huis.', en: 'It is a big house.' },
      { nl: 'Het grote huis staat op de hoek.', en: 'The big house is on the corner.' },
      { nl: 'Wij drinken koud water.', en: 'We drink cold water.' },
      { nl: 'Ik zoek iets leuks om te doen.', en: 'I am looking for something fun to do.' },
      { nl: 'Dat meisje draagt een gouden ketting.', en: 'That girl is wearing a golden necklace.' },
    ],
  },
];
