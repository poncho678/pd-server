import single from './schema.helper'

export default {
    name: single.about.name,
    type: 'document',
    title: single.about.title,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        }
    ]
}