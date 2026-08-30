import { GrammarTopic } from '../../data/types';

export const a0Topics: GrammarTopic[] = [
  {
    id: 'a0-alphabet',
    level: 'A0',
    category: 'pronunciation',
    order: 1,
    title: 'The Dutch alphabet and letter sounds',
    explanation: `Dutch uses the same 26 letters as English, but many are pronounced differently, and even the letter names differ enough that spelling something out loud sounds unfamiliar at first. Learn the sounds now -- they explain nearly every other pronunciation topic that follows.

The five vowel letters (a, e, i, o, u) each have a short, trained default sound: **a** like the "u" in English "cut", **e** like the "e" in "bed", **i** like the "i" in "sit", **o** like the "o" in British "hot", **u** a rounded, fronted sound with no real English equivalent (closer to French "eu"). ==These are the short-vowel values used in closed syllables -- the difference between short and long vowels is its own topic next.==

A few consonants are worth flagging early: **j** sounds like English "y" ("ja" sounds like "yah"), __not like English "j"__. **c** is rare on its own, mostly appearing in loanwords or before e/i as an "s" sound. **ch** and **g** share a throat-clearing sound with no English equivalent, covered in its own topic.`,
    examples: [
      { nl: 'ja', en: 'yes (sounds like "yah", not English "ja")' },
      { nl: 'a, e, i, o, u', en: 'short vowel sounds: cut, bed, sit, hot, (no English equivalent)' },
      { nl: 'centrum', en: 'city center (c pronounced like "s" before e)' },
      { nl: 'cadeau', en: 'gift (c pronounced like "k" in this loanword)' },
    ],
  },
  {
    id: 'a0-vowel-length',
    level: 'A0',
    category: 'pronunciation',
    order: 2,
    title: 'Open and closed syllables: short vs. long vowels',
    explanation: `This is the single most load-bearing spelling rule in Dutch -- once it clicks, large parts of Dutch spelling stop looking arbitrary. A syllable is **closed** if it ends in a consonant, and **open** if it ends in a vowel.

==A single vowel letter (a, e, o, u) in a closed syllable is short; the same vowel written double (aa, ee, oo, uu), or written single in an open syllable, is long.== "man" (closed, short a) vs. "maan" (moon -- also closed, but written with two a's to signal a long vowel). "ma-ken" (to make) splits into open "ma" + closed "ken": the open first syllable is why a single "a" there is still long.

This is why some words change their vowel spelling when a suffix shifts the syllable boundary: "man" (closed, short) becomes "mannen" (plural, still closed, still short -- the consonant doubles to keep it closed), while "maan" (closed, long, double aa) becomes "manen" (plural, now open, so it drops back to a single "a" for the same long sound). __This is exactly the "double the vowel" / "double the consonant" rule already used without explanation in the A1 verb-stem and plural topics__ -- this is where it actually comes from.

__One exception to the doubling pattern: a long "i" sound is written "ie", not doubled "ii"__ ("dier", animal, not "diir").`,
    examples: [
      { nl: 'man / maan', en: 'man (short a) / moon (long aa)' },
      { nl: 'zon / zoon', en: 'sun (short o) / son (long oo)' },
      { nl: 'pot / poot', en: 'pot (short o) / paw, leg (long oo)' },
      { nl: 'ma-ken', en: 'to make (open syllable "ma", so the single "a" is long)' },
      { nl: 'man, mannen', en: 'man, men (consonant doubles to keep the syllable closed and the vowel short)' },
      { nl: 'dier', en: 'animal (long "i" sound spelled "ie", not doubled)' },
    ],
  },
  {
    id: 'a0-ij-diphthongs',
    level: 'A0',
    category: 'pronunciation',
    order: 3,
    title: 'The letter "ij", and tricky vowel combinations',
    explanation: `Dutch treats **ij** as a single letter/sound, pronounced like the "y" in English "my". It is __not__ "i" followed by "j" the way it looks -- get in the habit of reading "ij" as one unit.

==The catch: "ei" is pronounced exactly the same as "ij", but spelled differently, and which one a word uses is mostly a matter of convention rather than a rule -- both have to be learned by sight, word by word.== "Ik weet niet waarom hij dat zegt" mixes both spellings for the same sound.

A few other vowel combinations don't map to English spelling intuition either. **ui** has no close English equivalent -- a rounded, fronted sound roughly between "ow" and "eu" (say "how" with rounded lips and you're close). **eu** sounds like French "eu" or German "ö" -- similar to the vowel in "fur" said with rounded lips. **au** and **ou** both sound like the "ow" in English "cow", and, like ei/ij, are largely interchangeable by ear and have to be learned by spelling convention.`,
    examples: [
      { nl: 'mijn', en: 'my (ij pronounced like "y" in "my")' },
      { nl: 'klein', en: 'small (ei -- sounds identical to ij)' },
      { nl: 'huis', en: 'house (ui -- no English equivalent)' },
      { nl: 'deur', en: 'door (eu -- like German ö)' },
      { nl: 'koud', en: 'cold (au, sounds like "ow")' },
      { nl: 'vrouw', en: 'woman (ou, sounds the same as au)' },
    ],
  },
  {
    id: 'a0-tricky-consonants',
    level: 'A0',
    category: 'pronunciation',
    order: 4,
    title: 'Consonant sounds without an English equivalent',
    explanation: `A handful of Dutch consonants and consonant clusters have no real English equivalent, and reaching for the closest English sound will usually still sound foreign -- worth flagging early rather than guessing.

==The guttural g and ch share a rasping, throat-clearing sound made at the back of the throat==, not the English "g" (as in "go") and not the English "h". It's the sound most often associated with Dutch by non-speakers. "Goedemorgen" and "acht" both use it.

**sch-** at the start of a word is this same throat sound followed by "s" -- "school" is pronounced roughly "s-CH-ool", __not "sh-ool" the way English spelling intuition suggests__.

**w** and **v** are both softer than their English counterparts: Dutch **w** sits between English "w" and "v" (lips barely rounded), and Dutch **v** sits between English "v" and "f" (less buzzy than English "v"). Finally, a **d** or **b** at the very end of a word devoices to sound like "t" or "p": "hond" (dog) is pronounced like "hont", __even though it's still spelled and inflected with a "d"__ ("honden", plural, keeps the "d" sound because it's no longer word-final).`,
    examples: [
      { nl: 'goedemorgen', en: 'good morning (guttural g)' },
      { nl: 'acht', en: 'eight (guttural ch)' },
      { nl: 'school', en: 'school (sch- = guttural sound + s, not "sh")' },
      { nl: 'water', en: 'water (w, softer than English w)' },
      { nl: 'vader', en: 'father (v, softer than English v)' },
      { nl: 'hond, honden', en: 'dog, dogs (final d sounds like t; "honden" keeps the d sound)' },
    ],
  },
  {
    id: 'a0-greetings-intro',
    level: 'A0',
    category: 'phrases',
    order: 5,
    title: 'Greetings and introducing yourself',
    explanation: `These are fixed chunks worth memorizing as whole units before worrying about how they're built grammatically -- the "why" behind sentences like "Ik heet..." comes later, once the present tense is covered.

Dutch greets by time of day: **goedemorgen** (good morning), **goedemiddag** (good afternoon, from around noon), **goedenavond** (good evening), and **goedenacht** (good night). __"Goedenacht" is only used when parting, never as a greeting on arrival__. "Hallo" and the casual "dag" work at any time of day.

==The core self-introduction cluster: "Ik heet..." (my name is...), "Ik kom uit..." (I'm from...), "Ik ben ... jaar oud" (I am ... years old).== "Hoe gaat het?" (how's it going?) is answered with "Goed, en met jou?" (good, and you?) far more often than a literal status report -- treat it as a ritual exchange, __the same way English "how are you?" rarely expects a detailed answer__.

To part ways: "tot ziens" (goodbye, more formal/neutral) or the casual "doei".`,
    examples: [
      { nl: 'Goedemorgen!', en: 'Good morning!' },
      { nl: 'Ik heet Zoe.', en: 'My name is Zoe.' },
      { nl: 'Ik kom uit Amerika.', en: 'I\'m from America.' },
      { nl: 'Hoe gaat het? Goed, en met jou?', en: 'How\'s it going? Good, and you?' },
      { nl: 'Tot ziens!', en: 'Goodbye!' },
    ],
  },
  {
    id: 'a0-survival-phrases',
    level: 'A0',
    category: 'phrases',
    order: 6,
    title: 'Survival phrases',
    explanation: `A small set of fixed questions and statements that keep a conversation going when you don't understand something -- arguably the highest-value phrases for an actual beginner, since they buy time and signal your level without needing any grammar of your own.

==When you don't follow: "Ik begrijp het niet" (I don't understand), "Kunt u dat herhalen?" (Can you repeat that?), "Spreekt u langzamer, alstublieft?" (Could you speak more slowly, please?).==

To ask about the language itself: "Wat betekent...?" (What does ... mean?), "Hoe zeg je ... in het Nederlands?" (How do you say ... in Dutch?).

To set expectations honestly: "Ik spreek een beetje Nederlands" (I speak a little Dutch), "Spreekt u Engels?" (Do you speak English?) -- __worth having ready, but treat as a last resort rather than an opener__, since reaching for it immediately gives less room to practice.`,
    examples: [
      { nl: 'Ik begrijp het niet.', en: 'I don\'t understand.' },
      { nl: 'Kunt u dat herhalen?', en: 'Can you repeat that?' },
      { nl: 'Wat betekent "gezellig"?', en: 'What does "gezellig" mean?' },
      { nl: 'Hoe zeg je "thank you" in het Nederlands?', en: 'How do you say "thank you" in Dutch?' },
      { nl: 'Ik spreek een beetje Nederlands.', en: 'I speak a little Dutch.' },
    ],
  },
  {
    id: 'a0-numbers',
    level: 'A0',
    category: 'vocabulary',
    order: 7,
    title: 'Numbers 0-100',
    explanation: `Dutch numbers 0-12 are irregular, the way English "eleven, twelve" are, so they're best just memorized as a set: nul, een, twee, drie, vier, vijf, zes, zeven, acht, negen, tien, elf, twaalf.

13-19 follow a regular pattern: the unit + "-tien" (from "tien", ten) -- dertien, veertien, vijftien, zestien, zeventien, achttien, negentien. Twintig (20) breaks the pattern again, then the tens above it are regular: dertig, veertig, vijftig, zestig, zeventig, tachtig, negentig, honderd.

==The most important pattern to internalize: from 21 onward, Dutch says the unit before the ten, joined with "en" ("and") -- the reverse of English order.== "eenentwintig" is literally "one-and-twenty" (21), "vijfenveertig" is "five-and-forty" (45). __This trips up a lot of learners doing quick mental math or listening for phone numbers and prices__ -- reading a Dutch two-digit number left-to-right the way English does gives the wrong number.`,
    examples: [
      { nl: 'elf, twaalf, dertien', en: 'eleven, twelve, thirteen' },
      { nl: 'twintig', en: 'twenty' },
      { nl: 'eenentwintig', en: 'twenty-one (literally "one-and-twenty")' },
      { nl: 'vijfenveertig', en: 'forty-five (literally "five-and-forty")' },
      { nl: 'honderd', en: 'one hundred' },
    ],
  },
  {
    id: 'a0-days-months',
    level: 'A0',
    category: 'vocabulary',
    order: 8,
    title: 'Days, months, and time words',
    explanation: `The seven days of the week: maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag, zondag. ==Unlike English, Dutch days and months are not capitalized in the middle of a sentence== ("Ik werk op maandag", not "Maandag"), __only at the very start of a sentence, like any other word__.

The twelve months: januari, februari, maart, april, mei, juni, juli, augustus, september, oktober, november, december -- most are close enough to their English equivalents to recognize on sight.

A handful of relative time words come up constantly and are worth learning alongside the calendar: vandaag (today), morgen (tomorrow), gisteren (yesterday), nu (now), straks (in a bit / later).`,
    examples: [
      { nl: 'Ik werk op maandag.', en: 'I work on Monday.' },
      { nl: 'Mijn verjaardag is in mei.', en: 'My birthday is in May.' },
      { nl: 'Wat ga je vandaag doen?', en: 'What are you going to do today?' },
      { nl: 'Tot morgen!', en: 'See you tomorrow!' },
      { nl: 'Ik bel je straks.', en: 'I\'ll call you in a bit.' },
    ],
  },
  {
    id: 'a0-colors',
    level: 'A0',
    category: 'vocabulary',
    order: 9,
    title: 'Colors',
    explanation: `The core color words, learned here in their plain, unchanged form (the "predicate" position, after a verb like "is"). ==De/het adjective agreement -- when a color gets an "-e" ending in front of a noun ("de rode auto") -- is covered later, in the A1 adjectives topic; these examples deliberately avoid that pattern for now.==

rood (red), blauw (blue), geel (yellow), groen (green), wit (white), zwart (black), bruin (brown), oranje (orange), roze (pink), paars (purple), grijs (gray).`,
    examples: [
      { nl: 'De auto is rood.', en: 'The car is red.' },
      { nl: 'Mijn kamer is blauw.', en: 'My room is blue.' },
      { nl: 'De lucht is grijs vandaag.', en: 'The sky is gray today.' },
      { nl: 'Zijn ogen zijn groen.', en: 'His eyes are green.' },
    ],
  },
];
