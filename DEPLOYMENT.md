# Deployment

The site is a fully static Astro/Starlight build. GitHub Actions builds it and
publishes the output to GitHub Pages, served at **https://wiki.elephantronics.lk**.

## What is already configured

- `astro.config.mjs` sets `site: 'https://wiki.elephantronics.lk'`.
- There is **no `base`**, so every page and asset is served from the domain root.
- `public/CNAME` contains exactly `wiki.elephantronics.lk`.
- `.github/workflows/deploy.yml` deploys on pushes to `main` and supports manual
  dispatch. It requests only `contents: read`, `pages: write`, and
  `id-token: write`.
- `package-lock.json` is committed; the Astro action detects npm from it.

No repository secrets are needed for a static site.

## One-time GitHub setup

1. **Create the repository if it does not exist.** The existing remote is
   `git@github.com:MyLifeMyRulesMyCar/elephantronics-wiki.git`. Create an empty
   repository with that name; do not initialise it with a README if you plan to
   push this history directly.

2. **Push `main`:**

   ```bash
   git push -u origin main
   ```

3. **Enable Pages.** In the repository, open **Settings → Pages** and set
   **Build and deployment → Source** to **GitHub Actions**. Do not choose
   "Deploy from a branch"; this project deploys from the workflow artifact.

4. **Confirm workflow permissions.** The workflow declares the permissions it
   needs at job level. Repository-level **Settings → Actions → General → Workflow
   permissions** can remain at the default read-only setting; do not grant
   "Read and write permissions" just for this workflow.

5. **Run the deployment.** A push to `main` starts it automatically. To retry,
   open **Actions → Deploy to GitHub Pages → Run workflow**.

## DNS

At the DNS provider for `elephantronics.lk`, create:

| Type | Name / host | Value | TTL |
| --- | --- | --- | --- |
| CNAME | `wiki` | `mylifemyrulesmycar.github.io` | Automatic / provider default |

Notes:

- The target is the GitHub account's Pages host, **not** the repository URL. The
  value is derived from the `origin` remote; confirm it matches the account that
  owns the repository.
- Do not create an A record for `wiki`. A subdomain uses a CNAME.
- If the provider proxies records by default (for example, an orange-cloud
  setting), set this record to **DNS only** while GitHub issues the certificate.
  A proxy can interfere with domain verification and TLS provisioning.
- DNS propagation is usually quick but can take longer. Check with
  `nslookup wiki.elephantronics.lk` before troubleshooting GitHub settings.

## Custom domain and HTTPS

After DNS resolves:

1. Go to **Settings → Pages → Custom domain**.
2. Enter `wiki.elephantronics.lk` and save. This should match the committed
   `public/CNAME` exactly.
3. Wait for GitHub's DNS check to pass and for the certificate to be issued.
   This can take minutes to an hour.
4. Enable **Enforce HTTPS** once the option is available.

> **Expect a short transition window.** Because `public/CNAME` is part of the
> deployed artifact, GitHub Pages treats the site as a custom-domain site. Until
> DNS resolves and the certificate is issued, the `github.io` address may
> redirect to `wiki.elephantronics.lk` and fail to load. Configure DNS alongside
> the first deployment rather than weeks later.

## Verify the deployment

- The **Actions** run finishes with both `build` and `deploy` green.
- `https://wiki.elephantronics.lk/` returns the landing page over HTTPS.
- `https://wiki.elephantronics.lk/microcontrollers/dht22-arduino-uno-oled/`
  returns the tutorial.
- The certificate is valid for the custom domain and HTTP redirects to HTTPS.
- The header logo and favicon load (they are still placeholders until the real
  artwork is added).
- Internal links do not include a repository path such as
  `/elephantronics-wiki/`.

Useful commands:

```bash
curl -I https://wiki.elephantronics.lk/
nslookup wiki.elephantronics.lk
```

## Troubleshooting

| Symptom | Likely cause | Action |
| --- | --- | --- |
| `github.io` URL redirects to a domain that does not load | CNAME committed before DNS was ready | Finish the DNS record, then re-check Pages |
| "Domain does not resolve" in Pages settings | Missing or incorrect CNAME | Verify the record name and target; wait for propagation |
| "Enforce HTTPS" is unavailable | Certificate still being issued | Wait, then reload the Pages settings |
| Workflow fails at deploy | Pages source is not "GitHub Actions" | Change the source in Settings → Pages |
| Workflow fails with permission errors | Job permissions were edited | Restore `contents: read`, `pages: write`, `id-token: write` |
| Pages shows a 404 | Deployment artifact was not produced | Check the `build` job log and run `npm run build` locally |
| Links or assets 404 after moving to the custom domain | A `base` was added or links are hard-coded with one | Keep `base` unset and use root-relative links |

## Local preview

```bash
npm install
npm run build
npm run preview
```

`npm run preview` serves the production output at <http://localhost:4321>,
including the Pagefind search index. `npm run dev` is fine for authoring but does
not provide a built search index.

## What this repository does not do

- It does not create the GitHub repository.
- It does not push commits.
- It does not change DNS records.
- It does not enable Pages or HTTPS in GitHub settings.

Those steps require access to your GitHub account and DNS provider.
