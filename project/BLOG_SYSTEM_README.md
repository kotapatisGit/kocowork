# KOCOwork Blog System

This system allows your SEO specialist to easily add new blog posts by creating HTML files and updating a configuration file.

## How It Works

1. **Create HTML Content**: The SEO specialist creates an HTML file with the blog content
2. **Update Configuration**: Add the blog post details to the configuration file
3. **Automatic Routing**: The system automatically creates a new route and displays the content

## File Structure

```
public/
  content/
    blog/
      sample-blog-post.html          # Your HTML content files go here
      your-new-blog-post.html        # Add new HTML files here
      another-blog-post.html         # And more...
    blog-images/
      sample-blog-image.jpg          # Images for blog posts go here
      your-image.jpg                 # Add new images here
      another-image.png              # Supports jpg, png, webp, etc.

src/
  config/
    blogRoutes.ts                    # Configuration file to update
  components/
    Blogs/
      BlogsPage.tsx                  # Main blogs listing page
      BlogPostRenderer.tsx           # Individual blog post renderer
```

## Adding a New Blog Post

### Step 1: Create the HTML File

Create a new HTML file in `public/content/blog/` with your content:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Your Blog Title</title>
</head>
<body>
    <h1>Your Main Title</h1>
    
    <h2>First Subtitle</h2>
    <p>Your content here...</p>
    
    <h2>Second Subtitle</h2>
    <p>More content...</p>
    
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
    </ul>
</body>
</html>
```

**Important Notes:**
- Only the `<body>` content will be displayed
- Use semantic HTML tags (h1, h2, h3, p, ul, li, etc.)
- The system will automatically style your content
- **Images**: You can use `<img>` tags with paths to `/content/blog-images/` folder
- **Image Example**: `<img src="/content/blog-images/your-image.jpg" alt="Description" />`

### Step 2: Update the Configuration

Add your blog post to `src/config/blogRoutes.ts`:

```typescript
export const blogRoutes: BlogRoute[] = [
  // ... existing blog posts ...
  {
    routeName: 'your-route-name',           // URL-friendly name (no spaces, lowercase)
    htmlFile: '/content/blog/your-html-file.html',  // Path to your HTML file
    title: 'Your Blog Title',               // Title displayed in the blog listing
    excerpt: 'Your blog excerpt here...',   # Short description
    date: '2024-01-20',                    # Publication date (YYYY-MM-DD)
    featuredImage: '/content/blog-images/your-image.jpg'  # Optional: featured image for blog cards
  }
];
```

### Step 3: That's It!

Your new blog post will automatically:
- Appear in the main blogs listing page
- Be accessible at `/blogs/your-route-name`
- Have proper styling and navigation

## Example

If you create:
- File: `public/content/blog/remote-work-tips.html`
- Route: `remote-work-tips`
- Title: "10 Tips for Remote Work Success"
- Featured Image: `public/content/blog-images/remote-work.jpg`

The blog post will be available at:
- **URL**: `/blogs/remote-work-tips`
- **Listing**: Shows in the main blogs page with title, excerpt, and featured image

### Complete Example Configuration:
```typescript
{
  routeName: 'remote-work-tips',
  htmlFile: '/content/blog/remote-work-tips.html',
  title: '10 Tips for Remote Work Success',
  excerpt: 'Essential strategies for maintaining productivity and work-life balance while working remotely.',
  date: '2024-01-20',
  featuredImage: '/content/blog-images/remote-work.jpg'
}
```

### Example HTML Content:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>10 Tips for Remote Work Success</title>
</head>
<body>
    <h1>10 Tips for Remote Work Success</h1>
    
    <img src="/content/blog-images/remote-work.jpg" alt="Person working from home" />
    
    <h2>1. Create a Dedicated Workspace</h2>
    <p>Having a designated area for work helps separate work life from personal life...</p>
    
    <h2>2. Maintain Regular Hours</h2>
    <p>Stick to a consistent schedule to maintain productivity...</p>
</body>
</html>
```

## Images

### Featured Images (Optional)
- Add a `featuredImage` field to your blog route configuration
- This image will appear at the top of the blog card on the main blogs page
- Path should be relative to the public folder: `/content/blog-images/your-image.jpg`

### In-Content Images
- Use standard `<img>` tags in your HTML content
- Store images in the `public/content/blog-images/` folder
- Reference them as: `<img src="/content/blog-images/your-image.jpg" alt="Description" />`
- Images are automatically styled with rounded corners and subtle shadows
- Supports all common formats: JPG, PNG, WebP, GIF, SVG

## Styling

The system automatically applies clean, professional styling to your HTML content:
- **Headings**: Proper hierarchy and spacing
- **Paragraphs**: Readable line height and margins
- **Lists**: Proper indentation and spacing
- **Links**: Styled with your brand colors
- **Typography**: Consistent font sizes and weights

## Tips for SEO Specialists

1. **Use Semantic HTML**: Use proper heading tags (h1, h2, h3) for structure
2. **Meaningful Titles**: Create descriptive, keyword-rich titles
3. **Meta Information**: Update the configuration with accurate titles and excerpts
4. **Content Structure**: Use paragraphs, lists, and headings for readability
5. **Route Names**: Choose URL-friendly names (lowercase, no spaces, descriptive)

## Troubleshooting

- **Blog not appearing**: Check that the route name in the URL matches the configuration
- **Content not loading**: Verify the HTML file path is correct
- **Styling issues**: Ensure you're using standard HTML tags (h1, h2, p, ul, li, etc.)

## Support

If you encounter any issues, check:
1. HTML file exists in the correct folder
2. Configuration entry is correct
3. Route name matches the URL you're trying to access
