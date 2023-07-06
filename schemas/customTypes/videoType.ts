import {DocumentVideoIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const videoType = defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  options: {
    modal: {
      type: 'popover',
    },
  },
  fields: [
    defineField({
      name: 'video',
      title: 'Video',
      description: 'Provide a link to a trailer. Preferably hosted on vimeo.',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).warning('Invalid. A valid URL starts with “http://” or “https://”, please try again.'),
    }),
  ],
  icon: DocumentVideoIcon,
})
