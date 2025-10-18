import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import armsImage from "./assets/arms.png";
import useStore from "./store";
import "./sidebar.css"; // ✅ import the new CSS file


const Sidebar = () => {
  const {
    viewMode,
    itemNameFontStyle,
    itemNameFontSize,
    itemNameFontWeight,
    propertyFontStyle,
    propertyFontSize,
    propertyFontWeight,
    buttonBorderRadius,
    buttonShadow,
    buttonAlign,
    buttonBgColor,
    buttonTextColor,
    cardCornerRadius,
    containerPadding,
    sectionBgColor,
    strokeColor,
    strokeWeight,
  } = useStore();

  const [openSection, setOpenSection] = useState(1);
  const [openMaterial, setOpenMaterial] = useState("LEATHER");
  const [selectedArm, setSelectedArm] = useState(0);
  const [selectedColor, setSelectedColor] = useState({
    name: "Leather Brown",
    hex: "#5D4a40",
  });
  const [selectedLegColor, setSelectedLegColor] = useState({
    name: "Sage Green",
    hex: "#727863",
  });

  const colors = [
    { name: "Leather Brown", hex: "#5D4a40" },
    { name: "Sage Green", hex: "#727863" },
    { name: "Forest Green", hex: "#637363" },
    { name: "Teal", hex: "#526563" },
    { name: "Dusty Plum", hex: "#695A6C" },
    { name: "Muted Lilac", hex: "#8F7D8F" },
    { name: "Deep Navy", hex: "#4C5A72" },
    { name: "Terracotta", hex: "#A45C54" },
    { name: "Burgundy", hex: "#6F3F3F" },
    { name: "Emerald", hex: "#2E6458" },
  ];

  const handleToggle = (section) =>
    setOpenSection(openSection === section ? null : section);
  const handleMaterialToggle = (material) =>
    setOpenMaterial(openMaterial === material ? null : material);

  const sidebarDynamicStyle =
    viewMode === "desktop"
      ? {
          borderRadius: `${cardCornerRadius}px`,
          padding: `${containerPadding}px`,
          fontFamily: propertyFontStyle,
        }
      : {
          borderRadius: `${cardCornerRadius}px`,
          padding: `${containerPadding}px`,
          fontFamily: propertyFontStyle,
        };

  // ✅ Reusable style object for consistent title styling
  const accordionTitleStyle = {
    fontFamily: itemNameFontStyle,
    fontSize: `${itemNameFontSize}px`,
    fontWeight: itemNameFontWeight,
  };

  return (
    <div className={`sidebar ${viewMode}`} style={sidebarDynamicStyle}>
      <h1
        className="sidebar-title"
        style={{
          fontFamily: itemNameFontStyle,
          fontSize: `${itemNameFontSize + 7}px`,
          fontWeight: itemNameFontWeight,
        }}
      >
        Cozy Lounge Chair
      </h1>

      <p
        className="sidebar-subtitle"
        style={{
          fontFamily: propertyFontStyle,
          fontSize: `${propertyFontSize}px`,
          fontWeight: propertyFontWeight,
        }}
      >
        Customize your Chair
      </p>

      <div className="sidebar-scroll">
        {/* === ARMS SECTION === */}
        <div
          className="accordion-section"
          style={{
            borderTop: `${strokeWeight}px solid ${strokeColor}`,
            backgroundColor: sectionBgColor,
          }}
        >
          <button
            className="accordion-btn"
            onClick={() => handleToggle(1)}
          >
            <div className="accordion-header">
              <img src={armsImage} alt="Arm" className="accordion-img" />
              <span
                className="accordion-title"
                style={accordionTitleStyle} // ✅ Apply consistent style
              >
                1. Arms
              </span>
            </div>
            {openSection === 1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {openSection === 1 && (
            <div className="accordion-options">
              {Array(10)
                .fill(null)
                .map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedArm(index)}
                    className={`arm-option ${
                      selectedArm === index ? "selected" : ""
                    }`}
                    style={{ borderColor: strokeColor }}
                  >
                    <img
                      src={armsImage}
                      alt={`Arm option ${index + 1}`}
                      className="arm-option-img"
                    />
                  </button>
                ))}
            </div>
          )}
        </div>

        {/* === ARMS FINISH === */}
        <div
          className="accordion-section"
          style={{
            borderTop: `${strokeWeight}px solid ${strokeColor}`,
            backgroundColor: sectionBgColor,
          }}
        >
          <button
            className="accordion-btn"
            onClick={() => handleToggle(2)}
          >
            <div className="accordion-header">
              <div
                className="color-preview"
                style={{ backgroundColor: selectedColor.hex }}
              ></div>
              <div className="accordion-text">
                {/* ✅ FIXED: Added style prop */}
                <span className="accordion-title" style={accordionTitleStyle}>2. Arms Finish</span>
                <p className="accordion-subtitle">{selectedColor.name}</p>
              </div>
            </div>
            {openSection === 2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {openSection === 2 && (
            <div className="material-options">
              {["LEATHER", "STEEL", "ALUMINUM"].map((material) => (
                <div key={material}>
                  <button
                    className="material-btn"
                    onClick={() => handleMaterialToggle(material)}
                  >
                    <h4>{material}</h4>
                    {openMaterial === material ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>

                  {openMaterial === material && (
                    <div className="color-grid">
                      {colors.map((color) => (
                        <button
                          key={color.name + material}
                          className={`color-btn ${
                            selectedColor.hex === color.hex ? "selected" : ""
                          }`}
                          onClick={() => setSelectedColor(color)}
                          style={{
                            backgroundColor: color.hex,
                            borderColor: strokeColor,
                          }}
                        ></button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* === LEGS FINISH === */}
        <div
          className="accordion-section"
          style={{
            borderTop: `${strokeWeight}px solid ${strokeColor}`,
            backgroundColor: sectionBgColor,
          }}
        >
          <button
            className="accordion-btn"
            onClick={() => handleToggle(3)}
          >
            <div className="accordion-header">
              <div
                className="color-preview"
                style={{ backgroundColor: selectedLegColor.hex }}
              ></div>
              <div className="accordion-text">
                {/* ✅ FIXED: Added style prop */}
                <span className="accordion-title" style={accordionTitleStyle}>3. Legs Finish</span>
                <p className="accordion-subtitle">{selectedLegColor.name}</p>
              </div>
            </div>
            {openSection === 3 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {openSection === 3 && (
            <div className="color-grid">
              {colors.map((color) => (
                <button
                  key={color.name + "-leg"}
                  className={`color-btn ${
                    selectedLegColor.hex === color.hex ? "selected" : ""
                  }`}
                  onClick={() => setSelectedLegColor(color)}
                  style={{
                    backgroundColor: color.hex,
                    borderColor: strokeColor,
                  }}
                ></button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className="sidebar-footer"
        style={{
          borderTop: `${strokeWeight}px solid ${strokeColor}`,
        }}
      >
        <div className="price-info">
          <span className="price-label">Product Price</span>
          <div>
            <span className="price-main">$200</span>
            <span className="price-old">$245</span>
          </div>
        </div>
        <div className="add-btn-container" style={{ justifyContent: buttonAlign }}>
          <button
            className="add-to-cart-btn"
            style={{
              backgroundColor: buttonBgColor,
              color: buttonTextColor,
              borderRadius: `${buttonBorderRadius}px`,
              boxShadow: buttonShadow,
              fontFamily: itemNameFontStyle,
              fontSize: `${itemNameFontSize}px`,
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
