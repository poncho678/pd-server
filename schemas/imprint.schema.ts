import singletons from '../utils/singletons.helper'

export default {
  name: singletons['imprint'].name,
  type: 'document',
  title: singletons['imprint'].title,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
  ],
}
