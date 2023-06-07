import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import singletons from './utils/singletons.helper'

const singletonActions = new Set(["publish", "discardChanges", "restore"])  
const singletonTypes = new Set(['about', 'contact', 'imprint', 'privacy'])

export default defineConfig ({
  name: 'default',
  title: 'pauldrey',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',
  plugins: [
    deskTool({
      structure: (S) => 
        S.list()
          .title("Pages")
          .items([
            S.listItem()
              .title("About")
              .id("about")
              .child(
                S.document()
                  .schemaType("about")
                  .documentId("about")
              ),

            // Regular document types
            S.documentTypeListItem("projects").title("Projects"),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
    singletonTypes.has(context.schemaType)
      ? input.filter(({ action }) => action && singletonActions.has(action))
      : input,
  }
})

