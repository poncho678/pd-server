import {ImagesIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const stillsType = defineType({
  name: 'stills',
  title: 'Stills',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
            metadata: [
              'blurhash', // Default: included
              'lqip', // Default: included
              'palette', // Default: included
            ],
          },
          fields: [
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
  ],
  icon: ImagesIcon,
})
