import {DocumentTextIcon} from '@sanity/icons'

import {defineField, defineType} from 'sanity'

export const synopsisType = defineType({
  name: 'synopsis',
  title: 'Synopsis',
  type: 'object',
  fields: [{name: 'text', title: 'Text', type: 'array', of: [{type: 'block'}]}],
  icon: DocumentTextIcon,
  preview: {
    prepare() {
      return {
        title: 'Synopsis',
        subtitle: 'Text',
      }
    },
  },
})
