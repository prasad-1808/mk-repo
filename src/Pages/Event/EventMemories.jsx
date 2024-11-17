import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Heart } from "lucide-react";

const EventMemories = () => {
  const [memories, setMemories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const importImages = () => {
      try {
        // Dynamically import all images from the `assets/images/Memories/` folder
        const context = require.context(
          "../../assets/images/Memories/",
          false,
          /\.(jpg|png|jpe?g|svg|JPG)$/i
        );
        const images = context.keys().map(context);
        return images;
      } catch (error) {
        console.error("Error loading images:", error);
        return [];
      }
    };

    // Event data, this can also be fetched from an API or a file
    const eventData = [
      {
        id: 1,
        eventName: "Reception",
        date: "September 10, 2023",
        place: "Sri Annai Mahal",
      },
      {
        id: 2,
        eventName: "Wedding Ceremony",
        date: "September 11, 2023",
        place: "Sri Annai Mahal",
      },
      {
        id: 3,
        eventName: "First Anniversary",
        date: "September 11, 2024",
        place: "Home",
      },
      {
        id: 4,
        eventName: "Baby Shower",
        date: "October 21, 2024",
        place: "Hotel Parijatha",
      },
    ];

    const loadedImages = importImages();

    // Combine event data and images together
    const combinedData = eventData.map((event, index) => ({
      ...event,
      imageUrl: loadedImages[index], // Link images to their corresponding event
    }));

    setMemories(combinedData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="pt-20 flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-gradient-to-br from-purple-100 to-pink-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Event Memories
          </h1>
          <p className="text-xl text-gray-600">
            Cherishing the moments that last a lifetime
          </p>
        </div>

        {memories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {memories.map((memory) => (
              <div
                key={memory.id}
                onClick={() => window.open(memory.imageUrl, "_blank")}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <img
                  src={memory.imageUrl}
                  alt={memory.eventName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{memory.eventName}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{memory.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{memory.place}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No memories found.
          </p>
        )}

        {/* <div className="mt-16 text-center">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-purple-700 transition-colors duration-300 flex items-center mx-auto">
            <Camera className="w-5 h-5 mr-2" />
            Add New Memory
          </button>
        </div> */}

        <div className="mt-16 text-center text-gray-600">
          <p className="text-lg mb-2">
            Memories are the treasures that we keep locked deep within the
            storehouse of our souls.
          </p>
          <Heart className="w-6 h-6 text-red-500 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default EventMemories;
