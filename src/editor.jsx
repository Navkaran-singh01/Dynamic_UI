import React, { useState } from "react";
import { ChevronDown, RefreshCw, Download } from "lucide-react";
import useStore from "./store";
import "./Editor.css"; // Import the new CSS file

const Editor = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const fonts = ["Poppins", "Arial", "Verdana", "Georgia", "Times New Roman"];

  const {
    toggleViewMode,
    itemNameFontStyle, setItemNameFontStyle, itemNameFontSize, setItemNameFontSize, itemNameFontWeight, setItemNameFontWeight,
    propertyFontStyle, setPropertyFontStyle, propertyFontSize, setPropertyFontSize, propertyFontWeight, setPropertyFontWeight,
    buttonBorderRadius, setButtonBorderRadius, buttonShadow, setButtonShadow, buttonAlign, setButtonAlign, buttonBgColor, setButtonBgColor, buttonTextColor, setButtonTextColor,
    galleryAlignment, setGalleryAlignment, galleryImageSpacing, setGalleryImageSpacing, galleryImageBorderRadius, setGalleryImageBorderRadius,
    cardCornerRadius, setCardCornerRadius, containerPadding, setContainerPadding, sectionBgColor, setSectionBgColor,
    strokeColor, setStrokeColor, strokeWeight, setStrokeWeight,
  } = useStore();

  const shadowOptions = {
    none: 'none',
    small: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    medium: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    large: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
  };

  const handleExport = () => {
    const state = useStore.getState();
    const exportableState = {
      font: {
        itemName: { family: state.itemNameFontStyle, size: state.itemNameFontSize, weight: state.itemNameFontWeight },
        properties: { family: state.propertyFontStyle, size: state.propertyFontSize, weight: state.propertyFontWeight },
      },
      button: { borderRadius: state.buttonBorderRadius, shadow: state.buttonShadow, align: state.buttonAlign, bgColor: state.buttonBgColor, textColor: state.buttonTextColor },
      gallery: { alignment: state.galleryAlignment, spacing: state.galleryImageSpacing, borderRadius: state.galleryImageBorderRadius },
      layout: { cornerRadius: state.cardCornerRadius, padding: state.containerPadding, sectionBgColor: state.sectionBgColor },
      stroke: { color: state.strokeColor, weight: state.strokeWeight },
    };
    const jsonString = JSON.stringify(exportableState, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'styles.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="editor">
      <h2 className="editor-header">Editor</h2>

      <div className="editor-scrollable-area">
        <div className="editor-controls">
          
          {/* --- FONT SECTION --- */}
          <div className="editor-section">
            <h3 className="editor-section-heading-main">Font</h3>
            
            {/* Item Name Font */}
            <div className="control-group">
              <h4 className="editor-section-heading">Item Name</h4>
              <div className="font-family-dropdown">
                <button 
                  onClick={() => setOpenDropdown(openDropdown === 'itemNameFont' ? null : 'itemNameFont')} 
                  className="dropdown-button"
                  style={{ fontFamily: itemNameFontStyle }}
                >
                  <span>{itemNameFontStyle}</span><ChevronDown size={20} />
                </button>
                {openDropdown === 'itemNameFont' && (
                  <div className="dropdown-menu">
                    {fonts.map(f => (
                      <div 
                        key={f} 
                        onClick={() => { setItemNameFontStyle(f); setOpenDropdown(null); }} 
                        className="dropdown-item"
                        style={{ fontFamily: f }}
                      >
                        {f}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="control-group-row">
                <div className="control-row">
                  <h5 className="editor-subtitle">Font Size</h5>
                  <span className="value-display">{itemNameFontSize}px</span>
                </div>
                <input type="range" min="10" max="24" value={itemNameFontSize} onChange={(e) => setItemNameFontSize(parseInt(e.target.value, 10))} className="range-input" />
              </div>
              <div className="control-group-row">
                <div className="control-row">
                  <h5 className="editor-subtitle">Font Weight</h5>
                  <span className="value-display">{itemNameFontWeight}</span>
                </div>
                <input type="range" min="100" max="900" step="100" value={itemNameFontWeight} onChange={(e) => setItemNameFontWeight(parseInt(e.target.value, 10))} className="range-input" />
              </div>
            </div>

            {/* Property Font */}
            <div className="control-group">
              <h4 className="editor-section-heading">Properties</h4>
              <div className="font-family-dropdown">
                <button 
                  onClick={() => setOpenDropdown(openDropdown === 'propFont' ? null : 'propFont')} 
                  className="dropdown-button"
                  style={{ fontFamily: propertyFontStyle }}
                >
                  <span>{propertyFontStyle}</span><ChevronDown size={20} />
                </button>
                {openDropdown === 'propFont' && (
                  <div className="dropdown-menu">
                    {fonts.map(f => (
                      <div 
                        key={f} 
                        onClick={() => { setPropertyFontStyle(f); setOpenDropdown(null); }} 
                        className="dropdown-item"
                        style={{ fontFamily: f }}
                      >
                        {f}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="control-group-row">
                <div className="control-row">
                  <h5 className="editor-subtitle">Font Size</h5>
                  <span className="value-display">{propertyFontSize}px</span>
                </div>
                <input type="range" min="10" max="24" value={propertyFontSize} onChange={(e) => setPropertyFontSize(parseInt(e.target.value, 10))} className="range-input" />
              </div>
              <div className="control-group-row">
                <div className="control-row">
                  <h5 className="editor-subtitle">Font Weight</h5>
                  <span className="value-display">{propertyFontWeight}</span>
                </div>
                <input type="range" min="100" max="900" step="100" value={propertyFontWeight} onChange={(e) => setPropertyFontWeight(parseInt(e.target.value, 10))} className="range-input" />
              </div>
            </div>
          </div>

          {/* --- GALLERIES/IMAGES SECTION --- */}
          <div className="editor-section">
            <h2 className="editor-section-title">Galleries/Images</h2>
            <div className="control-group-column">
              <div className="control-group-row">
                <h3 className="editor-title">Gallery Alignment</h3>
                <div className="align-toggle">
                  <button onClick={() => setGalleryAlignment('flex-start')} className={`align-button ${galleryAlignment === 'flex-start' ? 'active' : ''}`}>Left</button>
                  <button onClick={() => setGalleryAlignment('center')} className={`align-button ${galleryAlignment === 'center' ? 'active' : ''}`}>Center</button>
                  <button onClick={() => setGalleryAlignment('flex-end')} className={`align-button ${galleryAlignment === 'flex-end' ? 'active' : ''}`}>Right</button>
                </div>
              </div>
              <div className="control-group-row">
                <h3 className="editor-title">Spacing Between Images</h3>
                <input type="range" min="0" max="32" value={galleryImageSpacing} onChange={e => setGalleryImageSpacing(parseInt(e.target.value))} className="range-input" />
              </div>
              <div className="control-group-row">
                <h3 className="editor-title">Image Border Radius</h3>
                <input type="range" min="0" max="24" value={galleryImageBorderRadius} onChange={e => setGalleryImageBorderRadius(parseInt(e.target.value))} className="range-input" />
              </div>
            </div>
          </div>

          {/* --- GENERAL LAYOUT SECTION --- */}
          <div className="editor-section">
            <h2 className="editor-section-title">General Layout</h2>
            <div className="control-group-column">
              <div className="control-group-row">
                <h3 className="editor-title">Card Corner Radius</h3>
                <input type="range" min="0" max="24" value={cardCornerRadius} onChange={e => setCardCornerRadius(parseInt(e.target.value))} className="range-input" />
              </div>
              <div className="control-group-row">
                <h3 className="editor-title">Container Padding</h3>
                <input type="range" min="0" max="48" value={containerPadding} onChange={e => setContainerPadding(parseInt(e.target.value))} className="range-input" />
              </div>
              <div className="control-group-row">
                <h3 className="editor-title">Section Background Color</h3>
                <input type="text" value={sectionBgColor} onChange={e => setSectionBgColor(e.target.value)} className="text-input" />
              </div>
            </div>
          </div>

          {/* --- STROKE/BORDER SECTION --- */}
          <div className="editor-section">
            <h2 className="editor-section-title">Stroke/Border</h2>
            <div className="control-group-column">
              <div className="control-group-row">
                <h3 className="editor-title">Stroke Color</h3>
                <input type="text" value={strokeColor} onChange={e => setStrokeColor(e.target.value)} className="text-input" />
              </div>
              <div className="control-group-row">
                <h3 className="editor-title">Stroke Weight</h3>
                <input type="range" min="0" max="4" value={strokeWeight} onChange={e => setStrokeWeight(parseInt(e.target.value))} className="range-input" />
              </div>
            </div>
          </div>

          {/* --- BUTTON SECTION --- */}
          <div className="editor-section">
            <h2 className="editor-section-title">Button</h2>
            <div className="control-group-column">
              <div className="control-group-row">
                <h3 className="editor-title">Border Radius</h3>
                <input type="range" min="0" max="24" value={buttonBorderRadius} onChange={(e) => setButtonBorderRadius(parseInt(e.target.value, 10))} className="range-input" />
              </div>
              <div className="control-group-row" style={{ position: 'relative' }}>
                <h3 className="editor-title">Shadow</h3>
                <button onClick={() => setOpenDropdown(openDropdown === 'shadow' ? null : 'shadow')} className="dropdown-button">
                  <span>{Object.keys(shadowOptions).find(key => shadowOptions[key] === buttonShadow) || 'custom'}</span>
                  <ChevronDown size={20} />
                </button>
                {openDropdown === 'shadow' && (
                  <div className="dropdown-menu">
                    {Object.entries(shadowOptions).map(([name, value]) => (
                      <div key={name} onClick={() => { setButtonShadow(value); setOpenDropdown(null); }} className="dropdown-item" style={{ textTransform: 'capitalize' }}>
                        {name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="control-group-row">
                <h3 className="editor-title">Alignment</h3>
                <div className="align-toggle">
                  <button onClick={() => setButtonAlign('flex-start')} className={`align-button ${buttonAlign === 'flex-start' ? 'active' : ''}`}>Left</button>
                  <button onClick={() => setButtonAlign('center')} className={`align-button ${buttonAlign === 'center' ? 'active' : ''}`}>Center</button>
                  <button onClick={() => setButtonAlign('flex-end')} className={`align-button ${buttonAlign === 'flex-end' ? 'active' : ''}`}>Right</button>
                </div>
              </div>
              <div className="control-group-row">
                <h3 className="editor-title">Background Color</h3>
                <input type="text" value={buttonBgColor} onChange={(e) => setButtonBgColor(e.target.value)} className="text-input" />
              </div>
              <div className="control-group-row">
                <h3 className="editor-title">Text Color</h3>
                <input type="text" value={buttonTextColor} onChange={(e) => setButtonTextColor(e.target.value)} className="text-input" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="editor-footer">
        <button onClick={toggleViewMode} className="footer-button">
          <RefreshCw size={16} /> Change Appearance
        </button>
        <button onClick={handleExport} className="export-button">
          <Download size={16} />
        </button>
      </div>
    </div>
  );
};

export default Editor;