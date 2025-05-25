// import React, { useState, useContext } from 'react';
// import { ShoppingCartIcon } from '@heroicons/react/24/outline';
// import { Link, NavLink } from 'react-router-dom';
// import logo from '/assets/lawlahsweets_logo.png';
// import { CartContext } from '../contexts/CartContext';

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to control the mobile menu
//   const { cart } = useContext(CartContext);

//   // Toggle dropdown visibility
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   // Toggle mobile menu visibility
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="pt-4 bg-lightPink/80">
//       <div className="container mx-auto flex items-center justify-between px-12 sm:px-8 md:px-12">
//         {/* Logo (Link to Home) */}
//         <div>
//           <Link to="/">
//             <img src={logo} alt="Lawlah Sweets Logo" className="h-15 w-15" />
//           </Link>
//         </div>
        
//         {/* Desktop Navigation Links */}
//         <div className="hidden md:flex space-x-12 text-black font-medium text-sm">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? "text-deepPink" : "hover:text-deepPink"
//             }
//           >
//             Home
//           </NavLink>

//           {/* Dropdown for Sweet Creations */}
//           <div className="relative">
//             {/* <span
//               // href="#"
//               className="hover:text-deepPink"
//               onClick={toggleDropdown}
//             >
//               Sweet Creations
//             </span> */}
//             <button
//                 type="button"
//                 className="block text-black hover:text-deepPink"
//                 onClick={toggleDropdown}
//             >
//                 Sweet Creations
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute left-0 mt-2 w-48 bg-lightPink shadow-lg rounded-lg">
//                 <NavLink
//                   to="/celebration-cakes"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={({ isActive }) =>
//                     isActive ? "block px-4 py-2 text-deepPink" : "block px-4 py-2 text-black hover:bg-white"
//                   }
//                 >
//                   Celebration Cakes
//                 </NavLink>
//                 <NavLink
//                   to="/cupcakes"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={({ isActive }) =>
//                     isActive ? "block px-4 py-2 text-deepPink" : "block px-4 py-2 text-black hover:bg-white"
//                   }
//                 >
//                   Cupcakes
//                 </NavLink>
//                 <NavLink
//                   to="/pastries"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={({ isActive }) =>
//                     isActive ? "block px-4 py-2 text-deepPink" : "block px-4 py-2 text-black hover:bg-white"
//                   }
//                 >
//                   Pastries
//                 </NavLink>
//                 <NavLink
//                   to="/cookies"
//                   onClick={() => setIsDropdownOpen(false)}
//                   className={({ isActive }) =>
//                     isActive ? "block px-4 py-2 text-deepPink" : "block px-4 py-2 text-black hover:bg-white"
//                   }
//                 >
//                   Cookies
//                 </NavLink>
//               </div>
//             )}
//           </div>

//           <NavLink
//             to="/our-journey"
//             className={({ isActive }) =>
//               isActive ? "text-deepPink" : "hover:text-deepPink"
//             }
//           >
//             Our Journey
//           </NavLink>

//           <NavLink
//             to="/get-in-touch"
//             className={({ isActive }) =>
//               isActive ? "text-deepPink" : "hover:text-deepPink"
//             }
//           >
//             Get in Touch
//           </NavLink>
//           <NavLink to="/cart" className="relative">
//             <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-gray-900" />
//             {cart.length > 0 && (
//               <span className="absolute top-[-0.5rem] right-[-0.5rem] bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
//                 {cart.reduce((total, item) => total + item.quantity, 0)}
//               </span>
//             )}  
//           </NavLink>
//         </div>

//         {/* Place Order Button (Visible only on Mobile) */}
//         <div className="hidden md:block">
//           <NavLink
//             to="/place-order"
//             className="bg-deepPink text-white px-8 py-4 rounded-lg font-medium hover:bg-lightPink/80 hover:border-1 hover:border-deepPink hover:text-deepPink transition-all text-sm"
//           >
//             Place Order
//           </NavLink>
//         </div>

//         {/* Mobile Hamburger Icon */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-black text-2xl"
//           >
//             {isMenuOpen ? (
//               <span>&times;</span>  // Close icon when the menu is open
//             ) : (
//               <span>&#9776;</span>  // Hamburger icon when the menu is closed
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-lightPink px-8 py-4 text-xs">
//           <div className="space-y-4">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? "block text-deepPink py-2" : "block hover:text-deepPink py-2"
//               }
//             >
//               Home
//             </NavLink>
//             <div className="relative">
//               {/* <span
//                 // href="#"
//                 className="block text-black hover:text-deepPink"
//                 onClick={toggleDropdown}
//               >
//                 Sweet Creations
//               </span> */}
//               <button
//                 type="button"
//                 className="block text-black hover:text-deepPink"
//                 onClick={toggleDropdown}
//               >
//                 Sweet Creations
//               </button>

//               {isDropdownOpen && (
//                 <div className="absolute left-0 mt-2 w-48 bg-lightPink shadow-lg rounded-lg">
//                   <NavLink
//                     to="/celebration-cakes"
//                     className={({ isActive }) =>
//                       isActive ? "block px-4 py-2 text-deepPink" : "block px-4 py-2 text-black hover:bg-white"
//                     }
//                   >
//                     Celebration Cakes
//                   </NavLink>
//                   <NavLink
//                     to="/cupcakes"
//                     className={({ isActive }) =>
//                       isActive ? "block px-4 py-2 text-deepPink" : "block px-4 py-2 text-black hover:bg-white"
//                     }
//                   >
//                     Cupcakes
//                   </NavLink>
//                   <NavLink
//                     to="/pastries"
//                     className={({ isActive }) =>
//                       isActive ? "block px-4 py-2 text-deepPink" : "block px-4 py-2 text-black hover:bg-white"
//                     }
//                   >
//                     Pastries
//                   </NavLink>
//                   <NavLink
//                     to="/cookies"
//                     className={({ isActive }) =>
//                       isActive ? "block px-4 py-2 text-deepPink" : "block px-4 py-2 text-black hover:bg-white"
//                     }
//                   >
//                     Cookies
//                   </NavLink>
//                 </div>
//               )}
//             </div>
//             <NavLink
//               to="/our-journey"
//               className={({ isActive }) =>
//                 isActive ? "block text-deepPink py-2" : "block hover:text-deepPink py-2"
//               }
//             >
//               Our Journey
//             </NavLink>
//             <NavLink
//               to="/get-in-touch"
//               className={({ isActive }) =>
//                 isActive ? "block text-deepPink py-2" : "block hover:text-deepPink py-2"
//               }
//             >
//               Get in Touch
//             </NavLink>
//             <NavLink to="/cart" className="relative">
//             <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-gray-900" />
//             {cart.length > 0 && (
//               <span className="absolute top-[-0.5rem] right-[-0.5rem] bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
//                 {cart.reduce((total, item) => total + item.quantity, 0)}
//               </span>
//             )}
//           </NavLink>

//             {/* Place Order Button (Mobile Only) */}
//             <NavLink
//               to="/place-order"
//               className="block text-center bg-deepPink text-white px-4 py-2 rounded-lg font-semibold hover:bg-lightPink/80 transition-colors"
//             >
//               Place Order
//             </NavLink>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState, useContext } from 'react';
// import { ShoppingCartIcon } from '@heroicons/react/24/outline';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import logo from '/assets/lawlahsweets_logo.png';
// import { CartContext } from '../contexts/CartContext';

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { cart } = useContext(CartContext);
//   const location = useLocation();

//   // Auto-close dropdown on route change
//   React.useEffect(() => {
//     setIsDropdownOpen(false);
//     setIsMenuOpen(false);
//   }, [location.pathname]);

//   const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
//   const toggleMenu = () => setIsMenuOpen(prev => !prev);

//   return (
//     <nav className="pt-4 bg-lightPink/80 z-50 relative">
//       <div className="container mx-auto flex items-center justify-between px-12 sm:px-8 md:px-12">
//         {/* Logo */}
//         <Link to="/">
//           <img src={logo} alt="Lawlah Sweets Logo" className="h-15 w-15" />
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-12 text-black font-medium text-sm items-center">
//           <NavLink to="/" className={({ isActive }) => isActive ? "text-deepPink" : "hover:text-deepPink"}>
//             Home
//           </NavLink>

//           {/* Dropdown */}
//           <div className="relative">
//             <button
//               type="button"
//               className="text-black hover:text-deepPink"
//               onClick={toggleDropdown}
//             >
//               Sweet Creations
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute left-0 mt-2 w-48 bg-lightPink shadow-lg rounded-lg z-50">
//                 {["celebration-cakes", "cupcakes", "pastries", "cookies"].map((item) => (
//                   <NavLink
//                     key={item}
//                     to={`/${item}`}
//                     className={({ isActive }) =>
//                       isActive
//                         ? "block px-4 py-2 text-deepPink"
//                         : "block px-4 py-2 text-black hover:bg-white"
//                     }
//                   >
//                     {item.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
//                   </NavLink>
//                 ))}
//               </div>
//             )}
//           </div>

//           <NavLink to="/our-journey" className={({ isActive }) => isActive ? "text-deepPink" : "hover:text-deepPink"}>
//             Our Journey
//           </NavLink>
//           <NavLink to="/get-in-touch" className={({ isActive }) => isActive ? "text-deepPink" : "hover:text-deepPink"}>
//             Get in Touch
//           </NavLink>

//           {/* Cart */}
//           <NavLink to="/cart" className="relative">
//             <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-gray-900" />
//             {cart.length > 0 && (
//               <span className="absolute top-[-0.5rem] right-[-0.5rem] bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
//                 {cart.reduce((total, item) => total + item.quantity, 0)}
//               </span>
//             )}
//           </NavLink>
//         </div>

//         {/* Desktop "Place Order" */}
//         <div className="hidden md:block">
//           <NavLink
//             to="/place-order"
//             className="bg-deepPink text-white px-8 py-4 rounded-lg font-medium hover:bg-lightPink/80 hover:text-deepPink transition-all text-sm"
//           >
//             Place Order
//           </NavLink>
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-black text-2xl">
//             {isMenuOpen ? <span>&times;</span> : <span>&#9776;</span>}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-lightPink px-8 py-4 text-xs space-y-4">
//           <NavLink to="/" className={({ isActive }) => isActive ? "block text-deepPink" : "block hover:text-deepPink"}>
//             Home
//           </NavLink>

//           {/* Mobile Dropdown */}
//           <div>
//             <button onClick={toggleDropdown} className="block text-black hover:text-deepPink">
//               Sweet Creations
//             </button>
//             {isDropdownOpen && (
//               <div className="mt-2 space-y-2 bg-lightPink shadow-md rounded-lg z-50">
//                 {["celebration-cakes", "cupcakes", "pastries", "cookies"].map((item) => (
//                   <NavLink
//                     key={item}
//                     to={`/${item}`}
//                     className={({ isActive }) =>
//                       isActive
//                         ? "block px-4 py-2 text-deepPink"
//                         : "block px-4 py-2 text-black hover:bg-white"
//                     }
//                   >
//                     {item.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
//                   </NavLink>
//                 ))}
//               </div>
//             )}
//           </div>

//           <NavLink to="/our-journey" className={({ isActive }) => isActive ? "block text-deepPink" : "block hover:text-deepPink"}>
//             Our Journey
//           </NavLink>
//           <NavLink to="/get-in-touch" className={({ isActive }) => isActive ? "block text-deepPink" : "block hover:text-deepPink"}>
//             Get in Touch
//           </NavLink>
//           <NavLink to="/cart" className="relative block">
//             <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-gray-900 inline" />
//             {cart.length > 0 && (
//               <span className="absolute top-[-0.5rem] right-[-0.5rem] bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
//                 {cart.reduce((total, item) => total + item.quantity, 0)}
//               </span>
//             )}
//           </NavLink>

//           <NavLink
//             to="/place-order"
//             className="block text-center bg-deepPink text-white px-4 py-2 rounded-lg font-semibold hover:bg-lightPink/80 transition-colors"
//           >
//             Place Order
//           </NavLink>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState, useEffect, useContext, useRef } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '/assets/lawlahsweets_logo.png';
import { CartContext } from '../contexts/CartContext';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { cart } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  const dropdownRoutes = [
    '/celebration-cakes',
    '/cupcakes',
    '/pastries',
    '/cookies',
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location]);

  const handleDropdownClick = (path) => (e) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    navigate(path);
  };

  const isSweetCreationsActive = dropdownRoutes.includes(location.pathname);

  return (
    <nav className="pt-4 bg-lightPink/80">
      <div className="container mx-auto flex items-center justify-between px-12 sm:px-8 md:px-12">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Lawlah Sweets Logo" className="h-15 w-15" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 text-black font-medium text-sm items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-deepPink" : "hover:text-deepPink"
            }
          >
            Home
          </NavLink>

          {/* Sweet Creations Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className={`block ${
                isSweetCreationsActive ? "text-deepPink" : "text-black hover:text-deepPink"
              }`}
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              Sweet Creations
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-lightPink shadow-lg rounded-lg z-50">
                <button
                  onClick={handleDropdownClick('/celebration-cakes')}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-white"
                >
                  Celebration Cakes
                </button>
                <button
                  onClick={handleDropdownClick('/cupcakes')}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-white"
                >
                  Cupcakes
                </button>
                <button
                  onClick={handleDropdownClick('/pastries')}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-white"
                >
                  Pastries
                </button>
                <button
                  onClick={handleDropdownClick('/cookies')}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-white"
                >
                  Cookies
                </button>
              </div>
            )}
          </div>

          {/* <NavLink
            to="/our-journey"
            className={({ isActive }) =>
              isActive ? "text-deepPink" : "hover:text-deepPink"
            }
          >
            Our Journey
          </NavLink> */}
{/* 
          <a
            href="#contact"
            className={({ isActive }) =>
              isActive ? "text-deepPink" : "hover:text-deepPink"
            }
          >
            Get in Touch
          </a> */}

          <Link to="/" state={{ scrollTo: 'contact' }} className={({ isActive }) =>
              isActive ? "text-deepPink" : "hover:text-deepPink"
            }>Get in Touch</Link>

          <NavLink to="/cart" className="relative">
            <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-gray-900" />
            {cart.length > 0 && (
              <span className="absolute top-[-0.5rem] right-[-0.5rem] bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                {/* {cart.reduce((total, item) => total + item.quantity, 0)} */}
                {Array.isArray(cart) && cart.length > 0 && (
                  <span className="absolute top-[-0.5rem] right-[-0.5rem] bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                    {cart.reduce((total, item) => total + (item.quantity || 0), 0)}
                  </span>
                )}

              </span>
            )}
          </NavLink>
        </div>

        {/* Desktop Place Order Button */}
        <div className="hidden md:block">
          <NavLink
            to="/#contact"
            // className="pointer-events-none cursor-default bg-deepPink text-white px-8 py-4 rounded-lg font-medium hover:bg-lightPink/80 hover:border-1 hover:border-deepPink hover:text-deepPink transition-all text-sm"
            className="cursor-pointer bg-deepPink text-white px-8 py-4 rounded-lg font-medium hover:bg-lightPink/80 hover:border-1 hover:border-deepPink hover:text-deepPink transition-all text-sm"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen((prev) => !prev)} className="text-black text-2xl">
            {isMenuOpen ? <span>&times;</span> : <span>&#9776;</span>}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-lightPink px-8 py-4 text-xs">
          <div className="space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "block text-deepPink py-2" : "block hover:text-deepPink py-2"
              }
            >
              Home
            </NavLink>

            {/* Mobile Sweet Creations Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                className={`block ${
                  isSweetCreationsActive ? "text-deepPink" : "text-black hover:text-deepPink"
                }`}
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                Sweet Creations
              </button>

              {isDropdownOpen && (
                <div className="mt-2 w-full bg-lightPink shadow-lg rounded-lg z-50">
                  <button
                    onClick={handleDropdownClick('/celebration-cakes')}
                    className="cursor-pointer block w-full text-left px-4 py-2 text-black hover:bg-white"
                  >
                    Celebration Cakes
                  </button>
                  <button
                    onClick={handleDropdownClick('/cupcakes')}
                    className="cursor-pointer block w-full text-left px-4 py-2 text-black hover:bg-white"
                  >
                    Cupcakes
                  </button>
                  <button
                    onClick={handleDropdownClick('/pastries')}
                    className="cursor-pointer block w-full text-left px-4 py-2 text-black hover:bg-white"
                  >
                    Pastries
                  </button>
                  <button
                    className="cursor-pointer block w-full text-left px-4 py-2 text-black hover:bg-white"
                    onClick={handleDropdownClick('/cookies')}
                  >
                    Cookies
                  </button>
                </div>
              )}
            </div>

            {/* <NavLink
              to="/our-journey"
              className={({ isActive }) =>
                isActive ? "block text-deepPink py-2" : "block hover:text-deepPink py-2"
              }
            >
              Our Journey
            </NavLink> */}

            <a
              href="#contact"
              className={({ isActive }) =>
                isActive ? "block text-deepPink py-2" : "block hover:text-deepPink py-2"
              }
            >
              Get in Touch
            </a>

            <NavLink to="/cart" className="relative block">
              <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-gray-900" />
              {cart.length > 0 && (
                <span className="absolute top-[-0.5rem] right-[-0.5rem] bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </NavLink>

            <NavLink
              to="/#contact"
              // className="pointer-events-none cursor-default block text-center bg-deepPink text-white px-4 py-2 rounded-lg font-semibold hover:bg-lightPink/80 transition-colors"
              className="cursor-pointer block text-center bg-deepPink text-white px-4 py-2 rounded-lg font-semibold hover:bg-lightPink/80 transition-colors"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


