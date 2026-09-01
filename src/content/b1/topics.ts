import { GrammarTopic } from '../../data/types';

export const b1Topics: GrammarTopic[] = [
  {
    id: 'b1-passive-voice',
    level: 'B1',
    category: 'verb',
    order: 1,
    title: 'The passive voice: worden and zijn',
    explanation: `In an **active** sentence, the subject does the action ("Zij bouwt het huis" -- she builds the house). In a **passive** sentence, the subject receives the action instead ("Het huis wordt gebouwd" -- the house is being built). Dutch marks this with an auxiliary verb plus the past participle, similar to English -- but Dutch uses two different auxiliaries for two different meanings, where English just uses "to be" for both.

==Use "worden" for the process-passive -- the action actually happening or being done== ("Het huis wordt gebouwd", the house is being built, right now, as an ongoing process). Use **"zijn"** for the state-passive -- the resulting condition, after the action is already finished ("Het huis is gebouwd", the house is built / has been built -- describing the finished state).

When the person or thing doing the action is mentioned, it's introduced with **"door"** (by): "Het boek wordt door haar gelezen" (The book is being read by her).

__"Worden" itself is irregular and easy to confuse with its other meaning, "to become"__: "Hij wordt boos" (He's becoming angry -- not passive at all, just the plain verb "worden"). Context and the presence of a past participle tell them apart.`,
    examples: [
      { nl: 'Het huis wordt gebouwd.', en: 'The house is being built.' },
      { nl: 'Het huis is gebouwd.', en: 'The house is built / has been built.' },
      { nl: 'Het boek wordt door haar gelezen.', en: 'The book is being read by her.' },
      { nl: 'De brief werd gisteren gestuurd.', en: 'The letter was sent yesterday.' },
      { nl: 'Hij wordt elk jaar ouder.', en: 'He gets older every year.' },
    ],
  },
  {
    id: 'b1-conditional',
    level: 'B1',
    category: 'verb',
    order: 2,
    title: 'The conditional: zou, zouden',
    explanation: `The **conditional** talks about things that aren't real (yet) -- hypotheticals, polite requests, and softened advice. Dutch builds it with **"zou"** (singular) or **"zouden"** (plural/formal u) plus an infinitive at the end of the clause, exactly like "would" in English.

==Use "zou/zouden" + infinitive for hypothetical situations==: "Als ik rijk was, zou ik reizen" (If I were rich, I would travel). The same construction makes a request sound much more polite: "Ik zou graag een koffie willen" (I would like a coffee) is softer than the blunt "Ik wil een koffie."

"Zou/zouden" combined with **"moeten"** softens advice into a suggestion rather than a command: "Je zou meer moeten studeren" (You should study more) — __note the word order: "zou" comes first, "moeten" and the main verb stack at the very end__, not "Je moet zou studeren."

"Zouden" is simply the plural/formal form, following the same singular/plural pattern every other Dutch verb follows (ik/jij/hij zou, wij/jullie/zij zouden).`,
    examples: [
      { nl: 'Als ik rijk was, zou ik reizen.', en: 'If I were rich, I would travel.' },
      { nl: 'Ik zou graag een koffie willen.', en: 'I would like a coffee.' },
      { nl: 'Je zou meer moeten studeren.', en: 'You should study more.' },
      { nl: 'Zouden jullie ons kunnen helpen?', en: 'Could you (all) help us?' },
      { nl: 'Dat zou ik niet doen.', en: "I wouldn't do that." },
    ],
  },
  {
    id: 'b1-pluperfect',
    level: 'B1',
    category: 'verb',
    order: 3,
    title: 'The pluperfect: the past before the past',
    explanation: `The **pluperfect** describes something that had already happened before another point in the past -- the Dutch equivalent of English "had done". It's built exactly like the present perfect you already know, just with the auxiliary itself pushed one tense back into the simple past.

==Use "had" or "was" (simple past of hebben/zijn) + the past participle== for an event that finished before another past event: "Ik had het huiswerk al gemaakt toen zij belde" (I had already done the homework when she called) — the homework was finished, then the phone rang.

The auxiliary choice follows the __exact same rule as the present perfect__: verbs of movement or change of state take "zijn" ("Hij was al vertrokken toen ik aankwam" — He had already left when I arrived), everything else takes "hebben".

A related, less common combination is worth knowing: **"hadden moeten"** + infinitive expresses "should have" — "Ik had het moeten weten" (I should have known [it]).`,
    examples: [
      { nl: 'Ik had het huiswerk al gemaakt toen zij belde.', en: 'I had already done the homework when she called.' },
      { nl: 'Hij was al vertrokken toen ik aankwam.', en: 'He had already left when I arrived.' },
      { nl: 'Wij hadden het nieuws nog niet gehoord.', en: "We hadn't heard the news yet." },
      { nl: 'Ik had het moeten weten.', en: 'I should have known.' },
      { nl: 'Zij was nog nooit in Parijs geweest.', en: "She had never been to Paris before." },
    ],
  },
  {
    id: 'b1-aan-het-continuous',
    level: 'B1',
    category: 'verb',
    order: 4,
    title: 'The "aan het" continuous: right now, in progress',
    explanation: `English marks an action in progress with "-ing" ("I am working"). Dutch has no single-word equivalent -- instead, to stress that something is happening right now, Dutch uses **"zijn" + "aan het" + infinitive**.

==Use "zijn" + "aan het" + infinitive to emphasize that an action is in progress right now==: "Ik ben aan het werken" (I am working [right now]). The construction only ever uses **"zijn"** as the auxiliary, never "hebben" — even for verbs that normally take "hebben" in the perfect tense.

It works in the past too, for something that was in progress at a past moment: "Ik was aan het werken toen je belde" (I was working when you called).

__Plain simple present is still completely normal, ordinary Dutch__ and doesn't need "aan het" at all — "Ik werk" is a perfectly good sentence on its own. "Aan het" isn't a grammatical requirement the way "-ing" often is in English; it's an optional tool for specifically highlighting the in-progress moment.`,
    examples: [
      { nl: 'Ik ben aan het werken.', en: 'I am working (right now).' },
      { nl: 'Zij is aan het koken.', en: 'She is cooking.' },
      { nl: 'Ik was aan het werken toen je belde.', en: 'I was working when you called.' },
      { nl: 'Wij zijn aan het praten.', en: 'We are talking.' },
      { nl: 'Wat ben je aan het doen?', en: 'What are you doing (right now)?' },
    ],
  },
  {
    id: 'b1-short-subclauses',
    level: 'B1',
    category: 'clause',
    order: 5,
    title: 'Short subclauses: te + infinitive',
    explanation: `A **short subclause** has no subject of its own — its only verb is an infinitive. When that happens, Dutch inserts **"te"** directly in front of the infinitive. This shows up most often after three little words: **om** (in order to), **zonder** (without), and **(in plaats) van** (instead of).

==Om, zonder, and (in plaats) van are followed by "te" + infinitive at the end of the clause==: "Ik bel je om het te zeggen" (I'm calling you to tell you), "Hij ging weg zonder te betalen" (He left without paying), "In plaats van te wachten, belde ze" (Instead of waiting, she called).

__With a separable verb, "te" is inserted between the prefix and the stem, written as one word__: "Ik ben te moe om op te staan" (I'm too tired to get up) uses "op te staan", not "te opstaan" and not "op staan te".

(Dutch also allows a bare infinitive with no "te" after verbs like zien, horen, and laten — "Ik zag hem lopen", I saw him walking — a related but separate pattern worth knowing exists.)`,
    examples: [
      { nl: 'Ik bel je om het te zeggen.', en: "I'm calling you to tell you." },
      { nl: 'Hij ging weg zonder te betalen.', en: 'He left without paying.' },
      { nl: 'In plaats van te wachten, belde ze.', en: 'Instead of waiting, she called.' },
      { nl: 'Ik ben te moe om op te staan.', en: "I'm too tired to get up." },
      { nl: 'Zij leest een boek om te ontspannen.', en: 'She reads a book to relax.' },
    ],
  },
  {
    id: 'b1-imperative',
    level: 'B1',
    category: 'verb',
    order: 6,
    title: 'The imperative: giving commands',
    explanation: `The Dutch **imperative** is almost always just the jij-form of the verb without the "-t", and without the pronoun itself: "Werk!" (Work!, from "je werkt"), "Kom hier!" (Come here!, from "je komt").

==The same short form works whether you're talking to one person or several== — Dutch doesn't have a separate plural command form the way it distinguishes singular/plural in statements.

For a formal or polite command, add **"u"** right after the verb: "Komt u binnen" (Please come in). Note this form keeps the "-t" that the informal imperative drops.

__A few common verbs have irregular imperatives worth memorizing directly__: "Wees stil!" (Be quiet!, from "zijn" — not "Ben stil!"), and "Heb geduld!" (Have patience!, from "hebben" — not "Heeft geduld!").`,
    examples: [
      { nl: 'Werk!', en: 'Work!' },
      { nl: 'Kom hier!', en: 'Come here!' },
      { nl: 'Komt u binnen.', en: 'Please come in.' },
      { nl: 'Wees stil!', en: 'Be quiet!' },
      { nl: 'Heb geduld!', en: 'Have patience!' },
    ],
  },
  {
    id: 'b1-pronominal-adverbs-advanced',
    level: 'B1',
    category: 'pronominal-adverb',
    order: 7,
    title: 'The other "er": subject, quantity, and location',
    explanation: `A2's pronominal-adverbs topic covered one job of "er": fusing with a preposition ("erop", "ermee"). This little word actually does several other jobs too, all unrelated to that fusion.

**Existential "er"** introduces an indefinite subject, the way English uses "there is/are": "Er is een probleem" (There is a problem) — Dutch never just says "Een probleem is" the way a direct translation might suggest.

**Locative "er"** is an unstressed stand-in for "there", referring to a place already mentioned: "Ik ben er geweest" (I've been there).

**Quantitative "er"** stands in for a counted noun after a number or quantity word: "Heb je kinderen? Ja, ik heb er twee" (Yes, I have two [of them]) — __the "er" can't be dropped here__, unlike English, which happily drops "of them".

==A sentence only ever has one "er", even when the grammar seems to call for two or three jobs at once (existential, locative, and quantitative all overlapping) — Dutch just uses the one "er" and the rest is understood from context.==`,
    examples: [
      { nl: 'Er is een probleem.', en: 'There is a problem.' },
      { nl: 'Ik ben er geweest.', en: "I've been there." },
      { nl: 'Heb je kinderen? Ja, ik heb er twee.', en: 'Do you have children? Yes, I have two.' },
      { nl: 'Er staan drie stoelen in de kamer.', en: 'There are three chairs in the room.' },
      { nl: 'Zijn er nog appels? Nee, er zijn er geen meer.', en: 'Are there any apples left? No, there are none left.' },
    ],
  },
  {
    id: 'b1-genitive-relative-pronouns',
    level: 'B1',
    category: 'clause',
    order: 8,
    title: 'Relative pronouns for "whose" and "whom"',
    explanation: `A2's relative-clauses topic covered "die", "dat", and "wat". Two more relative pronouns fill in the rest of the picture: "whose" and "whom".

For "whose", Dutch has **"wiens"** (masculine/de-word antecedent) and **"wier"** (feminine or plural antecedent) — though in everyday speech, **"van wie"** (of whom) has mostly replaced both: "De man wiens auto hier staat" or, more commonly today, "De man van wie de auto hier staat" (The man whose car is parked here).

For "whom" after a preposition, referring to a person, Dutch uses **"wie"**, not "die": "De vrouw met wie ik praatte" (The woman with whom I spoke).

==Use "wie" after a preposition when the relative clause refers to a person — never "die" in that spot==, even though "die" is the correct choice for people in A2's ordinary relative-clause rule ("De vrouw die daar woont"). __"De vrouw met die ik praatte" is wrong__; the preposition forces "wie".`,
    examples: [
      { nl: 'De man van wie de auto hier staat, is mijn buurman.', en: 'The man whose car is parked here is my neighbor.' },
      { nl: 'De vrouw met wie ik praatte, is lerares.', en: 'The woman with whom I spoke is a teacher.' },
      { nl: 'Ken je de jongen aan wie ik het boek gaf?', en: 'Do you know the boy I gave the book to?' },
      { nl: 'Dat is de vriend voor wie ik het cadeau kocht.', en: 'That is the friend I bought the gift for.' },
      { nl: 'De schrijver wiens boek ik lees, is beroemd.', en: 'The writer whose book I am reading is famous.' },
    ],
  },
  {
    id: 'b1-word-order-advanced',
    level: 'B1',
    category: 'word-order',
    order: 9,
    title: 'Word order: the full middle field',
    explanation: `A2's word-order topic covered Time-Manner-Place and where the direct object goes. Two more patterns round out how fluent Dutch actually assembles a sentence.

==Unstressed (reduced) pronouns move as early as possible, right after the finite verb — ahead of even a subject noun that follows==: "Ik geef het hem morgen" (I'll give it to him tomorrow) keeps "het" and "hem" tight together right after "geef", instead of scattering them to match English word order.

A **postposition** — a preposition that's part of a fixed phrase describing motion — can trail all the way to the very end of the clause, after any other verbs: "Hij loopt de kamer in" (He walks into the room) puts "in" after "kamer", not before it the way English "into" comes before "the room".

__In a perfect tense, the postposition still goes last, after the participle__: "Hij is de kamer in gelopen" (He has walked into the room) — not "Hij is in de kamer gelopen" (which would mean something slightly different: walking around inside the room, not entering it).`,
    examples: [
      { nl: 'Ik geef het hem morgen.', en: "I'll give it to him tomorrow." },
      { nl: 'Hij loopt de kamer in.', en: 'He walks into the room.' },
      { nl: 'Hij is de kamer in gelopen.', en: 'He has walked into the room.' },
      { nl: 'Zij liet het ons zien.', en: 'She showed it to us.' },
      { nl: 'De kat springt de tuin uit.', en: 'The cat jumps out of the garden.' },
    ],
  },
  {
    id: 'b1-compound-nouns',
    level: 'B1',
    category: 'other',
    order: 10,
    title: 'Building compound nouns',
    explanation: `Dutch freely joins two nouns into one new word — "boek" + "winkel" becomes **"boekwinkel"** (bookshop). __Always written as a single word__, never with a space or hyphen the way English sometimes writes "book shop" or "book-shop".

==The last noun in a compound decides the gender and article of the whole word, no matter what the first noun's own article was==: "de boekwinkel" takes "de" because "winkel" is a de-word — even though "boek" is a het-word all on its own ("het boek").

A linking sound is often inserted between the two nouns. The two most common links are **-s-** ("stad" + "huis" → "stadshuis") and **-e(n)-** ("hond" + "hok" → "hondenhok"), though plenty of compounds link with nothing at all ("school" + "boek" → "schoolboek").

There's no single rule that reliably predicts which link (or none) a given compound takes — __compounds mostly have to be learned individually__, the same way an English learner just memorizes that it's "toothbrush", not "tooth's brush".`,
    examples: [
      { nl: 'de boekwinkel', en: 'the bookshop' },
      { nl: 'het stadshuis', en: 'the city hall' },
      { nl: 'het hondenhok', en: 'the doghouse' },
      { nl: 'het schoolboek', en: 'the schoolbook' },
      { nl: 'de koffiemok', en: 'the coffee mug' },
    ],
  },
  {
    id: 'b1-possessives-advanced',
    level: 'B1',
    category: 'possessive',
    order: 11,
    title: 'Possessives: independent forms and alternatives',
    explanation: `A1 covered the dependent possessives that stand right before a noun (mijn boek, jouw huis). Every one of them also has an **independent form**, used when the noun itself isn't repeated.

==Build the independent possessive with de/het + possessive stem + "-e", matching the noun's own article==: "Is dit jouw boek? Nee, het is de mijne" (Is this your book? No, it's mine) — "boek" is a het-word, but the independent form still takes "de" here because the -e ending always pairs with "de", regardless of the noun's article ("de mijne" for a het-word noun, "de jouwe" for a de-word noun).

"Ons/onze" already changes with the noun's article even in its ordinary, dependent form (ons huis, onze auto) — a rule from A1 — and this carries into the independent forms too: "het onze" / "de onze".

__Colloquial Dutch very often uses "van mij/jou/hem/haar/ons/jullie/hen" instead of the independent possessive__, especially in speech: "Is dit van jou?" (Is this yours?) is at least as common as "Is dit de jouwe?" in everyday conversation.`,
    examples: [
      { nl: 'Is dit jouw boek? Nee, het is de mijne.', en: 'Is this your book? No, it is mine.' },
      { nl: 'Dit huis is het onze.', en: 'This house is ours.' },
      { nl: 'Is dit van jou?', en: 'Is this yours?' },
      { nl: 'Die tas is niet de zijne, die is van haar.', en: 'That bag is not his, it is hers.' },
      { nl: 'Welke auto is de jouwe?', en: 'Which car is yours?' },
    ],
  },
  {
    id: 'b1-indefinite-numbers-and-exclamatives',
    level: 'B1',
    category: 'indefinite',
    order: 12,
    title: 'Indefinite quantities and exclamations',
    explanation: `A2 covered iets/iemand/alles/elk/sommige. Two related sets of words round out this area: quantity words, and exclamations.

**Indefinite quantity words** sit directly before a noun the way a number would, with no extra agreement needed: **"enkele"** (a few, slightly formal), **"een paar"** (a couple/a few, everyday), **"veel"** (many/much), and **"weinig"** (few/little) — "enkele boeken" (a few books), "veel tijd" (a lot of time).

Separately, Dutch has dedicated words for reacting with surprise or emphasis. ==Use "wat een" + noun for "what a..."==: "Wat een mooi huis!" (What a beautiful house!). Use **"zo'n"** + noun for "such a": "Zo'n mooi huis heb ik nog nooit gezien" (I've never seen such a beautiful house).

__"Wat een" and "zo'n" both keep the noun singular even when the feeling is emphatic or plural in spirit__ — the emphasis comes from the exclamation word itself, not from changing the noun.`,
    examples: [
      { nl: 'Ik heb enkele vragen.', en: 'I have a few questions.' },
      { nl: 'Wij hebben een paar dagen vrij.', en: 'We have a couple of days off.' },
      { nl: 'Zij heeft weinig tijd.', en: 'She has little time.' },
      { nl: 'Wat een mooi huis!', en: 'What a beautiful house!' },
      { nl: "Zo'n moeilijke vraag had ik niet verwacht.", en: "I hadn't expected such a difficult question." },
    ],
  },
  {
    id: 'b1-hen-hun-and-reciprocal',
    level: 'B1',
    category: 'pronoun',
    order: 13,
    title: 'Hen vs. hun, and elkaar',
    explanation: `Standard written Dutch distinguishes two object forms of "zij" (they): **"hen"** for a direct object or the object of a preposition, and **"hun"** for an indirect object without a preposition.

==Use "hen" as a direct object or after a preposition, and "hun" as an indirect object with no preposition==: "Ik zie hen" (I see them — direct object), "Ik geef hun een cadeau" (I give them a gift — indirect object), "Ik praat met hen" (I talk with them — object of a preposition).

__In everyday spoken Dutch, this distinction is widely blurred or simply ignored, and "hun" shows up in both roles constantly__ — worth knowing the "official" rule for writing and testing, while recognizing that real spoken usage is much looser.

Separately, **"elkaar"** (each other/one another) is the everyday word for a reciprocal action: "Zij houden van elkaar" (They love each other). "Elkander" is a more formal, literary twin of the same word, and "mekaar" is a casual spoken variant heard especially in informal speech.`,
    examples: [
      { nl: 'Ik zie hen bij het station.', en: 'I see them at the station.' },
      { nl: 'Ik geef hun een cadeau.', en: 'I give them a gift.' },
      { nl: 'Ik praat vaak met hen.', en: 'I often talk with them.' },
      { nl: 'Zij houden van elkaar.', en: 'They love each other.' },
      { nl: 'Wij hebben elkaar lang niet gezien.', en: "We haven't seen each other in a long time." },
    ],
  },
  {
    id: 'b1-modal-verbs-perfect-tense',
    level: 'B1',
    category: 'verb',
    order: 14,
    title: 'Modal verbs in the perfect tense: the double infinitive',
    explanation: `When a modal verb (kunnen, moeten, mogen, willen, zullen) combines with another verb in the perfect tense, Dutch breaks its own usual pattern. Instead of using the modal's past participle (gekund, gemoeten, gewild...), it uses **two infinitives stacked at the end of the clause** — the main verb's infinitive, then the modal's own infinitive right after it.

==A modal verb paired with another verb in the perfect tense uses two infinitives at the end, not the modal's past participle==: "Ik heb het niet kunnen doen" (I haven't been able to do it) — literally "I have it not can do" — never "Ik heb het niet gekund doen".

This pattern is called the **IPP effect** (Infinitivus Pro Participio — "infinitive standing in for the participle").

__The modal's real past participle (gekund, gemoeten, gewild) is only used when the modal stands completely alone, with no second verb in the sentence__: "Ik heb het gekund" (I was able to [manage it]) is correct exactly because there's no second infinitive here to trigger the double-infinitive rule.`,
    examples: [
      { nl: 'Ik heb het niet kunnen doen.', en: "I haven't been able to do it." },
      { nl: 'Hij heeft moeten werken.', en: 'He has had to work.' },
      { nl: 'Wij hebben het niet mogen zien.', en: 'We were not allowed to see it.' },
      { nl: 'Ik heb het gekund.', en: 'I was able to (manage it).' },
      { nl: 'Zij heeft het willen proberen.', en: 'She wanted to try it.' },
    ],
  },
];
