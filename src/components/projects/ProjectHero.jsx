import React, { useEffect, useState } from "react"
import { fetchBlogPosts } from "../../services/api"
import ProjectCard from "./ProjectCard"

const ProjectHero = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchBlogPosts(1, 5) // First page, 5 posts
        setPosts(data)
      } catch (err) {
        console.error("Failed to fetch blog posts:", err)
      }
    }

    getPosts()
  }, [])

  const formatGridPattern = (posts) => {
    const formatted = []
    for (let i = 0; i < posts.length; i++) {
      if (i % 5 === 0 && i + 1 < posts.length) {
        formatted.push([posts[i], posts[i + 1]])
      } else if (i % 5 === 2) {
        formatted.push([posts[i]])
      } else if (i % 5 === 3 && i + 1 < posts.length) {
        formatted.push([posts[i], posts[i + 1]])
      }
    }
    return formatted
  }

  const layout = formatGridPattern(posts)

  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-24 2xl:px-24 max-w-screen-2xl mx-auto">
      <div className="border-t border-b py-8 mb-10">
        <h1 className="w-full text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center">
          PROJECTS
        </h1>
      </div>

      <h2 className="text-2xl font-semibold mb-8 text-center md:text-left">
        List Project
      </h2>

      <div className="space-y-10">
        {layout.map((row, index) => (
          <div
            key={index}
            className={`grid gap-6 ${
              row.length === 1
                ? "grid-cols-1"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
            }`}
          >
            {row.map((post) => (
              <ProjectCard key={post.id} post={post} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectHero
