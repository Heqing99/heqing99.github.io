# Qing He Academic Website

This is the Quarto source for Qing He's academic profile website.

## Recommended GitHub Pages URL

For the shortest default GitHub Pages address, create a public repository named exactly:

`YOUR_GITHUB_USERNAME.github.io`

The site will then be available at:

`https://YOUR_GITHUB_USERNAME.github.io/`

If you instead use a normal repository name such as `qing-he`, the address will be:

`https://YOUR_GITHUB_USERNAME.github.io/qing-he/`

## Publish

1. Create the GitHub repository and upload/push all files in this folder to the `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push a commit to `main` (or run the workflow manually from the **Actions** tab).
5. The included workflow renders the Quarto project and deploys `_site` automatically.

## Edit locally

With Quarto installed:

```bash
quarto preview
```

To build once:

```bash
quarto render
```

Main files:

- `index.qmd` — page content
- `styles.css` — visual styling
- `site.js` — navigation and News rendering
- `images/` — portrait and News photos
- `_quarto.yml` — Quarto project settings
- `.github/workflows/pages.yml` — automatic GitHub Pages deployment
