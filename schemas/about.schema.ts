import {defineArrayMember, defineField} from 'sanity'
import singletons from '../utils/singletons.helper'

export default {
  name: singletons['about'].name,
  type: 'document',
  title: singletons['about'].title,
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'This is the title of the website.',
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      description: 'This text will be visible on search engines.',
      type: 'text',
      validation: (Rule: any) =>
        Rule.max(155).warning('Description should not be longer than 155 characters.'),
    },
    {
      name: 'aboutText',
      title: 'About Text',
      description: 'This text will be visible on the about page.',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      description: 'This image will be visible on the about page.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Descriptive image text.',
        },
      ],
    },
    defineField({
      name: 'lists',
      title: 'Lists',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'list',
          type: 'list',
        }),
      ],
    }),
  ],
}
