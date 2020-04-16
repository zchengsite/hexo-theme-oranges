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
