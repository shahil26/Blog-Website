import React from "react"

const blogPosts = [
  {
    id: 1,
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    date: "Sunday, 1 Jan 2023",
    tags: ["Design", "Research", "Presentation"],
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Migrating to Linear 101",
    description:
      "Learn how to streamline software tracking: sprints, tasks, and bug tracking, features, and more.",
    date: "Sunday, 1 Jan 2023",
    tags: ["Design", "Research"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been the shift to make integration easier, faster, and more scalable.",
    date: "Sunday, 1 Jan 2023",
    tags: ["Design", "Research"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Grid system for better Design User Interface",
    description:
      "A grid system is a design tool used to structure content on a page. It helps maintain alignment and consistency.",
    date: "Sunday, 1 Jan 2023",
    tags: ["Design", "Interface"],
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
  },
]

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12 px-4 lg:px-24">
      <div className="border-t border-b py-8 mb-10">
        <h1 className="w-full text-6xl sm:text-5xl md:text-6xl lg:text-9xl font-extrabold text-center">
          THE BLOG
        </h1>
      </div>

      <h2 className="text-2xl font-semibold mb-8">Recent blog posts</h2>

      {/* Large screen layout */}
      <div className="hidden lg:flex gap-8 mb-16">
        {/* Left single post */}
        <div className="w-1/2 flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="w-full h-72 object-cover"
            loading="lazy"
          />
          <div className="p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              {blogPosts[0].date}
            </p>
            <h3 className="text-xl font-semibold mb-2">{blogPosts[0].title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {blogPosts[0].description}
            </p>
            <div className="flex flex-wrap gap-2">
              {blogPosts[0].tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right two stacked posts */}
        <div className="w-1/2 flex flex-col gap-8">
          {[blogPosts[1], blogPosts[2]].map((post) => (
            <div
              key={post.id}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-36 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  {post.date}
                </p>
                <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Medium & small screen layout */}
      <div className="lg:hidden mb-16">
        {/* First card full width */}
        <div className="w-full flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="w-full h-72 object-cover"
            loading="lazy"
          />
          <div className="p-5">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              {blogPosts[0].date}
            </p>
            <h3 className="text-xl font-semibold mb-2">{blogPosts[0].title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {blogPosts[0].description}
            </p>
            <div className="flex flex-wrap gap-2">
              {blogPosts[0].tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Second and third cards in a row on md, stacked on small */}
        <div className="flex flex-col md:flex-row md:gap-8 mb-8">
          {[blogPosts[1], blogPosts[2]].map((post) => (
            <div
              key={post.id}
              className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-36 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  {post.date}
                </p>
                <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fourth Card – same for all screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <img
          src={blogPosts[3].image}
          alt={blogPosts[3].title}
          className="w-full h-72 object-cover rounded-xl"
          loading="lazy"
        />
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            {blogPosts[3].date}
          </p>
          <h3 className="text-2xl font-semibold mb-2">{blogPosts[3].title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {blogPosts[3].description}
          </p>
          <div className="flex flex-wrap gap-2">
            {blogPosts[3].tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
