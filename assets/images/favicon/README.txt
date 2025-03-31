FAVICON GENERATION INSTRUCTIONS

To generate favicon files for the Davis Professional Firefighters Local 3494 website:

1. Create a square logo image (preferably 512x512 pixels) with the Davis Professional Firefighters emblem
2. Visit a favicon generator website like https://realfavicongenerator.net/ or https://favicon.io/
3. Upload your square logo image
4. Configure settings (typically the default settings work well)
5. Download the generated favicon package
6. Extract the contents to this directory (favicon/)
7. Update the favicon links in the index.html file to point to the correct favicon files

Recommended favicon files to include:
- favicon.ico (for traditional browsers)
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png (for iOS devices)
- android-chrome-192x192.png
- android-chrome-512x512.png
- site.webmanifest (for PWA support)

Example HTML to include in the head section of index.html:

```html
<link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon/favicon-16x16.png">
<link rel="manifest" href="assets/images/favicon/site.webmanifest">
<link rel="shortcut icon" href="assets/images/favicon/favicon.ico">
```

For now, we're using a placeholder favicon.ico file in the root assets/images directory.
In the future, replace it with a proper set of favicon files in this directory. 