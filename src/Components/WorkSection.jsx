import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WorkSection.css";

const WorkSection = () => {
  const [activeCategory, setActiveCategory] = useState("Everything");

  const projects = [
    {
      id: 1,
      title: "Kosher - Hair Care Tools",
      categories: ["2D"],
      image: "/Kosher/cover6.png",
      url: "/kosherwave",
    },
    {
      id: 2,
      title: "KhanaBadosh Brand Identity",
      categories: ["2D"],
      image: "/KhanabadoshID/kbidwork.png",
      url: "/khanabadosh-brand-id",
    },
    {
      id: 3,
      title: "2D Digital Drawing",
      categories: ["2D"],
      image: "2D/P4.png",
      url: "/2d-digital-drawing",
    },
    {
      id: 4,
      title: "Jugaad 3D Animaton",
      categories: ["3D", "Animation"],
      image: "Jugaad/JugaadBanner.png",
      url: "/jugaad",
    },
    {
      id: 5,
      title: "Jojo Gymkhana 2D Animation",
      categories: ["2D", "Animation"], // ✅ belongs to both
      image: "/Jojo2D/jojocover.png",
      url: "/jojo-gym-2d",
    },
    {
      id: 6,
      title: "SABAR Comic",
      categories: ["2D", "Animation"], // ✅ belongs to both
      image: "/Sabar/sabarcover.png",
      url: "/sabar",
    },
    {
      id: 7,
      title: "Khanabadosh Logo Animation",
      categories: ["2D", "Animation"], // ✅ belongs to both
      image: "/KhanabadoshID/KhanaBadoshCover.png",
      url: "/khanabadosh-logo-animaton",
    },
  ];

  const categories = ["Everything", "2D", "3D", "Animation"];

  const filteredProjects =
    activeCategory === "Everything"
      ? projects
      : projects.filter((project) => project.categories.includes(activeCategory));

  const handlePrevCategory = () => {
    const currentIndex = categories.indexOf(activeCategory);
    const prevIndex = (currentIndex - 1 + categories.length) % categories.length;
    setActiveCategory(categories[prevIndex]);
  };

  const handleNextCategory = () => {
    const currentIndex = categories.indexOf(activeCategory);
    const nextIndex = (currentIndex + 1) % categories.length;
    setActiveCategory(categories[nextIndex]);
  };

  const getCategoryIcon = (category) => {
    const icons = {
      Everything: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="ws-category-icon">
          <path d="M12 2L2 7v10c0 1.1.9 2 2 2h16c1.11 0 2-.9 2-2V7l-10-5zM12 4.84L19 8.16V17h-2v-6h-3v6h-4v-6H7v6H5V8.16L12 4.84z" />
        </svg>
      ),
      "2D": (
        <svg viewBox="0 0 24 24" fill="currentColor" className="ws-category-icon">
          <path d="M20 3H4c-1.1 0-1.99.9-1.99 2L2 19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM4 6h16v2H4V6zm0 5h16v8H4v-8z" />
          <circle cx="6.5" cy="13.5" r="1" />
          <circle cx="9.5" cy="13.5" r="1" />
          <circle cx="12.5" cy="13.5" r="1" />
        </svg>
      ),
      Animation: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="ws-category-icon">
          <path d="M8 5v14l11-7z" />
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      "3D": (
        <svg viewBox="0 0 24 24" fill="currentColor" className="ws-category-icon">
          <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44C3.21 17.21 3 16.88 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z" />
          <polyline points="3.29,7 12,12.01 20.71,7" fill="none" stroke="white" strokeWidth="1" />
          <line x1="12" y1="22" x2="12" y2="12" fill="none" stroke="white" strokeWidth="1" />
        </svg>
      ),
    };
    return icons[category];
  };

  return (
    <div className="ws-work-container" id="Work">
      <div className="ws-bg-pattern">
        <div className="ws-p-diamond ws-t-l">
          <img src="/Assets/Decor.svg" alt="Diamond decoration" />
        </div>
        <div className="ws-p-diamond ws-t-r">
          <img src="/Assets/Decor.svg" alt="Diamond decoration" />
        </div>
        <div className="ws-p-diamond ws-b-l">
          <img src="/Assets/Decor.svg" alt="Diamond decoration" />
        </div>
        <div className="ws-p-diamond ws-b-r">
          <img src="/Assets/Decor.svg" alt="Diamond decoration" />
        </div>
      </div>

      <div className="ws-browser-frame">
        {/* Browser Header */}
        <div className="ws-browser-header">
          <div className="ws-browser-controls">
            <div className="ws-control-btn ws-close"></div>
            <div className="ws-control-btn ws-minimize"></div>
            <div className="ws-control-btn ws-maximize"></div>
          </div>

          <div className="ws-nav-arrows">
            <button className="ws-nav-arrow" onClick={handlePrevCategory} aria-label="Previous category">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
              </svg>
            </button>
            <button className="ws-nav-arrow" onClick={handleNextCategory} aria-label="Next category">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </button>
          </div>

          <div className="ws-address-bar">
            <svg className="ws-folder-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z" />
            </svg>
            <span className="ws-page-title">Work</span>
          </div>
        </div>

        <div className="ws-main-content">
          {/* Sidebar */}
          <div className="ws-sidebar">
            <div className="ws-sidebar-nav">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`ws-category-button ${activeCategory === category ? "ws-active" : ""}`}
                  aria-pressed={activeCategory === category}
                >
                  {getCategoryIcon(category)}
                  <span className="ws-category-text">{category}</span>
                  {category !== "Everything" && (
                    <span className="ws-category-count">
                      {projects.filter((p) => p.categories.includes(category)).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="ws-content-area">
            <div className="ws-project-grid">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  to={project.url}
                  className="ws-project-card"
                  aria-label={`View ${project.title} project`}
                >
                  <div className="ws-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="ws-project-image"
                      loading="lazy"
                    />
                    <div className="ws-overlay">
                      <h3 className="ws-overlay-title">{project.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="ws-empty-state">
                <div className="ws-empty-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="ws-empty-title">No projects found</h3>
                <p className="ws-empty-text">Try selecting a different category</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
