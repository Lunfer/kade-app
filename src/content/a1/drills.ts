import { DrillItem } from '../../data/types';

// data shape per type (see src/engine/quizEngine.ts for how each is rendered/graded):
//  conjugation:      { verb: string, pronoun: string }
//  multiple-choice:  { options: string[] }
//  fill-blank:       { sentence: string }  -- sentence contains "___"
//  word-order:       { tokens: string[] }  -- shuffled tokens to reorder

export const a1Drills: DrillItem[] = [
  // --- a1-verbs-present ---
  { id: 'd-verb-1', topicId: 'a1-verbs-present', type: 'conjugation', prompt: 'Conjugate "werken" for "jij".', data: { verb: 'werken', pronoun: 'jij' }, correctAnswers: ['werkt'], wordIds: ['w-werken'] },
  { id: 'd-verb-2', topicId: 'a1-verbs-present', type: 'conjugation', prompt: 'Conjugate "wonen" for "ik".', data: { verb: 'wonen', pronoun: 'ik' }, correctAnswers: ['woon'], wordIds: ['w-wonen'] },
  { id: 'd-verb-3', topicId: 'a1-verbs-present', type: 'conjugation', prompt: 'Conjugate "koken" for "hij".', data: { verb: 'koken', pronoun: 'hij' }, correctAnswers: ['kookt'], wordIds: ['w-koken'] },
  { id: 'd-verb-4', topicId: 'a1-verbs-present', type: 'conjugation', prompt: 'Conjugate "leren" for "wij".', data: { verb: 'leren', pronoun: 'wij' }, correctAnswers: ['leren'], wordIds: ['w-leren'] },
  { id: 'd-verb-5', topicId: 'a1-verbs-present', type: 'multiple-choice', prompt: 'Jij ___ in Amsterdam. (wonen)', data: { options: ['woon', 'woont', 'wonen'] }, correctAnswers: ['woont'], wordIds: ['w-wonen'] },
  { id: 'd-verb-6', topicId: 'a1-verbs-present', type: 'multiple-choice', prompt: '___ jij hier? (werken, inverted -- drop the t)', data: { options: ['Werk', 'Werkt'] }, correctAnswers: ['Werk', 'werk'], wordIds: ['w-werken'] },
  { id: 'd-verb-7', topicId: 'a1-verbs-present', type: 'fill-blank', prompt: 'Fill in the correct form of "leren".', data: { sentence: 'Ik ___ Nederlands.' }, correctAnswers: ['leer'], wordIds: ['w-leren'] },
  { id: 'd-verb-8', topicId: 'a1-verbs-present', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['woon', 'ik', 'in', 'Rotterdam'] }, correctAnswers: ['Ik woon in Rotterdam.'] },
  { id: 'd-verb-9', topicId: 'a1-verbs-present', type: 'conjugation', prompt: 'Conjugate "spelen" for "zij" (she).', data: { verb: 'spelen', pronoun: 'zij (she)' }, correctAnswers: ['speelt'], wordIds: ['w-spelen'] },
  { id: 'd-verb-10', topicId: 'a1-verbs-present', type: 'conjugation', prompt: 'Conjugate "praten" for "jullie".', data: { verb: 'praten', pronoun: 'jullie' }, correctAnswers: ['praten'], wordIds: ['w-praten'] },

  // --- a1-word-order ---
  { id: 'd-word-1', topicId: 'a1-word-order', type: 'word-order', prompt: 'Put the words in order (subject first).', data: { tokens: ['thuis', 'ik', 'werk', 'vandaag'] }, correctAnswers: ['Ik werk vandaag thuis.'] },
  { id: 'd-word-2', topicId: 'a1-word-order', type: 'word-order', prompt: 'Put the words in order, starting with "Vandaag".', data: { tokens: ['werk', 'vandaag', 'ik', 'thuis'] }, correctAnswers: ['Vandaag werk ik thuis.'] },
  { id: 'd-word-3', topicId: 'a1-word-order', type: 'multiple-choice', prompt: 'Which sentence has correct word order?', data: { options: ['Vandaag ik werk thuis.', 'Vandaag werk ik thuis.'] }, correctAnswers: ['Vandaag werk ik thuis.'] },
  { id: 'd-word-4', topicId: 'a1-word-order', type: 'multiple-choice', prompt: '___ jij hier? (a yes/no question needs the verb first)', data: { options: ['Woon', 'Woont'] }, correctAnswers: ['Woon', 'woon'], wordIds: ['w-wonen'] },
  { id: 'd-word-5', topicId: 'a1-word-order', type: 'word-order', prompt: 'Put the words in order to make a question.', data: { tokens: ['woon', 'waar', 'jij'] }, correctAnswers: ['Waar woon jij?'] },
  { id: 'd-word-6', topicId: 'a1-word-order', type: 'fill-blank', prompt: 'Fill in the dummy subject.', data: { sentence: '___ regent vandaag.' }, correctAnswers: ['Het', 'het'], wordIds: ['w-regenen'] },
  { id: 'd-word-7', topicId: 'a1-word-order', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['het', 'regent', 'vandaag'] }, correctAnswers: ['Het regent vandaag.'] },
  { id: 'd-word-8', topicId: 'a1-word-order', type: 'word-order', prompt: 'Put the words in order to make a question.', data: { tokens: ['weer', 'is', 'hoe', 'het'] }, correctAnswers: ['Hoe is het weer?'] },

  // --- a1-articles ---
  { id: 'd-art-1', topicId: 'a1-articles', type: 'multiple-choice', prompt: '___ huis is groot.', data: { options: ['De', 'Het'] }, correctAnswers: ['Het'], wordIds: ['w-huis'] },
  { id: 'd-art-2', topicId: 'a1-articles', type: 'multiple-choice', prompt: '___ tafel is oud.', data: { options: ['De', 'Het'] }, correctAnswers: ['De'], wordIds: ['w-tafel'] },
  { id: 'd-art-3', topicId: 'a1-articles', type: 'fill-blank', prompt: 'Give the plural: een boek, twee ___.', data: { sentence: 'een boek, twee ___' }, correctAnswers: ['boeken'], wordIds: ['w-boek'] },
  { id: 'd-art-4', topicId: 'a1-articles', type: 'fill-blank', prompt: 'Give the plural: een auto, twee ___.', data: { sentence: 'een auto, twee ___' }, correctAnswers: ["auto's"], wordIds: ['w-auto'] },
  { id: 'd-art-5', topicId: 'a1-articles', type: 'fill-blank', prompt: 'Give the plural: een stoel, twee ___.', data: { sentence: 'een stoel, twee ___' }, correctAnswers: ['stoelen'], wordIds: ['w-stoel'] },
  { id: 'd-art-6', topicId: 'a1-articles', type: 'multiple-choice', prompt: '___ kinderen spelen buiten. (plurals always take this article)', data: { options: ['De', 'Het'] }, correctAnswers: ['De'], wordIds: ['w-kind'] },
  { id: 'd-art-7', topicId: 'a1-articles', type: 'multiple-choice', prompt: '___ boek ligt op tafel.', data: { options: ['De', 'Het'] }, correctAnswers: ['Het'], wordIds: ['w-boek'] },
  { id: 'd-art-8', topicId: 'a1-articles', type: 'fill-blank', prompt: 'Give the plural: een huis, twee ___ (watch the s -> z).', data: { sentence: 'een huis, twee ___' }, correctAnswers: ['huizen'], wordIds: ['w-huis'] },

  // --- a1-pronouns ---
  { id: 'd-pron-1', topicId: 'a1-pronouns', type: 'multiple-choice', prompt: 'Ik zie ___. (him)', data: { options: ['hem', 'hij'] }, correctAnswers: ['hem'] },
  { id: 'd-pron-2', topicId: 'a1-pronouns', type: 'multiple-choice', prompt: '___ helpt mij. (She)', data: { options: ['Zij', 'Haar'] }, correctAnswers: ['Zij'] },
  { id: 'd-pron-3', topicId: 'a1-pronouns', type: 'fill-blank', prompt: 'Fill in "us".', data: { sentence: 'Kun je ___ horen?' }, correctAnswers: ['ons'], wordIds: ['w-horen'] },
  { id: 'd-pron-4', topicId: 'a1-pronouns', type: 'multiple-choice', prompt: 'Wij spelen met ___. (her)', data: { options: ['zij', 'haar'] }, correctAnswers: ['haar'], wordIds: ['w-spelen'] },
  { id: 'd-pron-5', topicId: 'a1-pronouns', type: 'fill-blank', prompt: 'Fill in "them" (casual, most common choice).', data: { sentence: 'Ik geef het boek aan ___.' }, correctAnswers: ['hen', 'hun', 'ze'], wordIds: ['w-boek'] },
  { id: 'd-pron-6', topicId: 'a1-pronouns', type: 'multiple-choice', prompt: '___ woont in Rotterdam. (He, as subject)', data: { options: ['Hem', 'Hij'] }, correctAnswers: ['Hij'], wordIds: ['w-wonen'] },
  { id: 'd-pron-7', topicId: 'a1-pronouns', type: 'fill-blank', prompt: 'Fill in "I".', data: { sentence: '___ zie jou.' }, correctAnswers: ['Ik', 'ik'] },

  // --- a1-prepositions ---
  { id: 'd-prep-1', topicId: 'a1-prepositions', type: 'multiple-choice', prompt: 'Ik woon ___ de stad. (in/on)', data: { options: ['in', 'op'] }, correctAnswers: ['in'], wordIds: ['w-stad'] },
  { id: 'd-prep-2', topicId: 'a1-prepositions', type: 'multiple-choice', prompt: 'Het boek ligt ___ de tafel. (in/on)', data: { options: ['in', 'op'] }, correctAnswers: ['op'], wordIds: ['w-boek', 'w-tafel'] },
  { id: 'd-prep-3', topicId: 'a1-prepositions', type: 'fill-blank', prompt: 'Fill in "to" (movement toward home).', data: { sentence: 'Wij gaan ___ huis.' }, correctAnswers: ['naar'], wordIds: ['w-huis'] },
  { id: 'd-prep-4', topicId: 'a1-prepositions', type: 'fill-blank', prompt: 'Fill in "from".', data: { sentence: 'Zij komt ___ school.' }, correctAnswers: ['van'], wordIds: ['w-school'] },
  { id: 'd-prep-5', topicId: 'a1-prepositions', type: 'multiple-choice', prompt: 'De kinderen spelen ___ straat. (on the street, idiomatic)', data: { options: ['op', 'in'] }, correctAnswers: ['op'], wordIds: ['w-straat', 'w-kind'] },
  { id: 'd-prep-6', topicId: 'a1-prepositions', type: 'fill-blank', prompt: 'Fill in "at" (at school, idiomatic).', data: { sentence: 'Hij is ___ school vandaag.' }, correctAnswers: ['op'], wordIds: ['w-school'] },
  { id: 'd-prep-7', topicId: 'a1-prepositions', type: 'multiple-choice', prompt: 'Ik werk ___ hem. (with)', data: { options: ['met', 'voor'] }, correctAnswers: ['met'], wordIds: ['w-werken'] },
  { id: 'd-prep-8', topicId: 'a1-prepositions', type: 'fill-blank', prompt: 'Fill in "for".', data: { sentence: 'Dit cadeau is ___ jou.' }, correctAnswers: ['voor'] },

  // --- a1-possessives ---
  { id: 'd-poss-1', topicId: 'a1-possessives', type: 'multiple-choice', prompt: '___ huis is groot. (our, "huis" is a het-word)', data: { options: ['ons', 'onze'] }, correctAnswers: ['ons'], wordIds: ['w-huis'] },
  { id: 'd-poss-2', topicId: 'a1-possessives', type: 'multiple-choice', prompt: '___ auto is nieuw. (our, "auto" is a de-word)', data: { options: ['ons', 'onze'] }, correctAnswers: ['onze'], wordIds: ['w-auto'] },
  { id: 'd-poss-3', topicId: 'a1-possessives', type: 'multiple-choice', prompt: '___ boeken zijn hier. (our, plural)', data: { options: ['ons', 'onze'] }, correctAnswers: ['onze'], wordIds: ['w-boek'] },
  { id: 'd-poss-4', topicId: 'a1-possessives', type: 'fill-blank', prompt: 'Fill in "my".', data: { sentence: 'Dit is ___ huis.' }, correctAnswers: ['mijn'], wordIds: ['w-huis'] },
  { id: 'd-poss-5', topicId: 'a1-possessives', type: 'fill-blank', prompt: 'Fill in "your" (informal).', data: { sentence: 'Waar is ___ auto?' }, correctAnswers: ['jouw', 'je'], wordIds: ['w-auto'] },
  { id: 'd-poss-6', topicId: 'a1-possessives', type: 'fill-blank', prompt: 'Fill in "her".', data: { sentence: 'Zij praat met ___ vriend.' }, correctAnswers: ['haar'], wordIds: ['w-vriend'] },
  { id: 'd-poss-7', topicId: 'a1-possessives', type: 'multiple-choice', prompt: 'Hij houdt van ___ werk. (his)', data: { options: ['zijn', 'haar'] }, correctAnswers: ['zijn'] },
];
