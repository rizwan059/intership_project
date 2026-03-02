# RecruitFlow — Sales Funnel

A high-converting sales funnel for recruitment agency workflow automation services. Built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## 🚀 Deploy in 10 Minutes

### Step 1 — Install Dependencies
```bash
npm install
```

### Step 2 — Update Your Links (REQUIRED)

Search the project for `YOUR_LINK_HERE` and `YOUR_PROFILE` — there are 3 files to update:

**`components/Navbar.tsx`** (line 5–6)
```ts
const CALENDLY_LINK = "https://calendly.com/YOUR_LINK_HERE";
const LINKEDIN_URL = "https://linkedin.com/in/YOUR_PROFILE";
```

**`components/Hero.tsx`** (line 4–5)  
**`components/CTASection.tsx`** (line 3–4)  
**`components/FAQ.tsx`** (line 3)  
**`components/Packages.tsx`** (line 3–4)  
**`components/Footer.tsx`** (line 3–4)  

Replace with your actual Calendly booking link and LinkedIn profile URL.

### Step 3 — Update Your Brand Name (Optional)
In `app/layout.tsx`, update the `metadata` title and description with your real brand/name.
In any component showing `RecruitFlow`, replace with your brand name.

### Step 4 — Test Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Step 5 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 6 — Deploy to Vercel (Free, Instant)
1. Go to [vercel.com](https://vercel.com) — sign up free
2. Click **"Add New Project"**
3. Import your GitHub repo
4. Click **Deploy** — done. Live in 60 seconds.
5. Go to **Settings → Domains** to connect your custom domain

---

## 🎨 Customization Guide

### Colors
All colors are in `tailwind.config.ts`. Key ones:
- `accent` — The orange/red (`#C8501A`) — your primary brand color
- `cream` — Background (`#F7F4EF`)
- `ink` — Dark sections (`#0F0E0C`)
- `emerald` — Secondary accent (`#1A5C3A`)

To change your brand color: Update `accent: "#C8501A"` in `tailwind.config.ts`

### Content
- **Pain points** — Edit in `components/PainSection.tsx`
- **Automations** — Edit in `components/WhatWeAutomate.tsx`
- **Pricing** — Edit in `components/Packages.tsx`
- **Testimonials** — Edit in `components/SocialProof.tsx`
- **FAQ** — Edit in `components/FAQ.tsx`

### Your Name/Brand
Replace `RecruitFlow` with your brand name across:
- `app/layout.tsx` (metadata)
- `components/Navbar.tsx`
- `components/Footer.tsx`

---

## 📁 Project Structure

```
recruit-funnel/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Main page (imports all sections)
│   └── globals.css       # Global styles, animations
├── components/
│   ├── Navbar.tsx        # Sticky nav with CTAs
│   ├── Hero.tsx          # Hero section with headline
│   ├── TickerBar.tsx     # Scrolling ticker
│   ├── PainSection.tsx   # Problem identification
│   ├── HowItWorks.tsx    # 4-step process
│   ├── WhatWeAutomate.tsx # Interactive tab section
│   ├── Packages.tsx      # Pricing cards
│   ├── SocialProof.tsx   # Testimonials & stats
│   ├── FAQ.tsx           # Accordion FAQ
│   ├── CTASection.tsx    # Final conversion section
│   └── Footer.tsx        # Footer
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## 💡 Pro Tips

1. **Add your real photo** — Add an `<Image>` in the CTA section or Navbar. Faces convert better than anonymous.
2. **Real testimonials** — Replace placeholder testimonials in `SocialProof.tsx` with real client quotes as you get them.
3. **Google Analytics** — Add your GA4 tag to `app/layout.tsx` to track conversions.
4. **Calendly embed** — Instead of linking to Calendly, you can embed it inline using the Calendly embed script for even higher conversion.

---

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **Google Fonts** — Playfair Display + DM Sans + DM Mono

---

Built with ❤️ for recruitment agency automation.
