English | [简体中文](https://github.com/zchengsite/hexo-theme-oranges/blob/master/README-zh.md)

# hexo-theme-oranges

> A simple hexo theme

[demo](https://hexo.theme.oranges.zcheng.site/)

## Installation

```bash
$ git clone https://github.com/zchengsite/hexo-theme-oranges.git themes/oranges
```

## Usage

Edit the `theme` field in the `_config.yml` file under the project root:

```yml
theme: oranges
```

## configuration

<details>
  <summary><b>tags page</b> (click to show)</summary>

  To add `tags page`:

  ```bash
  $ hexo new page tags
  ```

  Generate `tags` folder, edit the `index.md` file, make sure that `type` field is `tags`:

  ```markdown
  ---
  title: tags
  date: 2019-05-03 12:03:35
  type: "tags"
  ---
  ```

  Enable `tags` in the theme `_config.yml` file:

  ```yml
  navbar:
    -
      name: tags
      enable: true
      path: /tags/
  ```

</details>

<details>
  <summary><b>categories page</b> (click to show)</summary>

  To add `categories page`:

  ```bash
  $ hexo new page categories
  ```

  Generate `categories` folder, edit the `index.md` file, make sure that `type` field is `categories`:

  ```markdown
  ---
  title: categories
  date: 2019-05-03 12:03:35
  type: "categories"
  ---
  ```

  Enable `categories` in the theme `_config.yml` file:

  ```yml
  navbar:
    -
      name: categories
      enable: true
      path: /categories/
  ```

</details>

<details>
  <summary><b>friends page</b> (click to show)</summary>

  To add `friends page`:

  ```bash
  $ hexo new page friends
  ```

  Generate `friends` folder, edit the `index.md` file, make sure that `type` field is `friends`:

  ```markdown
  ---
  title: friends
  date: 2019-05-03 12:03:35
  type: "friends"
  ---
  ```

  Enable `friends` in the theme `_config.yml` file:

  ```yml
  navbar:
    -
      name: friends
      enable: true
      path: /friends/
  ```

</details>

<details>
  <summary><b>about page</b> (click to show)</summary>

  To add `about page`:

  ```bash
  $ hexo new page about
  ```

  Generate `about` folder, edit the `index.md` file, make sure that `type` field is `about`:

  ```markdown
  ---
  title: about
  date: 2019-05-03 12:03:35
  type: "about"
  ---
  ```

  Enable `about` in the theme `_config.yml` file:

  ```yml
  navbar:
    -
      name: about
      enable: true
      path: /about/
  ```

</details>

<details>
  <summary><b>catalog(contents)</b> (click to show)</summary>

  Enable `catalog` in the theme `_config.yml` file:

  ```yml
  catalog:
    enable: true
  ```

</details>

<details>
  <summary><b>RSS</b> (click to show)</summary>

  Install the `hexo-generator-feed` [plugin](https://github.com/hexojs/hexo-generator-feed):

  ```bash
  $ npm install hexo-generator-feed --save
  ```

  add or edit configuration in your root `_config.yml`:

  ```yml
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

  Display the RSS button on the page(currently only display in footer is supported):

  ```yml
  footer:
    social:
      -
        name: rss
        icon: rss
        path: atom.xml
  ```

</details>

<details>
  <summary><b>Comments</b> (click to show)</summary>

  supported:

  - [valine](https://valine.js.org/quickstart.html)
  - [gitalk](https://github.com/gitalk/gitalk#usage)
  - [disqus](https://disqus.com)

  First, Enable `Comments` in the theme `_config.yml` file:

  ```yml
  comments:
    enable: true
  ```

  Then, select a comment system to use, take [valine](https://valine.js.org/quickstart.html) for example:

  View the official tutorial to get the `appId` & `appKey`:

  ```yml
  valine:
    enable: true
    appId: j73OlR7xxxxxPDrO-gzGzoHsz
    appKey: mhyUfuxxxxk41wc25
    placeholder: welcome!
    avatar: retro
  ```

</details>

<details>
  <summary><b>Google Analytics</b> (click to show)</summary>

  First, view [Google Analytics](https://analytics.google.com) to get the `gtagkey`:

  Then, enable `gtag` in the theme `_config.yml` file:

  ```yml
  gtag:
    enable: true
    gtagkey: UA-xxxxxxx-x
  ```

</details>

<details>
  <summary><b>PREV & NEXT</b> (click to show)</summary>

  enable `prevnext` in the theme `_config.yml` file:

  ```yml
  prevnext:
    enable: true
  ```

</details>

<details>
  <summary><b>lazy image loading</b> (click to show)</summary>

  Install the [hexo-lazyload-image](https://github.com/Troy-Yang/hexo-lazyload-image) plugin:

  ```bash
  $ npm install hexo-lazyload-image --save
  ```

  add or edit configuration in your root `_config.yml`:

  ```yml
  lazyload:
    enable: true
    onlypost: false # optional
    loadingImg: # optional eg ./images/loading.gif
    isSPA: false # optional
  ```

  more [hexo-lazyload-image](https://github.com/Troy-Yang/hexo-lazyload-image)

</details>

<details>
  <summary><b>search</b> (click to show)</summary>

  Install [hexo-generator-search](https://github.com/wzpan/hexo-generator-search) plugin:

  ```bash
  $ npm install hexo-generator-search --save
  ```

  add or edit configuration in your root `_config.yml`:

  ```yml
  search:
    path: search.xml
    field: post
    content: true
  ```

  more [hexo-generator-search](https://github.com/wzpan/hexo-generator-search)

  edit configuration in the theme `_config.yml`

  ```yml
    search:
      enable: true
      placeholder: 搜索...
  ```

</details>

<details>
  <summary><b>pinned posts</b> (click to show)</summary>

  Remove default `hexo-generator-index` and Install the [hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top) plugin:

  ```bash
  $ npm uninstall hexo-generator-index --save
  $ npm install hexo-generator-index-pin-top --save
  ```

  add or edit configuration in your root `_config.yml`:

  ```yml
  index_generator:
    path: ''
    per_page: 10
    order_by: -date
  ```

  more [hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top)

  Add `top: true` to the top of the post you want

  ```markdown
    ---
    title: Hello World
    date: 2020-03-11 14:19:04
    top: true
    tags:
    - Welcome
    categories:
    - [Welcome, 欢迎]
    ---
  ```

</details>

## To Do List

- [x] Custom navigation✔
- [x] post directories✔
  - [x] the directory follows the article scroll`[2020.5.24]`✔
- [x] Fancybox✔
- [x] back to top`[2020.5.4]`✔
- [x] RSS Feed`[2020.5.7]`✔
- [x] NEXT & PREV`[2020.5.10]`✔
- [x] H1 - h6 anchor`[2020.5.3]`✔
- [x] comments`[2020.5.7]`✔
- [ ] share
- [ ] word count
- [ ] traffic statistics
- [x] Google Analytics`[2020.5.8]`✔
- [ ] post encryption
- [x] pinned posts`[2020.9.1]`✔
- [x] search`[2020.8.23]`✔
- [ ] dark mode
- [x] smooth scrolling`[2020.5.4]`✔
- [ ] theme styles are customizable

## End

If you have any questions, please submit the Issue. Fork is welcome.

🍻

## License

MIT
