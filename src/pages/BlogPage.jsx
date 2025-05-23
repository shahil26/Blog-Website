import React, { useState } from 'react';
import Hero from '../components/blog/Hero';
import BlogFilter from '../components/blog/BlogFilter';
import BlogList from '../components/blog/BlogList';

const BlogPage = () => {
  const [filter, setFilter] = useState({ category: 'All', searchTerm: '' });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <Hero />
      <BlogFilter onFilterChange={handleFilterChange} />
      <div className="container mx-auto px-6 lg:px-16 py-8">
        <BlogList filter={filter} />
      </div>
    </div>
  );
};

export default BlogPage;
