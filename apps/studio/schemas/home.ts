// /sanity/schemas/home.ts (Sanity v3)
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'featuredProjects',
      title: 'Featured Projects (Homepage)',
      type: 'array',
      validation: (Rule) => Rule.required().min(1).max(3),
      of: [
        defineField({
          name: 'item',
          title: 'Project Slot',
          type: 'object',
          fields: [
            defineField({
              name: 'project',
              title: 'Project',
              type: 'reference',
              to: [{ type: 'project' }],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'overrideImage',
              title: 'Override Image (optional)',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'overrideAlt',
              title: 'Override Alt Text (optional)',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'project.title',
              media: 'overrideImage',
              fallback: 'project.mainImage',
            },
            prepare(sel: any) {
              return {
                title: sel.title || 'Untitled project',
                media: sel.media || sel.fallback,
              };
            },
          },
        }),
      ],
      options: { sortable: true }, // drag to order
    }),

    // Optional extra fields if you ever want to tweak layout copy without code
    defineField({
      name: 'tagline',
      title: 'Tagline (bottom right)',
      type: 'string',
      initialValue: 'Diversity in Design',
    }),
    defineField({
      name: 'copyright',
      title: 'Footer Copyright',
      type: 'string',
      initialValue: `©${new Date().getFullYear()} Kate Draper Design. All Rights Reserved.`,
    }),
  ],

  preview: {
    prepare() {
      return { title: 'Homepage' };
    },
  },
});
