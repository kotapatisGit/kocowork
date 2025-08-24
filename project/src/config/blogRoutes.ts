// Blog route configuration
// Add new blog posts here by adding a new entry with routeName and htmlFile
export interface BlogRoute {
  routeName: string;
  htmlFile: string;
  title: string;
  excerpt: string;
  date: string;
  featuredImage?: string; // Optional featured image for blog cards
}

export const blogRoutes: BlogRoute[] = [
    // {
    //   routeName: 'sample-blog-post',
    //   htmlFile: '/content/blog/sample-blog-post.html',
    //   title: 'The Future of Remote Work: How Coworking Spaces Are Evolving',
    //   excerpt: 'Discover how modern coworking spaces are adapting to the changing landscape of remote work and hybrid teams.',
    //   date: '2024-01-15',
    //   featuredImage: '/content/blog-images/sample-blog-image.jpeg'
    // },
    // {
    //     routeName: "test",
    //     htmlFile: "/content/blog/test.html",
    //     title: "test",
    //     excerpt: "test",
    //     date: "2025-08-22"
    // },

  
  // Add new blog posts here following the same format:
  // {
  //   routeName: 'your-route-name',
  //   htmlFile: '/content/blog/your-html-file.html',
  //   title: 'Your Blog Title',
  //   excerpt: 'Your blog excerpt here...',
  //   date: 'YYYY-MM-DD'
  // }
];

// Helper function to get blog route by routeName
export const getBlogRoute = (routeName: string): BlogRoute | undefined => {
  return blogRoutes.find(route => route.routeName === routeName);
};

// Helper function to get all blog routes
export const getAllBlogRoutes = (): BlogRoute[] => {
  return [...blogRoutes].reverse();
};
