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
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Teaching Schedule', link: '/new/' },
            { text: 'DMIT-1508', link: 'https://DMIT-1508.github.io' },
            { text: 'DMIT-2018', link: 'https://DMIT-2018.github.io' },
        ]
    }
}
