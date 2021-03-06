module.exports = {
    title: 'Daniel Gilleland',
    description: 'Instructor Blog',
    extendMarkdown(md) {
        md.set({ breaks: true })
        // md.use(require('markdown-it-imsize'))
        md.use(require('markdown-it-mermaid').default) // leave default options
        md.use(require('markdown-it-checkbox'))
        md.use(require('markdown-it-texmath'))
        // md.use(require('markdown-it-kbd'))
        // md.use(require('markdown-it-deflist'))
        // md.use(require('markdown-it-abbr'))
        // md.use(require('markdown-it-mark'))
        // md.use(require('markdown-it-footnote'))
        md.use(require('markdown-it-sub'))
        md.use(require('markdown-it-sup'))
    },
    themeConfig: {
        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'dgilleland/dgilleland.github.io',
        lastUpdated: 'Last Updated',
        // serviceWorker: {
        //     updatePopup: true // Boolean | Object, default to undefined.
        //     // If set to true, the default text config will be: 
        //     // updatePopup: { 
        //     //    message: "New content is available.", 
        //     //    buttonText: "Refresh" 
        //     // }
        // },
        displayAllHeaders: true, // Default: false
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Teaching Schedule', link: '/new/' },
            { text: 'DMIT-1508', link: 'https://DMIT-1508.github.io' },
            { text: 'CPSC-1517', link: 'https://CPSC-1517.github.io' },
            { text: 'DMIT-2018', link: 'https://DMIT-2018.github.io' },
            { text: 'Me on GitHub', link: 'https://github.com/dgilleland' }
            // { text: 'Sep 2018 Errata', link: 'https://dgilleland.github.io/2018-Sep-In-Class/'}
        ],
        sidebar: [
            '/new/',
            '/new/tools',
            '/new/csharp-tips',
            '/about/colophon',
            '/about/xkcd',
            '/about/funny',
            '/new/experiments'
        ]
    },
    plugins: {
        '@vuepress/pwa': {
           serviceWorker: true,
           updatePopup: {
                message: "New content is available.",
                buttonText: "Refresh"
           }
        }
    }
};
