// apps/web/src/routes/projects/+page.server.ts
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client'; // <-- use your client.ts
import groq from 'groq';

const projectsQuery = groq`
  *[_type == "project"]
  | order(defined(order) desc, order asc, _createdAt desc){
    _id,
    _createdAt,
    title,
    excerpt,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    order
  }
`;

export const load: PageServerLoad = async ({ setHeaders }) => {
  const projects = await client.fetch(projectsQuery);

  setHeaders({
    'cache-control': 'public, s-maxage=60, stale-while-revalidate=600'
  });

  return { projects };
};
