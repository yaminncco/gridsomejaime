// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/_globals.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Gridsomejaime',
  siteDescription: 'A simple Blog theme for Gridsome',
  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
    Category: '/category/:title'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/posts/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
          category: 'Category'
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Category',
        path: './content/categories/*.md',
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      autolinkHeadings: false
    }
  },
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
	}
}
