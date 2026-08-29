import { WritingPrompt } from '../../data/types';

export const a1WritingPrompts: WritingPrompt[] = [
  {
    id: 'wp-a1-1',
    topicIds: ['a1-verbs-present'],
    promptText: 'Schrijf een zin over waar je woont en wat je voor werk doet.',
    promptTextEn: 'Write a sentence about where you live and what you do for work.',
    targetGrammarPoints: ['present tense regular verb agreement (ik/jij/hij/wij forms)'],
  },
  {
    id: 'wp-a1-2',
    topicIds: ['a1-word-order'],
    promptText: 'Begin je zin met "Vandaag" en zeg iets over het weer.',
    promptTextEn: 'Start your sentence with "Vandaag" (today) and say something about the weather.',
    targetGrammarPoints: ['V2 word order after a fronted time adverb'],
  },
  {
    id: 'wp-a1-3',
    topicIds: ['a1-articles'],
    promptText: 'Beschrijf drie dingen in je huis. Gebruik "de" of "het" bij elk woord.',
    promptTextEn: 'Describe three things in your house. Use "de" or "het" with each word.',
    targetGrammarPoints: ['de/het article agreement'],
  },
  {
    id: 'wp-a1-4',
    topicIds: ['a1-pronouns', 'a1-possessives'],
    promptText: 'Schrijf twee zinnen over een vriend of vriendin: wat diegene doet, en iets dat van hen is.',
    promptTextEn: 'Write two sentences about a friend: something they do, and something that belongs to them.',
    targetGrammarPoints: ['subject vs. object pronouns', 'possessive agreement (zijn/haar)'],
  },
  {
    id: 'wp-a1-5',
    topicIds: ['a1-prepositions'],
    promptText: 'Beschrijf je ochtend met minstens twee voorzetsels (bijvoorbeeld: naar, op, met).',
    promptTextEn: 'Describe your morning using at least two prepositions (for example: naar, op, met).',
    targetGrammarPoints: ['preposition choice (in/op/naar/met/van/voor)'],
  },
];
