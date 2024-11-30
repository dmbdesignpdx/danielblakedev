export const FIRST = "Daniel";
export const LAST = "Blake";
export const FULL = `${FIRST} ${LAST}`;
export const CAREER = "Analytics Engineer";
export const TITLE = `Data & ${CAREER}`;

export const LowerCase = {
  FIRST: FIRST.toLocaleLowerCase(),
  LAST: LAST.toLocaleLowerCase(),
  FULL: FULL.toLocaleLowerCase(),
  CAREER: CAREER.toLocaleLowerCase(),
  TITLE: TITLE.toLocaleLowerCase(),
} as const;
