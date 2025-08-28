import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

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
  plugins: [deskTool()],
})
