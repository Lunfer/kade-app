import { GrammarTopic } from '../../data/types';

export const a2Topics: GrammarTopic[] = [
  {
    id: 'a2-separable-verbs',
    level: 'A2',
    category: 'verb',
    order: 1,
    title: 'Separable and inseparable verbs',
    explanation: `Many Dutch verbs are built from a plain verb plus a prefix — often a word that's also a preposition or adverb on its own: **opstaan** (to get up, from "op" + "staan"), **aankomen** (to arrive, from "aan" + "komen"). These are called **compound verbs**, and most of them are **separable**: the prefix splits off and moves to the end of the clause in the present and simple past tense.

==In the present and simple past, the prefix breaks away from the verb and goes to the very end of the sentence==: "Ik sta om zeven uur op" (I get up at seven), "Wij kwamen gisteren aan" (We arrived yesterday) — not "Ik opsta" or "Wij aankwamen".

In the past participle, though, the compound verb stays together: __the prefix attaches to the front of the participle instead of "ge-"__, so "opstaan" becomes "opgestaan" (not "geopstaan"), and "aankomen" becomes "aangekomen".

A small, closed set of prefixes — **be-**, **ver-**, **ont-**, **her-**, and **ge-** — behave completely differently: __they never separate, and they never take "ge-" in the past participle at all__ (vertellen -> vertelde -> verteld, not geverteld). These prefixes are always unstressed in speech, unlike the stressed, separable prefixes like "op" and "aan".`,
    examples: [
      { nl: 'Ik sta om zeven uur op.', en: 'I get up at seven o’clock.' },
      { nl: 'Wij kwamen gisteren aan.', en: 'We arrived yesterday.' },
      { nl: 'Zij is al opgestaan.', en: 'She has already gotten up.' },
      { nl: 'Hij vertelde een grap.', en: 'He told a joke.' },
      { nl: 'Heeft hij het al verteld?', en: 'Has he already told it?' },
    ],
  },
  {
    id: 'a2-reflexive-verbs',
    level: 'A2',
    category: 'pronoun',
    order: 2,
    title: 'Reflexive pronouns and verbs',
    explanation: `A **reflexive pronoun** is used when the subject and the object of a sentence are the same person — "I wash myself." Dutch has an everyday **unstressed** form for this (me, je, zich, ons, je, zich) and a **marked** form used for emphasis or contrast (mezelf, jezelf, zichzelf, onszelf, jezelf, zichzelf).

==Most of the time, Dutch uses the plain, unstressed form: "Ik was me" (I wash myself), not "Ik was mezelf"==. The marked "-zelf" form is reserved for stressing that it really was that person and no one else: "Ik heb mezelf geknipt" (I cut my own hair — not someone else's).

"Zich" is the one reflexive pronoun that doesn't change: __it covers hij, zij, het, u (formal), and the plural zij all at once__ — "Hij wast zich", "Zij wassen zich."

The part that trips learners up most: **many Dutch verbs are reflexive where the English translation isn't** — "zich vergissen" (to be mistaken), "zich herinneren" (to remember), "zich haasten" (to hurry). These have to be learned as a fixed pronoun-plus-verb pair, not translated word for word.`,
    examples: [
      { nl: 'Ik was me elke ochtend.', en: 'I wash (myself) every morning.' },
      { nl: 'Vergis je niet!', en: "Don't be mistaken!" },
      { nl: 'Herinner je je die dag nog?', en: 'Do you still remember that day?' },
      { nl: 'Wij haasten ons naar school.', en: 'We hurry to school.' },
      { nl: 'Hij heeft zichzelf pijn gedaan.', en: 'He hurt himself.' },
    ],
  },
  {
    id: 'a2-demonstratives',
    level: 'A2',
    category: 'pronoun',
    order: 3,
    title: 'Demonstratives: dit, deze, dat, die',
    explanation: `Dutch has four words for "this/that/these/those": **dit**, **deze**, **dat**, and **die**. Which one to use depends on two things: whether the noun is singular or plural, and whether it's a de-word or a het-word.

==Dit and dat are for singular het-words ("dit huis", "dat boek"); deze and die are for singular de-words and for every plural noun, regardless of article==: "deze auto", "die auto's", "deze huizen". Dit/deze mean "this/these" (close by); dat/die mean "that/those" (further away).

These pronouns can also stand alone, without a noun right after them: "Heb je deze film gezien?" (this movie) vs. simply "Heb je deze gezien?" (this one).

__One sharp exception__: when a standalone demonstrative is linked to a noun by a verb like "zijn" (to be), Dutch always uses the singular **dit** or **dat** — even if the noun that follows is plural: "Dit zijn mijn ouders" (These are my parents), not "Deze zijn mijn ouders".`,
    examples: [
      { nl: 'Dit huis is groot.', en: 'This house is big.' },
      { nl: 'Deze auto is nieuw.', en: 'This car is new.' },
      { nl: 'Dat boek is interessant.', en: 'That book is interesting.' },
      { nl: 'Die schoenen zijn duur.', en: 'Those shoes are expensive.' },
      { nl: 'Dit zijn mijn ouders.', en: 'These are my parents.' },
    ],
  },
  {
    id: 'a2-relative-clauses',
    level: 'A2',
    category: 'clause',
    order: 4,
    title: 'Relative clauses: die, dat, wat',
    explanation: `A **relative clause** adds extra information about a noun, introduced by a relative pronoun — "the book **that** I'm reading", "the woman **who** lives there". Dutch relative pronouns mirror the de/het split you already know from articles.

==Use "dat" for a het-word, and "die" for a de-word, a plural noun, or a person==: "Het boek dat ik lees" (the book that I'm reading — "boek" is a het-word), "De vrouw die daar woont" (the woman who lives there — "vrouw" is a person).

Use **"wat"** instead when there's no specific noun to point back to: after "alles", "iets", "niets", or "weinig" ("Dat is alles wat ik weet" — that's all that I know), or when the relative clause refers back to a whole earlier idea rather than one noun ("Het regent, wat jammer is" — it's raining, which is a shame).

The word order payoff: __a relative clause pushes every verb to the very end of its own clause__, the same rule that governs the subordinate clauses in the next topic — "De vrouw die daar **woont**" is simple because there's only one verb, but "Het boek dat ik gisteren **heb gelezen**" shows both verbs stacking at the end.

(Dutch also has genitive relative pronouns for "whose" — wiens, wier — and a rule for "whom" after a preposition; those are worth knowing exist, but are covered in more depth later.)`,
    examples: [
      { nl: 'Het boek dat ik lees is goed.', en: "The book that I'm reading is good." },
      { nl: 'De vrouw die daar woont is aardig.', en: 'The woman who lives there is nice.' },
      { nl: 'Dat is alles wat ik weet.', en: "That's all (that) I know." },
      { nl: 'De film die wij gisteren zagen was leuk.', en: 'The movie we watched yesterday was fun.' },
      { nl: 'Het regent, wat jammer is.', en: "It's raining, which is a shame." },
    ],
  },
  {
    id: 'a2-subordinate-clauses',
    level: 'A2',
    category: 'clause',
    order: 5,
    title: 'Subordinate clauses: omdat, als, terwijl...',
    explanation: `A **subordinating conjunction** — omdat (because), als (if/when), terwijl (while), hoewel (although), dat (that), voordat (before), nadat (after), zodra (as soon as) — attaches a clause to the main sentence and, critically, changes its word order.

==In a subordinate clause, every verb — including the finite (conjugated) one — moves to the very end==: "Ik blijf thuis omdat ik ziek **ben**" (I'm staying home because I am sick). Compare this to a normal main clause, where the finite verb has to sit in second position.

Don't confuse this with A1's coordinating conjunctions (en, maar, want, of, dus), which glue two independent, normally-ordered sentences together. __"Omdat" and "want" both translate as "because", but only "want" leaves the word order alone__: "Ik blijf thuis, want ik ben ziek" (normal order) vs. "Ik blijf thuis omdat ik ziek ben" (verb-final).

If the subordinate clause opens the sentence instead of following it, the main clause's own verb has to land immediately after the comma, same as any other V2 sentence with something fronted: "**Als** het regent, **blijf** ik thuis" (If it rains, I'll stay home).`,
    examples: [
      { nl: 'Ik blijf thuis omdat ik ziek ben.', en: "I'm staying home because I'm sick." },
      { nl: 'Als het regent, blijf ik thuis.', en: "If it rains, I'll stay home." },
      { nl: 'Ik weet dat hij morgen komt.', en: "I know (that) he's coming tomorrow." },
      { nl: 'Terwijl zij kookte, las hij een boek.', en: 'While she was cooking, he read a book.' },
      { nl: 'Ik blijf thuis, want ik ben ziek.', en: "I'm staying home, because I'm sick." },
    ],
  },
  {
    id: 'a2-pronominal-adverbs',
    level: 'A2',
    category: 'pronominal-adverb',
    order: 6,
    title: 'Pronominal adverbs: er, hier, daar + preposition',
    explanation: `Dutch has a strict rule you won't find in English: __a preposition can never sit directly in front of "het", "dit", "dat", "die", or "wat" when they refer to a thing__ — you can't say "op het" or "met wat". Instead, the pronoun and preposition fuse into a single word called a **pronominal adverb**.

==The pattern: "het" becomes "er", "dit/deze" becomes "hier", "dat/die" becomes "daar", and "wat" becomes "waar" — then the preposition attaches after it, not before==: "op het" -> "erop", "met dit" -> "hiermee", "over dat" -> "daarover", "met wat" -> "waarmee".

Two prepositions change shape when they fuse this way: __"met" becomes "mee" and "tot" becomes "toe"__ ("met wat" -> "waarmee", not "waarmet"). The fused adverb can also be split apart by other words in the sentence: "Ik wacht al een uur **op** de bus" becomes "Ik wacht **er** al een uur **op**."

This rule is specifically about *things*, not people — for a person, the ordinary preposition-plus-pronoun form is still correct: "met hem" (with him) stays "met hem", it never becomes "hiermee" or "daarmee".`,
    examples: [
      { nl: 'Ik wacht op de bus. -> Ik wacht erop.', en: "I'm waiting for the bus. -> I'm waiting for it." },
      { nl: 'Waarmee schrijf jij?', en: 'What are you writing with?' },
      { nl: 'Hij is blij met het cadeau. -> Hij is er blij mee.', en: "He's happy with the gift. -> He's happy with it." },
      { nl: 'Het boek waar ik naar zoek, ligt hier.', en: "The book (that) I'm looking for is here." },
      { nl: 'Ik denk vaak aan die dag. -> Ik denk er vaak aan.', en: 'I often think about that day. -> I often think about it.' },
    ],
  },
  {
    id: 'a2-indefinite-pronouns',
    level: 'A2',
    category: 'indefinite',
    order: 7,
    title: 'Indefinite pronouns: iets, iemand, alles, elk, sommige...',
    explanation: `**Indefinite pronouns** refer to someone or something without saying exactly who or what — English "something", "someone", "everything", "each". Dutch has a set of these worth learning as a group.

==iets (something), niets (nothing), iemand (someone), niemand (no one), alles (everything), and iedereen (everyone) are all independent, singular pronouns — they never precede a noun and never change form==: "Ik heb iets voor je" (I have something for you), "Iedereen is welkom" (Everyone is welcome).

**elk** and **ieder** ("each"/"every") work differently: they precede a noun, and __they add "-e" in front of a de-word but stay bare in front of a het-word__ — "elke dag" (a de-word), "elk jaar" (a het-word). **sommige** ("some", in the sense of "certain") only goes before a plural or uncountable noun: "Sommige mensen houden niet van kaas."

For "all", Dutch splits the job across three words: **al** goes before an article or another pronoun ("al mijn geld" — all my money), **alle** goes directly before a plural or uncountable noun ("alle boeken"), and **allemaal** trails after the noun as extra emphasis ("De boeken zijn er allemaal"). __One small spelling rule ties several of these together__: an adjective right after iets, niets, veel, weinig, or wat takes "-s" instead of the usual "-e" — "iets leuks" (something fun), not "iets leuke".`,
    examples: [
      { nl: 'Ik heb iets voor je.', en: 'I have something for you.' },
      { nl: 'Er is niemand thuis.', en: "There's no one home." },
      { nl: 'Iedereen is welkom.', en: 'Everyone is welcome.' },
      { nl: 'Elke dag leer ik Nederlands.', en: 'Every day I learn Dutch.' },
      { nl: 'Sommige mensen houden niet van kaas.', en: "Some people don't like cheese." },
    ],
  },
  {
    id: 'a2-comparison',
    level: 'A2',
    category: 'comparison',
    order: 8,
    title: 'Comparing adjectives: comparative and superlative',
    explanation: `To compare two things in Dutch, add **-er** to the adjective for the comparative ("mooi" -> "mooier", beautiful -> more beautiful) and **-st** (usually written "-ste" when it comes before a noun) for the superlative ("mooi" -> "mooist"/"mooiste").

The same spelling rules from stems and plurals carry over here: __double a vowel or consonant when needed to keep the sound the same__ ("groot" -> "groter", one "o" because the syllable is now open; "dik" -> "dikker", double "k" to keep the vowel short).

==To say two things are equal, use "even ... als" ("even groot als" — just as big as); to compare degree, use "-er ... dan" ("groter dan" — bigger than)==: "Amsterdam is groter dan Utrecht", "Deze tas is even zwaar als die."

A handful of very common adjectives and adverbs are __irregular and don't take -er/-st at all__: goed -> beter -> best (good), veel -> meer -> meest (much/many), weinig -> minder -> minst (little/few), and graag -> liever -> liefst (gladly/preferably, used for saying what you'd rather do).`,
    examples: [
      { nl: 'Amsterdam is groter dan Utrecht.', en: 'Amsterdam is bigger than Utrecht.' },
      { nl: 'Dit is de mooiste tuin die ik ken.', en: 'This is the most beautiful garden I know.' },
      { nl: 'Hij werkt harder dan zijn broer.', en: 'He works harder than his brother.' },
      { nl: 'Deze tas is even zwaar als die.', en: 'This bag is just as heavy as that one.' },
      { nl: 'Ik drink liever thee dan koffie.', en: "I'd rather drink tea than coffee." },
    ],
  },
  {
    id: 'a2-future-tense',
    level: 'A2',
    category: 'verb',
    order: 9,
    title: 'Talking about the future: zullen and gaan',
    explanation: `Dutch has three everyday ways to talk about the future, and — unlike what many textbooks suggest — the "official" future tense isn't the most common one.

**Zullen** + infinitive is the textbook future ("Ik zal het doen" — I will do it), but in real use it's mostly reserved for a promise or solemn plan, for stressing that something is bound to happen, or for stating a probability — often paired with "wel" ("Het zal wel lukken" — it'll probably work out). Its present-tense conjugation is irregular: zal/zult/zal/zullen/zullen/zullen.

==For an everyday, casual future — an intention or something expected to happen — Dutch reaches for "gaan" + infinitive instead==: "Ik ga morgen naar Amsterdam" (I'm going to go to Amsterdam tomorrow), much like English "going to."

__When the point in time is already stated, Dutch often just uses the simple present__, with no future-marking verb at all: "Ik bak vanavond pannenkoeken" (Tonight I'll bake pancakes) is a completely normal, natural sentence — not a mistake or a shortcut.`,
    examples: [
      { nl: 'Ik zal het nooit meer doen.', en: "I promise I'll never do it again." },
      { nl: 'Het zal wel lukken.', en: "It'll probably work out." },
      { nl: 'Ik ga morgen naar Amsterdam.', en: "I'm going to Amsterdam tomorrow." },
      { nl: 'Wij gaan volgend jaar verhuizen.', en: "We're moving next year." },
      { nl: 'Zij komt morgen.', en: "She's coming tomorrow." },
    ],
  },
  {
    id: 'a2-word-order-tmp',
    level: 'A2',
    category: 'word-order',
    order: 10,
    title: 'Word order: placing time, manner, and place',
    explanation: `You already know that the finite verb has to sit in second position (V2, from A1). But once several adverbial phrases pile up in the middle of a sentence, they need their own order too.

==The default order is Time, then Manner, then Place — often remembered as "TMP"==: "Ik ga **morgen** (time) **met de trein** (manner) **naar Amsterdam** (place)." This is the reverse of what English speakers often reach for instinctively, where place tends to come first.

The direct object has its own rule layered on top: __a *specific* (definite) direct object is placed early in the middle of the sentence, while a *non-specific* (indefinite) one is placed at the very end, right before the other verbs__. Compare "Ik heb **de auto** gisteren gekocht" (the car — specific, placed early) with "Ik heb gisteren **een auto** gekocht" (a car — non-specific, placed at the end); both are correct Dutch, just about a different kind of car.

None of this is a rigid law — Dutch word order bends for emphasis — but TMP-then-object is the reliable default to reach for when a sentence has more than one of these pieces and you're not sure where to put them.`,
    examples: [
      { nl: 'Ik ga morgen met de trein naar Amsterdam.', en: "I'm going to Amsterdam by train tomorrow." },
      { nl: 'Wij hebben gisteren een auto gekocht.', en: 'We bought a car yesterday.' },
      { nl: 'Zij heeft het boek gisteren gelezen.', en: 'She read the book yesterday.' },
      { nl: 'Hij werkt elke dag hard op kantoor.', en: 'He works hard at the office every day.' },
      { nl: 'Ik heb de auto vorige week laten repareren.', en: 'I had the car repaired last week.' },
    ],
  },
];
