// import React, { useState } from "react";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaInstagram,
//   FaFacebook,
//   FaTwitter,
//   FaPaperclip,
// } from "react-icons/fa";

// const ContactUsSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     file: null,
//   });

//   // Handle form data change
//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "file") {
//       setFormData({ ...formData, file: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert("Thank you for reaching out! We’ll get back to you soon. 🌸");
//   };

//   return (
//     <section className="bg-lightPink py-16 relative">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-12 md:px-16">
//         {/* Left Side: Contact Form */}
//         <div className="p-8 bg-white rounded-2xl shadow-lg">
//           <h2 className="text-xl md:text-2xl lg:text-4xl font-medium text-black mb-4">
//             We're Here for You.
//           </h2>
//           <p className="text-sm text-gray-700 mb-8">
//             Have a question, need assistance, or just want to say hi? Fill out
//             the form below, and we’ll be in touch with you soon. We can’t wait to
//             hear from you. 🌸
//           </p>
//           <form onSubmit={handleSubmit} className="space-y-8">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-black font-bold text-sm"
//               >
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="w-full p-4 border border-gray-300 rounded-lg focus:outline-deepPink"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-black font-bold text-sm"
//               >
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full p-4 border border-gray-300 rounded-lg focus:outline-deepPink"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-black font-bold text-sm"
//               >
//                 Your Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 className="w-full p-4 border border-gray-300 rounded-lg focus:outline-deepPink"
//                 rows="5"
//                 required
//               />
//             </div>

//             {/* File Upload */}
//             <div>
//               <label
//                 htmlFor="file"
//                 className="block text-black font-bold text-sm mb-2"
//               >
//                 Upload a Picture (Optional)
//               </label>
//               <input
//                 type="file"
//                 id="file"
//                 name="file"
//                 onChange={handleInputChange}
//                 className="w-full p-4 border border-gray-300 rounded-lg bg-white"
//               />
//             </div>

//             <button
//               type="submit"
//               className="bg-deepPink text-white px-4 py-2 rounded-lg font-semibold hover:bg-lightPink/80 hover:border-1 hover:border-deepPink hover:text-deepPink transition-colors text-sm"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Right Side: Contact Information */}
//         <div className="space-y-8 bg-gradient-to-b from-white to-lightPink px-8 md:px-16 py-8 rounded-2xl shadow-lg">
//           <h2 className="text-xl md:text-2xl lg:text-4xl font-medium text-black mb-4">
//             We’d Love to Hear From You. 💬
//           </h2>

//           {/* Contact Info */}
//           <div className="space-y-6">
//             <div className="flex items-center space-x-4">
//               <span className="text-deepPink">
//                 <FaEnvelope className="text-xl" />
//               </span>
//               <div>
//                 <p className="text-sm text-black font-semibold">Send Us an Email</p>
//                 <a
//                   href="mailto:contact@lawlahsweet.com"
//                   className="text-md text-gray-700 hover:text-deepPink transition-colors"
//                 >
//                   contact@lawlahsweet.com
//                 </a>
//               </div>
//             </div>

//             <div className="flex items-center space-x-4">
//               <span className="text-deepPink">
//                 <FaPhoneAlt className="text-xl" />
//               </span>
//               <div>
//                 <p className="text-sm text-black font-semibold">Give Us a Call</p>
//                 <a
//                   href="tel:+1234567890"
//                   className="text-md text-gray-700 hover:text-deepPink transition-colors"
//                 >
//                   +1 416 456 7890
//                 </a>
//               </div>
//             </div>

//             <div className="flex items-center space-x-4">
//               <span className="text-deepPink">
//                 <FaMapMarkerAlt className="text-xl" />
//               </span>
//               <div>
//                 <p className="text-sm text-black font-semibold">Find Us Here</p>
//                 <p className="text-md text-gray-700">123 Sweet Lane, Cake City</p>
//               </div>
//             </div>
//           </div>

//           {/* Google Map Preview */}
//           <div className="rounded-lg overflow-hidden shadow-md">
//             <iframe
//               title="Bakery Location"
//               className="w-full h-48 rounded-lg"
//               src="https://www.google.com/maps/embed/v1/place?key=AIzaSyEXAMPLEKEY&q=123+Sweet+Lane,+Cake+City"
//               allowFullScreen
//             />
//           </div>

//           {/* Call-to-Action: Get Directions */}
//           <div className="mt-6">
//             <a
//               href="https://www.google.com/maps/place/123+Sweet+Lane,+Cake+City"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-gradient-to-r from-deepPink to-lightPink text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center space-x-2 shadow-lg"
//             >
//               <FaMapMarkerAlt />
//               <span>Get Directions</span>
//             </a>
//           </div>

//           {/* Social Media Icons with Tooltip */}
//           <div className="flex space-x-6 mt-6">
//             {[
//               {
//                 platform: "Instagram",
//                 url: "https://www.instagram.com/yourbakery",
//                 icon: <FaInstagram className="text-2xl" />,
//               },
//               {
//                 platform: "Facebook",
//                 url: "https://www.facebook.com/yourbakery",
//                 icon: <FaFacebook className="text-2xl" />,
//               },
//               {
//                 platform: "Twitter",
//                 url: "https://www.twitter.com/yourbakery",
//                 icon: <FaTwitter className="text-2xl" />,
//               },
//             ].map((social, index) => (
//               <a
//                 key={index}
//                 href={social.url}
//                 className="relative group hover:scale-110 transition-transform duration-300"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {social.icon}
//                 <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-deepPink text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   Visit us on {social.platform}!
//                 </span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUsSection;


// src/components/ContactUsSection.jsx

import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPaperclip,
} from "react-icons/fa";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
  });

  // Handle form data change
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for reaching out! We’ll get back to you soon.");
  };

  return (
    <section className="bg-lightPink py-16 relative" id="contact">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-12 md:px-16">
        {/* Left Side: Contact Form */}
        <div className="p-8 bg-white rounded-2xl shadow-lg">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-medium text-black mb-4">
            We're Here for You.
          </h2>
          <p className="text-sm text-gray-700 mb-8">
            Have a question, need assistance, or just want to say hi? Fill out
            the form below, and we’ll be in touch with you soon. We can’t wait to
            hear from you.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block text-black font-bold text-sm"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-deepPink"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-black font-bold text-sm"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-deepPink"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-black font-bold text-sm"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-deepPink"
                rows="5"
                required
              />
            </div>

            {/* File Upload */}
            <div>
              <label
                htmlFor="file"
                className="block text-black font-bold text-sm mb-2"
              >
                Upload a Picture (Optional)
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg bg-white"
              />
            </div>

            <button
              type="submit"
              className="bg-deepPink text-white px-4 py-2 rounded-lg font-semibold hover:bg-lightPink/80 hover:border-1 hover:border-deepPink hover:text-deepPink transition-colors text-sm"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="space-y-8 px-8 md:px-16 py-12">
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-black mb-4">
            We’d Love to Hear From You. 
          </h2>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <span className="text-deepPink">
                <FaEnvelope className="text-xl" />
              </span>
              <div>
                <p className="text-sm text-black font-semibold">Send Us an Email</p>
                <a
                  href="mailto:lawlahsweets@gmail.com"
                  className="text-md text-gray-700 hover:text-deepPink transition-colors"
                >
                  lawlahsweets@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-deepPink">
                <FaPhoneAlt className="text-xl" />
              </span>
              <div>
                <p className="text-sm text-black font-semibold">Give Us a Call</p>
                <a
                  href="tel:+1234567890"
                  className="text-md text-gray-700 hover:text-deepPink transition-colors"
                >
                  +1 416 456 7890
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-deepPink">
                <FaMapMarkerAlt className="text-xl" />
              </span>
              <div>
                <p className="text-sm text-black font-semibold">Find Us Here</p>
                <p className="text-md text-gray-700">312 Regent Str, Fredericton</p>
              </div>
            </div>
          </div>

          {/* Google Map Preview */}
          {/* <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Bakery Location"
              className="w-full h-48 rounded-lg"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyEXAMPLEKEY&q=123+Sweet+Lane,+Cake+City"
              allowFullScreen
            />
          </div> */}

          {/* Call-to-Action: Get Directions */}
          {/* <div className="mt-6">
            <a
              href="https://www.google.com/maps/place/123+Sweet+Lane,+Cake+City"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold bg-deepPink hover:bg-lightPink/80 hover:border-1 hover:border-deepPink hover:text-deepPink text-white text-sm px-4 py-2 rounded-lg hover:scale-105 transition-transform inline-flex items-center space-x-2 shadow-lg"
            >
              <FaMapMarkerAlt />
              <span>Get Directions</span>
            </a>
          </div> */}

          {/* Social Media Icons with Tooltip */}
          <div className="flex space-x-8 mt-8">
            {[
              {
                platform: "Instagram",
                url: "https://www.instagram.com/lawlah_sweets",
                icon: <FaInstagram className="text-2xl" />,
              },
              {
                platform: "Facebook",
                url: "https://www.facebook.com/lawlahsweets",
                icon: <FaFacebook className="text-2xl" />,
              },
              {
                platform: "Twitter",
                url: "https://www.twitter.com/lawlahsweets",
                icon: <FaTwitter className="text-2xl" />,
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="relative group hover:scale-110 transition-transform duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-deepPink text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Visit us on {social.platform}!
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
