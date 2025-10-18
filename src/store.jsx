import React from "react";
import {create} from 'zustand';

const useStore = create((set, get) => ({
  // View Mode
  viewMode: 'desktop',
  toggleViewMode: () => set({ viewMode: get().viewMode === 'desktop' ? 'mobile' : 'desktop' }),

  // Item Name Font styles
  itemNameFontStyle: 'Poppins',
  itemNameFontSize: 14,
  itemNameFontWeight: 500,
  setItemNameFontStyle: (font) => set({ itemNameFontStyle: font }),
  setItemNameFontSize: (size) => set({ itemNameFontSize: size }),
  setItemNameFontWeight: (weight) => set({ itemNameFontWeight: weight }),

  // Property Font styles
  propertyFontStyle: 'Poppins',
  propertyFontSize: 12,
  propertyFontWeight: 400,
  setPropertyFontStyle: (font) => set({ propertyFontStyle: font }),
  setPropertyFontSize: (size) => set({ propertyFontSize: size }),
  setPropertyFontWeight: (weight) => set({ propertyFontWeight: weight }),
  
  // Button styles
  buttonBorderRadius: 8,
  buttonShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  buttonAlign: 'flex-end',
  buttonBgColor: '#C77861',
  buttonTextColor: '#ffffff',
  setButtonBorderRadius: (radius) => set({ buttonBorderRadius: radius }),
  setButtonShadow: (shadow) => set({ buttonShadow: shadow }),
  setButtonAlign: (align) => set({ buttonAlign: align }),
  setButtonBgColor: (color) => set({ buttonBgColor: color }),
  setButtonTextColor: (color) => set({ buttonTextColor: color }),

  // Galleries/Images
  galleryAlignment: 'center',
  galleryImageSpacing: 16,
  galleryImageBorderRadius: 6,
  setGalleryAlignment: (align) => set({ galleryAlignment: align }),
  setGalleryImageSpacing: (spacing) => set({ galleryImageSpacing: spacing }),
  setGalleryImageBorderRadius: (radius) => set({ galleryImageBorderRadius: radius }),

  // General Layout
  cardCornerRadius: 6,
  containerPadding: 24,
  sectionBgColor: 'transparent',
  setCardCornerRadius: (radius) => set({ cardCornerRadius: radius }),
  setContainerPadding: (padding) => set({ containerPadding: padding }),
  setSectionBgColor: (color) => set({ sectionBgColor: color }),

  // Stroke/Border
  strokeColor: '#e5e7eb',
  strokeWeight: 1,
  setStrokeColor: (color) => set({ strokeColor: color }),
  setStrokeWeight: (weight) => set({ strokeWeight: weight }),
}));

export default useStore