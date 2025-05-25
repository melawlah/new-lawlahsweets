import React from "react";
import CategoryGallery from "../Components/CategoryGallery";

const tabs = [
  { name: "Curated Design", key: "curated" },
  { name: "Birthday Cakes", key: "birthday" },
  { name: "Baptism Cakes", key: "baptism" },
  { name: "Wedding Cakes", key: "wedding" },
];

// Sample data for images
// const imagesData = {
//   curated: [
//     "curated1.jpg",
//     "curated2.jpg",
//     "curated3.jpg",
//     "curated4.jpg",
//     "curated5.jpg",
//     "curated6.jpg",
//     "curated7.jpg",
//     "curated8.jpg",
//   ],
//   birthday: [
//     "birthday1.jpg",
//     "birthday2.jpg",
//     "birthday3.jpg",
//     "birthday4.jpg",
//     "birthday5.jpg",
//     "birthday6.jpg",
//     "birthday7.jpg",
//     "birthday8.jpg",
//   ],
//   baptism: [
//     "baptism1.jpg",
//     "baptism2.jpg",
//     "baptism3.jpg",
//     "baptism4.jpg",
//     "baptism5.jpg",
//     "baptism6.jpg",
//     "baptism7.jpg",
//     "baptism8.jpg",
//   ],
//   wedding: [
//     "wedding1.jpg",
//     "wedding2.jpg",
//     "wedding3.jpg",
//     "wedding4.jpg",
//     "wedding5.jpg",
//     "wedding6.jpg",
//     "wedding7.jpg",
//     "wedding8.jpg",
//   ],
// };

const CelebrationCakes = () => {
  return (
    <CategoryGallery
      title="Celebration Cakes"
      description="Explore our variety of delightful and carefully curated cakes for all your special occasions."
      tabs={tabs}
      
      // imagesData={imagesData}
    />
  );
};

export default CelebrationCakes;
