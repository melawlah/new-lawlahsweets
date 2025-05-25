// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/NavBar";
// import Hero from "./Components/Hero";
// import CategorySection from "./Components/CategoriesSection";
// import TestimonialSection from "./Components/TestimonialSection";
// import AboutUs from "./Components/AboutUs";
// import VideoSection from "./Components/VideoSection";
// import ContactUsSection from "./Components/ContactUsSection";
// import Footer from "./Components/Footer";
// import CelebrationCakes from "./Pages/CelebrationCakes";
// import ProductPage from "./Pages/ProductPage";
// import HowItWorks from "./Components/HowItWorks";
// import { CartProvider } from "./contexts/CartContext";
// import CartPage from "./Pages/CartPage";
// import CheckoutPage from "./Pages/CheckoutPage";
// import OrderConfirmationPage from "./Pages/OrderConfirmationPage";
// import Cookies from "./Pages/Cookies";
// import Cupcakes from "./Pages/Cupcakes";
// import Pastries from "./Pages/Pastries";

// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <Routes>
//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 {/* Hero Section with Background */}
//                 <div className="relative bg-[url('/assets/Lawlah_Sweets_HeroSection_BG_Img.png')] bg-cover bg-center bg-no-repeat">
//                   <div className="absolute inset-0 bg-lightPink/95"></div>
//                   <div className="relative z-10">
//                       <Navbar />
//                     <Hero />
//                   </div>
//                 </div>
//                 {/* Remaining Sections */}
//                 <CategorySection />
//                 <TestimonialSection />
//                 <AboutUs />
//                 <VideoSection />
//                 <HowItWorks />
//                 <ContactUsSection />
//                 <Footer />
//               </>
//             }
//           />
//           <Route
//             path="/celebration-cakes"
//             element={
//               <>
//                 <div className="bg-lightPink/95">
//                   <Navbar />
//                   <CelebrationCakes />
//                   <Footer />
//                 </div>
              
//               </>
//             }
//           />
//           <Route
//             path="/cupcakes"
//             element={
//               <>
//                 <div className="bg-lightPink/95">
//                   <Navbar />
//                   <Cupcakes />
//                   <Footer />
//                 </div>
              
//               </>
//             }
//           />
//           <Route
//             path="/pastries"
//             element={
//               <>
//                 <div className="bg-lightPink/95">
//                   <Navbar />
//                   <Pastries />
//                   <Footer />
//                 </div>
              
//               </>
//             }
//           />
//           <Route
//             path="/cookies"
//             element={
//               <>
//                 <div className="bg-lightPink/95">
//                   <Navbar />
//                   <Cookies />
//                   <Footer />
//                 </div>
              
//               </>
//             }
//           />
      
//         <Route path="/product/:category" element={<ProductPage />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/checkout" element={<CheckoutPage />} /> {/* Add CheckoutPage route */}
//         <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
//         </Routes>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Hero from "./Components/Hero";
import CategorySection from "./Components/CategoriesSection";
import TestimonialSection from "./Components/TestimonialSection";
import AboutUs from "./Components/AboutUs";
import VideoSection from "./Components/VideoSection";
import ContactUsSection from "./Components/ContactUsSection";
import Footer from "./Components/Footer";
import CelebrationCakes from "./Pages/CelebrationCakes";
import ProductPage from "./Pages/ProductPage";
import HowItWorks from "./Components/HowItWorks";
import { CartProvider } from "./contexts/CartContext";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import OrderConfirmationPage from "./Pages/OrderConfirmationPage";
import Cookies from "./Pages/Cookies";
import Cupcakes from "./Pages/Cupcakes";
import Pastries from "./Pages/Pastries";
import CookieDetails from "./Pages/CookieDetails";
import PastryDetails from "./Pages/PastryDetails";
import CupcakeDetails from "./Pages/CupcakeDetails";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <div className="relative bg-[url('/assets/Lawlah_Sweets_HeroSection_BG_Img.png')] bg-cover bg-center bg-no-repeat">
                  <div className="absolute inset-0 bg-lightPink/95 z-0"></div>
                  <div className="relative z-10">
                    <Navbar />
                    <Hero />
                  </div>
                </div>
                <CategorySection />
                <TestimonialSection />
                <AboutUs />
                <VideoSection />
                <HowItWorks />
                <ContactUsSection />
                <Footer />
              </>
            }
          />

          {/* Product Pages */}
          <Route
            path="/celebration-cakes"
            element={
              <>
                <div className="bg-lightPink/95">
                  <Navbar />
                  <CelebrationCakes />
                  {/* <Footer /> */}
                </div>
              </>
            }
          />
          <Route
            path="/cupcakes"
            element={
              <>
                <div className="bg-lightPink/95">
                  <Navbar />
                  <Cupcakes />
                  <Footer />
                </div>
              </>
            }
          />
          <Route
            path="/pastries"
            element={
              <>
                <div className="bg-lightPink/95">
                  <Navbar />
                  <Pastries />
                  <Footer />
                </div>
              </>
            }
          />
          <Route
            path="/cookies"
            element={
              <>
                <div className="bg-lightPink/95">
                  <Navbar />
                  <Cookies />
                  <Footer />
                </div>
              </>
            }
          />
          <Route
            path="/cookie/:type"
            element={
              <>
                <div className="bg-lightPink/95">
                  <Navbar />
                  <CookieDetails />
                  <Footer />
                </div>
              </>
            }
          />
          <Route
            path="/pastries"
            element={
              <>
                <div className="bg-lightPink/95">
                  <Navbar />
                  <Pastries />
                  <Footer />
                </div>
              </>
            }
          />
          <Route
            path="/pastry/:type"
            element={
              <>
                <div className="bg-lightPink/95">
                  <Navbar />
                  <PastryDetails />
                  <Footer />
                </div>
              </>
            }
          />
          <Route
            path="/cupcake/:type"
            element={
              <>
                <div className="bg-lightPink/95">
                  <Navbar />
                  <CupcakeDetails />
                  <Footer />
                </div>
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <div>
                  <Navbar />
                  <CartPage />
                  <Footer />
                </div>
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <div>
                  <Navbar />
                  <CheckoutPage />
                  <Footer />
                </div>
              </>
            }
          />

          {/* Other Pages */}
          <Route path="/product/:category" element={<ProductPage />} />
          {/* <Route path="/cart" element={<CartPage />} /> */}
          {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          {/* <Route path="/cookie/:type" element={<CookieDetails />} /> */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

