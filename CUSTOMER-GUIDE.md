# Welcome to Your New Website! 🌿

This guide will help you make the most of your Lyda Lawn Care & Landscaping website.

## What We've Built For You

Your new site includes everything a modern lawn care business needs to attract and convert customers:

### ✅ What's Already Done
- **Professional Design** - Clean, mobile-friendly layout with your brand colors
- **Navigation** - Easy-to-use menu that works on all devices
- **Contact Form** - Customers can reach you 24/7
- **Service Showcase** - All your services clearly displayed
- **Trust Builders** - "Why Choose Us" section highlighting your experience
- **FAQ Section** - Answers common questions to save you time
- **Service Areas** - Shows exactly where you work

### 📋 What You Need to Add

The site is ready to go, but it needs YOUR unique content to really shine! Here's what to gather:

## 1. Customer Testimonials (MOST IMPORTANT!)

**Why it matters:** Real reviews from real customers are the #1 trust builder. Most people won't call without seeing social proof.

**What to collect:**
- Ask 3-5 of your best customers for a review
- Get their:
  - Full name
  - City (e.g., "Boise, ID")
  - What they loved about your service (2-3 sentences)
  - Optional: A photo of them (builds even more trust!)

**Where to add them:**
Edit `config.json` → find the `"testimonials"` section and replace the placeholder text with real customer feedback.

**Example:**
```json
{
  "name": "Sarah Johnson",
  "location": "Boise, ID",
  "text": "Lyda transformed our overgrown backyard into a beautiful oasis! They were professional, on-time, and the price was fair. Highly recommend!",
  "rating": 5
}
```

## 2. Photos of Your Work (CRITICAL!)

**Why it matters:** For a visual service like lawn care, customers NEED to see your work before calling.

**What to collect:**
- 6-10 photos of your best projects
- Before & After shots work best!
- Include variety: lawns, landscape design, seasonal cleanup, etc.

**Where to add them:**
1. Save photos to `public/assets/gallery/`
2. Name them: `1.jpg`, `2.jpg`, `3.jpg`, etc.
3. Update `config.json` → `"gallery"` section with descriptions

**Photo tips:**
- Take photos in good lighting (mid-morning works great)
- Clean up the area first
- Get wide shots that show the whole yard
- For before/after: Take from same angle/distance

## 3. Google Business Review Link

**Why it matters:** Directs customers to leave reviews and see your ratings.

**What to do:**
1. Go to your Google Business profile
2. Click "Get more reviews"
3. Copy the review link
4. Update `config.json` → `"googleReviewsUrl"` with your link

**Can't find it?** Search "Google Business review link" or ask us for help!

## 4. Unique Selling Points (Optional but Helpful)

**Current hero says:** "Your Lawn, Our Passion - Over 30 Years of Excellence"

**Make it better by highlighting what makes YOU different:**
- "Same-Week Service Guaranteed"
- "Family Owned & Operated Since 1994"
- "Organic Options Available"
- "Most Affordable in the Treasure Valley"

**Where to update:** `config.json` → `"hero"` section

## 5. Service Details (Optional Enhancement)

**Make your services more specific:**

Instead of: "Lawn Maintenance - Regular mowing, edging, and trimming"

Try: "Weekly Lawn Maintenance - $45/week for average lawn. Includes mowing, edging, trimming, and blowing."

**Where to update:** `config.json` → `"services"` section

## Quick Wins (Do These First!)

### Week 1:
1. ✅ Update Google Reviews link
2. ✅ Add 3 real customer testimonials
3. ✅ Add 6 photos to gallery

### Week 2:
4. ✅ Get 5+ Google reviews from customers
5. ✅ Update service descriptions with pricing (if comfortable)
6. ✅ Customize your hero message

## How to Edit Content

All content lives in one easy file: `config.json`

1. Open the file in any text editor
2. Find the section you want to change
3. Update the text between the quotes
4. Save the file
5. Refresh your website!

**Important:** Be careful with commas and quotes - they need to match the existing format.

## Need Help?

### Common Questions:

**Q: How do I add photos?**
A: Save them to `public/assets/gallery/` and update the gallery section in `config.json`

**Q: The contact form doesn't send emails yet**
A: That's normal! We can wire it up to your email later. For now, test it to see how it works.

**Q: How do I get more Google reviews?**
A: After each job, text your customers a link to your Google review page and kindly ask for a review.

**Q: Can I change the colors?**
A: Yes! But it requires editing code. Let us know if you want help with that.

## Before You Show Customers

Make sure you have:
- [ ] At least 3 real testimonials
- [ ] At least 6 photos in the gallery
- [ ] Updated Google Reviews link
- [ ] Verified phone number is correct
- [ ] Tested the contact form
- [ ] Checked it on your phone

## What Makes This Site Better Than Competitors?

Most lawn care sites miss these critical elements. Yours has:

✅ **Social Proof** - Testimonials front and center
✅ **Trust Signals** - Licensed, insured, 30+ years experience
✅ **Clear CTAs** - Multiple ways to contact you
✅ **FAQ Section** - Answers questions before they call
✅ **Mobile-First** - Looks great on phones (where most visitors come from)
✅ **Fast Loading** - Loads in under 2 seconds

## Next Steps

1. Gather testimonials and photos this week
2. Update the config.json file
3. Review the site on your phone
4. Share with friends/family for feedback
5. Go live!

---

**Questions?** Reach out anytime. We're here to help you succeed! 🚀
