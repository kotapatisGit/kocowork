import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllBlogRoutes, BlogRoute } from '../../config/blogRoutes';

const BlogsPage: React.FC = () => {
  const blogPosts = getAllBlogRoutes();

  return (
    <div className="min-h-screen bg-blank-slate">
      {/* Hero Section */}
      <div className="bg-focus-black text-blank-slate pt-20 pb-10 md:pt-32 md:pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-darker">
            KOCOwork Blog
          </h1>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
          {blogPosts.map((post) => (
            <article key={post.routeName} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-full min-h-[500px]">
              {post.featuredImage && (
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className={`p-8 flex flex-col ${post.featuredImage ? 'min-h-[300px]' : 'h-full'}`}>
                <div className="mb-4">
                  <Calendar className="h-5 w-5 text-gray-500 inline mr-3" />
                  <span className="text-base text-gray-600 font-medium">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-base leading-relaxed flex-grow">
                  {post.excerpt.length > 120 
                    ? `${post.excerpt.substring(0, 120)}...` 
                    : post.excerpt
                  }
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link 
                    to={`/blogs/${post.routeName}`}
                    className="inline-flex items-center text-founders-fire font-medium text-base py-2"
                  >
                    Read More
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Blog Posts Yet</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
