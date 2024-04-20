# WebCV

[cv.skywt.cn](https://cv.skywt.cn/)

基于 Astro.js 的 Web 简历生成与管理系统。

## 为什么写这个？

要制作自己自定义的简历，有很多种方式：最简单的是直接用 Microsoft Word 编辑；也可以用 Markdown 写好简历再应用模板；更高端的方式是用 LaTeX 或者 Typest 这样的工具编译生成简历；甚至可以用 Figma 来进行精细的制作。

最开始我打算用 LaTeX 编写简历，但是看到了关于 Typest 的安利，便想尝试一下 Typest。然而这一套新的语法和 LaTeX 一样上手门槛高，劝退了我。仔细想想，本质上这些都是**描述简历的语言**而已。那么，作为一名前端开发者，我最熟悉的「语言」是什么呢？答案当然是 Web 的技术栈。

于是选用了 Astro、Tailwind 这一套技术栈制作了这个简历系统。

## 使用说明

### 简历结构

每一份简历分为一个 header 和若干 sections。

Header 部分显示个人信息，包括姓名、电话、邮箱、照片等。

每个 section 是简历的一个板块，包含标题（如「教育经历」）和若干元素，可以是以下四种类型的元素：

- School：一段教育经历。
- Project：一个项目经历。
- Item：一行加粗的标题。
- Bullet：一个无序列表中的项目。

### 简历配置

对一份简历的描述称为一个「配置文件」，是一个 YAML 格式的文件，在项目的 `src/content/cv/` 目录下。

例如，在该目录下放置 `example.yml` 文件，则部署网站后访问 `/example` 即可查看该简历。

配置文件示例可见 [example.yml](./src/content/cv/example.yml) 文件。

- 配置文件中文本内容中的 HTML 标签会被解析。可以使用 `<b></b>` 加粗。
- 项目集成了 [tabler icons](https://tabler.io/icons) 图标库，可以使用诸如 `<i class="ti ti-brand-tabler"></i>` 的标签插入图标。需要注意的是：tabler 图标库中带边框的图标整体风格圆润，和简历 serif 字体的严肃风格不是很搭配，需谨慎使用。我选择这个图标库的原因是其包含大量前端框架的图标。

### 打印为 PDF

推荐使用 Firefox 的打印功能打印为 PDF 文件。

如果使用 Chrome 打印，页面大小可能不正常。如果使用 Safari 则不支持楷体。
