import type { PageServerLoad } from './$types';
import { serverClient } from '$lib/server/sanity/client';
import { projectsQuery, homeQuery } from '$lib/sanity/queries';

export const load: PageServerLoad = async () => {
  const [projects, home] = await Promise.all([
    serverClient.fetch(projectsQuery),
    serverClient.fetch(homeQuery)
  ]);
  return { projects, home };
};
