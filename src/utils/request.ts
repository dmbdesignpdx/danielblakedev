import type { Res } from '../types/main';

type Request = (
  space: string,
  query: string,
  variables?: Record<string, unknown>,
) => Promise<Res>;

export const request: Request = async (space, query, variables = {}) => {
  const data = await fetch(`https://api-us-west-2.graphcms.com/v2/${space}/master`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });

  const json = await data.json();

  return json;;
};
