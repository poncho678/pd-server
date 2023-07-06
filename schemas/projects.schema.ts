import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {defineArrayMember, defineField} from 'sanity'
import slugify from 'slugify'

export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'projects'}),
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().warning('A title is required.'),
    },
    {
      name: 'slug',
      title: 'Slug',
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
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      validation: (Rule: any) => Rule.required().warning('An image is required.'),
      fields: [
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
        }),
      ],
      options: {
        hotspot: true,
        metadata: [
          'blurhash', // Default: included
          'lqip', // Default: included
          'palette', // Default: included
        ],
      },
    }),
    {
      name: 'poster',
      title: 'Poster',
      type: 'image',
      options: {
        metadata: [
          'blurhash', // Default: included
          'lqip', // Default: included
          'palette', // Default: included
        ],
      },
    },
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'synopsis',
          type: 'synopsis',
        }),
        defineArrayMember({
          name: 'stills',
          type: 'stills',
        }),
        defineArrayMember({
          name: 'video',
          type: 'video',
        }),
      ],
    }),
    {
      name: 'published',
      title: 'Published',
      description: 'Show Project on the frontend.',
      type: 'boolean',
      initialValue: false,
    },
  ],
}
