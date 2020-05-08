# hexo-theme-oranges
A simple hexo-theme of minimalism

### 安装
在hexo博客项目根目录下执行，会将`oranges`主题clone至`themes`文件夹下
```bash
git clone https://github.com/zchengsite/hexo-theme-oranges.git themes/oranges
```

### 启用
在hexo博客项目根目录下找到`_config.yml`文件，修改其中`theme`字段为主题名`oranges`
```
theme: oranges
```

### 配置

#### 启用`标签`页
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

---

#### 启用`朋友`页
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

---

#### 启用`关于我`页
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

---

#### 启用`分类`页
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

---

#### 启用`文章目录`功能
主题配置文件`_config.yml`下`catalog`修改`enable`为`true`，如不想展示，设置为`false`即可
```
catalog:
  enable: true
```

### 优化与更新
主题目前功能并不多，后续根据需求考虑更新迭代。
- [x] 自定义导航，可灵活配置自己想要的导航✔
- [x] toc文章目录展示✔
- [x] Fancybox，支持文章内图片友好浏览✔
- [x] 回到页面顶部`[2020.5.4]`✔
- [x] RSS Feed`[2020.5.7]`✔
- [ ] 文章页末增加next post & Previous Post
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

### 写在最后

如遇问题请提交Issue反馈，看到会第一时间解答

如果觉得主题还不错，请点击Star支持下

### License

MIT
