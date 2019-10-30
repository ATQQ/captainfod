export default {
  /**
   * ========================================
   *               站点功能【必需】
   * ========================================
   **/

  /**
   * 站点标题
   */
  title: "MiyueSC Official Blog",
  subTitle: "梦醒时分，月当此时明",
  /**
   * Github Issues 配置【文章、说说、书单、友链】
   */
  username: "miyuesc", // github 用户名
  repository: "blog", // 文章仓库地址
  // token 从中间任意位置拆开成两部分，避免 github 代码检测失效
  token: ["e6bbd6cc7b7cce7711a", "a2ba146c9cbdbbfe636a9"],

  /**
   * Gitalk 配置【评论功能】，详细文档参见：https://github.com/gitalk/gitalk
   */
  gitalk: {
    clientID: "5ffcd58b882375d2463d", // GitHub Application Client ID
    clientSecret: "4881f261812591faa56d90eb5626d79f3cd5182b", // GitHub Application Client Secret
    repo: "miyuesc.github.io", // 存放评论的仓库
    owner: "miyuesc", // 仓库的创建者，
    admin: ["miyuesc"], // 如果仓库有多个人可以操作，那么在这里以数组形式写出
    distractionFreeMode: true // 是否开始无干扰模式【背景遮罩】
  },

  /**
   * leanCloud 配置 【文章浏览次数】
   */
  leanCloud: {
    appId: "WjYf487MObMry0cHSYl81Go4-gzGzoHsz",
    appKey: "NNN0MuqGdFH1CLzJRgeU0amH"
  },

  /**
   * 导航 配置
   */
  menus: [
    {
      path: "/about",
      label: "About",
      icon: require("../components/SvgIcons/icons/icon_warn.svg")
    },
    {
      path: "/link",
      label: "Friend",
      icon: require("../components/SvgIcons/icons/icon_link.svg")
    },
    {
      path: "/archive",
      label: "Archive",
      icon: require("../components/SvgIcons/icons/icon_timeline.svg")
    },
    {
      path: "/blog",
      label: "Blog",
      icon: require("../components/SvgIcons/icons/icon_file.svg")
    },
    {
      path: "/home",
      label: "Home",
      icon: require("../components/SvgIcons/icons/icon_homepage.svg")
    }
    // {
    //   path: "/tag",
    //   label: "Tag",
    //   require("../assets/SvgIcons/icon_synergy.svg")
    // },
  ],

  /**
   * 首页背景图片 配置
   */
  homeBgs: [
    "http://ww1.sinaimg.cn/large/0067sbCSly1g4df43b60jj31hc0u0qhw.jpg",
    "http://ww1.sinaimg.cn/large/0067sbCSly1g4df1yby5mj31z4140avg.jpg",
    "http://ww1.sinaimg.cn/large/0067sbCSly1g4df4n9p9bj31hc0u045a.jpg",
    "http://ww1.sinaimg.cn/large/0067sbCSly1g4df5cdoujj31hc0u04qq.jpg",
    "http://ww1.sinaimg.cn/large/0067sbCSly1g4df5hfmnuj31hc0u011f.jpg"
  ],

  /**
   * 联系方式 配置
   */
  contact: [
    {
      icon: require("../components/SvgIcons/icons/mail-send-fill.svg"),
      link: "http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=P0dWUQYKDw1-WVBHUl5WUxFcUFI"
    },
    {
      icon: require("../components/SvgIcons/icons/github-fill.svg"),
      link: "https://github.com/miyuesc"
    },
    {
      icon: require("../components/SvgIcons/icons/zhihu-fill.svg"),
      link: "https://www.zhihu.com/people/miyuesc/activities"
    },
    {
      icon: require("../components/SvgIcons/icons/netease-cloud-music-fill.svg"),
      link: "https://music.163.com/m/user/home?id=256780134"
    },
    {
      icon: require("../components/SvgIcons/icons/wechat-fill.svg"),
      code: "http://ww1.sinaimg.cn/large/0067sbCSly1g4gtiwmudnj30gm0gr0uk.jpg"
    },
    {
      icon: require("../components/SvgIcons/icons/juejin.svg"),
      link: "https://juejin.im/user/5cdb5ff5f265da03904c3980"
    }
  ]
};
