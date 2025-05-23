// components/blog/BlogList.js
import React, { useState, useEffect } from "react"
import { fetchBlogPosts } from "../../services/api"
import BlogPostCard from "./BlogPostCard"
import {
  ArrowBigRight,
  ArrowLeft,
  ArrowRight,
  ArrowRightFromLine,
} from "lucide-react"

const BlogList = ({ filter }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const postsPerPage = 6

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true)
        const data = await fetchBlogPosts(currentPage, postsPerPage)
        setPosts(data)
        setTotalPages(3)
        setLoading(false)
      } catch (err) {
        setError("Failed to load blog posts. Please try again later.")
        setLoading(false)
      }
    }

    loadPosts()
  }, [currentPage])

  const filteredPosts = posts.filter((post) => {
    const categoryMatch =
      filter.category === "All" ||
      (post.tag_list &&
        post.tag_list.some((tag) =>
          tag.toLowerCase().includes(filter.category.toLowerCase())
        ))

    const searchMatch =
      !filter.searchTerm ||
      post.title.toLowerCase().includes(filter.searchTerm.toLowerCase()) ||
      post.description
        .toLowerCase()
        .includes(filter.searchTerm.toLowerCase()) ||
      (post.tag_list &&
        post.tag_list.some((tag) =>
          tag.toLowerCase().includes(filter.searchTerm.toLowerCase())
        ))

    return categoryMatch && searchMatch
  })

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 dark:border-blue-400"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900 text-red-800 dark:text-red-300 p-4 rounded-lg text-center max-w-2xl mx-auto">
        {error}
      </div>
    )
  }

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-16 dark:bg-gray-900 dark:text-gray-300">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
          No posts found
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Try adjusting your search or filter to find what you're looking for.
        </p>
      </div>
    )
  }

  return (
    <div className="py-8 dark:bg-gray-900 dark:text-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <nav className="flex items-center space-x-2">
          <div className="display flex items-center gap-2">
            <ArrowLeft />
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md ${
                currentPage === 1
                  ? "text-gray-400 bg-gray-100 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500"
                  : "text-gray-700 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              Previous
            </button>
          </div>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === index + 1
                  ? "text-white bg-blue-600 dark:bg-blue-500"
                  : "text-gray-700 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <div className="display flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md  ${
                currentPage === totalPages
                  ? "text-gray-400 bg-gray-100 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500"
                  : "text-gray-700 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              Next
            </button>
            <ArrowRight />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default BlogList
