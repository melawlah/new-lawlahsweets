// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Footer from '../Components/Footer';

// const categories = {
//   all: [
//     { name: "Celebration Cakes", link: "/product/celebrationCake", category: "birthday", src: '/assets/celebration-cakes.png', isTwoTier: true, frosting: 'Buttercream' },
//     { name: "Wedding Cakes", link: "/product/weddingCake", category: "wedding", src: '/assets/wedding-cakes.png', isTwoTier: true, frosting: 'Fondant' },
//     { name: "Cupcakes", link: "/product/cupcakes", category: "birthday", src: '/assets/cupcakes.png', isTwoTier: false, frosting: 'Whipped Cream' },
//     { name: "Pastries", link: "/product/pastries", category: "baptism", src: '/assets/pastries.png', isTwoTier: false, frosting: 'Buttercream' },
//     { name: "Corporate Cake", link: "/product/corporateCake", category: "corporate", src: '/assets/corporate-cake.png', isTwoTier: false, frosting: 'Whipped Cream' },
//     { name: "Additional Cake 1", link: "/product/cake1", category: "birthday", src: '/assets/celebration-cakes.png', isTwoTier: true, frosting: 'Buttercream' },
//     { name: "Additional Cake 2", link: "/product/cake2", category: "wedding", src: '/assets/wedding-cakes.png', isTwoTier: true, frosting: 'Fondant' },
//     { name: "Additional Cake 3", link: "/product/cake3", category: "baptism", src: '/assets/pastries.png', isTwoTier: false, frosting: 'Whipped Cream' },
//     { name: "Additional Cake 4", link: "/product/cake4", category: "corporate", src: '/assets/corporate-cake.png', isTwoTier: false, frosting: 'Whipped Cream' },
//     { name: "Additional Cake 5", link: "/product/cake5", category: "birthday", src: '/assets/celebration-cakes.png', isTwoTier: true, frosting: 'Buttercream' },
//     { name: "Additional Cake 6", link: "/product/cake6", category: "wedding", src: '/assets/wedding-cakes.png', isTwoTier: true, frosting: 'Fondant' },
//     { name: "Additional Cake 7", link: "/product/cake7", category: "baptism", src: '/assets/pastries.png', isTwoTier: false, frosting: 'Whipped Cream' },
//     { name: "Additional Cake 8", link: "/product/cake8", category: "corporate", src: '/assets/corporate-cake.png', isTwoTier: false, frosting: 'Whipped Cream' },
//     { name: "Additional Cake 9", link: "/product/cake9", category: "birthday", src: '/assets/celebration-cakes.png', isTwoTier: true, frosting: 'Buttercream' },
//     { name: "Additional Cake 10", link: "/product/cake10", category: "wedding", src: '/assets/wedding-cakes.png', isTwoTier: true, frosting: 'Fondant' },
//   ],
// };

// const tabs = [
//   { name: "All", key: "all" },
//   { name: "Birthday Cakes", key: "birthday" },
//   { name: "Wedding Cakes", key: "wedding" },
//   { name: "Corporate Cakes", key: "corporate" },
//   { name: "Baptism Cakes", key: "baptism" },
// ];

// const CategoryGallery = () => {
//   const [activeTab, setActiveTab] = useState("all");
//   const [currentPage, setCurrentPage] = useState(1);

//   const filteredCategories = activeTab === "all"
//     ? categories.all
//     : categories.all.filter(item => item.category === activeTab);

//   const cardsPerPageMobile = 5;
//   const cardsPerPageDesktop = 8;
//   const cardsPerPage = window.innerWidth < 640 ? cardsPerPageMobile : cardsPerPageDesktop;
//   const totalPages = Math.ceil(filteredCategories.length / cardsPerPage);
//   const startIndex = (currentPage - 1) * cardsPerPage;
//   const endIndex = startIndex + cardsPerPage;
//   const currentCards = filteredCategories.slice(startIndex, endIndex);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="flex-grow py-16 px-4 flex items-center justify-center">
//         <div className="max-w-6xl w-full">
//           <h2 className="text-center text-4xl font-medium text-black mb-8">
//             Celebration Cakes
//           </h2>

//           <div className="flex flex-wrap justify-center mb-8">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.key}
//                 className={`px-4 py-2 mx-2 mb-2 rounded-lg transition-colors duration-300 ${
//                   activeTab === tab.key
//                     ? "bg-deepPink text-white"
//                     : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
//                 }`}
//                 onClick={() => setActiveTab(tab.key)}
//               >
//                 {tab.name}
//               </button>
//             ))}
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//             {/* {currentCards.map((category) => (
//               <Link
//                 key={category.name}
//                 to={{
//                   pathname: category.link,
//                   state: {
//                     testData: 'Hello from test',
//                     // imageUrl: category.src,
//                     // isTwoTier: category.isTwoTier,
//                     // frosting: category.frosting,
//                   },
//                 }}
//                 className="group bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
//               >
//                 <div className="text-center">
//                   <img
//                     src={category.src}
//                     alt={category.name}
//                     className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                     {category.name}
//                   </h3>
//                 </div>
//               </Link>
//             ))} */}
//             {currentCards.map((category) => (
//               <Link
//                 key={category.name}
//                 to={category.link}
//                 state={{
//                   imageUrl: category.src,
//                   isTwoTier: category.isTwoTier,
//                   frosting: category.frosting,
//                 }}
//                 className="group bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
//               >
//                 <div className="text-center">
//                   <img
//                     src={category.src}
//                     alt={category.name}
//                     className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                     {category.name}
//                   </h3>
//                 </div>
//               </Link>
//             ))}

//           </div>

//           {totalPages > 1 && (
//             <div className="flex justify-center mt-8">
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                 <button
//                   key={page}
//                   className={`px-3 py-1 mx-1 rounded-lg transition-colors duration-300 ${
//                     currentPage === page
//                       ? "bg-deepPink text-white"
//                       : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
//                   }`}
//                   onClick={() => handlePageChange(page)}
//                 >
//                   {page}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CategoryGallery;


// CategoryGallery.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from '../Components/Footer';

const categories = {
  all: [
    { name: "Princess Themed Birthday Cake", link: "/product/celebrationCake", category: "birthday", src: 'https://res.cloudinary.com/lawlah/image/upload/v1745849752/birthday-cake-two_rcizoz.png', isTwoTier: true, frosting: 'Fondant', description: "Celebrate your little princess with our exquisitely crafted, fondant princess-themed birthday cake. You can personalize the color, flavour and filling using the options below. If you'd prefer a different color in place of the gold tiara and decorations, simply leave us a note in the 'Additional Notes'. We can't wait to bring your vision to life."},
    { name: "Stripe and Ball Themed Birthday Cake", link: "/product/celebrationCake", category: "birthday", src: 'https://res.cloudinary.com/lawlah/image/upload/v1745849752/birthday-cake-one_nix0bq.png', isTwoTier: false, frosting: 'Buttercream', description: "Celebrate in style with our beautifully crafted, playful stripes and balls cake, a true masterpiece, perfect for those looking to add a fun twist to their adult birthday celebration. You can personalize the color, flavour and filling using the options below. If you'd prefer a different color in place of the decorations, simply leave us a note in the 'Additional Notes'. We can't wait to bring your vision to life." },
    { name: "Butterfly Themed Birthday Cake", link: "/product/celebrationCake", category: "birthday", src: 'https://res.cloudinary.com/lawlah/image/upload/v1745850492/birthday-cake-3_ttino5.png', isTwoTier: false, frosting: 'Buttercream', description: "Spread your wings and celebrate in style with our beautifully crafted butterfly-themed cake, perfect for both young and mature celebrations alike.. You can personalize the color, flavour and filling using the options below. If you'd prefer a different color in place of the decorations, simply leave us a note in the 'Additional Notes'. We can't wait to bring your vision to life." },
    { name: "Floral Themed Wedding Cake", link: "/product/celebrationCake", category: "wedding", src: 'https://res.cloudinary.com/lawlah/image/upload/v1745849752/wedding-cake-one_1_xrwqvm.png', isTwoTier: true, frosting: 'Fondant', description: "A celebration of love and beauty. Our Floral Themed Wedding Cake is a stunning masterpiece, designed to complement the elegance of your special day. You can personalize the color, flavour and filling using the options below. If you'd prefer a different color in place of the decorations, simply leave us a note in the 'Additional Notes'. We can't wait to bring your vision to life." },
    { name: "African Print Themed Engagement Cake", link: "/product/celebrationCake", category: "wedding", src: 'https://res.cloudinary.com/lawlah/image/upload/v1745849752/wedding-cake-two_d6hvvf.png', isTwoTier: false, frosting: 'Fondant', description: "Celebrate your love with a touch of cultural elegance. Our African Print Themed Engagement Cake is a beautiful blend of tradition and sweetness, perfect for marking the beginning of your forever. You can personalize the color, flavour and filling using the options below. If you'd prefer a different color in place of the decorations, simply leave us a note in the 'Additional Notes'. We can't wait to bring your vision to life." },
    { name: "Eru Iyawo Themed Engagement Cake", link: "/product/celebrationCake", category: "wedding", src: 'https://res.cloudinary.com/lawlah/image/upload/v1745849931/wedding-cake-3_uc2kqe.png', isTwoTier: true, frosting: 'Fondant', description: "Celebrate love, tradition, and the journey ahead with our Eru Iyawo Themed Engagement Cake, a perfect blend of cultural elegance and sweet moments. You can personalize the color, flavour and filling using the options below. If you'd prefer a different color in place of the decorations, simply leave us a note in the 'Additional Notes'. We can't wait to bring your vision to life." },
    { name: "School Association Themed Cake", link: "/product/celebrationCake", category: "corporate", src: 'https://res.cloudinary.com/lawlah/image/upload/v1745849752/corporate-cake_n7jiwn.png', isTwoTier: false, frosting: 'Buttercream', description:"Commemorate success and teamwork with our School Association Themed Cake, a perfect blend of professionalism and celebration for your organization’s special occasion. You can personalize the color, flavour and filling using the options below. If you'd prefer a different color in place of the decorations, simply leave us a note in the 'Additional Notes'. We can't wait to bring your vision to life." },
    { name: "Floral Baptism Cake", link: "/product/celebrationCake", category: "baptism", src: 'https://res.cloudinary.com/lawlah/image/upload/v1745849752/baptism-cake_1_mmktn6.png', isTwoTier: true, frosting: 'Buttercream', description: "Celebrate new beginnings with our delicate Floral Baptism Cake, an elegant symbol of purity, love, and faith for your little one's special day. You can personalize the color, flavour and filling using the options below. If you'd prefer a different color in place of the decorations, simply leave us a note in the 'Additional Notes'. We can't wait to bring your vision to life." },
  ],
};

const tabs = [
  { name: "All", key: "all" },
  { name: "Birthday Cakes", key: "birthday" },
  { name: "Wedding Cakes", key: "wedding" },
  { name: "Corporate Cakes", key: "corporate" },
  { name: "Baptism Cakes", key: "baptism" },
];

const CategoryGallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCategories = activeTab === "all"
    ? categories.all
    : categories.all.filter(item => item.category === activeTab);

  const cardsPerPageMobile = 5;
  const cardsPerPageDesktop = 8;
  const cardsPerPage = window.innerWidth < 640 ? cardsPerPageMobile : cardsPerPageDesktop;
  const totalPages = Math.ceil(filteredCategories.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = filteredCategories.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-lightPink min-h-screen flex flex-col">
      <div className="flex-grow py-16 px-4 flex items-center justify-center">
        <div className="max-w-6xl w-full">
          <h2 className="text-center text-4xl font-medium text-black mb-8">
            Celebration Cakes
          </h2>

          <div className="flex flex-wrap justify-center mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`px-4 py-2 mx-2 mb-2 rounded-lg transition-colors duration-300 ${
                  activeTab === tab.key
                    ? "bg-deepPink text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {currentCards.map((category) => (
              <Link
                key={category.name}
                to={category.link}
                state={{
                  imageUrl: category.src,
                  isTwoTier: category.isTwoTier,
                  frosting: category.frosting,
                  name: category.name,
                  desc: category.description
                }}
                // className="pointer-events-none cursor-default group bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
                className="group bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="text-center">
                  <img
                    src={category.src}
                    alt={category.name}
                    className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 mx-1 rounded-lg transition-colors duration-300 ${
                    currentPage === page
                      ? "bg-deepPink text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryGallery;