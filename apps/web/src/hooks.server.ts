// apps/web/src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  return resolve(event); // no special Sanity hooks needed
};
