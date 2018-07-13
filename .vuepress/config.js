module.exports = {
    title: 'Daniel Gilleland',
    description: 'Instructor Blog',
    markdown: {
        config: md => {
            md.set({ breaks: true })
            // md.use(require('markdown-it-imsize'))
            // md.use(require('markdown-it-mermaid').default) // leave default options
            // md.use(require('markdown-it-checkbox'))
            // md.use(require('markdown-it-kbd'))
            // md.use(require('markdown-it-deflist'))
            // md.use(require('markdown-it-abbr'))
            // md.use(require('markdown-it-mark'))
            // md.use(require('markdown-it-footnote'))
            md.use(require('markdown-it-sub'))
            md.use(require('markdown-it-sup'))
              }
    }
  }