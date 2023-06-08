import singletons from '../utils/singletons.helper'

export default {
  name: singletons['privacy'].name,
  type: 'document',
  title: singletons['privacy'].title,
  fields: [
    {
      name: 'privacy',
      type: 'array',
      title: 'Privacy',
      of: [{type: 'block'}],
    },
  ],
}
