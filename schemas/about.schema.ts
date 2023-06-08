import singletons from '../utils/singletons.helper'

export default {
  name: singletons['about'].name,
  type: 'document',
  title: singletons['about'].title,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
  ],
}
