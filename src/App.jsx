// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import Layout from './layouts/Layout';

// Pages
import BlogPage from './pages/BlogPage';
import ProjectsPage from './pages/ProjectsPage'
import About from './pages/About'
import NewsLetterPage from './pages/NewsLetterPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><BlogPage /></Layout>} />
        <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/newsletter" element={<Layout><NewsLetterPage /></Layout>} />
        {/* <Route path="/blog/:id" element={<Layout><BlogPostPage /></Layout>} /> */}
      </Routes>
    </Router>
  );
}

export default App;