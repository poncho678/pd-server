import singletons from '../utils/singletons.helper'

export default {
  name: singletons['contact'].name,
  type: 'document',
  title: singletons['contact'].title,
  fields: [
    {
      name: 'contact',
      title: 'Contact',
      type: 'array',
      of: [{type: 'block'}],
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
      name: 'instagram',
      type: 'url',
      title: 'Instagram',
    },
    {
      name: 'vimeo',
      type: 'url',
      title: 'Vimeo',
    },
    {
      name: 'crewUnited',
      type: 'url',
      title: 'Crew United',
    },
  ],
}
