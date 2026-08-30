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
  // --- a1-negation ---
  { id: 'd-neg-1', topicId: 'a1-negation', type: 'multiple-choice', prompt: 'Ik heb ___ tijd. (no time -- indefinite noun)', data: { options: ['niet', 'geen'] }, correctAnswers: ['geen'] },
  { id: 'd-neg-2', topicId: 'a1-negation', type: 'multiple-choice', prompt: 'Ik heb de auto ___. (not -- a specific, definite car)', data: { options: ['niet', 'geen'] }, correctAnswers: ['niet'], wordIds: ['w-auto'] },
  { id: 'd-neg-3', topicId: 'a1-negation', type: 'fill-blank', prompt: 'Fill in "not" (negating the verb).', data: { sentence: 'Zij werkt vandaag ___.' }, correctAnswers: ['niet'], wordIds: ['w-werken'] },
  { id: 'd-neg-4', topicId: 'a1-negation', type: 'fill-blank', prompt: 'Fill in "no" (indefinite noun).', data: { sentence: 'Ik heb ___ boek.' }, correctAnswers: ['geen'], wordIds: ['w-boek'] },
  { id: 'd-neg-5', topicId: 'a1-negation', type: 'multiple-choice', prompt: 'Dat is ___ mijn boek. (not -- a specific book)', data: { options: ['niet', 'geen'] }, correctAnswers: ['niet'], wordIds: ['w-boek'] },
  { id: 'd-neg-6', topicId: 'a1-negation', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['niet', 'vandaag', 'ik', 'werk'] }, correctAnswers: ['Ik werk vandaag niet.'], wordIds: ['w-werken'] },
  { id: 'd-neg-7', topicId: 'a1-negation', type: 'multiple-choice', prompt: 'Ik versta het ___. (I don\'t understand it)', data: { options: ['niet', 'geen'] }, correctAnswers: ['niet'] },
  { id: 'd-neg-8', topicId: 'a1-negation', type: 'fill-blank', prompt: 'Fill in "no" (we have no children).', data: { sentence: 'Wij hebben ___ kinderen.' }, correctAnswers: ['geen'], wordIds: ['w-kind'] },

  // --- a1-questions ---
  { id: 'd-ques-1', topicId: 'a1-questions', type: 'word-order', prompt: 'Put the words in order to make a yes/no question.', data: { tokens: ['hier', 'jij', 'werkt'] }, correctAnswers: ['Werkt jij hier?'], wordIds: ['w-werken'] },
  { id: 'd-ques-2', topicId: 'a1-questions', type: 'multiple-choice', prompt: '___ woon jij? (where)', data: { options: ['Waar', 'Wat'] }, correctAnswers: ['Waar'], wordIds: ['w-wonen'] },
  { id: 'd-ques-3', topicId: 'a1-questions', type: 'fill-blank', prompt: 'Fill in "what".', data: { sentence: '___ eet je?' }, correctAnswers: ['Wat', 'wat'] },
  { id: 'd-ques-4', topicId: 'a1-questions', type: 'word-order', prompt: 'Put the words in order to make a question.', data: { tokens: ['kom', 'wanneer', 'jij'] }, correctAnswers: ['Wanneer kom jij?'] },
  { id: 'd-ques-5', topicId: 'a1-questions', type: 'multiple-choice', prompt: '___ is dat? (who)', data: { options: ['Wie', 'Wat'] }, correctAnswers: ['Wie'] },
  { id: 'd-ques-6', topicId: 'a1-questions', type: 'fill-blank', prompt: 'Fill in the plural noun. (how many books do you have?)', data: { sentence: 'Hoeveel ___ heb jij?' }, correctAnswers: ['boeken'], wordIds: ['w-boek'] },
  { id: 'd-ques-7', topicId: 'a1-questions', type: 'multiple-choice', prompt: '___ hij vandaag? (Is he working today? -- inverted)', data: { options: ['Werkt', 'Werken'] }, correctAnswers: ['Werkt'], wordIds: ['w-werken'] },
  { id: 'd-ques-8', topicId: 'a1-questions', type: 'word-order', prompt: 'Put the words in order to make a question.', data: { tokens: ['leest', 'wat', 'zij'] }, correctAnswers: ['Wat leest zij?'] },

  // --- a1-simple-past ---
  { id: 'd-past-1', topicId: 'a1-simple-past', type: 'conjugation', prompt: 'Conjugate "werken" for "ik" in the simple past.', data: { verb: 'werken', pronoun: 'ik (simple past)' }, correctAnswers: ['werkte'], wordIds: ['w-werken'] },
  { id: 'd-past-2', topicId: 'a1-simple-past', type: 'conjugation', prompt: 'Conjugate "wonen" for "wij" in the simple past.', data: { verb: 'wonen', pronoun: 'wij (simple past)' }, correctAnswers: ['woonden'], wordIds: ['w-wonen'] },
  { id: 'd-past-3', topicId: 'a1-simple-past', type: 'conjugation', prompt: 'Conjugate "koken" for "zij" (she) in the simple past.', data: { verb: 'koken', pronoun: 'zij (she, simple past)' }, correctAnswers: ['kookte'], wordIds: ['w-koken'] },
  { id: 'd-past-4', topicId: 'a1-simple-past', type: 'fill-blank', prompt: 'Fill in the simple past of "leren".', data: { sentence: 'Ik ___ gisteren Nederlands.' }, correctAnswers: ['leerde'], wordIds: ['w-leren'] },
  { id: 'd-past-5', topicId: 'a1-simple-past', type: 'fill-blank', prompt: 'Fill in the simple past of "spelen".', data: { sentence: 'Wij ___ gisteren buiten.' }, correctAnswers: ['speelden'], wordIds: ['w-spelen'] },
  { id: 'd-past-6', topicId: 'a1-simple-past', type: 'multiple-choice', prompt: '"praten" is a t-verb, so the stem "praat" already ends in -t. Ik ___ (simple past)', data: { options: ['praatte', 'praatde'] }, correctAnswers: ['praatte'] },
  { id: 'd-past-7', topicId: 'a1-simple-past', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['gisteren', 'ik', 'werkte'] }, correctAnswers: ['Ik werkte gisteren.'], wordIds: ['w-werken'] },
  { id: 'd-past-8', topicId: 'a1-simple-past', type: 'conjugation', prompt: 'Conjugate "horen" for "jij" in the simple past.', data: { verb: 'horen', pronoun: 'jij (simple past)' }, correctAnswers: ['hoorde'], wordIds: ['w-horen'] },

  // --- a1-present-perfect ---
  { id: 'd-perf-1', topicId: 'a1-present-perfect', type: 'fill-blank', prompt: 'Fill in the past participle of "werken".', data: { sentence: 'Ik heb vandaag ___.' }, correctAnswers: ['gewerkt'], wordIds: ['w-werken'] },
  { id: 'd-perf-2', topicId: 'a1-present-perfect', type: 'multiple-choice', prompt: 'Past participle of "wonen"?', data: { options: ['gewoond', 'gewoont'] }, correctAnswers: ['gewoond'], wordIds: ['w-wonen'] },
  { id: 'd-perf-3', topicId: 'a1-present-perfect', type: 'fill-blank', prompt: 'Fill in the past participle of "koken".', data: { sentence: 'Hij heeft de hele avond ___.' }, correctAnswers: ['gekookt'], wordIds: ['w-koken'] },
  { id: 'd-perf-4', topicId: 'a1-present-perfect', type: 'multiple-choice', prompt: 'Which auxiliary does "gaan" (to go) take in the present perfect?', data: { options: ['hebben', 'zijn'] }, correctAnswers: ['zijn'] },
  { id: 'd-perf-5', topicId: 'a1-present-perfect', type: 'fill-blank', prompt: 'Fill in the past participle of "gaan" (irregular).', data: { sentence: 'Wij zijn naar huis ___.' }, correctAnswers: ['gegaan'], wordIds: ['w-huis'] },
  { id: 'd-perf-6', topicId: 'a1-present-perfect', type: 'multiple-choice', prompt: 'Heb je dat al ___? (past participle of "doen", irregular)', data: { options: ['gedaan', 'gedoet'] }, correctAnswers: ['gedaan'] },
  { id: 'd-perf-7', topicId: 'a1-present-perfect', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['heb', 'ik', 'geleerd', 'veel'] }, correctAnswers: ['Ik heb veel geleerd.'], wordIds: ['w-leren'] },
  { id: 'd-perf-8', topicId: 'a1-present-perfect', type: 'fill-blank', prompt: 'Fill in the past participle of "horen".', data: { sentence: 'Zij heeft het nieuws ___.' }, correctAnswers: ['gehoord'], wordIds: ['w-horen'] },

  // --- a1-verbs-zijn-hebben ---
  { id: 'd-zh-1', topicId: 'a1-verbs-zijn-hebben', type: 'conjugation', prompt: 'Conjugate "zijn" for "ik".', data: { verb: 'zijn', pronoun: 'ik' }, correctAnswers: ['ben'], wordIds: ['w-zijn'] },
  { id: 'd-zh-2', topicId: 'a1-verbs-zijn-hebben', type: 'conjugation', prompt: 'Conjugate "zijn" for "jij".', data: { verb: 'zijn', pronoun: 'jij' }, correctAnswers: ['bent'], wordIds: ['w-zijn'] },
  { id: 'd-zh-3', topicId: 'a1-verbs-zijn-hebben', type: 'conjugation', prompt: 'Conjugate "zijn" for "wij".', data: { verb: 'zijn', pronoun: 'wij' }, correctAnswers: ['zijn'], wordIds: ['w-zijn'] },
  { id: 'd-zh-4', topicId: 'a1-verbs-zijn-hebben', type: 'conjugation', prompt: 'Conjugate "hebben" for "ik".', data: { verb: 'hebben', pronoun: 'ik' }, correctAnswers: ['heb'], wordIds: ['w-hebben'] },
  { id: 'd-zh-5', topicId: 'a1-verbs-zijn-hebben', type: 'conjugation', prompt: 'Conjugate "hebben" for "hij".', data: { verb: 'hebben', pronoun: 'hij' }, correctAnswers: ['heeft'], wordIds: ['w-hebben'] },
  { id: 'd-zh-6', topicId: 'a1-verbs-zijn-hebben', type: 'multiple-choice', prompt: 'Simple past of "zijn" for "wij"?', data: { options: ['waren', 'was'] }, correctAnswers: ['waren'], wordIds: ['w-zijn'] },
  { id: 'd-zh-7', topicId: 'a1-verbs-zijn-hebben', type: 'fill-blank', prompt: 'Fill in the simple past of "hebben" for "wij".', data: { sentence: 'Wij ___ gisteren geen tijd.' }, correctAnswers: ['hadden'], wordIds: ['w-hebben'] },
  { id: 'd-zh-8', topicId: 'a1-verbs-zijn-hebben', type: 'multiple-choice', prompt: 'Past participle of "zijn"?', data: { options: ['geweest', 'gezijnd'] }, correctAnswers: ['geweest'], wordIds: ['w-zijn'] },

  // --- a1-modal-verbs ---
  { id: 'd-modal-1', topicId: 'a1-modal-verbs', type: 'conjugation', prompt: 'Conjugate "kunnen" for "ik".', data: { verb: 'kunnen', pronoun: 'ik' }, correctAnswers: ['kan'], wordIds: ['w-kunnen'] },
  { id: 'd-modal-2', topicId: 'a1-modal-verbs', type: 'conjugation', prompt: 'Conjugate "willen" for "ik".', data: { verb: 'willen', pronoun: 'ik' }, correctAnswers: ['wil'], wordIds: ['w-willen'] },
  { id: 'd-modal-3', topicId: 'a1-modal-verbs', type: 'conjugation', prompt: 'Conjugate "moeten" for "jij".', data: { verb: 'moeten', pronoun: 'jij' }, correctAnswers: ['moet'], wordIds: ['w-moeten'] },
  { id: 'd-modal-4', topicId: 'a1-modal-verbs', type: 'conjugation', prompt: 'Conjugate "mogen" for "ik".', data: { verb: 'mogen', pronoun: 'ik' }, correctAnswers: ['mag'], wordIds: ['w-mogen'] },
  { id: 'd-modal-5', topicId: 'a1-modal-verbs', type: 'multiple-choice', prompt: 'Kun je me ___? (a modal is followed by a bare infinitive)', data: { options: ['helpen', 'help'] }, correctAnswers: ['helpen'] },
  { id: 'd-modal-6', topicId: 'a1-modal-verbs', type: 'fill-blank', prompt: 'Fill in "wil" (I would like a coffee).', data: { sentence: 'Ik ___ graag een koffie.' }, correctAnswers: ['wil'], wordIds: ['w-koffie', 'w-willen'] },
  { id: 'd-modal-7', topicId: 'a1-modal-verbs', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['moet', 'dit', 'je', 'lezen'] }, correctAnswers: ['Je moet dit lezen.'] },
  { id: 'd-modal-8', topicId: 'a1-modal-verbs', type: 'multiple-choice', prompt: 'Simple past of "kunnen" for "wij"?', data: { options: ['konden', 'kunden'] }, correctAnswers: ['konden'], wordIds: ['w-kunnen'] },

  // --- a1-diminutives ---
  { id: 'd-dim-1', topicId: 'a1-diminutives', type: 'fill-blank', prompt: 'Give the diminutive of "de tafel".', data: { sentence: 'de tafel -> het ___' }, correctAnswers: ['tafeltje'], wordIds: ['w-tafel'] },
  { id: 'd-dim-2', topicId: 'a1-diminutives', type: 'fill-blank', prompt: 'Give the diminutive of "het huis".', data: { sentence: 'het huis -> het ___' }, correctAnswers: ['huisje'], wordIds: ['w-huis'] },
  { id: 'd-dim-3', topicId: 'a1-diminutives', type: 'multiple-choice', prompt: 'de auto -> het ___ (ends in a single vowel, so it doubles to stay long)', data: { options: ['autotje', 'autootje'] }, correctAnswers: ['autootje'], wordIds: ['w-auto'] },
  { id: 'd-dim-4', topicId: 'a1-diminutives', type: 'multiple-choice', prompt: 'de man -> het ___ (short vowel + single -n, so the -n doubles)', data: { options: ['mantje', 'mannetje'] }, correctAnswers: ['mannetje'] },
  { id: 'd-dim-5', topicId: 'a1-diminutives', type: 'fill-blank', prompt: 'Give the diminutive of "het boek".', data: { sentence: 'het boek -> het ___' }, correctAnswers: ['boekje'], wordIds: ['w-boek'] },
  { id: 'd-dim-6', topicId: 'a1-diminutives', type: 'multiple-choice', prompt: 'Which article does every diminutive take, no matter the original noun?', data: { options: ['de', 'het'] }, correctAnswers: ['het'] },
  { id: 'd-dim-7', topicId: 'a1-diminutives', type: 'fill-blank', prompt: 'Fill in the diminutive (a common everyday phrase).', data: { sentence: 'Wil je een ___ koffie?' }, correctAnswers: ['kopje'], wordIds: ['w-koffie'] },

  // --- a1-conjunctions ---
  { id: 'd-conj-1', topicId: 'a1-conjunctions', type: 'multiple-choice', prompt: 'Het is koud, ___ de zon schijnt. (but)', data: { options: ['en', 'maar'] }, correctAnswers: ['maar'] },
  { id: 'd-conj-2', topicId: 'a1-conjunctions', type: 'multiple-choice', prompt: 'Ik blijf thuis, ___ ik ben ziek. (because)', data: { options: ['want', 'dus'] }, correctAnswers: ['want'] },
  { id: 'd-conj-3', topicId: 'a1-conjunctions', type: 'multiple-choice', prompt: 'Het regent, ___ ik neem een paraplu. (so)', data: { options: ['maar', 'dus'] }, correctAnswers: ['dus'] },
  { id: 'd-conj-4', topicId: 'a1-conjunctions', type: 'fill-blank', prompt: 'Fill in "or".', data: { sentence: 'Wil je thee ___ koffie?' }, correctAnswers: ['of'], wordIds: ['w-koffie'] },
  { id: 'd-conj-5', topicId: 'a1-conjunctions', type: 'fill-blank', prompt: 'Fill in "and".', data: { sentence: 'Ik lees ___ zij schrijft.' }, correctAnswers: ['en'] },
  { id: 'd-conj-6', topicId: 'a1-conjunctions', type: 'multiple-choice', prompt: 'Do en, maar, want, of, and dus change the word order of the clause that follows them?', data: { options: ['Yes', 'No'] }, correctAnswers: ['No'] },
  { id: 'd-conj-7', topicId: 'a1-conjunctions', type: 'fill-blank', prompt: 'Fill in "and".', data: { sentence: 'Zij werkt vandaag, ___ morgen heeft zij vrij.' }, correctAnswers: ['en'] },

  // --- a1-adjectives ---
  { id: 'd-adj-1', topicId: 'a1-adjectives', type: 'multiple-choice', prompt: 'de ___ tuin (groot -- de-word, always add -e)', data: { options: ['groot', 'grote'] }, correctAnswers: ['grote'] },
  { id: 'd-adj-2', topicId: 'a1-adjectives', type: 'multiple-choice', prompt: 'een ___ huis (groot -- indefinite het-word, no -e)', data: { options: ['groot', 'grote'] }, correctAnswers: ['groot'], wordIds: ['w-huis'] },
  { id: 'd-adj-3', topicId: 'a1-adjectives', type: 'multiple-choice', prompt: 'het ___ huis (groot -- definite het-word, add -e)', data: { options: ['groot', 'grote'] }, correctAnswers: ['grote'], wordIds: ['w-huis'] },
  { id: 'd-adj-4', topicId: 'a1-adjectives', type: 'fill-blank', prompt: 'Fill in "koud" (bare het-noun, no article, no -e).', data: { sentence: 'Wij drinken ___ water.' }, correctAnswers: ['koud'], wordIds: ['w-water'] },
  { id: 'd-adj-5', topicId: 'a1-adjectives', type: 'multiple-choice', prompt: 'Het huis is ___. (predicate position never inflects)', data: { options: ['groot', 'grote'] }, correctAnswers: ['groot'], wordIds: ['w-huis'] },
  { id: 'd-adj-6', topicId: 'a1-adjectives', type: 'fill-blank', prompt: 'Fill in "mooie" (plural de-word, add -e).', data: { sentence: 'de ___ boeken' }, correctAnswers: ['mooie'], wordIds: ['w-boek'] },
  { id: 'd-adj-7', topicId: 'a1-adjectives', type: 'multiple-choice', prompt: 'Which adjectives never take -e, no matter the position?', data: { options: ['those ending in -en, like houten and gouden', 'those ending in a consonant'] }, correctAnswers: ['those ending in -en, like houten and gouden'] },
  { id: 'd-adj-8', topicId: 'a1-adjectives', type: 'fill-blank', prompt: 'Fill in "leuks" (after "iets", adjectives take -s instead of -e).', data: { sentence: 'Ik zoek iets ___.' }, correctAnswers: ['leuks'] },
];
