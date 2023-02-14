export default {
  name: 'hero',
  title: 'hero',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'banners',
      title: 'Banners',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'banner'}, {type: 'cta'}],
        },
      ],
    },
  ],
}
