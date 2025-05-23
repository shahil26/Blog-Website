import React, { useEffect, useState } from "react";
import Newsletter from "../components/projects/Newsetter.jsx";
import { fetchBlogPosts } from "../services/api";
import ProjectCard from "../components/projects/ProjectCard"; // Assuming this is the right import

const NewsLetterPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchBlogPosts(1, 3); // First page, 3 posts
        setPosts(data);
      } catch (err) {
        console.error("Failed to fetch blog posts:", err);
      }
    };

    getPosts();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-24 2xl:px-24 max-w-screen-2xl mx-auto">
      <Newsletter />

      <h2 className="text-2xl font-semibold mb-8 text-center md:text-left">
        All blog posts
      </h2>

      {/* Single grid for all posts: 1 col on small screens, 3 cols on md+ */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <ProjectCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default NewsLetterPage;
