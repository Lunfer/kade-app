import { DrillItem } from '../../data/types';

// data shape per type (see src/engine/quizEngine.ts for how each is rendered/graded):
//  conjugation:      { verb: string, pronoun: string }
//  multiple-choice:  { options: string[] }
//  fill-blank:       { sentence: string }  -- sentence contains "___"
//  word-order:       { tokens: string[] }  -- shuffled tokens to reorder

export const b1Drills: DrillItem[] = [
  // --- b1-passive-voice ---
  { id: 'd-pass-1', topicId: 'b1-passive-voice', type: 'multiple-choice', prompt: 'Het huis ___ gebouwd. (ongoing process, right now)', data: { options: ['wordt', 'is'] }, correctAnswers: ['wordt'], wordIds: ['w-huis'] },
  { id: 'd-pass-2', topicId: 'b1-passive-voice', type: 'multiple-choice', prompt: 'Het huis ___ al gebouwd. (finished state)', data: { options: ['wordt', 'is'] }, correctAnswers: ['is'], wordIds: ['w-huis'] },
  { id: 'd-pass-3', topicId: 'b1-passive-voice', type: 'fill-blank', prompt: 'Fill in the word introducing the agent (by).', data: { sentence: 'Het boek wordt ___ haar gelezen.' }, correctAnswers: ['door'], wordIds: ['w-boek'] },
  { id: 'd-pass-4', topicId: 'b1-passive-voice', type: 'fill-blank', prompt: 'Fill in "was sent" (process-passive, simple past).', data: { sentence: 'De brief ___ gisteren gestuurd.' }, correctAnswers: ['werd'] },
  { id: 'd-pass-5', topicId: 'b1-passive-voice', type: 'multiple-choice', prompt: 'Hij ___ elk jaar ouder. (to become, not passive)', data: { options: ['wordt', 'is'] }, correctAnswers: ['wordt'] },
  { id: 'd-pass-6', topicId: 'b1-passive-voice', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['wordt', 'gebouwd', 'het', 'huis'] }, correctAnswers: ['Het huis wordt gebouwd.'], wordIds: ['w-huis'] },
  { id: 'd-pass-7', topicId: 'b1-passive-voice', type: 'multiple-choice', prompt: 'Which auxiliary marks the finished-state passive?', data: { options: ['worden', 'zijn'] }, correctAnswers: ['zijn'] },

  // --- b1-conditional ---
  { id: 'd-cond-1', topicId: 'b1-conditional', type: 'fill-blank', prompt: 'Fill in the conditional of "willen" for "ik" (polite request).', data: { sentence: 'Ik ___ graag een koffie willen.' }, correctAnswers: ['zou'], wordIds: ['w-wb-koffiemok'] },
  { id: 'd-cond-2', topicId: 'b1-conditional', type: 'multiple-choice', prompt: 'Zouden jullie ons kunnen ___? (help)', data: { options: ['helpen', 'geholpen'] }, correctAnswers: ['helpen'] },
  { id: 'd-cond-3', topicId: 'b1-conditional', type: 'fill-blank', prompt: 'Fill in the conditional for "wij" (plural).', data: { sentence: 'Als het regende, ___ wij thuisblijven.' }, correctAnswers: ['zouden'] },
  { id: 'd-cond-4', topicId: 'b1-conditional', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['moeten', 'studeren', 'je', 'zou', 'meer'] }, correctAnswers: ['Je zou meer moeten studeren.'] },
  { id: 'd-cond-5', topicId: 'b1-conditional', type: 'multiple-choice', prompt: 'Als ik rijk was, ___ ik reizen.', data: { options: ['zou', 'zullen'] }, correctAnswers: ['zou'] },
  { id: 'd-cond-6', topicId: 'b1-conditional', type: 'fill-blank', prompt: 'Fill in "would not" (ik, negative).', data: { sentence: 'Dat ___ ik niet doen.' }, correctAnswers: ['zou'] },
  { id: 'd-cond-7', topicId: 'b1-conditional', type: 'multiple-choice', prompt: 'Which form goes with "u" (formal)?', data: { options: ['zou', 'zoudt'] }, correctAnswers: ['zoudt'] },

  // --- b1-pluperfect ---
  { id: 'd-plup-1', topicId: 'b1-pluperfect', type: 'fill-blank', prompt: 'Fill in the pluperfect auxiliary for "ik" (hebben-verb).', data: { sentence: 'Ik ___ het huiswerk al gemaakt toen zij belde.' }, correctAnswers: ['had'] },
  { id: 'd-plup-2', topicId: 'b1-pluperfect', type: 'multiple-choice', prompt: 'Hij ___ al vertrokken toen ik aankwam. (vertrekken takes zijn)', data: { options: ['had', 'was'] }, correctAnswers: ['was'] },
  { id: 'd-plup-3', topicId: 'b1-pluperfect', type: 'fill-blank', prompt: 'Fill in "had not heard" (wij, hebben-verb).', data: { sentence: 'Wij ___ het nieuws nog niet gehoord.' }, correctAnswers: ['hadden'], wordIds: ['w-wb-nieuws'] },
  { id: 'd-plup-4', topicId: 'b1-pluperfect', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['ik', 'moeten', 'het', 'had', 'weten'] }, correctAnswers: ['Ik had het moeten weten.'] },
  { id: 'd-plup-5', topicId: 'b1-pluperfect', type: 'multiple-choice', prompt: 'Zij ___ nog nooit in Parijs geweest. (geweest, zijn-verb)', data: { options: ['had', 'was'] }, correctAnswers: ['was'] },
  { id: 'd-plup-6', topicId: 'b1-pluperfect', type: 'fill-blank', prompt: 'Fill in the pluperfect participle of "maken".', data: { sentence: 'Ik had het huiswerk al ___.' }, correctAnswers: ['gemaakt'] },
  { id: 'd-plup-7', topicId: 'b1-pluperfect', type: 'multiple-choice', prompt: 'The pluperfect is built from the ___ tense of hebben/zijn plus the past participle.', data: { options: ['simple past', 'present'] }, correctAnswers: ['simple past'] },

  // --- b1-aan-het-continuous ---
  { id: 'd-aanhet-1', topicId: 'b1-aan-het-continuous', type: 'fill-blank', prompt: 'Fill in "am" for the aan het continuous.', data: { sentence: 'Ik ___ aan het werken.' }, correctAnswers: ['ben'] },
  { id: 'd-aanhet-2', topicId: 'b1-aan-het-continuous', type: 'multiple-choice', prompt: 'Which auxiliary is always used with "aan het"?', data: { options: ['zijn', 'hebben'] }, correctAnswers: ['zijn'] },
  { id: 'd-aanhet-3', topicId: 'b1-aan-het-continuous', type: 'fill-blank', prompt: 'Fill in "was" for the past continuous.', data: { sentence: 'Ik ___ aan het werken toen je belde.' }, correctAnswers: ['was'] },
  { id: 'd-aanhet-4', topicId: 'b1-aan-het-continuous', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['is', 'koken', 'zij', 'aan', 'het'] }, correctAnswers: ['Zij is aan het koken.'] },
  { id: 'd-aanhet-5', topicId: 'b1-aan-het-continuous', type: 'multiple-choice', prompt: 'Wat ben je aan het ___?', data: { options: ['doen', 'gedaan'] }, correctAnswers: ['doen'] },
  { id: 'd-aanhet-6', topicId: 'b1-aan-het-continuous', type: 'fill-blank', prompt: 'Fill in "are" for "wij" (aan het continuous).', data: { sentence: 'Wij ___ aan het praten.' }, correctAnswers: ['zijn'] },
  { id: 'd-aanhet-7', topicId: 'b1-aan-het-continuous', type: 'multiple-choice', prompt: 'Is "Ik werk" wrong Dutch on its own?', data: { options: ['No, it is fine', 'Yes, it needs aan het'] }, correctAnswers: ['No, it is fine'] },

  // --- b1-short-subclauses ---
  { id: 'd-tesub-1', topicId: 'b1-short-subclauses', type: 'fill-blank', prompt: 'Fill in "te" + infinitive of "zeggen".', data: { sentence: 'Ik bel je om het ___ zeggen.' }, correctAnswers: ['te'] },
  { id: 'd-tesub-2', topicId: 'b1-short-subclauses', type: 'multiple-choice', prompt: 'Hij ging weg zonder te ___. (pay)', data: { options: ['betalen', 'betaald'] }, correctAnswers: ['betalen'] },
  { id: 'd-tesub-3', topicId: 'b1-short-subclauses', type: 'fill-blank', prompt: 'Fill in the separable-verb "te" construction (opstaan).', data: { sentence: 'Ik ben te moe om ___ te staan.' }, correctAnswers: ['op'] },
  { id: 'd-tesub-4', topicId: 'b1-short-subclauses', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['zonder', 'weg', 'hij', 'ging', 'betalen', 'te'] }, correctAnswers: ['Hij ging weg zonder te betalen.'] },
  { id: 'd-tesub-5', topicId: 'b1-short-subclauses', type: 'multiple-choice', prompt: 'Which of these three words is followed by "te" + infinitive?', data: { options: ['om', 'en'] }, correctAnswers: ['om'] },
  { id: 'd-tesub-6', topicId: 'b1-short-subclauses', type: 'fill-blank', prompt: 'Fill in "te" for "in plaats van ... wachten".', data: { sentence: 'In plaats van ___ wachten, belde ze.' }, correctAnswers: ['te'] },
  { id: 'd-tesub-7', topicId: 'b1-short-subclauses', type: 'multiple-choice', prompt: 'Correct form for "to get up" after "om": ', data: { options: ['op te staan', 'te opstaan'] }, correctAnswers: ['op te staan'] },

  // --- b1-imperative ---
  { id: 'd-imp-1', topicId: 'b1-imperative', type: 'fill-blank', prompt: 'Fill in the imperative of "werken".', data: { sentence: '___!' }, correctAnswers: ['Werk', 'werk'] },
  { id: 'd-imp-2', topicId: 'b1-imperative', type: 'multiple-choice', prompt: 'Imperative of "komen" for "come here!":', data: { options: ['Kom hier!', 'Komt hier!'] }, correctAnswers: ['Kom hier!'] },
  { id: 'd-imp-3', topicId: 'b1-imperative', type: 'fill-blank', prompt: 'Fill in the formal imperative (with u) of "komen binnen".', data: { sentence: 'Komt ___ binnen.' }, correctAnswers: ['u'] },
  { id: 'd-imp-4', topicId: 'b1-imperative', type: 'multiple-choice', prompt: 'Irregular imperative of "zijn" (be quiet!):', data: { options: ['Wees stil!', 'Ben stil!'] }, correctAnswers: ['Wees stil!'] },
  { id: 'd-imp-5', topicId: 'b1-imperative', type: 'fill-blank', prompt: 'Fill in the irregular imperative of "hebben" (have patience!).', data: { sentence: '___ geduld!' }, correctAnswers: ['Heb', 'heb'] },
  { id: 'd-imp-6', topicId: 'b1-imperative', type: 'multiple-choice', prompt: 'The imperative is built from which pronoun form of the verb?', data: { options: ['jij, without -t', 'wij'] }, correctAnswers: ['jij, without -t'] },
  { id: 'd-imp-7', topicId: 'b1-imperative', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['hier', 'kom'] }, correctAnswers: ['Kom hier.'] },

  // --- b1-pronominal-adverbs-advanced ---
  { id: 'd-eradv-1', topicId: 'b1-pronominal-adverbs-advanced', type: 'fill-blank', prompt: 'Fill in the existential "there".', data: { sentence: '___ is een probleem.' }, correctAnswers: ['Er', 'er'] },
  { id: 'd-eradv-2', topicId: 'b1-pronominal-adverbs-advanced', type: 'multiple-choice', prompt: 'Ik ben ___ geweest. (there, locative)', data: { options: ['er', 'daar'] }, correctAnswers: ['er'] },
  { id: 'd-eradv-3', topicId: 'b1-pronominal-adverbs-advanced', type: 'fill-blank', prompt: 'Fill in quantitative "er" (of them).', data: { sentence: 'Heb je kinderen? Ja, ik heb ___ twee.' }, correctAnswers: ['er'], wordIds: ['w-kind'] },
  { id: 'd-eradv-4', topicId: 'b1-pronominal-adverbs-advanced', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['drie', 'staan', 'er', 'stoelen'] }, correctAnswers: ['Er staan drie stoelen.'] },
  { id: 'd-eradv-5', topicId: 'b1-pronominal-adverbs-advanced', type: 'multiple-choice', prompt: 'Can quantitative "er" ever be dropped, unlike English "of them"?', data: { options: ['No', 'Yes'] }, correctAnswers: ['No'] },
  { id: 'd-eradv-6', topicId: 'b1-pronominal-adverbs-advanced', type: 'fill-blank', prompt: 'Fill in "er" (a sentence only ever has one).', data: { sentence: 'Zijn er nog appels? Nee, ___ zijn er geen meer.' }, correctAnswers: ['er'] },
  { id: 'd-eradv-7', topicId: 'b1-pronominal-adverbs-advanced', type: 'multiple-choice', prompt: 'How many jobs can a single "er" cover at once in one sentence?', data: { options: ['Just one, at most', 'As many as needed'] }, correctAnswers: ['Just one, at most'] },

  // --- b1-genitive-relative-pronouns ---
  { id: 'd-wiens-1', topicId: 'b1-genitive-relative-pronouns', type: 'multiple-choice', prompt: 'De vrouw met ___ ik praatte. (whom, after a preposition)', data: { options: ['wie', 'die'] }, correctAnswers: ['wie'], wordIds: ['w-vrouw'] },
  { id: 'd-wiens-2', topicId: 'b1-genitive-relative-pronouns', type: 'fill-blank', prompt: 'Fill in the everyday alternative to "wiens" (of whom).', data: { sentence: 'De man ___ wie de auto hier staat.' }, correctAnswers: ['van'], wordIds: ['w-auto'] },
  { id: 'd-wiens-3', topicId: 'b1-genitive-relative-pronouns', type: 'multiple-choice', prompt: 'The formal masculine/de-word form of "whose" is:', data: { options: ['wiens', 'wier'] }, correctAnswers: ['wiens'] },
  { id: 'd-wiens-4', topicId: 'b1-genitive-relative-pronouns', type: 'fill-blank', prompt: 'Fill in "to whom" after "aan".', data: { sentence: 'Ken je de jongen aan ___ ik het boek gaf?' }, correctAnswers: ['wie'], wordIds: ['w-boek'] },
  { id: 'd-wiens-5', topicId: 'b1-genitive-relative-pronouns', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['praatte', 'de', 'ik', 'vrouw', 'met', 'wie'] }, correctAnswers: ['De vrouw met wie ik praatte.'], wordIds: ['w-vrouw'] },
  { id: 'd-wiens-6', topicId: 'b1-genitive-relative-pronouns', type: 'multiple-choice', prompt: 'Which is correct after a preposition for a person?', data: { options: ['met wie', 'met die'] }, correctAnswers: ['met wie'] },
  { id: 'd-wiens-7', topicId: 'b1-genitive-relative-pronouns', type: 'fill-blank', prompt: 'Fill in "for whom".', data: { sentence: 'Dat is de vriend ___ wie ik het cadeau kocht.' }, correctAnswers: ['voor'], wordIds: ['w-vriend', 'w-wb-cadeau'] },

  // --- b1-word-order-advanced ---
  { id: 'd-wordadv-1', topicId: 'b1-word-order-advanced', type: 'word-order', prompt: 'Put the words in order (reduced pronouns move early).', data: { tokens: ['het', 'geef', 'ik', 'morgen', 'hem'] }, correctAnswers: ['Ik geef het hem morgen.'] },
  { id: 'd-wordadv-2', topicId: 'b1-word-order-advanced', type: 'fill-blank', prompt: 'Fill in the postposition that trails to the end.', data: { sentence: 'Hij loopt de kamer ___.' }, correctAnswers: ['in'], wordIds: ['w-kamer'] },
  { id: 'd-wordadv-3', topicId: 'b1-word-order-advanced', type: 'multiple-choice', prompt: 'In the perfect tense, where does the postposition go?', data: { options: ['After the participle, at the end', 'Right before the participle'] }, correctAnswers: ['After the participle, at the end'] },
  { id: 'd-wordadv-4', topicId: 'b1-word-order-advanced', type: 'word-order', prompt: 'Put the words in order (perfect tense with postposition).', data: { tokens: ['is', 'gelopen', 'de', 'kamer', 'hij', 'in'] }, correctAnswers: ['Hij is de kamer in gelopen.'], wordIds: ['w-kamer'] },
  { id: 'd-wordadv-5', topicId: 'b1-word-order-advanced', type: 'fill-blank', prompt: 'Fill in the reduced pronoun order (it, to us).', data: { sentence: 'Zij liet ___ ons zien.' }, correctAnswers: ['het'] },
  { id: 'd-wordadv-6', topicId: 'b1-word-order-advanced', type: 'multiple-choice', prompt: 'De kat springt de tuin ___. (out of)', data: { options: ['uit', 'buiten'] }, correctAnswers: ['uit'], wordIds: ['w-wb-kat', 'w-wb-tuin'] },
  { id: 'd-wordadv-7', topicId: 'b1-word-order-advanced', type: 'multiple-choice', prompt: 'Reduced (unstressed) pronouns move to sit:', data: { options: ['right after the finite verb', 'at the very end of the clause'] }, correctAnswers: ['right after the finite verb'] },

  // --- b1-compound-nouns ---
  { id: 'd-cmpd-1', topicId: 'b1-compound-nouns', type: 'multiple-choice', prompt: '"de boekwinkel" or "het boekwinkel"? (winkel is a de-word)', data: { options: ['de boekwinkel', 'het boekwinkel'] }, correctAnswers: ['de boekwinkel'], wordIds: ['w-boek'] },
  { id: 'd-cmpd-2', topicId: 'b1-compound-nouns', type: 'fill-blank', prompt: 'Fill in the linking sound (stad + huis).', data: { sentence: 'stad + huis = stad___huis' }, correctAnswers: ['s'] },
  { id: 'd-cmpd-3', topicId: 'b1-compound-nouns', type: 'multiple-choice', prompt: 'What decides the article of a Dutch compound noun?', data: { options: ['the last noun', 'the first noun'] }, correctAnswers: ['the last noun'] },
  { id: 'd-cmpd-4', topicId: 'b1-compound-nouns', type: 'fill-blank', prompt: 'Fill in the compound for "doghouse" (hond + hok).', data: { sentence: 'hond + hok = hond___hok' }, correctAnswers: ['en'] },
  { id: 'd-cmpd-5', topicId: 'b1-compound-nouns', type: 'multiple-choice', prompt: 'Is a Dutch compound noun written as one word or two?', data: { options: ['one word', 'two words with a space'] }, correctAnswers: ['one word'] },
  { id: 'd-cmpd-6', topicId: 'b1-compound-nouns', type: 'multiple-choice', prompt: '"school" + "boek" links with:', data: { options: ['nothing', '-s-'] }, correctAnswers: ['nothing'] },
  { id: 'd-cmpd-7', topicId: 'b1-compound-nouns', type: 'fill-blank', prompt: 'Fill in the article for "koffiemok" (mok is a de-word).', data: { sentence: '___ koffiemok' }, correctAnswers: ['de'], wordIds: ['w-wb-koffiemok'] },

  // --- b1-possessives-advanced ---
  { id: 'd-possadv-1', topicId: 'b1-possessives-advanced', type: 'fill-blank', prompt: 'Fill in the independent possessive for "mine" (het-word noun).', data: { sentence: 'Is dit jouw boek? Nee, het is de ___.' }, correctAnswers: ['mijne'], wordIds: ['w-boek'] },
  { id: 'd-possadv-2', topicId: 'b1-possessives-advanced', type: 'multiple-choice', prompt: 'Colloquial alternative to "de jouwe" (is this yours?):', data: { options: ['Is dit van jou?', 'Is dit jouwe?'] }, correctAnswers: ['Is dit van jou?'] },
  { id: 'd-possadv-3', topicId: 'b1-possessives-advanced', type: 'fill-blank', prompt: 'Fill in the independent possessive for "ours" (het-word noun).', data: { sentence: 'Dit huis is ___ onze.' }, correctAnswers: ['het'], wordIds: ['w-huis'] },
  { id: 'd-possadv-4', topicId: 'b1-possessives-advanced', type: 'multiple-choice', prompt: 'Die tas is niet de zijne, die is ___ haar. (colloquial "hers")', data: { options: ['van', 'de'] }, correctAnswers: ['van'], wordIds: ['w-wb-tas'] },
  { id: 'd-possadv-5', topicId: 'b1-possessives-advanced', type: 'fill-blank', prompt: 'Fill in the article that always pairs with the "-e" independent possessive ending.', data: { sentence: 'Welke auto is ___ jouwe?' }, correctAnswers: ['de'], wordIds: ['w-auto'] },
  { id: 'd-possadv-6', topicId: 'b1-possessives-advanced', type: 'multiple-choice', prompt: 'How is the independent possessive built?', data: { options: ['de/het + stem + -e', 'stem + -s'] }, correctAnswers: ['de/het + stem + -e'] },
  { id: 'd-possadv-7', topicId: 'b1-possessives-advanced', type: 'fill-blank', prompt: 'Fill in "mine" (independent, de-word noun).', data: { sentence: 'Dit is niet jouw auto, het is de ___.' }, correctAnswers: ['mijne'], wordIds: ['w-auto'] },

  // --- b1-indefinite-numbers-and-exclamatives ---
  { id: 'd-indefnum-1', topicId: 'b1-indefinite-numbers-and-exclamatives', type: 'fill-blank', prompt: 'Fill in "a few" (a couple, everyday).', data: { sentence: 'Wij hebben ___ dagen vrij.' }, correctAnswers: ['een paar'] },
  { id: 'd-indefnum-2', topicId: 'b1-indefinite-numbers-and-exclamatives', type: 'multiple-choice', prompt: 'Zij heeft ___ tijd. (little)', data: { options: ['weinig', 'veel'] }, correctAnswers: ['weinig'] },
  { id: 'd-indefnum-3', topicId: 'b1-indefinite-numbers-and-exclamatives', type: 'fill-blank', prompt: 'Fill in "What a" for an exclamation.', data: { sentence: '___ mooi huis!' }, correctAnswers: ['Wat een'], wordIds: ['w-huis'] },
  { id: 'd-indefnum-4', topicId: 'b1-indefinite-numbers-and-exclamatives', type: 'multiple-choice', prompt: '"Such a difficult question" starts with:', data: { options: ["Zo'n", 'Wat een'] }, correctAnswers: ["Zo'n"] },
  { id: 'd-indefnum-5', topicId: 'b1-indefinite-numbers-and-exclamatives', type: 'fill-blank', prompt: 'Fill in "a few" (formal-ish, before a plural noun).', data: { sentence: 'Ik heb ___ vragen.' }, correctAnswers: ['enkele'] },
  { id: 'd-indefnum-6', topicId: 'b1-indefinite-numbers-and-exclamatives', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['huis', 'mooi', 'wat', 'een'] }, correctAnswers: ['Wat een mooi huis.'], wordIds: ['w-huis'] },
  { id: 'd-indefnum-7', topicId: 'b1-indefinite-numbers-and-exclamatives', type: 'multiple-choice', prompt: 'Does the noun after "wat een" or "zo\'n" change to plural for emphasis?', data: { options: ['No, it stays singular', 'Yes, it becomes plural'] }, correctAnswers: ['No, it stays singular'] },

  // --- b1-hen-hun-and-reciprocal ---
  { id: 'd-henhun-1', topicId: 'b1-hen-hun-and-reciprocal', type: 'multiple-choice', prompt: 'Ik zie ___ bij het station. (direct object)', data: { options: ['hen', 'hun'] }, correctAnswers: ['hen'] },
  { id: 'd-henhun-2', topicId: 'b1-hen-hun-and-reciprocal', type: 'multiple-choice', prompt: 'Ik geef ___ een cadeau. (indirect object, no preposition)', data: { options: ['hen', 'hun'] }, correctAnswers: ['hun'], wordIds: ['w-wb-cadeau'] },
  { id: 'd-henhun-3', topicId: 'b1-hen-hun-and-reciprocal', type: 'fill-blank', prompt: 'Fill in "with them" (object of a preposition).', data: { sentence: 'Ik praat vaak met ___.' }, correctAnswers: ['hen'] },
  { id: 'd-henhun-4', topicId: 'b1-hen-hun-and-reciprocal', type: 'fill-blank', prompt: 'Fill in "each other".', data: { sentence: 'Zij houden van ___.' }, correctAnswers: ['elkaar'] },
  { id: 'd-henhun-5', topicId: 'b1-hen-hun-and-reciprocal', type: 'multiple-choice', prompt: 'Which is the everyday word for "each other"?', data: { options: ['elkaar', 'elkander'] }, correctAnswers: ['elkaar'] },
  { id: 'd-henhun-6', topicId: 'b1-hen-hun-and-reciprocal', type: 'word-order', prompt: 'Put the words in order.', data: { tokens: ['niet', 'lang', 'wij', 'elkaar', 'hebben', 'gezien'] }, correctAnswers: ['Wij hebben elkaar lang niet gezien.'] },
  { id: 'd-henhun-7', topicId: 'b1-hen-hun-and-reciprocal', type: 'multiple-choice', prompt: 'In casual spoken Dutch, which form is often used for both roles?', data: { options: ['hun', 'hen'] }, correctAnswers: ['hun'] },

  // --- b1-modal-verbs-perfect-tense ---
  { id: 'd-ipp-1', topicId: 'b1-modal-verbs-perfect-tense', type: 'fill-blank', prompt: 'Fill in the second infinitive (kunnen) -- double infinitive.', data: { sentence: 'Ik heb het niet kunnen ___.' }, correctAnswers: ['doen'] },
  { id: 'd-ipp-2', topicId: 'b1-modal-verbs-perfect-tense', type: 'multiple-choice', prompt: 'Hij heeft moeten ___. (work, IPP double infinitive)', data: { options: ['werken', 'gewerkt'] }, correctAnswers: ['werken'], wordIds: ['w-werken'] },
  { id: 'd-ipp-3', topicId: 'b1-modal-verbs-perfect-tense', type: 'multiple-choice', prompt: 'Ik heb het ___. (was able to, modal alone, no second verb)', data: { options: ['gekund', 'kunnen'] }, correctAnswers: ['gekund'] },
  { id: 'd-ipp-4', topicId: 'b1-modal-verbs-perfect-tense', type: 'word-order', prompt: 'Put the words in order (double infinitive at the end).', data: { tokens: ['het', 'ik', 'niet', 'heb', 'doen', 'kunnen'] }, correctAnswers: ['Ik heb het niet kunnen doen.'] },
  { id: 'd-ipp-5', topicId: 'b1-modal-verbs-perfect-tense', type: 'fill-blank', prompt: 'Fill in the second infinitive (mogen) -- were not allowed to see it.', data: { sentence: 'Wij hebben het niet mogen ___.' }, correctAnswers: ['zien'] },
  { id: 'd-ipp-6', topicId: 'b1-modal-verbs-perfect-tense', type: 'multiple-choice', prompt: 'What is this double-infinitive pattern called?', data: { options: ['the IPP effect', 'the TMP rule'] }, correctAnswers: ['the IPP effect'] },
  { id: 'd-ipp-7', topicId: 'b1-modal-verbs-perfect-tense', type: 'fill-blank', prompt: 'Fill in the second infinitive (willen) -- she wanted to try it.', data: { sentence: 'Zij heeft het willen ___.' }, correctAnswers: ['proberen'] },
];
