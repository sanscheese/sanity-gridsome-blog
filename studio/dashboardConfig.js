export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e63d09f115ce0880f432376',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-hmtf8mk1',
                  apiId: '167d0f5f-a3d1-42d6-ad3b-07e4606b299e'
                },
                {
                  buildHookId: '5e63d09f31a86b455137ab70',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-yf95hiwm',
                  apiId: 'e246da92-b21a-4732-9428-5b806535da81'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sanscheese/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-yf95hiwm.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
