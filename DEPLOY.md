# Deploy MyKahani to Cloudflare Pages

**Cost: $0 | Bandwidth: Unlimited | CDN: 300+ cities**

---

## One-Time Setup (5 minutes)

### 1. Push to GitHub

```bash
cd /media/fahd/maindrive/mykahani/mykahani
git init
git add .
git commit -m "Initial commit"
gh repo create mykahani --public --source=. --push
```

> If you don't have `gh` CLI, create a repo at [github.com/new](https://github.com/new) and push manually.

### 2. Get Cloudflare Credentials

1. Sign up / log in at [dash.cloudflare.com](https://dash.cloudflare.com)
2. **Account ID**: On the right sidebar of any domain page, copy your **Account ID**
3. **API Token**: Go to [My Profile → API Tokens](https://dash.cloudflare.com/profile/api-tokens) → **Create Token**
   - Use the **"Cloudflare Pages"** template
   - Or create custom with permission: `Cloudflare Pages:Edit`
   - Copy the token (shown only once)

### 3. Add GitHub Secrets

Go to your GitHub repo → **Settings → Secrets and variables → Actions → New repository secret**

Add these two secrets:

| Name | Value |
|---|---|
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare Account ID |
| `CLOUDFLARE_API_TOKEN` | Your Cloudflare API Token |

> Note: `CLOUDFLARE_API_TOKEN` is used by the Pages action automatically.

### 4. Create Cloudflare Pages Project

In the Cloudflare dashboard:

1. Go to **Workers & Pages → Create → Pages**
2. Choose **"Upload assets"** (not "Connect to Git" — we use GitHub Actions)
3. Project name: `mykahani`
4. Create project (no upload needed — GitHub Actions will handle it)

### 5. Deploy

Push any commit to `main`:

```bash
git push origin main
```

GitHub Actions will build and deploy automatically. Check progress at:

```
https://github.com/YOUR_USERNAME/mykahani/actions
```

Your site will be live at:

```
https://mykahani.pages.dev
```

---

## Add Custom Domain (Optional)

1. In Cloudflare dashboard → Pages → mykahani → **Custom domains**
2. Add your domain (e.g., `mykahani.pk`)
3. Follow DNS instructions — if domain is on Cloudflare, it's one-click

---

## Environment Variables

If you add real tracking IDs later, add them as GitHub secrets and reference in the workflow:

```yaml
- run: npm run build
  env:
    NEXT_PUBLIC_TRACKING_ENABLED: ${{ secrets.NEXT_PUBLIC_TRACKING_ENABLED }}
    NEXT_PUBLIC_META_PIXEL_ID: ${{ secrets.NEXT_PUBLIC_META_PIXEL_ID }}
```

---

## Why Cloudflare Pages?

| Feature | Cloudflare Pages |
|---|---|
| **Price** | Free |
| **Bandwidth** | Unlimited |
| **Build minutes** | 500/month (free) |
| **CDN locations** | 300+ |
| **SSL** | Free, auto-renew |
| **Custom domain** | Free |
| **Build time** | ~30s for this site |
| **Pakistan performance** | Excellent (LHE, KHI edge nodes) |
