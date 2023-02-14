export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'postedBy',
      title: 'Posted By',
      type: 'postedBy',
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: 'comment2',
      title: 'Comment2',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}, {type: 'post'}],
        },
      ],
    },
  ],
}
