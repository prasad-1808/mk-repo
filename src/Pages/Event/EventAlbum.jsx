import React, { useState, useEffect } from "react";

function EventAlbum() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Dynamically import all images from the `assets/photoshoot` folder
    const importImages = () => {
      const context = require.context("../../assets/images/Photoshoot/", false, /\.(jpg|png|jpe?g|svg|JPG)$/);
      console.log(context);
      return context.keys().map(context);
    };

    const loadedImages = importImages();
    setImages(loadedImages);
  }, []);

  return (
    <div className="pt-24 container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">
        Event Album
      </h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        {images.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((src, index) => (
              <li
                key={index}
                className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-4">
                  <img
                    src={src}
                    alt={`Album ${index + 1}`}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No photos found in the album.
          </p>
        )}
      </div>
    </div>
  );
}

export default EventAlbum;
