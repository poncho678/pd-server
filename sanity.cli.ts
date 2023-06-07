import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_COMPANY_API_URL,
    dataset: 'production'
  }
})
