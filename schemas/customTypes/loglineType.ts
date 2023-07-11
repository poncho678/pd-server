import {StringIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const loglineType = defineType({
  name: 'logline',
  title: 'Logline',
  type: 'object',
  fields: [
    defineField({
      name: 'logline',
      type: 'text',
    }),
  ],
  icon: StringIcon,
  preview: {
    prepare() {
      return {
        title: 'Logline',
        subtitle: 'Text',
      }
    },
  },
})
