import type { Res } from '../types/main';

type Request = (
  url: string,
  query: string,
  variables?: Record<string, unknown>,
) => Promise<Res>;

export const request: Request = async (url, query, variables = {}) => {
  const data = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });

  return await data.json();
};
