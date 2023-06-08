import singletons from '../utils/singletons.helper'

export default {
  name: singletons['about'].name,
  type: 'document',
  title: singletons['about'].title,
  fields: [
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
