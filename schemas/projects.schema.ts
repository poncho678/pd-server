export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule: any) =>
        Rule.required().warning(
          'A slug is required. Please generate a slug before you publish a project.'
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
      description: '',
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
      description: 'Set to published when this project should be visible on the frontend',
      type: 'boolean',
      initialValue: true,
    },
  ],
}
