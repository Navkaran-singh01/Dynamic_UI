import React, { useState } from "react";
import cabinetImage from "./assets/cabinet.png";
import sideImage from "./assets/sidepic.png";
import Editor from "./editor";
import Sidebar from "./sidebar";
import useStore from "./store";
import "./App.css";

// --- Reusable Thumbnail Component ---
const Thumbnail = ({ src, alt, isSelected, onClick, borderRadius }) => (
  <div
    className={`thumbnail ${isSelected ? "selected" : ""}`}
    onClick={onClick}
    style={{ borderRadius: `${borderRadius}px` }} // ✅ dynamic radius
  >
    <img
      src={src}
      alt={alt}
      className="thumbnail-img"
      style={{ borderRadius: `${borderRadius}px` }} // ✅ also for image corners
    />
  </div>
);

// --- Main Component ---
function App() {
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  // Zustand variables
  const {
    viewMode,
    propertyFontStyle,
    propertyFontSize,
    propertyFontWeight,
    galleryAlignment,
    galleryImageSpacing,
    galleryImageBorderRadius, // ✅ used now
  } = useStore();

  return (
    <div
      className="app-container"
      style={{
        fontFamily: propertyFontStyle,
        fontSize: `${propertyFontSize}px`,
        fontWeight: propertyFontWeight,
      }}
    >
      <div className="app-inner">
        <Editor />

        <div
          className={
            viewMode === "desktop" ? "content-desktop" : "content-mobile"
          }
        >
          {viewMode === "desktop" ? (
            <>
              {/* --- Desktop --- */}
              <div className="desktop-view">
                <div
                  className="thumbnail-column"
                  style={{
                    gap: `${galleryImageSpacing}px`,
                    alignItems: galleryAlignment,
                  }}
                >
                  {[...Array(5)].map((_, index) => (
                    <Thumbnail
                      key={index}
                      src={sideImage}
                      alt={`Thumbnail ${index + 1}`}
                      isSelected={selectedThumbnail === index}
                      onClick={() => setSelectedThumbnail(index)}
                      borderRadius={galleryImageBorderRadius} // ✅ pass dynamic border
                    />
                  ))}
                </div>

                <div className="main-image-container">
                  <img
                    src={cabinetImage}
                    alt="Cabinet"
                    className="main-image"
                  />
                  <div className="main-image-shadow"></div>
                </div>
              </div>
              <Sidebar />
            </>
          ) : (
            <>
              {/* --- Mobile --- */}
              <div className="mobile-image-container">
                <img
                  src={cabinetImage}
                  alt="Cabinet"
                  className="mobile-cabinet"
                  style={{ borderRadius: `${galleryImageBorderRadius}px` }} // ✅ mobile image radius
                />

                <div className="mobile-thumbnails">
                  <div className="thumbnail-stack">
                    {[...Array(5)].map((_, index) => (
                      <img
                        key={index}
                        src={sideImage}
                        alt={`thumb ${index}`}
                        className="stacked-thumb"
                        style={{
                          left: `${index * 10}px`,
                          borderRadius: `${galleryImageBorderRadius}px`, // ✅ dynamic
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <Sidebar />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
