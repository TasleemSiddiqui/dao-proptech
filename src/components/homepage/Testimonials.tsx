'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeadingBar from './HeadingBar';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Testimonial = {
  name: string;
  testimonial: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    testimonial:
      "This service is amazing! I couldn't have asked for a better experience. From the moment I reached out, the team was responsive, professional, and extremely helpful. They took the time to understand my needs and worked tirelessly to ensure that every detail was perfect.",
    image: '/testimonial/download-1.jpeg',
  },
  {
    name: 'Jane Smith',
    testimonial:
      "I had a wonderful experience with this company. From start to finish, their team made me feel like a valued customer. They went above and beyond to accommodate my requests, and the level of detail they put into their work was truly remarkable.",
    image: '/testimonial/download-2.jpeg',
  },
  // Add other testimonials here...
];

// Custom Next Arrow
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-500 p-3 rounded-full text-white hover:bg-green-400 z-10"
      onClick={onClick}
      aria-label="Next"
    >
      <ArrowRight />
    </button>
  );
};

// Custom Previous Arrow
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-green-500 p-3 rounded-full text-white hover:bg-green-400 z-10"
      onClick={onClick}
      aria-label="Previous"
    >
      <ArrowLeft />
    </button>
  );
};

const Testimonials = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrow :false,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-16 bg-slate-100">
      <HeadingBar
        title="Testimonials"
        subTitle="Sounds unreal? Listen to what our loyal investors have to say about their journey with us."
      />
      <div className="flex justify-center items-center p-6 relative bg-white shadow-lg rounded-lg">
        <Slider {...settings} className="w-full max-w-lg">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-4"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                height={100}
                width={100}
                className="rounded-full mx-auto h-24 w-24 object-cover"
              />
              <h2 className="text-lg font-semibold text-gray-800">{testimonial.name}</h2>
              <p className="text-sm text-gray-600 line-clamp-2 md:line-clamp-4">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
