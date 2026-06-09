---
title: "Hello, World"
date: 2026-06-09
description: "First post."
tags: ["meta"]
---

This is the first post. Edit this file at `src/content/blog/hello-world.md`, or add new posts by dropping `.md` files in the same folder.

## Writing posts

Each post starts with frontmatter (the `---` block at the top):

```yaml
---
title: "Your title"
date: 2026-06-10
description: "Optional one-liner shown in post lists."
tags: ["optional", "tags"]
---
```

Everything after that is standard Markdown.

## Images

Drop images in `public/` and reference them with a root-relative path:

```md
![Alt text](/my-photo.jpg)
```

## Data visualizations

Rename any post file from `.md` to `.mdx` to use components, then:

```mdx
import Chart from '../../components/Chart.astro';

<Chart
  data={[10, 40, 30, 60, 50]}
  labels={["Jan", "Feb", "Mar", "Apr", "May"]}
  type="line"
/>
```

The `Chart` component uses Chart.js loaded from CDN — no extra install needed.
For custom D3 or Observable Plot visuals, add a raw `<script>` tag in the `.mdx` file.
