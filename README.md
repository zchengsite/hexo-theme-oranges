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

### 写在最后

如遇问题请提交Issue反馈，看到会第一时间解答

如果觉得主题还不错，请点击Star支持下

### License

MIT
