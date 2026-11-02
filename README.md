# mbaranr.github.io

My personal site: plain HTML and one stylesheet. No frameworks, no JavaScript, no build step.
Edit a file, commit, push.

## Layout

```
index.html                  homepage (bio, post list, publications, contact)
feed.xml                    Atom/RSS feed of posts (update by hand)
blog/index.html             list of all posts
blog/YYYY/slug/index.html   one folder per post  ->  /blog/YYYY/slug/
publications/index.html     publications
style.css                   the only stylesheet (light/dark follows the system)
assets/img/                 images
assets/pdf/Resume.pdf       resume (linked from the nav)
404.html                    not-found page
cv/, books/, projects/      redirects from old URLs
```

## Preview locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. Any static file server works.

## Add a post

1. Copy an existing post folder, e.g. `blog/2024/c4_search/` to `blog/2026/my-post/`.
2. In the copied `index.html`, change:
   - the `<title>` and the description `<meta>`,
   - the `og:` tags (title, description, `og:url`, and `og:image`, the picture shown when the
     link is shared; use the post's main image, or `/assets/img/prof_pic.jpg`),
   - the `subject=` of the "Reply by email" link,
   - the `<h1>`, the "Published" line, and everything between the `.meta` paragraph and the reply link.
3. Add a line to the post lists in **both** `index.html` and `blog/index.html` (newest first):

   ```html
   <li><span class="date">2026-11-02</span><a href="/blog/2026/my-post/">My post</a></li>
   ```

4. Add an `<entry>` at the top of `feed.xml` (copy the one below it) and update the feed's
   `<updated>` date. This is what RSS readers pick up.
5. Bump the "Updated" date in the footers if you like.

## Add images to a post

Put the files in `assets/img/posts/<post-name>/`, then in the post:

```html
<!-- one image -->
<img src="/assets/img/posts/my-post/plot.png" alt="What the plot shows">

<!-- several side by side, with a caption -->
<div class="fig-row">
  <div class="fig-col"><img src="/assets/img/posts/my-post/a.png" alt=""></div>
  <div class="fig-col"><img src="/assets/img/posts/my-post/b.png" alt=""></div>
</div>
<div class="caption">Left: training loss. Right: validation loss.</div>
```

Before adding an image, keep it small: the column is 600px wide, so 1200px wide is plenty, and
aim for under ~300 KB. With ImageMagick (`brew install imagemagick`):

```sh
magick in.png -resize '1200x>' -strip out.png                 # plots, diagrams, screenshots
magick in.jpg -resize '1200x>' -strip -quality 82 out.jpg     # photos (save photos as .jpg, not .png)
```

Images scale down to the column width automatically. Wrap one in
`<div style="max-width: 400px; margin: 0 auto;">…</div>` to keep it smaller.

## Add a publication

Publications use APA style, newest first, with my name in bold. Add the same `<li>` to the
`<ul class="pubs">` list in both `index.html` and `publications/index.html`. Notes such as awards
go only on the Publications page, after the DOI link:
`<br><span class="pubnote">EASST Best Paper Award.</span>`

```html
<li><b>Barandiaran, M.</b>, &amp; Coauthor, A. (2026). Title in sentence case. <i>Journal Name</i>, <i>12</i>(3), 1&ndash;20. <a href="https://doi.org/...">https://doi.org/...</a></li>
```

## Math

Write math as MathML, which browsers render natively, e.g. `<math><mi>x</mi><mo>=</mo><mn>4</mn></math>`.
The Connect X post has examples. For anything complex, convert LaTeX to MathML once
(for example with [Temml](https://temml.org)) and paste the result.

## Deploy

GitHub Pages serves the `main` branch root (Settings → Pages → Deploy from a branch → `main` / `/ (root)`).
The `.nojekyll` file tells Pages to serve the files as-is.
