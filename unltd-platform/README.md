# UNLTD Platform (local dev)

Prereqs:
- Node 18+ (recommended)
- npm (or yarn/pnpm)
- Git (for pushing and PRs)

Quick local run:

1. From the project root or inside the unltd-platform folder:
   cd unltd-platform

2. Install:
   npm install

3. Run dev server:
   npm run dev

4. Open http://localhost:3000

Build for production:
  npm run build
  npm run start

How to add these files into the branch (beginner-friendly)

Option A — use your terminal (recommended if you have Git configured):

1. Clone repo (if you don't have it locally):
   git clone https://github.com/jhelton-byte/UNLTD_FIT.git
   cd UNLTD_FIT

2. Switch to the branch I created:
   git fetch origin
   git checkout feat/unltd-platform

3. Create folder and files:
   mkdir -p unltd-platform/app unltd-platform/styles
   (Copy the files I provided into the respective paths: unltd-platform/package.json, unltd-platform/next.config.js, unltd-platform/tsconfig.json, unltd-platform/next-env.d.ts, unltd-platform/tailwind.config.js, unltd-platform/postcss.config.js, unltd-platform/styles/globals.css, unltd-platform/app/layout.tsx, unltd-platform/app/page.tsx, unltd-platform/README.md)

   Tip: You can create files with an editor (VS Code) or use the terminal:
   cat > unltd-platform/package.json <<'EOF'
   ...paste contents...
   EOF

4. Stage, commit, and push:
   git add unltd-platform
   git commit -m "Add Next.js + Tailwind scaffold for unltd-platform"
   git push --set-upstream origin feat/unltd-platform

5. Open a Pull Request:
   - Visit https://github.com/jhelton-byte/UNLTD_FIT and you should see a banner to create a PR from feat/unltd-platform.
   - Or click "Pull requests" → "New pull request" and select feat/unltd-platform as the compare branch.

Option B — use GitHub web UI (if you prefer not to use terminal):
1. Go to your repo on GitHub.
2. Switch to branch feat/unltd-platform (branch selector).
3. Click "Add file" → "Create new file".
4. For each file, specify the path prefix "unltd-platform/..." (e.g. "unltd-platform/package.json"), paste contents, and commit to feat/unltd-platform.
5. Repeat for all files.
6. Create the PR from the branch once all files are added.

Deploy to Vercel (recommended for Next.js):

1. Sign into https://vercel.com with your GitHub account.
2. Click "New Project" → Import Git Repository → select jhelton-byte/UNLTD_FIT.
3. When Vercel asks for the root directory, set it to:
   unltd-platform
4. Vercel will auto-detect Next.js. Use default build:
   Build Command: npm run build
   Output Directory: (leave default)
5. Deploy. Every push to the repo will trigger a new deployment.

Troubleshooting:
- If Tailwind classes don't apply, ensure globals.css is imported in app/layout.tsx and Tailwind config content includes ./app/**/*.
- If you see syntax/TS errors, ensure TypeScript is installed (devDependencies) and file extensions are correct (.tsx for React components).
- If npm install fails, update Node to the recommended 18+ version.
