import { DrillItem } from '../../data/types';

// data shape per type (see src/engine/quizEngine.ts for how each is rendered/graded):
//  conjugation:      { verb: string, pronoun: string }
//  multiple-choice:  { options: string[] }
//  fill-blank:       { sentence: string }  -- sentence contains "___"
//  word-order:       { tokens: string[] }  -- shuffled tokens to reorder

export const a2Drills: DrillItem[] = [
  // --- a2-separable-verbs ---
  { id: 'd-sep-1', topicId: 'a2-separable-verbs', type: 'word-order', prompt: 'Put the words in order (present tense -- the prefix goes to the end).', data: { tokens: ['op', 'ik', 'sta', 'zeven', 'uur', 'om'] }, correctAnswers: ['Ik sta om zeven uur op.'] },
  { id: 'd-sep-2', topicId: 'a2-separable-verbs', type: 'word-order', prompt: 'Put the words in order (simple past -- the prefix goes to the end).', data: { tokens: ['aan', 'wij', 'kwamen', 'gisteren'] }, correctAnswers: ['Wij kwamen gisteren aan.'] },
  { id: 'd-sep-3', topicId: 'a2-separable-verbs', type: 'fill-blank', prompt: 'Fill in the past participle of "opstaan".', data: { sentence: 'Zij is al ___.' }, correctAnswers: ['opgestaan'] },
  { id: 'd-sep-4', topicId: 'a2-separable-verbs', type: 'fill-blank', prompt: 'Fill in the past participle of "aankomen".', data: { sentence: 'Wij zijn gisteren ___.' }, correctAnswers: ['aangekomen'] },
  { id: 'd-sep-5', topicId: 'a2-separable-verbs', type: 'multiple-choice', prompt: 'Past participle of "vertellen" (a ver- verb, always inseparable):', data: { options: ['verteld', 'geverteld'] }, correctAnswers: ['verteld'] },
  { id: 'd-sep-6', topicId: 'a2-separable-verbs', type: 'multiple-choice', prompt: 'Which prefix never separates from its verb?', data: { options: ['op', 'ver'] }, correctAnswers: ['ver'] },
  { id: 'd-sep-7', topicId: 'a2-separable-verbs', type: 'fill-blank', prompt: 'Fill in the simple past of "vertellen" for "hij".', data: { sentence: 'Hij ___ een grap.' }, correctAnswers: ['vertelde'], wordIds: ['w-kind'] },

  // --- a2-reflexive-verbs ---
  { id: 'd-refl-1', topicId: 'a2-reflexive-verbs', type: 'fill-blank', prompt: 'Fill in "myself" (unstressed).', data: { sentence: 'Ik was ___ elke ochtend.' }, correctAnswers: ['me'] },
  { id: 'd-refl-2', topicId: 'a2-reflexive-verbs', type: 'fill-blank', prompt: 'Fill in "yourself" (informal, unstressed).', data: { sentence: 'Vergis ___ niet!' }, correctAnswers: ['je'] },
  { id: 'd-refl-3', topicId: 'a2-reflexive-verbs', type: 'multiple-choice', prompt: 'Hij wast ___. (himself)', data: { options: ['zich', 'hem'] }, correctAnswers: ['zich'] },
  { id: 'd-refl-4', topicId: 'a2-reflexive-verbs', type: 'fill-blank', prompt: 'Fill in "ourselves" (unstressed).', data: { sentence: 'Wij haasten ___ naar school.' }, correctAnswers: ['ons'], wordIds: ['w-school'] },
  { id: 'd-refl-5', topicId: 'a2-reflexive-verbs', type: 'multiple-choice', prompt: 'Ik heb ___ geknipt, niet de kapper! (myself, emphasized)', data: { options: ['me', 'mezelf'] }, correctAnswers: ['mezelf'] },
  { id: 'd-refl-6', topicId: 'a2-reflexive-verbs', type: 'fill-blank', prompt: 'Fill in "yourself" (informal).', data: { sentence: 'Herinner jij ___ die dag nog?' }, correctAnswers: ['je'] },
  { id: 'd-refl-7', topicId: 'a2-reflexive-verbs', type: 'multiple-choice', prompt: 'Hij heeft ___ pijn gedaan. (himself)', data: { options: ['zich', 'hem'] }, correctAnswers: ['zich'] },

  // --- a2-demonstratives ---
  { id: 'd-demo-1', topicId: 'a2-demonstratives', type: 'multiple-choice', prompt: '___ huis is groot. (this, "huis" is a het-word)', data: { options: ['Dit', 'Deze'] }, correctAnswers: ['Dit'], wordIds: ['w-huis'] },
  { id: 'd-demo-2', topicId: 'a2-demonstratives', type: 'multiple-choice', prompt: '___ auto is nieuw. (this, "auto" is a de-word)', data: { options: ['Dit', 'Deze'] }, correctAnswers: ['Deze'], wordIds: ['w-auto'] },
  { id: 'd-demo-3', topicId: 'a2-demonstratives', type: 'multiple-choice', prompt: '___ boek is interessant. (that, "boek" is a het-word)', data: { options: ['Dat', 'Die'] }, correctAnswers: ['Dat'], wordIds: ['w-boek'] },
  { id: 'd-demo-4', topicId: 'a2-demonstratives', type: 'multiple-choice', prompt: '___ schoenen zijn duur. (those, plural)', data: { options: ['Dat', 'Die'] }, correctAnswers: ['Die'] },
  { id: 'd-demo-5', topicId: 'a2-demonstratives', type: 'fill-blank', prompt: 'Fill in "These" (linked by "zijn" -- use the singular form).', data: { sentence: '___ zijn mijn ouders.' }, correctAnswers: ['Dit', 'dit'] },
  { id: 'd-demo-6', topicId: 'a2-demonstratives', type: 'multiple-choice', prompt: 'Heb je ___ film gezien? (this one, standalone)', data: { options: ['deze', 'die'] }, correctAnswers: ['deze'] },
  { id: 'd-demo-7', topicId: 'a2-demonstratives', type: 'fill-blank', prompt: 'Fill in "That" (standalone, referring to an idea).', data: { sentence: '___ is een goed idee.' }, correctAnswers: ['Dat', 'dat'] },

  // --- a2-relative-clauses ---
  { id: 'd-rel-1', topicId: 'a2-relative-clauses', type: 'multiple-choice', prompt: 'Het boek ___ ik lees is goed. ("boek" is a het-word)', data: { options: ['dat', 'die'] }, correctAnswers: ['dat'], wordIds: ['w-boek'] },
  { id: 'd-rel-2', topicId: 'a2-relative-clauses', type: 'multiple-choice', prompt: 'De vrouw ___ daar woont is aardig. (a person)', data: { options: ['dat', 'die'] }, correctAnswers: ['die'], wordIds: ['w-vrouw'] },
  { id: 'd-rel-3', topicId: 'a2-relative-clauses', type: 'fill-blank', prompt: 'Fill in the relative pronoun (after "alles").', data: { sentence: 'Dat is alles ___ ik weet.' }, correctAnswers: ['wat'] },
  { id: 'd-rel-4', topicId: 'a2-relative-clauses', type: 'multiple-choice', prompt: 'De kinderen ___ buiten spelen zijn onze buren. (plural)', data: { options: ['dat', 'die'] }, correctAnswers: ['die'], wordIds: ['w-kind'] },
  { id: 'd-rel-5', topicId: 'a2-relative-clauses', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['lees', 'dat', 'ik', 'boek', 'het'] }, correctAnswers: ['Het boek dat ik lees.'], wordIds: ['w-boek'] },
  { id: 'd-rel-6', topicId: 'a2-relative-clauses', type: 'fill-blank', prompt: 'Fill in the relative pronoun (referring to the whole clause).', data: { sentence: 'Het regent, ___ jammer is.' }, correctAnswers: ['wat'], wordIds: ['w-weer'] },
  { id: 'd-rel-7', topicId: 'a2-relative-clauses', type: 'multiple-choice', prompt: 'De film ___ wij gisteren zagen was leuk. ("film" is a de-word)', data: { options: ['dat', 'die'] }, correctAnswers: ['die'] },

  // --- a2-subordinate-clauses ---
  { id: 'd-sub-1', topicId: 'a2-subordinate-clauses', type: 'fill-blank', prompt: 'Fill in "ben" in the correct (verb-final) position.', data: { sentence: 'Ik blijf thuis omdat ik ziek ___.' }, correctAnswers: ['ben'] },
  { id: 'd-sub-2', topicId: 'a2-subordinate-clauses', type: 'fill-blank', prompt: 'Fill in the correct form of "komen" (verb-final).', data: { sentence: 'Ik weet dat hij morgen ___.' }, correctAnswers: ['komt'] },
  { id: 'd-sub-3', topicId: 'a2-subordinate-clauses', type: 'multiple-choice', prompt: 'Which conjunction keeps normal (non verb-final) word order?', data: { options: ['omdat', 'want'] }, correctAnswers: ['want'] },
  { id: 'd-sub-4', topicId: 'a2-subordinate-clauses', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['ik', 'morgen', 'komt', 'dat', 'weet', 'hij'] }, correctAnswers: ['Ik weet dat hij morgen komt.'] },
  { id: 'd-sub-5', topicId: 'a2-subordinate-clauses', type: 'fill-blank', prompt: 'Fill in the simple past of "lezen" (verb-final).', data: { sentence: 'Terwijl zij kookte, ___ hij een boek.' }, correctAnswers: ['las'], wordIds: ['w-boek'] },
  { id: 'd-sub-6', topicId: 'a2-subordinate-clauses', type: 'multiple-choice', prompt: 'Ik blijf thuis, ___ ik ben ziek. (no word-order change)', data: { options: ['want', 'omdat'] }, correctAnswers: ['want'] },
  { id: 'd-sub-7', topicId: 'a2-subordinate-clauses', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['niet', 'ik', 'moe', 'werk', 'ben', 'omdat', 'ik'] }, correctAnswers: ['Ik werk niet omdat ik moe ben.'], wordIds: ['w-werken'] },

  // --- a2-pronominal-adverbs ---
  { id: 'd-pa-1', topicId: 'a2-pronominal-adverbs', type: 'fill-blank', prompt: 'Fuse "op" and "het" (replacing "op het").', data: { sentence: 'Ik wacht op de bus. -> Ik wacht ___.' }, correctAnswers: ['erop'] },
  { id: 'd-pa-2', topicId: 'a2-pronominal-adverbs', type: 'fill-blank', prompt: 'Fill in "with what" as one word.', data: { sentence: '___ schrijf jij?' }, correctAnswers: ['Waarmee', 'waarmee'] },
  { id: 'd-pa-3', topicId: 'a2-pronominal-adverbs', type: 'multiple-choice', prompt: '"met" + "wat" (as a pronominal adverb) becomes:', data: { options: ['watmet', 'waarmee'] }, correctAnswers: ['waarmee'] },
  { id: 'd-pa-4', topicId: 'a2-pronominal-adverbs', type: 'fill-blank', prompt: 'Fill in the fused "er" (replacing "met het").', data: { sentence: 'Hij is blij met het cadeau. -> Hij is ___ blij mee.' }, correctAnswers: ['er'] },
  { id: 'd-pa-5', topicId: 'a2-pronominal-adverbs', type: 'multiple-choice', prompt: 'Which is correct for "with him" (a person)?', data: { options: ['hiermee', 'met hem'] }, correctAnswers: ['met hem'] },
  { id: 'd-pa-6', topicId: 'a2-pronominal-adverbs', type: 'fill-blank', prompt: 'Fill in the postposition (fused "aan die dag").', data: { sentence: 'Ik denk vaak aan die dag. -> Ik denk er vaak ___.' }, correctAnswers: ['aan'] },
  { id: 'd-pa-7', topicId: 'a2-pronominal-adverbs', type: 'multiple-choice', prompt: '"tot" fuses into:', data: { options: ['toe', 'tot'] }, correctAnswers: ['toe'] },

  // --- a2-indefinite-pronouns ---
  { id: 'd-indef-1', topicId: 'a2-indefinite-pronouns', type: 'fill-blank', prompt: 'Fill in "something".', data: { sentence: 'Ik heb ___ voor je.' }, correctAnswers: ['iets'] },
  { id: 'd-indef-2', topicId: 'a2-indefinite-pronouns', type: 'fill-blank', prompt: 'Fill in "no one".', data: { sentence: 'Er is ___ thuis.' }, correctAnswers: ['niemand'] },
  { id: 'd-indef-3', topicId: 'a2-indefinite-pronouns', type: 'multiple-choice', prompt: '___ dag leer ik Nederlands. ("dag" is a de-word)', data: { options: ['elk', 'elke'] }, correctAnswers: ['elke'] },
  { id: 'd-indef-4', topicId: 'a2-indefinite-pronouns', type: 'multiple-choice', prompt: '___ jaar reizen wij. ("jaar" is a het-word)', data: { options: ['elk', 'elke'] }, correctAnswers: ['elk'] },
  { id: 'd-indef-5', topicId: 'a2-indefinite-pronouns', type: 'fill-blank', prompt: 'Fill in "Some" (certain).', data: { sentence: '___ mensen houden niet van kaas.' }, correctAnswers: ['Sommige', 'sommige'] },
  { id: 'd-indef-6', topicId: 'a2-indefinite-pronouns', type: 'fill-blank', prompt: 'Fill in "something" (note the -s on the adjective that follows).', data: { sentence: 'Ik zoek ___ leuks om te doen.' }, correctAnswers: ['iets'] },
  { id: 'd-indef-7', topicId: 'a2-indefinite-pronouns', type: 'multiple-choice', prompt: '"Everyone is welcome":', data: { options: ['Iedereen is welkom.', 'Alles is welkom.'] }, correctAnswers: ['Iedereen is welkom.'] },

  // --- a2-comparison ---
  { id: 'd-comp-1', topicId: 'a2-comparison', type: 'fill-blank', prompt: 'Fill in the comparative of "groot".', data: { sentence: 'Amsterdam is ___ dan Utrecht.' }, correctAnswers: ['groter'] },
  { id: 'd-comp-2', topicId: 'a2-comparison', type: 'fill-blank', prompt: 'Fill in the superlative of "mooi".', data: { sentence: 'Dit is de ___ tuin die ik ken.' }, correctAnswers: ['mooiste'] },
  { id: 'd-comp-3', topicId: 'a2-comparison', type: 'multiple-choice', prompt: 'Comparative of "goed" (irregular):', data: { options: ['goeder', 'beter'] }, correctAnswers: ['beter'] },
  { id: 'd-comp-4', topicId: 'a2-comparison', type: 'fill-blank', prompt: 'Fill in the comparative of "hard".', data: { sentence: 'Hij werkt ___ dan zijn broer.' }, correctAnswers: ['harder'] },
  { id: 'd-comp-5', topicId: 'a2-comparison', type: 'multiple-choice', prompt: 'Superlative of "veel" (irregular):', data: { options: ['veelst', 'meest'] }, correctAnswers: ['meest'] },
  { id: 'd-comp-6', topicId: 'a2-comparison', type: 'fill-blank', prompt: 'Fill in "just as" (equal comparison).', data: { sentence: 'Deze tas is ___ zwaar als die.' }, correctAnswers: ['even'] },
  { id: 'd-comp-7', topicId: 'a2-comparison', type: 'multiple-choice', prompt: 'Ik drink ___ thee dan koffie. ("rather", comparative of "graag")', data: { options: ['liever', 'graagder'] }, correctAnswers: ['liever'], wordIds: ['w-koffie'] },

  // --- a2-future-tense ---
  { id: 'd-fut-1', topicId: 'a2-future-tense', type: 'conjugation', prompt: 'Conjugate "zullen" for "jij".', data: { verb: 'zullen', pronoun: 'jij' }, correctAnswers: ['zult', 'zal'] },
  { id: 'd-fut-2', topicId: 'a2-future-tense', type: 'fill-blank', prompt: 'Fill in "zullen" for "ik" (a promise).', data: { sentence: 'Ik ___ het nooit meer doen.' }, correctAnswers: ['zal'] },
  { id: 'd-fut-3', topicId: 'a2-future-tense', type: 'fill-blank', prompt: 'Fill in "gaan" for "ik" (casual future).', data: { sentence: 'Ik ___ morgen naar Amsterdam.' }, correctAnswers: ['ga'] },
  { id: 'd-fut-4', topicId: 'a2-future-tense', type: 'multiple-choice', prompt: 'Which sentence states an already-scheduled event with the simple present?', data: { options: ['Zij komt morgen.', 'Zij zal morgen komen.'] }, correctAnswers: ['Zij komt morgen.'] },
  { id: 'd-fut-5', topicId: 'a2-future-tense', type: 'fill-blank', prompt: 'Fill in "zullen" for "het" (probability).', data: { sentence: 'Het ___ wel lukken.' }, correctAnswers: ['zal'] },
  { id: 'd-fut-6', topicId: 'a2-future-tense', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['naar', 'ik', 'morgen', 'ga', 'Amsterdam'] }, correctAnswers: ['Ik ga morgen naar Amsterdam.'] },
  { id: 'd-fut-7', topicId: 'a2-future-tense', type: 'multiple-choice', prompt: 'Wij ___ volgend jaar verhuizen. ("gaan", wij)', data: { options: ['gaan', 'ga'] }, correctAnswers: ['gaan'] },

  // --- a2-word-order-tmp ---
  { id: 'd-tmp-1', topicId: 'a2-word-order-tmp', type: 'word-order', prompt: 'Put the words in order (Time-Manner-Place).', data: { tokens: ['met', 'ik', 'morgen', 'naar', 'de', 'trein', 'ga', 'Amsterdam'] }, correctAnswers: ['Ik ga morgen met de trein naar Amsterdam.'] },
  { id: 'd-tmp-2', topicId: 'a2-word-order-tmp', type: 'multiple-choice', prompt: 'What is the default middle-field order for adverbial phrases?', data: { options: ['Time-Manner-Place', 'Place-Manner-Time'] }, correctAnswers: ['Time-Manner-Place'] },
  { id: 'd-tmp-3', topicId: 'a2-word-order-tmp', type: 'fill-blank', prompt: 'Fill in "a" (non-specific direct object -- placed at the end).', data: { sentence: 'Wij hebben gisteren ___ auto gekocht.' }, correctAnswers: ['een'], wordIds: ['w-auto'] },
  { id: 'd-tmp-4', topicId: 'a2-word-order-tmp', type: 'word-order', prompt: 'Put the words in order (specific direct object, placed early).', data: { tokens: ['de', 'ik', 'heb', 'auto', 'gisteren', 'gekocht'] }, correctAnswers: ['Ik heb de auto gisteren gekocht.'], wordIds: ['w-auto'] },
  { id: 'd-tmp-5', topicId: 'a2-word-order-tmp', type: 'multiple-choice', prompt: 'Which direct object goes at the very end of the middle part?', data: { options: ['a non-specific one', 'a specific one'] }, correctAnswers: ['a non-specific one'] },
  { id: 'd-tmp-6', topicId: 'a2-word-order-tmp', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['hard', 'hij', 'elke', 'dag', 'op', 'kantoor', 'werkt'] }, correctAnswers: ['Hij werkt elke dag hard op kantoor.'], wordIds: ['w-werken'] },
  { id: 'd-tmp-7', topicId: 'a2-word-order-tmp', type: 'fill-blank', prompt: 'Fill in "het" (specific direct object -- placed early).', data: { sentence: 'Zij heeft ___ boek gisteren gelezen.' }, correctAnswers: ['het'], wordIds: ['w-boek'] },
];
