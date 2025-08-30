import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

// one project by slug (optional, for detail pages)
export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0]{
    _id, _createdAt, title, excerpt, mainImage, body
  }
`;

export const homeQuery = groq`
*[_type == "home"][0]{
  tagline,
  copyright,
  "featured": featuredProjects[]{
    "id": project->_id,
    "title": project->title,
    "slug": project->slug.current,
    "imageUrl": coalesce(overrideImage.asset->url, project->mainImage.asset->url),
    "alt": coalesce(overrideAlt, project->title)
  }
}
`;

export const projectsQuery = groq`
*[_type == "project"] | order(_createdAt desc){
  _id, _createdAt, title, excerpt, mainImage, "imageUrl": mainImage.asset->url
}
`;
