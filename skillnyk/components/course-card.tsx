import React from 'react';

const CourseCard = ({ 
  mainTitle, 
  subTitle, 
  description, 
  buttonTexts 
}) => {
  return (
    <div className="border p-6">
      <div className="flex space-x-4 mb-4">
        {buttonTexts.map((text, index) => (
          <button 
            key={index} 
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            {text}
          </button>
        ))}
      </div>
      <div className="text-left">
        <h2 className="text-2xl font-bold">{mainTitle}</h2>
        <h3 className="text-2xl font-bold">{subTitle}</h3>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
