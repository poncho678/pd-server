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
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      validation: (Rule: any) =>
        Rule.max(155).warning('Description should not be longer than 155 characters.'),
    },
    {
      name: 'aboutText',
      title: 'About Text',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
  ],
}
