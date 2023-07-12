import {defineField} from 'sanity'
import singletons from '../utils/singletons.helper'

export default {
  name: singletons['contact'].name,
  type: 'document',
  title: singletons['contact'].title,
  fields: [
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'mail',
      type: 'url',
      title: 'Mail',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['mailto'],
        }),
    }),
    defineField({
      name: 'instagram',
      type: 'url',
      title: 'Instagram',
    }),
    defineField({
      name: 'vimeo',
      type: 'url',
      title: 'Vimeo',
    }),
    defineField({
      name: 'crewUnited',
      type: 'url',
      title: 'Crew United',
    }),
  ],
}
