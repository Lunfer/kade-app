import { DrillItem } from '../../data/types';

// A0 skips conjugation/word-order drill types entirely -- there's no verb
// system or sentence-assembly grammar yet at this level (see
// docs/grammar-a0-curriculum-map.md). Multiple-choice and fill-blank only.

export const a0Drills: DrillItem[] = [
  // --- a0-alphabet ---
  { id: 'd-alpha-1', topicId: 'a0-alphabet', type: 'multiple-choice', prompt: 'Which English sound is closest to Dutch "j"?', data: { options: ['y (as in "yes")', 'j (as in "jam")'] }, correctAnswers: ['y (as in "yes")'] },
  { id: 'd-alpha-2', topicId: 'a0-alphabet', type: 'multiple-choice', prompt: 'How do you pronounce "ja"?', data: { options: ['yah', 'jah'] }, correctAnswers: ['yah'] },
  { id: 'd-alpha-3', topicId: 'a0-alphabet', type: 'multiple-choice', prompt: 'In "centrum", how is the "c" pronounced?', data: { options: ['s', 'k'] }, correctAnswers: ['s'] },
  { id: 'd-alpha-4', topicId: 'a0-alphabet', type: 'multiple-choice', prompt: 'Which letter is rare on its own in Dutch, mostly appearing in loanwords?', data: { options: ['c', 'a'] }, correctAnswers: ['c'] },

  // --- a0-vowel-length ---
  { id: 'd-vwl-1', topicId: 'a0-vowel-length', type: 'multiple-choice', prompt: '"man" (closed syllable, single "a") has which vowel sound?', data: { options: ['short', 'long'] }, correctAnswers: ['short'] },
  { id: 'd-vwl-2', topicId: 'a0-vowel-length', type: 'multiple-choice', prompt: '"maan" is spelled with a double "aa" because the vowel is:', data: { options: ['long', 'short'] }, correctAnswers: ['long'] },
  { id: 'd-vwl-3', topicId: 'a0-vowel-length', type: 'fill-blank', prompt: 'Give the plural of "man" (keep the vowel short).', data: { sentence: 'man, twee ___' }, correctAnswers: ['mannen'] },
  { id: 'd-vwl-4', topicId: 'a0-vowel-length', type: 'fill-blank', prompt: 'Give the plural of "maan" (keep the vowel long).', data: { sentence: 'maan, twee ___' }, correctAnswers: ['manen'] },
  { id: 'd-vwl-5', topicId: 'a0-vowel-length', type: 'multiple-choice', prompt: 'Which word means "sun" (short vowel)?', data: { options: ['zon', 'zoon'] }, correctAnswers: ['zon'] },
  { id: 'd-vwl-6', topicId: 'a0-vowel-length', type: 'multiple-choice', prompt: 'Which word means "son" (long vowel)?', data: { options: ['zon', 'zoon'] }, correctAnswers: ['zoon'] },
  { id: 'd-vwl-7', topicId: 'a0-vowel-length', type: 'multiple-choice', prompt: 'How is a long "i" sound usually spelled?', data: { options: ['ie', 'ii'] }, correctAnswers: ['ie'] },

  // --- a0-ij-diphthongs ---
  { id: 'd-ij-1', topicId: 'a0-ij-diphthongs', type: 'multiple-choice', prompt: '"mijn" (my) -- the "ij" sounds like the vowel in which English word?', data: { options: ['my', 'me'] }, correctAnswers: ['my'] },
  { id: 'd-ij-2', topicId: 'a0-ij-diphthongs', type: 'multiple-choice', prompt: 'Which spelling sounds identical to "ij"?', data: { options: ['ei', 'eu'] }, correctAnswers: ['ei'] },
  { id: 'd-ij-3', topicId: 'a0-ij-diphthongs', type: 'multiple-choice', prompt: '"huis" (house) uses which vowel combination, which has no English equivalent?', data: { options: ['ui', 'eu'] }, correctAnswers: ['ui'] },
  { id: 'd-ij-4', topicId: 'a0-ij-diphthongs', type: 'multiple-choice', prompt: '"koud" (cold) and "vrouw" (woman) both sound like the "ow" in English "cow" -- which two spellings are these?', data: { options: ['au and ou', 'ui and eu'] }, correctAnswers: ['au and ou'] },
  { id: 'd-ij-5', topicId: 'a0-ij-diphthongs', type: 'fill-blank', prompt: 'Fill in the Dutch word for "small" (ei spelling).', data: { sentence: 'Dat huis is niet groot, het is ___.' }, correctAnswers: ['klein'] },

  // --- a0-tricky-consonants ---
  { id: 'd-cons-1', topicId: 'a0-tricky-consonants', type: 'multiple-choice', prompt: 'How is the guttural "g"/"ch" sound produced?', data: { options: ['at the back of the throat', 'with the lips'] }, correctAnswers: ['at the back of the throat'] },
  { id: 'd-cons-2', topicId: 'a0-tricky-consonants', type: 'multiple-choice', prompt: 'How is "school" pronounced?', data: { options: ['s-CH-ool (not "sh")', 'sh-ool'] }, correctAnswers: ['s-CH-ool (not "sh")'] },
  { id: 'd-cons-3', topicId: 'a0-tricky-consonants', type: 'multiple-choice', prompt: 'How does "hond" (dog) sound at the end of the word?', data: { options: ['like "hont" (t sound)', 'like "hond" (d sound)'] }, correctAnswers: ['like "hont" (t sound)'] },
  { id: 'd-cons-4', topicId: 'a0-tricky-consonants', type: 'multiple-choice', prompt: 'In the plural "honden", does the "d" still devoice to "t"?', data: { options: ['No -- it is no longer word-final', 'Yes, always'] }, correctAnswers: ['No -- it is no longer word-final'] },

  // --- a0-greetings-intro ---
  { id: 'd-greet-1', topicId: 'a0-greetings-intro', type: 'multiple-choice', prompt: 'Which greeting means "good evening"?', data: { options: ['goedenavond', 'goedemorgen'] }, correctAnswers: ['goedenavond'] },
  { id: 'd-greet-2', topicId: 'a0-greetings-intro', type: 'fill-blank', prompt: 'Fill in "my name is".', data: { sentence: '___ Zoe.' }, correctAnswers: ['Ik heet', 'ik heet'] },
  { id: 'd-greet-3', topicId: 'a0-greetings-intro', type: 'fill-blank', prompt: 'Fill in "I\'m from".', data: { sentence: '___ Amerika.' }, correctAnswers: ['Ik kom uit', 'ik kom uit'] },
  { id: 'd-greet-4', topicId: 'a0-greetings-intro', type: 'multiple-choice', prompt: 'When is it appropriate to say "goedenacht"?', data: { options: ['Only when parting for the night', 'As a greeting any time of day'] }, correctAnswers: ['Only when parting for the night'] },
  { id: 'd-greet-5', topicId: 'a0-greetings-intro', type: 'fill-blank', prompt: 'What is the standard, ritual answer to "Hoe gaat het?"', data: { sentence: 'Hoe gaat het? ___' }, correctAnswers: ['Goed, en met jou?', 'goed, en met jou?'] },
  { id: 'd-greet-6', topicId: 'a0-greetings-intro', type: 'multiple-choice', prompt: 'Which is the casual way to say goodbye?', data: { options: ['doei', 'goedemiddag'] }, correctAnswers: ['doei'] },

  // --- a0-survival-phrases ---
  { id: 'd-surv-1', topicId: 'a0-survival-phrases', type: 'multiple-choice', prompt: 'Which phrase means "Can you repeat that?"', data: { options: ['Kunt u dat herhalen?', 'Kunt u dat begrijpen?'] }, correctAnswers: ['Kunt u dat herhalen?'] },
  { id: 'd-surv-2', topicId: 'a0-survival-phrases', type: 'multiple-choice', prompt: 'Which phrase asks what a word means?', data: { options: ['Wat betekent...?', 'Hoe zeg je...?'] }, correctAnswers: ['Wat betekent...?'] },
  { id: 'd-surv-3', topicId: 'a0-survival-phrases', type: 'multiple-choice', prompt: 'Which phrase asks how to say something in Dutch?', data: { options: ['Hoe zeg je... in het Nederlands?', 'Wat betekent... in het Nederlands?'] }, correctAnswers: ['Hoe zeg je... in het Nederlands?'] },
  { id: 'd-surv-4', topicId: 'a0-survival-phrases', type: 'fill-blank', prompt: 'Fill in "I speak a little Dutch."', data: { sentence: 'Ik spreek een beetje ___.' }, correctAnswers: ['Nederlands'] },
  { id: 'd-surv-5', topicId: 'a0-survival-phrases', type: 'multiple-choice', prompt: 'Which phrase means "I don\'t understand"?', data: { options: ['Ik begrijp het niet.', 'Ik spreek het niet.'] }, correctAnswers: ['Ik begrijp het niet.'] },

  // --- a0-numbers ---
  { id: 'd-num-1', topicId: 'a0-numbers', type: 'fill-blank', prompt: 'Write the Dutch word for 13.', data: { sentence: '13 = ___' }, correctAnswers: ['dertien'], wordIds: ['w-num-13'] },
  { id: 'd-num-2', topicId: 'a0-numbers', type: 'fill-blank', prompt: 'Write the Dutch word for 21 (unit-and-ten order).', data: { sentence: '21 = ___' }, correctAnswers: ['eenentwintig'], wordIds: ['w-num-21'] },
  { id: 'd-num-3', topicId: 'a0-numbers', type: 'fill-blank', prompt: 'Write the Dutch word for 45.', data: { sentence: '45 = ___' }, correctAnswers: ['vijfenveertig'] },
  { id: 'd-num-4', topicId: 'a0-numbers', type: 'multiple-choice', prompt: 'Which number is "twintig"?', data: { options: ['20', '12'] }, correctAnswers: ['20'], wordIds: ['w-num-20'] },
  { id: 'd-num-5', topicId: 'a0-numbers', type: 'multiple-choice', prompt: 'In a Dutch two-digit number, which part is said first?', data: { options: ['the unit (ones)', 'the ten'] }, correctAnswers: ['the unit (ones)'] },
  { id: 'd-num-6', topicId: 'a0-numbers', type: 'fill-blank', prompt: 'Write the Dutch word for 100.', data: { sentence: '100 = ___' }, correctAnswers: ['honderd'], wordIds: ['w-num-100'] },

  // --- a0-days-months ---
  { id: 'd-days-1', topicId: 'a0-days-months', type: 'multiple-choice', prompt: 'Which day is "woensdag"?', data: { options: ['Wednesday', 'Thursday'] }, correctAnswers: ['Wednesday'], wordIds: ['w-woensdag'] },
  { id: 'd-days-2', topicId: 'a0-days-months', type: 'fill-blank', prompt: 'Fill in the day after "vrijdag".', data: { sentence: 'vrijdag, ___' }, correctAnswers: ['zaterdag'], wordIds: ['w-zaterdag'] },
  { id: 'd-days-3', topicId: 'a0-days-months', type: 'multiple-choice', prompt: 'Are Dutch days of the week capitalized mid-sentence?', data: { options: ['No', 'Yes'] }, correctAnswers: ['No'] },
  { id: 'd-days-4', topicId: 'a0-days-months', type: 'fill-blank', prompt: 'Fill in "yesterday".', data: { sentence: 'Ik was ___ ziek.' }, correctAnswers: ['gisteren'], wordIds: ['w-gisteren'] },
  { id: 'd-days-5', topicId: 'a0-days-months', type: 'multiple-choice', prompt: 'Which month is "augustus"?', data: { options: ['August', 'April'] }, correctAnswers: ['August'], wordIds: ['w-augustus'] },
  { id: 'd-days-6', topicId: 'a0-days-months', type: 'fill-blank', prompt: 'Fill in "tomorrow".', data: { sentence: 'Tot ___!' }, correctAnswers: ['morgen'], wordIds: ['w-morgen'] },

  // --- a0-colors ---
  { id: 'd-col-1', topicId: 'a0-colors', type: 'multiple-choice', prompt: 'Which color is "groen"?', data: { options: ['green', 'gray'] }, correctAnswers: ['green'], wordIds: ['w-groen'] },
  { id: 'd-col-2', topicId: 'a0-colors', type: 'fill-blank', prompt: 'Fill in the color: the sky is gray.', data: { sentence: 'De lucht is ___.' }, correctAnswers: ['grijs'], wordIds: ['w-grijs'] },
  { id: 'd-col-3', topicId: 'a0-colors', type: 'multiple-choice', prompt: 'Which word means "red"?', data: { options: ['rood', 'roze'] }, correctAnswers: ['rood'], wordIds: ['w-rood'] },
  { id: 'd-col-4', topicId: 'a0-colors', type: 'fill-blank', prompt: 'Fill in the color: the car is red.', data: { sentence: 'De auto is ___.' }, correctAnswers: ['rood'], wordIds: ['w-rood'] },
  { id: 'd-col-5', topicId: 'a0-colors', type: 'multiple-choice', prompt: 'Which word means "purple"?', data: { options: ['paars', 'bruin'] }, correctAnswers: ['paars'], wordIds: ['w-paars'] },
];
