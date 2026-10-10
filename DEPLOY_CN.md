# Qing He Academic Website：GitHub Pages + Quarto 部署

## 推荐方案：最简洁网址

如果你的 GitHub 用户名是 `YOUR_GITHUB_USERNAME`，请新建一个 **Public** 仓库，仓库名必须完全是：

`YOUR_GITHUB_USERNAME.github.io`

这样最终网址就是：

`https://YOUR_GITHUB_USERNAME.github.io/`

如果仓库名使用 `qing-he`，则网址会变成：

`https://YOUR_GITHUB_USERNAME.github.io/qing-he/`

## 第一次发布

1. 登录 GitHub，新建一个 Public repository。
2. 如果想要最短网址，把仓库命名为 `YOUR_GITHUB_USERNAME.github.io`。
3. 将本项目压缩包解压后的所有文件上传到仓库根目录。
4. 确认默认分支为 `main`。
5. 打开仓库 **Settings → Pages**。
6. 在 **Build and deployment → Source** 选择 **GitHub Actions**。
7. 打开 **Actions** 页面，等待 `Deploy Quarto site to GitHub Pages` 工作流完成。
8. 回到 **Settings → Pages**，即可看到公开网址。

以后修改网页，只要把修改后的文件 push 到 `main`，GitHub Actions 会自动重新运行 Quarto 并更新网页。

## 本地预览

安装 Quarto 后：

```bash
quarto preview
```

构建网站：

```bash
quarto render
```

生成结果位于 `_site/`。

## 项目结构

- `index.qmd`：页面主体
- `styles.css`：视觉样式
- `site.js`：导航、News 数据与交互
- `images/`：个人照片与 News 照片
- `_quarto.yml`：Quarto 配置
- `_template.html`：保持现有页面样式的 HTML 模板
- `.github/workflows/pages.yml`：GitHub Pages 自动部署

## 后续绑定自己的域名

以后如果购买域名，可以在 GitHub 仓库的 **Settings → Pages → Custom domain** 中继续绑定。
