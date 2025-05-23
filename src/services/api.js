// services/api.js
const API_URL = 'https://dev.to/api/articles';

// Type definitions for TypeScript (if using TS)
/**
 * @typedef {Object} BlogPost
 * @property {number} id - The post ID
 * @property {string} title - The post title
 * @property {string} description - The post description
 * @property {string} readable_publish_date - The formatted publish date
 * @property {Array<string>} tag_list - List of post tags
 * @property {Object} user - The post author
 * @property {string} user.name - The author's name
 * @property {string} social_image - URL to the post's featured image
 * @property {string} url - URL to the original post
 */

/**
 * Fetch all blog posts
 * @param {number} page - Page number for pagination
 * @param {number} perPage - Number of posts per page
 * @returns {Promise<Array<BlogPost>>} - Promise resolving to an array of blog posts
 */
export const fetchBlogPosts = async (page = 1, perPage = 9) => {
  try {
    const response = await fetch(`${API_URL}?page=${page}&per_page=${perPage}`);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

/**
 * Fetch a single blog post by ID
 * @param {number} id - The post ID
 * @returns {Promise<BlogPost>} - Promise resolving to a blog post
 */
export const fetchBlogPostById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching blog post with ID ${id}:`, error);
    throw error;
  }
};