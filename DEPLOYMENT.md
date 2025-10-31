# GitHub Pages Deployment Guide

This guide will help you deploy your personal portfolio website to GitHub Pages.

## Prerequisites

- Git installed on your system
- GitHub account
- Repository named `xoity.github.io` (already created)

## Quick Deploy

Use the provided deployment script:

```bash
./deploy.sh
```

Then select option 3 to deploy to GitHub Pages.

## Manual Deployment Steps

If you prefer to deploy manually, follow these steps:

### 1. Commit Your Changes

```bash
# Check what files have changed
git status

# Add all files
git add .

# Commit with a message
git commit -m "Initial portfolio website deployment"
```

### 2. Push to GitHub

```bash
# Push to the main branch
git push origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/xoity/xoity.github.io
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **main** branch
5. Click **Save**

### 4. Wait for Deployment

- GitHub will automatically deploy your site
- It may take 2-5 minutes for the site to be live
- You'll see a green checkmark when deployment is complete

### 5. Visit Your Site

Your portfolio will be live at: **https://xoity.github.io**

## Testing Locally

Before deploying, test your website locally:

```bash
# Using the deployment script
./deploy.sh
# Select option 1

# Or manually
python3 -m http.server 8000
```

Then visit: http://localhost:8000

## Updating Your Portfolio

### Adding New Projects

1. Add project information to `index.html` in the projects section
2. Add a project image to `assets/images/`
3. Update the project list in the HTML

### Changing Personal Information

1. Update the sidebar information in `index.html`
2. Modify the about section
3. Update skills, education, and experience
4. Change social media links

### Customizing Colors

Edit `assets/css/style.css` and modify the CSS variables in the `:root` section:

```css
:root {
  --orange-yellow-crayola: hsl(45, 100%, 72%);  /* Primary color */
  --smoky-black: hsl(0, 0%, 7%);                /* Background */
  /* ... more colors ... */
}
```

## Troubleshooting

### Site Not Updating

1. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Wait a few more minutes for GitHub to rebuild
3. Check the Actions tab on GitHub for build status

### Images Not Loading

1. Ensure image paths are correct (relative paths)
2. Check that images are in `assets/images/` directory
3. Verify image file names match the HTML references

### Custom Domain (Optional)

If you want to use a custom domain:

1. Buy a domain name
2. Add a `CNAME` file to the repository root with your domain
3. Configure DNS settings with your domain provider
4. Update GitHub Pages settings to use the custom domain

## File Structure

```
xoity.github.io/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # Stylesheet
│   ├── js/
│   │   └── script.js      # JavaScript
│   └── images/            # Images
│       ├── logo.ico       # Favicon
│       └── project-*.jpg  # Project thumbnails
├── README.md              # Project documentation
├── DEPLOYMENT.md          # This file
└── deploy.sh              # Deployment script
```

## Best Practices

### Regular Updates

- Update your portfolio regularly with new projects
- Keep your skills section current
- Add new achievements and experiences

### Performance

- Optimize images before uploading (compress JPG/PNG files)
- Keep the total size reasonable for fast loading
- Test on mobile devices

### SEO

- Use descriptive page titles
- Add meta descriptions (already included)
- Use semantic HTML tags
- Ensure all images have alt text

### Security

- Don't commit sensitive information (API keys, passwords)
- Use HTTPS (automatically enabled on GitHub Pages)
- Keep contact information appropriate for public viewing

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [HTML/CSS Tutorials](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

## Support

For issues with:
- **GitHub Pages**: Check [GitHub Status](https://www.githubstatus.com/)
- **Git**: See [Git Documentation](https://git-scm.com/doc)
- **Website Bugs**: Open an issue on your repository

## Quick Commands Reference

```bash
# Test locally
python3 -m http.server 8000

# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# View commit history
git log --oneline
```

## Next Steps

1. ✅ Test the website locally
2. ✅ Commit and push to GitHub
3. ✅ Enable GitHub Pages in repository settings
4. ✅ Wait for deployment
5. ✅ Visit https://xoity.github.io
6. 📝 Share your portfolio on LinkedIn
7. 🔗 Add the link to your GitHub profile README
8. 🎨 Customize and make it your own!

---

Happy coding! 🚀

If you encounter any issues, feel free to check the GitHub Pages documentation or open an issue in your repository.