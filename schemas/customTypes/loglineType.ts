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
})
