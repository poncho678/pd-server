import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import slugify from 'slugify'

export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'projects'}),
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'Please generate a slug before you publish the project.',
      options: {
        source: 'title',
        slugify: (input: string) => slugify(input).toLocaleLowerCase(),
      },
      validation: (Rule: any) =>
        Rule.required().warning(
          'A slug is required. Please generate a slug to publish the project.'
        ),
    },
    {
      title: 'Featured Image',
      name: 'featuredImage',
      type: 'image',
      fields: [
        {
          title: 'Description',
          name: 'description',
          type: 'string',
        },
      ],
      options: {
        metadata: [
          'blurhash', // Default: included
          'lqip', // Default: included
          'palette', // Default: included
        ],
      },
    },
    {
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        metadata: [
          'blurhash', // Default: included
          'lqip', // Default: included
          'palette', // Default: included
        ],
      },
    },
    {
      title: 'Trailer',
      name: 'trailer',
      description: 'Provide a link to a trailer. Preferably hosted on vimeo.',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).warning('Invalid. A valid URL starts with “http://” or “https://”, please try again.'),
    },
    {
      title: 'Stills',
      name: 'stills',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            metadata: [
              'blurhash', // Default: included
              'lqip', // Default: included
              'palette', // Default: included
            ],
          },
          fields: [
            {
              title: 'Description',
              name: 'description',
              type: 'string',
            },
          ],
        },
      ],

      options: {
        layout: 'grid',
      },
    },
    {
      title: 'Published',
      name: 'published',
      description: 'Set to published to make the project visible on the frontend.',
      type: 'boolean',
      initialValue: true,
    },
  ],
}
