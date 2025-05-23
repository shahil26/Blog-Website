import React from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

const BlogPostCard = ({ post }) => {
  // Format the date
  const dateObj = new Date(post.published_at || post.created_at)
  const weekday = dateObj.toLocaleDateString("en-GB", { weekday: "long" })
  const rest = dateObj.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
  const formattedDate = `${weekday}, ${rest}`

  // Tailwind tag colors to choose from
  const tagColors = [
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 max-w-md">
      {/* Image */}
      <img
        src={post.social_image || "/api/placeholder/400/250"}
        alt={post.title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.src = "/api/placeholder/400/250"
        }}
      />

      {/* Content */}
      <div className="p-5 flex flex-col gap-2">
        {/* Date */}
        <p className="text-sm text-blue-600 dark:text-blue-400">{formattedDate}</p>

        {/* Title with icon link */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition">
            {post.title}
          </h3>
          <Link to={`/blog/${post.id}`} className="group">
            <ArrowUpRight className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm">{post.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3 rounded-md p-2">
          {post.tag_list &&
            post.tag_list.slice(0, 3).map((tag, index) => {
              const randomColor =
                tagColors[Math.floor(Math.random() * tagColors.length)]
              return (
                <span
                  key={index}
                  className={`text-xs font-medium px-3 py-1 rounded-full ${randomColor}`}
                >
                  {tag}
                </span>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default BlogPostCard
