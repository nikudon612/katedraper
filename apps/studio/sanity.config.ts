import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
const dataset = process.env.SANITY_STUDIO_DATASET!

// if (!projectId) {
//   throw new Error('Missing SANITY_PROJECT_ID (check apps/studio/.env)')
// }
// if (!dataset) {
//   throw new Error('Missing SANITY_DATASET (check apps/studio/.env)')
// }

export default defineConfig({
  name: 'default',
  title: 'Studio',
  projectId,
  dataset,
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('home')
              .title('Homepage')
              .child(
                S.document()
                  .schemaType('home')
                  .documentId('home')
              ),
            S.documentTypeListItem('post'),
            S.documentTypeListItem('project'),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
