export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{
                source:"productname",
                maxlength:"90"
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'BigText',
            title: 'BigText',
            type: 'string',
        },
        {
            name: 'productname',
            title: 'ProductName',
            type: 'string',
        },
        {
            name: 'actualprice',
            title: 'actualprice',
            type: 'string',
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'string',
        },
    ],
  };