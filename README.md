# hexo-theme-oranges
A simple hexo-theme of minimalism

## Installation

在hexo博客项目根目录下执行，会将`oranges`主题clone至`themes`文件夹下

```bash
git clone https://github.com/zchengsite/hexo-theme-oranges.git themes/oranges
```

## Usage

在hexo博客项目根目录下找到`_config.yml`文件，修改其中`theme`字段为主题名`oranges`

```yml _config.yml
theme: oranges
```

## configuration

<details>
  <summary><b>Tags page</b> (click to show)</summary>

在hexo博客项目根目录下执行，在`source`文件夹下生成`tags`文件夹

```bash
hexo new page tags
```

接着修改`tags`文件夹下`index`为以下内容

```
---
title: tags
date: 2019-05-03 12:03:35
type: "tags"
categories:
tags:
---
```

并在主题配置文件`_config.yml`修改对应`enable`为`true`，如不想展示，设置为`false`即可

```
navbar:
  -
    name: 标签
    enable: true
    path: /tags/
```

</details>

<details>
  <summary><b>Friends page</b> (click to show)</summary>

在hexo博客项目根目录下执行，在`source`文件夹下生成`friends`文件夹

```bash
hexo new page friends
```

接着修改`friends`文件夹下`index`为以下内容

```
---
title: tags
date: 2019-05-03 12:03:35
type: "friends"
categories:
tags:
---
```

并在主题配置文件`_config.yml`修改对应`enable`为`true`，如不想展示，设置为`false`即可

```
navbar:
  -
    name: 朋友
    enable: true
    path: /friends/
```
</details>

<details>
  <summary><b>About me page</b> (click to show)</summary>

在hexo博客项目根目录下执行，在`source`文件夹下生成`about`文件夹

```bash
hexo new page about
```

接着修改`about`文件夹下`index`为以下内容

```
---
title: tags
date: 2019-05-03 12:03:35
type: "about"
categories:
tags:
---
```

并在主题配置文件`_config.yml`修改对应`enable`为`true`，如不想展示，设置为`false`即可

```
navbar:
  -
    name: 关于我
    enable: true
    path: /about/
```

</details>

<details>
  <summary><b>Categories page</b> (click to show)</summary>

在hexo博客项目根目录下执行，在`source`文件夹下生成`categories`文件夹

```bash
hexo new page categories
```

接着修改`categories`文件夹下`index`为以下内容

```
---
title: tags
date: 2019-05-03 12:03:35
type: "categories"
categories:
tags:
---
```

并在主题配置文件`_config.yml`修改对应`enable`为`true`，如不想展示，设置为`false`即可

```
navbar:
  -
    name: 分类
    enable: true
    path: /categories/
```

</details>

<details>
  <summary><b>Catalog(目录)</b> (click to show)</summary>

主题配置文件`_config.yml`下`catalog`修改`enable`为`true`，如不想展示，设置为`false`即可

```
catalog:
  enable: true
```

</details>

<details>
  <summary><b>RSS</b> (click to show)</summary>

1.安装`hexo-generator-feed`[官方插件](https://github.com/hexojs/hexo-generator-feed)

```shell
npm install hexo-generator-feed --save
```

2.在博客项目配置文件`_config.yml`(非主题配置文件)增加:

```
feed:
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content:
  content_limit: 140
  content_limit_delim: ' '
  order_by: -date
  icon: icon.png
  autodiscovery: true
  template:
```

3.开启rss按钮
在主题配置文件`_config.yml`增加页脚项:

```
footer:
  social:
    -
      name: rss
      icon: rss
      path: atom.xml
```

</details>

<details>
  <summary><b>Comment(评论系统)</b> (click to show)</summary>

1.确保主题配置文件`_config.yml`下`comments`->`enable: true`

2.目前支持以下几种评论插件
  - [valine](https://valine.js.org/quickstart.html)
  - [gitalk](https://github.com/gitalk/gitalk#usage)
  - [disqus](https://disqus.com)(需科学上网)

3.如需使用，修改相应评论下`enable: true`

4.查看评论插件官方教程获取相应的字段填入即可使用

以`valine`为例，注册`valine`并获取`appId`&`appKey`填入即可使用
```
comments:
  enable: true
  valine:
    # https://valine.js.org/quickstart.html#%E8%8E%B7%E5%8F%96APP-ID-%E5%92%8C-APP-Key
    enable: true
    appId: xxxxxxxx
    appKey: xxxxxxxxx
    placeholder: welcome!
    avatar: retro
```

</details>

<details>
  <summary><b>Google Analytics</b> (click to show)</summary>

[Google Analytics](https://analytics.google.com)
注册Google分析账号，在管理/创建媒体资源/选择网站/填写相关信息后得到跟踪Id，一般格式为UA-xxxxxxx-x
如之前已有注册账号，在管理/跟踪信息/跟踪代码/找到跟踪ID，一般格式为UA-xxxxxxx-x

```
gtag:
  enable: true
  gtagkey: UA-xxxxxxx-x
```

</details>

<details>
  <summary><b>PREV & NEXT</b> (click to show)</summary>

文章末尾的上一篇与下一篇功能。
```
prevnext:
  enable: true
```

</details>

## To Do List
主题目前功能并不多，后续根据需求考虑更新迭代。
- [x] 自定义导航，可灵活配置自己想要的导航✔
- [x] toc文章目录展示✔
  - [x] 优化超出屏幕部分滚动显示，并自动跟随文章内容滚动`[2020.5.24]`✔
- [x] Fancybox，支持文章内图片友好浏览✔
- [x] 回到页面顶部`[2020.5.4]`✔
- [x] RSS Feed`[2020.5.7]`✔
- [x] 文章页末增加NEXT & PREV`[2020.5.10]`✔
- [x] 文章标题锚点`[2020.5.3]`✔
- [x] 评论系统`[2020.5.7]`✔
- [ ] 分享功能
- [ ] 文章字数统计
- [ ] 页面访问量统计
- [x] Google分析`[2020.5.8]`✔
- [ ] 文章加密
- [ ] 文章置顶
- [ ] 全文搜索功能
- [ ] 主题配色切换
- [x] 页面平滑滚动`[2020.5.4]`✔
- [x] 目录激活&跟随`[2020.5.4]`✔
- [ ] 主题样式可自定义配置

## End

有问题请提交Issue，欢迎Fork。

如果觉得主题还不错，请点击Star支持下

## License

MIT
