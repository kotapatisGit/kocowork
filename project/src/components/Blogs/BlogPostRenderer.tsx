import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogRoute } from '../../config/blogRoutes';
import { ArrowLeft } from 'lucide-react';

const BlogPostRenderer: React.FC = () => {
  const { routeName } = useParams<{ routeName: string }>();
  const navigate = useNavigate();
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!routeName) {
      setError('No route name provided');
      setLoading(false);
      return;
    }

    const blogRoute = getBlogRoute(routeName);
    if (!blogRoute) {
      setError('Blog post not found');
      setLoading(false);
      return;
    }

    // Fetch the HTML content
    fetch(blogRoute.htmlFile)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch blog content');
        }
        return response.text();
      })
      .then(html => {
        // Extract the body content from the HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const bodyContent = doc.body.innerHTML;
        setHtmlContent(bodyContent);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blog content:', err);
        setError('Failed to load blog content');
        setLoading(false);
      });
  }, [routeName]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blank-slate via-white to-blank-slate/30 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-founders-fire mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blank-slate via-white to-blank-slate/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Error</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate('/blogs')}
            className="bg-founders-fire text-md md:text-lg lg:text-xl text-white py-3 rounded-lg hover:bg-founders-fire/90 transition-colors duration-300"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-blank-slate">
      {/* Back Button */}
      <div className="container px-8 pt-24">
        <button
          onClick={() => navigate('/blogs')}
          className="flex items-center text-md md:text-lg lg:text-xl text-founders-fire hover:text-founders-fire/80 font-medium transition-colors duration-300 group mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Blogs
        </button>
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg max-w-none px-8 md:px-12 container mx-auto font-sans flex-grow"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default BlogPostRenderer;
