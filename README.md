# ssrrb.github.io

My personal portfolio and CV, live at [ssrrb.github.io](https://ssrrb.github.io).

Bilingual (English / Spanish) site built with Next.js, React, TypeScript, Tailwind CSS, [shadcn/ui](https://ui.shadcn.com/) and [Magic UI](https://magicui.design/), statically exported and deployed to GitHub Pages.

# Features

- Editable résumé content in a single place: [`src/data/resume.tsx`](./src/data/resume.tsx) (English) and [`src/data/resume-es.tsx`](./src/data/resume-es.tsx) (Spanish)
- English and Spanish routes with `next-intl` and a language toggle
- Work experience, education, skills, projects and a blog
- Light/dark theme
- Responsive, with a static export for GitHub Pages

# Getting Started Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Ssrrb/ssrrb.github.io
   ```

2. Move into it and install dependencies:

   ```bash
   cd ssrrb.github.io
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

5. Edit your content in `src/data/resume.tsx` and `src/data/resume-es.tsx`.

# Scripts

| Command       | Description                              |
| ------------- | ---------------------------------------- |
| `pnpm dev`    | Start the local dev server               |
| `pnpm build`  | Build the static site into `out/`        |
| `pnpm lint`   | Run ESLint                               |

# Deployment

Pushes to `main` trigger [`.github/workflows/nextjs.yml`](./.github/workflows/nextjs.yml), which builds the site and deploys `out/` to GitHub Pages at [ssrrb.github.io](https://ssrrb.github.io).

# License

Licensed under the [MIT license](https://github.com/dillionverma/portfolio/blob/main/LICENSE.md). Originally based on [dillionverma/portfolio](https://github.com/dillionverma/portfolio).
