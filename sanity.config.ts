import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import singletons from './utils/singletons.helper'
import {DocumentsIcon} from '@sanity/icons'

import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['about', 'contact', 'imprint', 'privacy'])
const singletonArray = Object.values(singletons)

export default defineConfig({
  name: 'default',
  title: 'Paul Drey',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',
  plugins: [
    deskTool({
      structure: (S, context) =>
        S.list()
          .title('Pages')
          .items([
            // Regular document types
            orderableDocumentListDeskItem({
              type: 'projects',
              title: 'Projects',
              S,
              context,
              icon: DocumentsIcon,
            }),
            S.divider(),
            ...singletonArray.map((x) =>
              S.listItem()
                .title(x.title)
                .id(x.name)
                .icon(x.icon)
                .child(S.document().schemaType(x.name).documentId(x.title))
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
