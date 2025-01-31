export const FIRST = "Daniel";
export const LAST = "Blake";
export const FULL = `${FIRST} ${LAST}`;
export const CAREER = "Software Developer";

export const LowerCase = {
  FIRST: FIRST.toLocaleLowerCase(),
  LAST: LAST.toLocaleLowerCase(),
  FULL: FULL.toLocaleLowerCase(),
  CAREER: CAREER.toLocaleLowerCase(),
} as const;
