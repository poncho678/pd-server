import singletons from '../utils/singletons.helper'

export default {
  name: singletons['contact'].name,
  type: 'document',
  title: singletons['contact'].title,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
  ],
}
