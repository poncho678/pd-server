import {UlistIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const listType = defineType({
  name: 'list',
  title: 'List',
  type: 'object',
  fields: [
    defineField({
      name: 'listTitle',
      title: 'List Title',
      type: 'string',
    }),
    defineField({
      name: 'list',
      title: 'List',
      type: 'array',
      of: [
        defineField({
          name: 'listItem',
          title: 'List Item',
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
              validation: (Rule: any) =>
                Rule.uri({
                  scheme: ['http', 'https'],
                }).warning(
                  'Invalid. A valid URL starts with “http://” or “https://”, please try again.'
                ),
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                metadata: [
                  'blurhash', // Default: included
                  'lqip', // Default: included
                  'palette', // Default: included
                ],
              },
            }),
          ],
        }),
      ],
    }),
  ],
  icon: UlistIcon,
})
