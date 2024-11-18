import React, { useState, useEffect } from "react";

function EventAlbum() {
  const [images, setImages] = useState([]);
  const [modalImage, setModalImage] = useState(null); // To track the clicked image
  const [isModalOpen, setIsModalOpen] = useState(false); // To track modal state

  useEffect(() => {
    // Dynamically import all images from the `assets/photoshoot` folder
    const importImages = () => {
      const context = require.context(
        "../../assets/images/Photoshoot/",
        false,
        /\.(jpg|png|jpe?g|svg|JPG)$/
      );
      return context.keys().map(context);
    };

    const loadedImages = importImages();
    setImages(loadedImages);
  }, []);

  const openModal = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
  };

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
                    className="w-full h-48 object-cover rounded-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => openModal(src)} // Open modal on click
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

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal on clicking outside
        >
          <div
            className="bg-white rounded-lg p-4 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              &times;
            </button> */}
            <img
              src={modalImage}
              alt="Selected"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EventAlbum;
