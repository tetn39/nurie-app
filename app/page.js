"use client";

import { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColoringPage = () => {
  const [selectedColor, setSelectedColor] = useState('#FF0000');

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const handleElementClick = (event) => {
    const element = event.target;
    const group = element.getAttribute('data-group');
    const elements = document.querySelectorAll(`[data-group='${group}']`);
    elements.forEach(el => el.setAttribute('fill', selectedColor));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-black">塗り絵アプリ</h1>
      <SketchPicker color={selectedColor} onChangeComplete={handleColorChange} />
      <svg
        width="200"
        height="200"
        viewBox="0 0 100 100"
        onClick={handleElementClick}
        className="border border-black mt-4"
      >
        <circle cx="30" cy="30" r="20" fill="#FFFFFF" stroke="#000000" strokeWidth="1" data-group="1" />
        <circle cx="70" cy="30" r="20" fill="#FFFFFF" stroke="#000000" strokeWidth="1" data-group="1" />
        <rect x="50" y="50" width="20" height="20" fill="#FFFFFF" stroke="#000000" strokeWidth="1" data-group="2" />
      </svg>
    </div>
  );
};

export default ColoringPage;