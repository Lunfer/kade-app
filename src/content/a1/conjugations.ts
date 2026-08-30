// Per-verb conjugation tables for the words in a1Words that are verbs.
// Hand-authored (not rule-derived) so irregular verbs stay correct; the
// regular ones follow the same stem/'t kofschip rules already taught in
// a1Topics (a1-verbs-present, a1-simple-past, a1-present-perfect,
// a1-verbs-zijn-hebben, a1-modal-verbs) -- kept consistent with that text
// on purpose rather than re-deriving it.
//
// Pronoun rows are grouped the same way those topics group them:
// ik | jij / u | hij / zij / het | wij | jullie | zij.

export interface ConjugationForm {
  pronoun: string;
  form: string;
}

export interface ConjugationTense {
  label: string;
  forms: ConjugationForm[];
  note?: string;
}

export interface VerbConjugation {
  wordId: string;
  infinitive: string;
  english: string;
  auxiliary: 'hebben' | 'zijn';
  pastParticiple: string;
  stemNote?: string;
  usageNote?: string;
  tenses: ConjugationTense[];
}

const PRONOUNS = ['ik', 'jij / u', 'hij / zij / het', 'wij', 'jullie', 'zij'];

/** Builds the standard 6-row present/simple-past table from 6 ordered forms. */
function rows(forms: string[]): ConjugationForm[] {
  return PRONOUNS.map((pronoun, i) => ({ pronoun, form: forms[i] }));
}

/** Builds a present-perfect table from a conjugated auxiliary + a fixed participle. */
function perfectRows(auxForms: string[], participle: string): ConjugationForm[] {
  return PRONOUNS.map((pronoun, i) => ({ pronoun, form: `${auxForms[i]} ${participle}` }));
}

function regularVerb(opts: {
  wordId: string;
  infinitive: string;
  english: string;
  stem: string;
  isTVerb: boolean;
  auxiliary?: 'hebben' | 'zijn';
  usageNote?: string;
}): VerbConjugation {
  const { wordId, infinitive, english, stem, isTVerb, auxiliary = 'hebben', usageNote } = opts;
  const stemEndsInT = stem.endsWith('t');
  const heForm = stemEndsInT ? stem : `${stem}t`;
  const pastSingle = isTVerb ? `${stem}te` : `${stem}de`;
  const pastPlural = isTVerb ? `${stem}ten` : `${stem}den`;
  const participleSuffix = isTVerb ? 't' : 'd';
  const participle = stem.endsWith(participleSuffix) ? `ge${stem}` : `ge${stem}${participleSuffix}`;
  const auxPresent = auxiliary === 'hebben' ? ['heb', 'hebt', 'heeft', 'hebben', 'hebben', 'hebben'] : ['ben', 'bent', 'is', 'zijn', 'zijn', 'zijn'];

  return {
    wordId,
    infinitive,
    english,
    auxiliary,
    pastParticiple: participle,
    stemNote: `Stem: ${stem} (ends in "${stem.slice(-1)}" -> a ${isTVerb ? "'t kofschip' t-verb" : 'd-verb'}${stemEndsInT ? '; the stem already ends in "-t", so hij/zij/het uses the stem as-is' : ''}).`,
    usageNote,
    tenses: [
      { label: 'Present', forms: rows([stem, heForm, heForm, infinitive, infinitive, infinitive]) },
      { label: 'Simple past', forms: rows([pastSingle, pastSingle, pastSingle, pastPlural, pastPlural, pastPlural]) },
      { label: 'Present perfect', forms: perfectRows(auxPresent, participle) },
    ],
  };
}

export const a1Conjugations: Record<string, VerbConjugation> = {
  'w-koken': regularVerb({ wordId: 'w-koken', infinitive: 'koken', english: 'to cook', stem: 'kook', isTVerb: true }),
  'w-werken': regularVerb({ wordId: 'w-werken', infinitive: 'werken', english: 'to work', stem: 'werk', isTVerb: true }),
  'w-leren': regularVerb({ wordId: 'w-leren', infinitive: 'leren', english: 'to learn', stem: 'leer', isTVerb: false }),
  'w-regenen': regularVerb({
    wordId: 'w-regenen',
    infinitive: 'regenen',
    english: 'to rain',
    stem: 'regen',
    isTVerb: false,
    usageNote: 'Almost always used impersonally, in the hij/zij/het form only: "het regent" (it is raining), "het regende", "het heeft geregend" -- rain doesn\'t have a personal subject.',
  }),
  'w-wonen': regularVerb({ wordId: 'w-wonen', infinitive: 'wonen', english: 'to live (reside)', stem: 'woon', isTVerb: false }),
  'w-spelen': regularVerb({ wordId: 'w-spelen', infinitive: 'spelen', english: 'to play', stem: 'speel', isTVerb: false }),
  'w-praten': regularVerb({ wordId: 'w-praten', infinitive: 'praten', english: 'to talk', stem: 'praat', isTVerb: true }),
  'w-horen': regularVerb({ wordId: 'w-horen', infinitive: 'horen', english: 'to hear', stem: 'hoor', isTVerb: false }),

  'w-zijn': {
    wordId: 'w-zijn',
    infinitive: 'zijn',
    english: 'to be',
    auxiliary: 'zijn',
    pastParticiple: 'geweest',
    stemNote: 'Irregular -- memorize these forms rather than deriving them from a stem. Zijn is also its own auxiliary in the present perfect.',
    tenses: [
      { label: 'Present', forms: rows(['ben', 'bent', 'is', 'zijn', 'zijn', 'zijn']) },
      { label: 'Simple past', forms: rows(['was', 'was', 'was', 'waren', 'waren', 'waren']) },
      { label: 'Present perfect', forms: perfectRows(['ben', 'bent', 'is', 'zijn', 'zijn', 'zijn'], 'geweest') },
    ],
  },

  'w-hebben': {
    wordId: 'w-hebben',
    infinitive: 'hebben',
    english: 'to have',
    auxiliary: 'hebben',
    pastParticiple: 'gehad',
    stemNote: 'Irregular -- only hij/zij/het (heeft) is truly unpredictable. Jij/je also commonly takes "heb" instead of "hebt" once it follows the verb, as in a question: "Heb jij een pen?"',
    tenses: [
      { label: 'Present', forms: rows(['heb', 'hebt', 'heeft', 'hebben', 'hebben', 'hebben']) },
      { label: 'Simple past', forms: rows(['had', 'had', 'had', 'hadden', 'hadden', 'hadden']) },
      { label: 'Present perfect', forms: perfectRows(['heb', 'hebt', 'heeft', 'hebben', 'hebben', 'hebben'], 'gehad') },
    ],
  },

  'w-kunnen': {
    wordId: 'w-kunnen',
    infinitive: 'kunnen',
    english: 'can, to be able to',
    auxiliary: 'hebben',
    pastParticiple: 'gekund',
    stemNote: 'Irregular in the present tense.',
    usageNote: 'The past participle (gekund) is rarely used on its own -- combined with another verb, the present perfect swaps in a second bare infinitive instead: "Ik heb dat niet kunnen doen" (I couldn\'t do that), not "Ik heb dat niet gekund doen."',
    tenses: [
      { label: 'Present', forms: rows(['kan', 'kan / kunt', 'kan', 'kunnen', 'kunnen', 'kunnen']) },
      { label: 'Simple past', forms: rows(['kon', 'kon', 'kon', 'konden', 'konden', 'konden']) },
      { label: 'Present perfect', forms: perfectRows(['heb', 'hebt', 'heeft', 'hebben', 'hebben', 'hebben'], 'gekund'), note: 'Standalone use only -- see the note below.' },
    ],
  },

  'w-willen': {
    wordId: 'w-willen',
    infinitive: 'willen',
    english: 'to want to',
    auxiliary: 'hebben',
    pastParticiple: 'gewild',
    stemNote: 'Irregular in the present tense.',
    usageNote: 'Simple past is also often heard as the more colloquial wou/wouden alongside wilde/wilden. Like kunnen, the past participle (gewild) is rarely used on its own alongside another verb.',
    tenses: [
      { label: 'Present', forms: rows(['wil', 'wil / wilt', 'wil', 'willen', 'willen', 'willen']) },
      { label: 'Simple past', forms: rows(['wilde', 'wilde', 'wilde', 'wilden', 'wilden', 'wilden']) },
      { label: 'Present perfect', forms: perfectRows(['heb', 'hebt', 'heeft', 'hebben', 'hebben', 'hebben'], 'gewild'), note: 'Standalone use only -- see the note below.' },
    ],
  },

  'w-moeten': {
    wordId: 'w-moeten',
    infinitive: 'moeten',
    english: 'must, to have to',
    auxiliary: 'hebben',
    pastParticiple: 'gemoeten',
    stemNote: 'Irregular in the present tense; the stem already ends in "-t", so hij/zij/het uses "moet" as-is, same spelling rule as any other verb.',
    usageNote: 'Like the other modals, the past participle (gemoeten) is rarely used on its own alongside another verb.',
    tenses: [
      { label: 'Present', forms: rows(['moet', 'moet', 'moet', 'moeten', 'moeten', 'moeten']) },
      { label: 'Simple past', forms: rows(['moest', 'moest', 'moest', 'moesten', 'moesten', 'moesten']) },
      { label: 'Present perfect', forms: perfectRows(['heb', 'hebt', 'heeft', 'hebben', 'hebben', 'hebben'], 'gemoeten'), note: 'Standalone use only -- see the note below.' },
    ],
  },

  'w-mogen': {
    wordId: 'w-mogen',
    infinitive: 'mogen',
    english: 'may, to be allowed to',
    auxiliary: 'hebben',
    pastParticiple: 'gemogen',
    stemNote: 'Irregular in the present tense.',
    usageNote: 'Like the other modals, the past participle (gemogen) is rarely used on its own alongside another verb.',
    tenses: [
      { label: 'Present', forms: rows(['mag', 'mag', 'mag', 'mogen', 'mogen', 'mogen']) },
      { label: 'Simple past', forms: rows(['mocht', 'mocht', 'mocht', 'mochten', 'mochten', 'mochten']) },
      { label: 'Present perfect', forms: perfectRows(['heb', 'hebt', 'heeft', 'hebben', 'hebben', 'hebben'], 'gemogen'), note: 'Standalone use only -- see the note below.' },
    ],
  },
};
