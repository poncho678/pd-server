import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {defineArrayMember, defineField} from 'sanity'
import slugify from 'slugify'

export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  orderings: [orderRankOrdering],
  validation: (Rule: any) =>
    Rule.custom((fields: any) => {
      if (fields.title.length < 0 || fields.slug.length < 0 || fields.featuredImage === 'undefined')
        return 'Please fill out the required fields.'
      return true
    }),
  fields: [
    orderRankField({type: 'projects'}),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().warning('A title is required.'),
    }),
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
          'A slug is required. Please generate a slug before you publish the project.'
        ),
    },
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      description: 'The featured Image on the Frontpage.',
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
    defineField({
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
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'stills',
          type: 'stills',
        }),
        defineArrayMember({
          name: 'logline',
          type: 'logline',
        }),
        defineArrayMember({
          name: 'video',
          type: 'video',
        }),
        defineArrayMember({
          name: 'synopsis',
          type: 'synopsis',
        }),
        defineArrayMember({
          name: 'team',
          type: 'team',
        }),
        defineArrayMember({
          name: 'list',
          type: 'list',
        }),
      ],
    }),
    defineField({
      name: 'awards',
      title: 'Awards',
      description: 'Add Awards/Laurels. (Only visible on the landingpage)',
      type: 'array',
      options: {layout: 'grid'},
      validation: (Rule) => Rule.max(3),
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
        },
      ],
    }),
    defineField({
      name: 'published',
      title: 'Published',
      description: 'Show Project on the frontend.',
      type: 'boolean',
      initialValue: false,
    }),
  ],
}
