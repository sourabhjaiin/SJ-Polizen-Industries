# SJ Polyzen Industries Website

A modern, professional, and fully interactive website for SJ Polyzen Industries - a leading manufacturer of high-quality polypropylene multifilament yarns and bag closing threads.

## 🎨 Features

- **Modern Design**: Clean, professional design with blue and beige color theme
- **Fully Responsive**: Mobile-first approach with seamless experience across all devices
- **Interactive Elements**: 
  - Parallax hero section with zoom effects
  - Smooth scroll navigation
  - Hover effects on cards and images
  - FAQ accordion with smooth transitions
  - Real-time form validation
- **Multi-Page Application**: 
  - Home
  - About Us
  - Products (with detailed product pages)
  - Quality Policy
  - Applications
  - Contact
- **Contact Form**: Integrated with EmailJS for email functionality
- **SEO Ready**: Semantic HTML with proper meta tags
- **Accessibility**: ARIA labels and keyboard navigation support

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd sj-polyzen-website
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The website will open in your browser at `http://localhost:3000`

## 📧 Email Configuration (IMPORTANT)

The contact form uses EmailJS to send emails. To make it work:

1. **Sign up for EmailJS**: Visit https://www.emailjs.com/ and create a free account

2. **Create an Email Service**:
   - Go to Email Services
   - Add a new service (e.g., Gmail, Outlook)
   - Note your Service ID

3. **Create an Email Template**:
   - Go to Email Templates
   - Create a new template with these variables:
     - `{{to_email}}` - Recipient email
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{city}}` - Sender's city
     - `{{mobile}}` - Sender's mobile
     - `{{message}}` - The message content
   - Note your Template ID

4. **Get Your Public Key**:
   - Go to Account > General
   - Find your Public Key

5. **Update Contact.js**:
   Open `src/pages/Contact.js` and replace these values (around line 115):
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

6. **Set Recipient Email**:
   The email will be sent to `jainsourabh2@johndeere.com` (configured in line 122)

## 🖼️ Adding Images

The website uses placeholder images throughout. To add actual images:

1. **Create an images folder**:
```bash
mkdir src/assets/images
```

2. **Add your images** to this folder:
   - Company logo (150x60px)
   - Hero background image (1920x1080px)
   - Company/factory images (1200x800px)
   - Product images (800x600px)
   - Application images (500x500px)

3. **Update image references** in the code:
   - Search for `TODO: Replace with actual` comments
   - Import and use your images instead of placeholders

Example:
```javascript
import heroImage from '../assets/images/hero-bg.jpg';

// Then use in JSX:
<div style={{ backgroundImage: `url(${heroImage})` }}>
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Theme

```css
Primary Blue: #1e3a8a
Light Blue: #3b82f6
Accent Blue: #60a5fa
Primary Beige: #f5f5dc
Light Beige: #faf8f3
Accent Beige: #e8dcc4
```

## 📂 Project Structure

```
sj-polyzen-website/
├── public/
├── src/
│   ├── assets/          # Images and other assets
│   ├── components/      # Reusable components (Navbar, Footer)
│   ├── pages/          # Page components
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Products.js
│   │   ├── ProductDetail.js
│   │   ├── QualityPolicy.js
│   │   ├── Applications.js
│   │   └── Contact.js
│   ├── App.js          # Main application component
│   └── index.js        # Entry point
└── package.json
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to Hosting Service

You can deploy to various hosting services:

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repo
- **GitHub Pages**: Use `gh-pages` package
- **Traditional Hosting**: Upload `build` folder contents via FTP

## 📝 Customization Guide

### Update Company Information

1. **Contact Details**: Edit `src/components/Footer.js` and `src/pages/Contact.js`
2. **Social Media Links**: Update URLs in Footer and Contact components
3. **Company Description**: Modify text in `src/pages/About.js`
4. **Product Information**: Update `src/pages/Products.js` and `src/pages/ProductDetail.js`

### Add More Products

1. Open `src/pages/Products.js`
2. Add new product to the `products` array
3. Add corresponding data in `src/pages/ProductDetail.js`

### Modify Colors

Edit CSS variables in `src/App.css`:
```css
:root {
  --primary-blue: #1e3a8a;
  /* Update other color variables */
}
```

## 🐛 Troubleshooting

### Issue: Form not sending emails
- Verify EmailJS credentials are correct
- Check browser console for error messages
- Ensure you have internet connection
- Verify EmailJS service is active

### Issue: Images not loading
- Check image paths are correct
- Ensure images are in the correct folder
- Verify image imports in components

### Issue: Styling issues
- Clear browser cache
- Check for CSS conflicts
- Verify all CSS files are imported

## 📞 Support

For questions or issues with the website:
- Email: sjpolyzen@gmail.com
- Phone: +91 8719824566, +91 9628517463

## 📄 License

© 2024 SJ Polyzen Industries. All Rights Reserved.

---

**Note**: This is a production-ready website. Remember to:
1. Configure EmailJS for the contact form
2. Add actual company images
3. Update social media links
4. Add Google Analytics (optional)
5. Set up SEO meta tags in `public/index.html`


