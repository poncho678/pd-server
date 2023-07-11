import {SparklesIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const teamType = defineType({
  name: 'team',
  title: 'Team',
  type: 'object',
  fields: [
    defineField({
      name: 'main',
      title: 'Main',
      type: 'array',
      of: [
        defineField({
          name: 'position',
          title: 'Position',
          type: 'string',
        }),
      ],
    }),
  ],
  icon: SparklesIcon,
  preview: {
    prepare() {
      return {
        title: 'Team',
        subtitle: 'List',
      }
    },
  },
})
