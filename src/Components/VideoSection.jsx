import React, { useState } from 'react';

const VideoSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Open Modal
  const openModal = () => setModalOpen(true);
  // Close Modal
  const closeModal = () => setModalOpen(false);

  return (
    <section className="py-20 bg-lightPink">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Section Title */}
        <p className="text-deepPink text-sm font-semibold uppercase tracking-wider mb-3">
          Our Process
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black leading-snug mb-6">
          The Art of Crafting Sweet Perfection
        </h2>
        <p className="text-md md:text-lg text-black/70 mb-12 leading-relaxed max-w-3xl mx-auto">
          Watch how we transform the finest ingredients into delightful treats, bringing joy and sweetness to your special moments.
        </p>

        {/* Video Container */}
        <div
          className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
          onClick={openModal}
        >
          {/* Autoplay Video with Thumbnail */}
          <video
            src="https://res.cloudinary.com/lawlah/video/upload/v1745856042/cake-decorating-process-video_drjvch.mp4" // Replace with actual video path
            poster="/assets/video-thumbnail.jpg" // Replace with actual thumbnail
            className="w-full h-auto"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Play Button Overlay */}
          <button
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors duration-300"
          >
            <svg
              className="w-16 h-16 text-white transition-transform duration-300 hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-6.086-3.192A1 1 0 007 9v6a1 1 0 001.666.832l6.086-3.192a1 1 0 000-1.664z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal Video */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl mx-auto bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black/80 rounded-full p-2 transition-all"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Fullscreen Video */}
            <video
              src="https://res.cloudinary.com/lawlah/video/upload/v1745856042/cake-decorating-process-video_drjvch.mp4" // Same video as the main section
              className="w-full h-auto"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
