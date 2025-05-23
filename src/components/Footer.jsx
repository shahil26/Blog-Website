import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 lg:px-16">
      <div className="border-t border-gray-300 dark:border-gray-800 mt-6 pt-6">
        <div className="flex flex-col items-center space-y-3 mb-4
                        sm:flex-row sm:justify-start sm:items-center sm:space-y-0 sm:space-x-6">
          <p>&copy; {new Date().getFullYear()}</p>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Twitter</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Linkedin</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Email</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Rss feed</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Add to feedly</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
