// 主题独有配置
import type { Theme } from '@sugarat/theme'
import { getThemeConfig } from '@sugarat/theme/node'

// 开启RSS支持（RSS配置）
// import type { Theme } from '@sugarat/theme'

const baseUrl = 'https://pandacli.cn'
const RSS: Theme.RSSOptions = {
   title: 'Tech-Factory\'s Blog',
   baseUrl,
   copyright: 'Copyright (c) 2019-present, Tech-Factory',
   description: '来日放榜簪花在春衫，一朝等闲驰马到江南',
}

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
    // 开启RSS支持
    // RSS,

    // 搜索
    // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
    // 如果npx pagefind 时间过长，可以手动将其安装为项目依赖 pnpm add pagefind
    search: {
        pageResultCount: 5,
        btnPlaceholder: '搜索',
        placeholder: '搜索文章',
        emptyText: '没有找到相关文章',
        heading: '结果数: {{searchResult}} 条。',
        toSelect: '选择',
        toClose: '关闭',
        toNavigate: '移动',
        searchBy: 'Powered by',
        locales: {
            en: {
                btnPlaceholder: 'Search',
                placeholder: 'Search Docs',
                emptyText: 'No results found',
                heading: 'Total: {{searchResult}} search results.',
                toSelect: 'to select',
                toClose: 'to close',
                toNavigate: 'to navigate',
                searchBy: 'Search by',
            }
        }
    },

    // 页脚
    footer: {
        // message 字段支持配置为HTML内容，配置多条可以配置为数组
        // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
        copyright: 'MIT License | Tech-Factory',
        // icpRecord: {
        //   name: '蜀ICP备19011724号',
        //   link: 'https://beian.miit.gov.cn/'
        // },
        // securityRecord: {
        //   name: '公网安备xxxxx',
        //   link: 'https://www.beian.gov.cn/portal/index.do'
        // },
    },

    // 主题色修改
    themeColor: 'el-blue',

    // 文章默认作者
    author: 'Tommy',

    // 友链
    friend: [
        {
            nickname: '粥里有勺糖',
            des: '你的指尖用于改变世界的力量',
            avatar:
                'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
            url: 'https://sugarat.top',
        }
    ],

    // 公告
    popover: {
        title: '公告',
        duration: -1,
        mobileMinify: false,
        reopen: true,
        twinkle: false,
        body: [
            {type: 'text', content: '👇 我的微信 👇'},
            {
                type: 'image',
                src: 'https://bu.dusays.com/2025/10/24/68fb83649a69f.jpg',
                style: 'display: inline-block;width:46%;padding-right:6px'
            },
            {
                type: 'text',
                content: '欢迎大家私信交流'
            }
        ],
    },

    // 热门文章
    hotArticle: {
        title: '🔥 精选文章',
        nextText: '换一组',
        pageSize: 9,
        empty: '暂无精选内容'
    },

    // 推荐文章的展示卡片
    recommend: false,

    // 评论插件
    comment: {
        //github仓库地址
        repo: 'pandacli/pandacli.github.io',
        //该仓库的真实 ID
        repoId: 'R_kgDOQISmHQ',
        //Discussions 中已存在的分类名
        category: 'Announcements',
        //需与 category 对应（如 Announcements 分类的真实 ID，同样建议官网自动生成）
        categoryId: 'DIC_kwDOQISmHc4CxDFn',
        inputPosition: 'top'
    }
    //giscus 配置文件
//     <script src="https://giscus.app/client.js"
//         data-repo="pandacli/pandacli.github.io"
//         data-repo-id="R_kgDOQISmHQ"
//         data-category="General"
//         data-category-id="DIC_kwDOQISmHc4CxDFo"
//         data-mapping="pathname"
//         data-strict="0"
//         data-reactions-enabled="1"
//         data-emit-metadata="0"
//         data-input-position="bottom"
//         data-theme="preferred_color_scheme"
//         data-lang="zh-CN"
//         crossorigin="anonymous"
//         async>
// </script>
})

export {blogTheme}
