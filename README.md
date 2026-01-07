# Lyda Lawn Care & Landscaping Website

A clean, modern, mobile-friendly single-page website built with Next.js and Tailwind CSS.

## Getting Started

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

All content is managed through the `config.json` file. Update this file to change:

- Business information (name, phone, email, address, Google Reviews URL)
- Navigation menu items
- Hero section content
- Services offered
- Service areas
- Gallery image paths and descriptions

### Color Scheme

The site uses colors extracted from the Lyda logo:
- **Brand Green**: `#7FB85F` - Used for accents and CTAs
- **Brand Dark**: `#3A3A3A` - Used for header and footer
- **Brand Gray**: `#4A4A4A` - Used for backgrounds

To change colors, edit `tailwind.config.ts`.

## Features

- Single-page layout with smooth scrolling navigation
- Mobile-responsive design with hamburger menu
- Click-to-call phone functionality
- Header navigation with section links
- Services showcase section
- Photo gallery (placeholder images)
- Service areas display
- Google Reviews integration
- Contact form with validation (ready for email integration)
- Fast loading and optimized for performance
- SEO-friendly
- Accessible markup

### Logo

The company logo is displayed in the sticky header at the top of the page.

To replace the logo, update the file at `public/assets/LYDA_LAWNCARE_LLC.jpg`

### Gallery

Add your project photos to `public/assets/gallery/` and update the `gallery` array in `config.json` with the image paths and descriptions. The gallery currently shows placeholder icons until you add actual images.

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── MobileMenu.tsx     # Mobile hamburger menu
│   │   └── ContactForm.tsx    # Contact form component
│   ├── page.tsx               # Main page component
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles
├── public/
│   └── assets/
│       ├── LYDA_LAWNCARE_LLC.jpg  # Company logo
│       └── gallery/               # Gallery images directory
├── config.json                # Content configuration
├── tailwind.config.ts         # Tailwind configuration
└── package.json               # Dependencies
```

## Next Steps (TODO)

- [ ] **Update phone number**: Edit the phone number in `config.json`
- [ ] **Add Google Business review link**: Update `googleReviewsUrl` in `config.json` with your actual Google Business review URL
- [ ] **Add gallery photos**: Place images in `public/assets/gallery/` and update the `gallery` array in `config.json`
- [ ] **Wire up email service**: Integrate the contact form with an email service (Resend, SendGrid, etc.)
- [ ] **Optional: Connect to cloud storage**: For a client-managed gallery, integrate with Dropbox, Google Drive, or similar service

## Deployment

This site can be deployed to Vercel, Netlify, or any platform that supports Next.js:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Static Export
```bash
# Add to next.config.ts: output: 'export'
npm run build
# Deploy the 'out' directory
```
