# 🚀 QUICK START GUIDE

## Your Website is READY! 🎉

Access it at: **http://localhost:3000**

---

## ⚡ 4 CRITICAL TASKS BEFORE GOING LIVE

### 1️⃣ Setup Email (15 minutes)
**Why:** Contact form won't work without this

1. Go to https://www.emailjs.com/
2. Create free account
3. Create service + template
4. Get: Service ID, Template ID, Public Key
5. Update `src/pages/Contact.js` (lines 115-117)

```javascript
const serviceId = 'paste_your_service_id';
const templateId = 'paste_your_template_id';
const publicKey = 'paste_your_public_key';
```

---

### 2️⃣ Add Real Images (30 minutes)
**Why:** Currently using placeholders

**Create folder:**
```bash
mkdir src\assets\images
```

**Add these images:**
- `logo.png` (150x60px) - Company logo
- `hero-bg.jpg` (1920x1080px) - Home page background
- `factory.jpg` (1200x800px) - Factory/team photos
- `product-multifilament.jpg` (800x600px)
- `product-bag-thread.jpg` (800x600px)
- 10 application images (500x500px each)

**How to use:**
```javascript
// In any component file:
import logo from '../assets/images/logo.png';

// Then use:
<img src={logo} alt="Logo" />
```

---

### 3️⃣ Update Social Media Links (2 minutes)
**Files to edit:**
- `src/components/Footer.js` (line 70-85)
- `src/pages/Contact.js` (line 260-280)

**Replace:**
```javascript
href="https://instagram.com"  // ← Add your Instagram
href="https://linkedin.com"   // ← Add your LinkedIn
```

---

### 4️⃣ Test Everything (15 minutes)

Open website and check:
- [ ] All pages load correctly
- [ ] Mobile menu works (resize browser < 768px)
- [ ] Click all navigation links
- [ ] Test FAQ accordion
- [ ] Try contact form (should show validation errors)
- [ ] Hover over all cards and buttons
- [ ] Test product detail pages
- [ ] Footer links work

---

## 📱 Common Commands

**Start development server:**
```bash
npm start
```

**Build for production:**
```bash
npm run build
```

**Stop server:**
Press `Ctrl + C` in terminal

---

## 🌐 Deploy in 5 Minutes (Netlify)

1. Run: `npm run build`
2. Go to: https://www.netlify.com/
3. Sign up (free)
4. Drag `build` folder to Netlify
5. Done! 🎉 Your site is live!

---

## 📂 Where to Find Things

**Want to change:**
- Home page content → `src/pages/Home.js`
- About page → `src/pages/About.js`
- Products → `src/pages/Products.js`
- Contact form → `src/pages/Contact.js`
- Colors → `src/App.css` (lines 7-19)
- Company info → `src/components/Footer.js`

---

## 🎨 Quick Color Change

Open `src/App.css` and edit:

```css
:root {
  --primary-blue: #1e3a8a;    /* ← Change main blue */
  --primary-beige: #f5f5dc;   /* ← Change main beige */
}
```

Colors will update across entire site! ✨

---

## 🆘 Need Help?

**Error: "Port 3000 is already in use"**
- Solution: Close other terminal, or press 'Y' to use different port

**Error: "Cannot find module"**
- Solution: Run `npm install`

**Form not working:**
- Check EmailJS configuration (Task #1 above)

**Images not showing:**
- Verify image paths
- Check imports at top of file

---

## 📞 Quick Contact Info to Update

Search and replace these throughout the code:
- `sjpolyzen@gmail.com` - Email
- `+91 8719824566` - Phone 1
- `+91 9628517463` - Phone 2
- `399 LIG Mukharjee Nagar` - Address

---

## ✅ Pre-Launch Final Check

Before deploying:
- [ ] EmailJS configured and tested
- [ ] All images replaced
- [ ] Social media links updated
- [ ] Tested on mobile
- [ ] All links work
- [ ] No console errors
- [ ] Company info correct

---

## 🎉 You're All Set!

**Your website has:**
- ✅ 7 fully functional pages
- ✅ Professional design
- ✅ Mobile responsive
- ✅ Interactive animations
- ✅ Contact form
- ✅ SEO optimized

**Complete the 4 tasks above and deploy!** 🚀

---

**Questions?** Check `README.md` or `SETUP_GUIDE.md` for detailed documentation.

**Built with ❤️ for SJ Polyzen Industries**
