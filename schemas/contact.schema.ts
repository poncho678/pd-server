import singletons from '../utils/singletons.helper'

export default {
  name: singletons['contact'].name,
  type: 'document',
  title: singletons['contact'].title,
  fields: [
    {
      name: 'instagram',
      type: 'url',
      title: 'Instagram',
    },
    {
      name: 'mail',
      type: 'url',
      title: 'Mail',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['mailto'],
        }),
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
