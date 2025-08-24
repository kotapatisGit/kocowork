import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { getAllBlogRoutes } from '../config/blogRoutes';

const BlogCarousel: React.FC = () => {
  const blogPosts = getAllBlogRoutes();

  // Don't render if no blog posts
  if (blogPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-focus-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-darker text-blank-slate mb-6">
            Latest Insights
          </h2>
          <p className="text-xl md:text-2xl text-blank-slate/80 max-w-3xl mx-auto leading-relaxed">
            Discover tips, trends, and stories about modern workspaces and productivity
          </p>
        </div>

        {/* Blog Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.slice(0, 2).map((post, index) => (
            <div 
              key={post.routeName} 
              className="w-full"
            >
                  <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-full min-h-[500px]">
                    {/* Featured Image */}
                    {post.featuredImage && (
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={post.featuredImage} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className={`p-8 flex flex-col ${post.featuredImage ? 'min-h-[300px]' : 'h-full'}`}>
                      {/* Date */}
                      <div className="mb-4 flex items-center">
                        <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                        <span className="text-base text-gray-600 font-medium">
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 mb-6 text-base leading-relaxed blog-card-excerpt">
                        {post.excerpt.length > 120 
                          ? `${post.excerpt.substring(0, 120)}...` 
                          : post.excerpt
                        }
                      </p>
                      
                      {/* Read More Link - Always at bottom */}
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <a 
                          href={`/blogs/${post.routeName}`}
                          className="inline-flex items-center text-founders-fire font-medium text-base py-2"
                        >
                          Read More
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>

        {/* View All Blogs Link */}
        <div className="text-center mt-12">
          <a 
            href="/blogs"
            className="inline-flex items-center text-founders-fire hover:text-founders-fire/80 font-medium transition-colors duration-300 group text-lg"
          >
            View All Blog Posts
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
