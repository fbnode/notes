var projects = [
    { title: 'project1', path: '/projects/' },
    { title: 'project2', path: '/projects/' },
    { title: 'project3', path: '/projects/' },
    { title: 'project4', path: '/projects/' }
];
var frames = [
    { title: 'jquery', path: '/frames/JQUERY' },
    { title: 'vue', path: '/frames/VUE' }
];
docute.init({
    // landing: 'landing.html',
    debug: true,
    // home: 'https://raw.githubusercontent.com/egoist/docute/master/README.md',
    // repo: 'egoist/docute',
    // twitter: 'rem_rin_rin',
    // 'edit-link': 'https://github.com/egoist/docute/blob/master/docs',
    nav: {
        default: [{
            title: '首页',
            path: '/'
        }, {
            title: '技术笔记',
            path: '/study/STUDY'
        }, {
            title: '项目分析',
            type: 'dropdown',
            items: projects
        }, {
            title: '常用框架',
            type: 'dropdown',
            items: frames
        }, {
            title: '闲文杂谈',
            path: '/cli',
            source: 'https://raw.githubusercontent.com/egoist/docute/master/CHANGELOG.md'
        }]
    },
    icons: [{
        label: '关注我的微博',
        svgId: 'i-weibo',
        svgClass: 'weibo-icon',
        link: 'http://weibo.com/zengxinyu'
    }],
    plugins: [
        docsearch({
            apiKey: '65360cf9a91d87cd455d2b286d0d89ee',
            indexName: 'docute',
            tags: ['english', 'zh-Hans', 'zh-Hant', 'ja'],
            url: 'https://docute.js.org'
        }),
        evanyou()
    ]
})
