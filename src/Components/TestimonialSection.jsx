import React from 'react';

const testimonials = [
  {
    id: 1,
    quote:
      "The cake was a masterpiece! It looked stunning and tasted even better. My guests couldn't stop talking about it!",
    name: 'Ope Afolayan',
    image: 'https://res.cloudinary.com/lawlah/image/upload/v1745865691/ope_kj0j3v.jpg', 
  },
  {
    id: 2,
    quote:
      "I'm in love with the cookies! Perfectly baked and deliciously soft. Lawlah Sweets never disappoints.",
    name: 'Ife Wuraola',
    image: 'https://res.cloudinary.com/lawlah/image/upload/v1745865691/ife_upeqre.jpg', 
  },
  {
    id: 3,
    quote:
      "The cupcakes were divine! Beautifully crafted and full of flavor. I’ll be ordering again for sure!",
    name: 'Tomi Morebise',
    image: 'https://res.cloudinary.com/lawlah/image/upload/v1745865691/tomi_ukjf0i.jpg', 
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-lightPink py-16 md:py-24 px-8">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        {/* <h2 className="text-xl md:text-2xl lg:text-4xl font-medium text-black mb-12">
          Why Our Creations Are The Perfect Choice
        </h2> */}
        <h2 className="text-xl md:text-2xl lg:text-4xl font-medium text-black mb-8 md:mb-12">
          Why Our Creations Are The Perfect Choice
        </h2>
        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`flex flex-col items-center px-6 ${
                index !== testimonials.length - 1
                  ? 'border-b border-deepPink py-8 md:py-0 md:border-r md:border-b-0'
                  : 'py-8 md:py-0' // Ensuring consistent padding for the last item
              }`}>

              {/* Testimonial Text */}
              <p className="text-md text-black mb-6 leading-relaxed bg-lightPink p-6 rounded-lg">
                “{testimonial.quote}”
              </p>

              {/* Reviewer Info */}
              <div className="flex flex-col items-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-2 border-4 border-deepPink"
                />
                <p className="text-deepPink font-semibold">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;