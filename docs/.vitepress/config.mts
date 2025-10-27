import { defineConfig } from "vitepress";
// 导入主题的配置
import { blogTheme } from "./blog-theme";
import { SponsorPlugin } from "vitepress-plugin-sponsor";

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 忽略死链
  ignoreDeadLinks: true,
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  // 仓库名
  //base: '/pandacli.github.io/',
  lang: "zh-cn",
  title: "Tech-Factory",
  description: "为学应尽毕生力，攀高须贵少年时",
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    //img来自与 vuepress 官网
    ["link", { rel: "icon", href: "img/favicon.svg" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-web/style.css",
      },
    ],
  ],
  themeConfig: {
    // 当md 存在  h2,h3 级标题，则展示在目录中
    outline: {
      level: [2, 3],
      label: "目录",
    },
    // 默认文案修改
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "相关文章",
    lastUpdated: {
      Text: "上次更新于",
    },
    // 设置logo
    logo: "/img/favicon.svg",
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    // 导航栏
    nav: [
      // { text: "力扣每日一题", link: "/LeetCode/" },
      // { text: "面试", link: "/interview-preparation/" },
      // { text: "Java", link: "/Java/" },
      // { text: "前端", link: "/frontend/" },
      // { text: "框架|中间件", link: "/middleware/" },
      // { text: "架构设计", link: "/framework/" },
      // { text: "数据库", link: "/DataBase/" },
      // { text: "开源项目", link: "/open-source-project/" },
      { text: "Android", link: "/android/" },
      { text: "工具", link: "/tools/" },
      { text: "生活随笔", link: "/Life/" },
    ],
    // 友链
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Pandacli",
      },
    ],
    // 侧边栏数组。所有文章的目录结构
    sidebar: {
      "/android/": [
        {
          text: "Android",
          collapsed: false,
          items: [
            {
              text: "",
              link: "",
            },
            {
              text: "",
              link: "",
            },
          ],
        },
      ],
      "/interview-preparation/": [
        {
          text: "面试宝典",
          collapsed: false,
          items: [
            {
              text: "",
            },
          ],
        },
      ],

      "/Life/": [{ text: "给自己的一封信", link: "/Life/给自己的一封信" }],
      // "/LeetCode/": [
      //   {
      //     text: "数组",
      //     collapsed: false, // 默认展开，true 为折叠
      //     items: [
      //       { text: "704.二分查找", link: "/LeetCode/704.二分查找" },
      //       { text: "35.搜索插入位置", link: "/LeetCode/35.搜索插入位置" },
      //       {
      //         text: "34.在排序数组中查找元素的第一个和最后一个位置",
      //         link: "/LeetCode/34.在排序数组中查找元素的第一个和最后一个位置",
      //       },
      //       { text: "69.x的平方根", link: "/LeetCode/69.x的平方根" },
      //       {
      //         text: "367.有效的完全平方数",
      //         link: "/LeetCode/367.有效的完全平方数",
      //       },
      //       { text: "27.移除元素", link: "/LeetCode/27.移除元素" },
      //       {
      //         text: "26.删除有序数据中的重复项",
      //         link: "/LeetCode/26.删除有序数据中的重复项",
      //       },
      //       {
      //         text: "80.删除有序数据中的重复项Ⅱ",
      //         link: "/LeetCode/80.删除有序数据中的重复项Ⅱ",
      //       },
      //       { text: "283.移动零", link: "/LeetCode/283.移动零" },
      //       {
      //         text: "844.比较含退格的字符串",
      //         link: "/LeetCode/844.比较含退格的字符串",
      //       },
      //       {
      //         text: "977.有序数组的平方",
      //         link: "/LeetCode/977.有序数组的平方",
      //       },
      //       {
      //         text: "3.无重复字符的最长子串",
      //         link: "/LeetCode/3.无重复字符的最长子串",
      //       },
      //       {
      //         text: "209.长度最小的子数组",
      //         link: "/LeetCode/209.长度最小的子数组",
      //       },
      //       { text: "904.水果成篮", link: "/LeetCode/904.水果成篮" },
      //       { text: "76.最小覆盖子串", link: "/LeetCode/76.最小覆盖子串" },
      //       { text: "59.螺旋矩阵Ⅱ", link: "/LeetCode/59.螺旋矩阵Ⅱ" },
      //       { text: "54.螺旋矩阵", link: "/LeetCode/54.螺旋矩阵" },
      //     ],
      //   },
      //   {
      //     text: "链表",
      //     collapsed: false,
      //     items: [
      //       { text: "203.移除链表元素", link: "/LeetCode/203.移除链表元素" },
      //       { text: "707.设计链表", link: "/LeetCode/707.设计链表" },
      //       { text: "206.反转链表", link: "/LeetCode/206.反转链表" },
      //       {
      //         text: "24.两两交换链表中的节点",
      //         link: "/LeetCode/24.两两交换链表中的节点",
      //       },
      //       {
      //         text: "19.删除链表的倒数第N个节点",
      //         link: "/LeetCode/19.删除链表的倒数第N个节点",
      //       },
      //       { text: "160.相交链表", link: "/LeetCode/160.相交链表" },
      //       { text: "142.环形链表Ⅱ", link: "/LeetCode/142.环形链表Ⅱ" },
      //       { text: "146.LRU缓存", link: "/LeetCode/146.LRU缓存" },
      //     ],
      //   },
      //   {
      //     text: "哈希表",
      //     collapsed: false,
      //     items: [
      //       {
      //         text: "242.有效的字母异位词",
      //         link: "/LeetCode/242.有效的字母异位词",
      //       },
      //       { text: "383.赎金信", link: "/LeetCode/383.赎金信" },
      //       { text: "49.字母异位词分组", link: "/LeetCode/49.字母异位词分组" },
      //       {
      //         text: "438.找到字符串中所有字母异位词",
      //         link: "/LeetCode/438.找到字符串中所有字母异位词",
      //       },
      //       {
      //         text: "349.两个数组的交集",
      //         link: "/LeetCode/349.两个数组的交集",
      //       },
      //       {
      //         text: "350.两个数组的交集Ⅱ",
      //         link: "/LeetCode/350.两个数组的交集Ⅱ",
      //       },
      //       { text: "202.快乐数", link: "/LeetCode/202.快乐数" },
      //       { text: "1.两数之和", link: "/LeetCode/1.两数之和" },
      //       { text: "454.四数相加Ⅱ", link: "/LeetCode/454.四数相加Ⅱ" },
      //       { text: "15.三数之和", link: "/LeetCode/15.三数之和" },
      //       { text: "18.四数之和", link: "/LeetCode/18.四数之和" },
      //     ],
      //   },
      //   {
      //     text: "字符串",
      //     collapsed: false,
      //     items: [
      //       { text: "344.反转字符串", link: "/LeetCode/344.反转字符串" },
      //       { text: "541.反转字符串Ⅱ", link: "/LeetCode/541.反转字符串Ⅱ" },
      //       {
      //         text: "剑指Offer-05.替换空格",
      //         link: "/LeetCode/剑指Offer-05.替换空格",
      //       },
      //       {
      //         text: "151.反转字符串中的单词",
      //         link: "/LeetCode/151.反转字符串中的单词",
      //       },
      //       {
      //         text: "剑指Offer-58-Ⅱ.左旋转字符串",
      //         link: "/LeetCode/剑指Offer-58-Ⅱ.左旋转字符串",
      //       },
      //       {
      //         text: "28.找出字符串中第一个匹配项的下标",
      //         link: "/LeetCode/28.找出字符串中第一个匹配项的下标",
      //       },
      //       {
      //         text: "459.重复的子字符串",
      //         link: "/LeetCode/459.重复的子字符串",
      //       },
      //     ],
      //   },
      //   {
      //     text: "栈与队列",
      //     collapsed: false,
      //     items: [
      //       { text: "232.用栈实现队列", link: "/LeetCode/232.用栈实现队列" },
      //       { text: "225.用队列实现栈", link: "/LeetCode/225.用队列实现栈" },
      //       { text: "71.简化路径", link: "/LeetCode/71.简化路径" },
      //       { text: "20.有效的括号", link: "/LeetCode/20.有效的括号" },
      //       {
      //         text: "1047.删除字符串中的所有相邻重复项",
      //         link: "/LeetCode/1047.删除字符串中的所有相邻重复项",
      //       },
      //       {
      //         text: "150.逆波兰表达式求值",
      //         link: "/LeetCode/150.逆波兰表达式求值",
      //       },
      //       { text: "155.最小栈", link: "/LeetCode/155.最小栈" },
      //       {
      //         text: "239.滑动窗口最大值",
      //         link: "/LeetCode/239.滑动窗口最大值",
      //       },
      //       { text: "347.前k个高频元素", link: "/LeetCode/347.前k个高频元素" },
      //     ],
      //   },
      //   {
      //     text: "二叉树",
      //     collapsed: false,
      //     items: [
      //       {
      //         text: "144.二叉树的前序遍历",
      //         link: "/LeetCode/144.二叉树的前序遍历",
      //       },
      //       {
      //         text: "145.二叉树的后序遍历",
      //         link: "/LeetCode/145.二叉树的后序遍历",
      //       },
      //       {
      //         text: "94.二叉树的中序遍历",
      //         link: "/LeetCode/94.二叉树的中序遍历",
      //       },
      //       {
      //         text: "102.二叉树的层序遍历",
      //         link: "/LeetCode/102.二叉树的层序遍历",
      //       },
      //       {
      //         text: "107.二叉树的层序遍历Ⅱ",
      //         link: "/LeetCode/107.二叉树的层序遍历Ⅱ",
      //       },
      //       {
      //         text: "199.二叉树的右视图",
      //         link: "/LeetCode/199.二叉树的右视图",
      //       },
      //       {
      //         text: "637.二叉树的层平均值",
      //         link: "/LeetCode/637.二叉树的层平均值",
      //       },
      //       {
      //         text: "429.N叉树的层序遍历",
      //         link: "/LeetCode/429.N叉树的层序遍历",
      //       },
      //       {
      //         text: "515.在每个树行中找最大值",
      //         link: "/LeetCode/515.在每个树行中找最大值",
      //       },
      //       {
      //         text: "117.填充每个节点的下一个右侧节点指针Ⅱ",
      //         link: "/LeetCode/117.填充每个节点的下一个右侧节点指针Ⅱ",
      //       },
      //       {
      //         text: "104.二叉树的最大深度",
      //         link: "/LeetCode/104.二叉树的最大深度",
      //       },
      //       {
      //         text: "559.N叉树的最大深度",
      //         link: "/LeetCode/559.N叉树的最大深度",
      //       },
      //       {
      //         text: "111.二叉树的最小深度",
      //         link: "/LeetCode/111.二叉树的最小深度",
      //       },
      //       { text: "226.翻转二叉树", link: "/LeetCode/226.翻转二叉树" },
      //       { text: "101.对称二叉树", link: "/LeetCode/101.对称二叉树" },
      //       { text: "100.相同的树", link: "/LeetCode/100.相同的树" },
      //       {
      //         text: "572.另一棵树的子树",
      //         link: "/LeetCode/572.另一棵树的子树",
      //       },
      //       {
      //         text: "222.完全二叉树的节点个数",
      //         link: "/LeetCode/222.完全二叉树的节点个数",
      //       },
      //       { text: "110.平衡二叉树", link: "/LeetCode/110.平衡二叉树" },
      //       {
      //         text: "257.二叉树的所有路径",
      //         link: "/LeetCode/257.二叉树的所有路径",
      //       },
      //       { text: "404.左叶子之和", link: "/LeetCode/404.左叶子之和" },
      //       {
      //         text: "513.找树左下角的值",
      //         link: "/LeetCode/513.找树左下角的值",
      //       },
      //       { text: "112.路径总和", link: "/LeetCode/112.路径总和" },
      //       { text: "113.路径总和Ⅱ", link: "/LeetCode/113.路径总和Ⅱ" },
      //       {
      //         text: "106.从中序和后序遍历序列构造二叉树",
      //         link: "/LeetCode/106.从中序和后序遍历序列构造二叉树",
      //       },
      //       { text: "654.最大二叉树", link: "/LeetCode/654.最大二叉树" },
      //       { text: "617.合并二叉树", link: "/LeetCode/617.合并二叉树" },
      //       {
      //         text: "700.二叉搜索树中的搜索",
      //         link: "/LeetCode/700.二叉搜索树中的搜索",
      //       },
      //       { text: "98.验证二叉搜索树", link: "/LeetCode/98.验证二叉搜索树" },
      //       {
      //         text: "530.二叉搜索树的最小绝对差",
      //         link: "/LeetCode/530.二叉搜索树的最小绝对差",
      //       },
      //       {
      //         text: "501.二叉搜索树中的众数",
      //         link: "/LeetCode/501.二叉搜索树中的众数",
      //       },
      //       {
      //         text: "236.二叉树的最近公共祖先",
      //         link: "/LeetCode/236.二叉树的最近公共祖先",
      //       },
      //     ],
      //   },
      // ],
      // "/Java/": [
      //   {
      //     text: "Java基础",
      //     collapsed: false,
      //     items: [
      //       { text: "Java 正则表达式", link: "/Java/basic/Java 正则表达式" },
      //       { text: "Java 泛型", link: "/Java/basic/Java 泛型" },
      //       {
      //         text: "Java中为什么使用向上转型而不直接创建子类对象",
      //         link: "/Java/basic/Java中为什么使用向上转型而不直接创建子类对象",
      //       },
      //       {
      //         text: "Java中实现POJO类的序列化",
      //         link: "/Java/basic/Java中实现POJO类的序列化",
      //       },
      //       {
      //         text: "Java的注解与反射机制",
      //         link: "/Java/basic/Java的注解与反射机制",
      //       },
      //       { text: "JDBC各个类的详解", link: "/Java/basic/JDBC各个类的详解" },
      //     ],
      //   },
      //   {
      //     text: "Java 集合",
      //     collapsed: false,
      //     items: [
      //       {
      //         text: "Java集合框架综述",
      //         link: "/Java/collection/Java集合框架综述",
      //       },
      //       { text: "Java 集合", link: "/Java/collection/Java集合框架综述" },
      //       {
      //         text: "Java 双端队列 Deque",
      //         link: "/Java/collection/Java 双端队列 Deque",
      //       },
      //     ],
      //   },
      //   {
      //     text: "Java集合框架",
      //     collapsed: false,
      //     items: [
      //       {
      //         text: "Java BufferedReader流",
      //         link: "/Java/io/Java BufferedReader流",
      //       },
      //       { text: "Java IO", link: "/Java/io/Java IO" },
      //       { text: "Java Optional类", link: "/Java/io/Java Optional类" },
      //       { text: "Java Stream", link: "/Java/io/Java Stream" },
      //     ],
      //   },
      //   {
      //     text: "Java多线程与并发",
      //     collapsed: false,
      //     items: [{ text: "初识多线程", link: "/Java/concurrent/初识多线程" }],
      //   },
      //   {
      //     text: "Java IO/NIO/AIO",
      //     collapsed: false,
      //     items: [
      //       { text: "xml总结", link: "/Java/JavaWeb/xml总结" },
      //       { text: "Web概述", link: "/Java/JavaWeb/Web概述" },
      //       { text: "HTTP协议", link: "/Java/JavaWeb/HTTP协议" },
      //       { text: "会话技术", link: "/Java/JavaWeb/会话技术" },
      //     ],
      //   },
      //   {
      //     text: "jvm",
      //     collapsed: false,
      //     items: [
      //       { text: "JVM概述", link: "/Java/jvm/JVM概述" },
      //       { text: "JVM内存结构", link: "/Java/jvm/JVM内存结构" },
      //       { text: "JVM垃圾回收", link: "/Java/jvm/JVM垃圾回收" },
      //       { text: "JVM性能优化", link: "/Java/jvm/JVM性能优化" },
      //     ],
      //   },
      // ],
      // "/database/": [
      //   {
      //     text: "mysql",
      //     collapsed: false,
      //     items: [
      //       { text: "初识MySQL", link: "/database/mysql/初识MySQL" },
      //       { text: "数据库操作", link: "/database/mysql/数据库操作" },
      //       { text: "DML语言", link: "/database/mysql/DML语言" },
      //       {
      //         text: "数据库中为什么不推荐使用外键约束",
      //         link: "/database/mysql/数据库中为什么不推荐使用外键约束",
      //       },
      //       {
      //         text: "使用DQL查询数据",
      //         link: "/database/mysql/使用DQL查询数据",
      //       },
      //       {
      //         text: "MySQL中的关联查询（内连接、外连接、自连接）",
      //         link: "/database/mysql/MySQL中的关联查询（内连接、外连接、自连接）",
      //       },
      //       {
      //         text: "连接查询时on与where的区别",
      //         link: "/database/mysql/连接查询时on与where的区别",
      //       },
      //       { text: "MySQL函数", link: "/database/mysql/MySQL函数" },
      //       {
      //         text: "sql语句的执行顺序",
      //         link: "/database/mysql/sql语句的执行顺序",
      //       },
      //       { text: "事务和索引", link: "/database/mysql/事务和索引" },
      //       {
      //         text: "权限及如何设计数据库",
      //         link: "/database/mysql/权限及如何设计数据库",
      //       },
      //       {
      //         text: "MySQL数据库设计规范",
      //         link: "/database/mysql/MySQL数据库设计规范",
      //       },
      //       { text: "MySQL主从复制", link: "/database/mysql/MySQL主从复制" },
      //       {
      //         text: "一文详解数据库连接池",
      //         link: "/database/mysql/一文详解数据库连接池",
      //       },
      //     ],
      //   },
      //   {
      //     text: "redis",
      //     collapsed: false,
      //     items: [],
      //   },
      //   { text: "elasticsearch", collapsed: false, items: [] },
      //   { text: "mongodb", collapsed: false, items: [] },
      // ],
      "/tools/": [
        {
          text: "Linux",
          collapsed: false,
          items: [
            {
              text: "Linux 概述及环境搭建",
              link: "/tools/Linux/Linux概述及环境搭建",
            },
            {
              text: "Linux 常用的基本命令",
              link: "/tools/Linux/Linux常用的基本命令",
            },
            {
              text: "Vim 使用及账号用户管理",
              link: "/tools/Linux/Vim使用及账号用户管理",
            },
            {
              text: "三种软件安装方式及服务器基本环境搭建",
              link: "/tools/Linux/三种软件安装方式及服务器基本环境搭建",
            },
          ],
        },
      ],
    },
  },
  vite: {
    plugins: [
      // 打赏插件
      SponsorPlugin({
        /**
         * 打赏模块样式
         */
        type: "simple",
        aliPayQR: "https://bu.dusays.com/2025/10/25/68fc709d66256.jpg",
        weChatQR: "https://bu.dusays.com/2025/10/25/68fc709d6621d.jpg",
      }),
    ],
  },
});
