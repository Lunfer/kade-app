export { colors } from './colors';
export type { ColorToken } from './colors';
export { textStyles, fontFamilies } from './typography';
export { spacing, radii } from './spacing';

export const shadow = {
  card: {
    shadowColor: '#2B2118',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
} as const;
