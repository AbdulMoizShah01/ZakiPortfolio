import React, { useState } from 'react';
import '../Components/WorkSection.css';

const WorkSection = () => {
  const [activeCategory, setActiveCategory] = useState('Everything');
  const [categoryIndex, setCategoryIndex] = useState(0);
  
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Kosher - Hair Care Tools",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
      description: "Modern e-commerce platform for hair care products"
    },
    {
      id: 2,
      title: "VGB-14 T-Shirt Design",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      description: "Custom t-shirt design for gaming community"
    },
    {
      id: 3,
      title: "Character Illustration",
      category: "Illustration",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Digital character design and illustration"
    },
    {
      id: 4,
      title: "Robot Animation",
      category: "Animation",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      description: "3D robot character animation project"
    },
    {
      id: 5,
      title: "Minecraft Scene",
      category: "3D",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      description: "Custom 3D scene recreation in Minecraft style"
    },
    {
      id: 6,
      title: "SABAR Comic",
      category: "Illustration",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Comic book illustration and character design"
    },
    {
      id: 7,
      title: "VGB-14 Logo",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      description: "Logo design for gaming brand"
    },
    {
      id: 8,
      title: "Mobile App UI",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      description: "Clean mobile app interface design"
    },
    {
      id: 9,
      title: "Corporate Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
      description: "Complete brand identity package"
    },
    {
      id: 10,
      title: "Digital Portrait",
      category: "Illustration",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      description: "Realistic digital portrait illustration"
    }
  ];

  const categories = ['Everything', 'Web Design', 'Branding', 'Illustration', 'Animation', '3D'];
  
  const filteredProjects = activeCategory === 'Everything' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Handle project click - would navigate to project detail page
  const handleProjectClick = (project) => {
    console.log(`Navigating to project: ${project.title}`);
    alert(`Would navigate to ${project.title} details page`);
  };

  // Handle category navigation with arrows
  const handlePrevCategory = () => {
    const currentIndex = categories.indexOf(activeCategory);
    const prevIndex = (currentIndex - 1 + categories.length) % categories.length;
    setActiveCategory(categories[prevIndex]);
    setCategoryIndex(prevIndex);
  };

  const handleNextCategory = () => {
    const currentIndex = categories.indexOf(activeCategory);
    const nextIndex = (currentIndex + 1) % categories.length;
    setActiveCategory(categories[nextIndex]);
    setCategoryIndex(nextIndex);
  };

  // Get category icons
  const getCategoryIcon = (category) => {
    const icons = {
      'Everything': (
        <svg viewBox="0 0 24 24" fill="currentColor" className="category-icon">
          <path d="M12 2L2 7v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7l-10-5zM12 4.84L19 8.16V17h-2v-6h-3v6h-4v-6H7v6H5V8.16L12 4.84z"/>
        </svg>
      ),
      'Web Design': (
        <svg viewBox="0 0 24 24" fill="currentColor" className="category-icon">
          <path d="M20 3H4c-1.1 0-1.99.9-1.99 2L2 19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM4 6h16v2H4V6zm0 5h16v8H4v-8z"/>
          <circle cx="6.5" cy="13.5" r="1"/>
          <circle cx="9.5" cy="13.5" r="1"/>
          <circle cx="12.5" cy="13.5" r="1"/>
        </svg>
      ),
      'Branding': (
        <svg viewBox="0 0 24 24" fill="currentColor" className="category-icon">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      'Illustration': (
        <svg viewBox="0 0 24 24" fill="currentColor" className="category-icon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
      ),
      'Animation': (
        <svg viewBox="0 0 24 24" fill="currentColor" className="category-icon">
          <path d="M8 5v14l11-7z"/>
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      '3D': (
        <svg viewBox="0 0 24 24" fill="currentColor" className="category-icon">
          <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44C3.21 17.21 3 16.88 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z"/>
          <polyline points="3.29,7 12,12.01 20.71,7" fill="none" stroke="white" strokeWidth="1"/>
          <line x1="12" y1="22" x2="12" y2="12" fill="none" stroke="white" strokeWidth="1"/>
        </svg>
      )
    };
    return icons[category];
  };

  return (
    <div className="portfolio-container">
      <div className="browser-frame">
        {/* Browser Header */}
        <div className="browser-header">
          <div className="browser-controls">
            <div className="control-btn close"></div>
            <div className="control-btn minimize"></div>
            <div className="control-btn maximize"></div>
          </div>
          
          <div className="nav-arrows">
            <button className="nav-arrow" onClick={handlePrevCategory}>{"<"}</button>
            <button className="nav-arrow" onClick={handleNextCategory}>{">"}</button>
          </div>
          
          <div className="address-bar">
            <svg className="folder-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
            </svg>
            <span className="page-title">Work</span>
          </div>
        </div>

        <div className="main-content">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="sidebar-nav">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`category-button ${activeCategory === category ? 'active' : ''}`}
                >
                  {getCategoryIcon(category)}
                  <span>{category}</span>
                  {category !== 'Everything' && (
                    <span className="category-count">
                      {projects.filter(p => p.category === category).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="content-area">
            <div className="project-grid">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="project-card"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="overlay">
                      <h3 className="overlay-title">{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="empty-state">
                <div className="empty-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="empty-title">No projects found</h3>
                <p className="empty-text">Try selecting a different category</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;