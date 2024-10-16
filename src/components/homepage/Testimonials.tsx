'use client';

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingBar from "./HeadingBar";
import {  ArrowLeft, ArrowRight } from "lucide-react";

type Testimonial = {
  name: string;
  testimonial: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    testimonial: "This service is amazing! I couldn't have asked for a better experience. From the moment I reached out, the team was responsive, professional, and extremely helpful. They took the time to understand my needs and worked tirelessly to ensure that every detail was perfect. I was particularly impressed by their ability to deliver high-quality results within such a short timeframe. The entire process was seamless, and the final outcome exceeded my expectations. I have recommended this service to several of my colleagues, and they have all had similarly positive experiences. Whether you're looking for efficiency, quality, or excellent customer service, this company ticks all the boxes. Highly recommended for anyone who values professionalism and great results.",
    image: "/testimonial/download-1.jpeg",
  },
  {
    name: "Jane Smith",
    testimonial: "I had a wonderful experience with this company. From start to finish, their team made me feel like a valued customer. They went above and beyond to accommodate my requests, and the level of detail they put into their work was truly remarkable. Their customer service is top-notch; I felt supported throughout the entire process, and all my questions were answered promptly. The final product was even better than I had imagined! It's rare to find a company that not only meets but exceeds your expectations in every way. I would definitely use their services again and highly recommend them to others looking for a hassle-free experience with outstanding results.",
    image: "/testimonial/download-2.jpeg",
  },
  {
    name: "Michael Lee",
    testimonial: "Great quality and fast delivery are just the beginning of what this company has to offer. I was initially drawn to their service because of the positive reviews, and I can confidently say that they lived up to the hype. The quality of the work was exceptional, and the speed at which it was delivered was equally impressive. I had a tight deadline, and they managed to deliver ahead of schedule without compromising on quality. The team was communicative throughout the entire process, keeping me updated on every step. I really appreciated their attention to detail and their commitment to ensuring that I was satisfied with the final outcome. I will definitely be returning for future projects!",
    image: "/testimonial/download-3.jpeg",
  },
  {
    name: "Emily Johnson",
    testimonial: "The team was very professional and helpful from the very beginning. I was a little unsure about what I wanted, but they patiently guided me through the options, offering valuable insights and suggestions. Their professionalism was evident not just in their communication but also in the quality of the work delivered. Every interaction with them was smooth, and they always made me feel like a priority. The final product was beyond what I had envisioned, and I couldn’t be happier. I’ve worked with other companies before, but this one stands out in terms of both the quality of their service and their attention to detail. I highly recommend them!",
    image: "/testimonial/download-4.jpeg",
  },
  {
    name: "Robert Brown",
    testimonial: "Affordable prices and top-notch services are a rare combination, but this company manages to offer both. I was on a tight budget and was worried that I might have to compromise on quality, but that was far from the case. Not only were their prices competitive, but the level of service and attention to detail I received was exceptional. The team worked closely with me to ensure that everything was aligned with my vision, and they made me feel like a valued customer from the get-go. I have worked with other companies in the past, but none have provided the same level of service at such an affordable price. I would highly recommend them to anyone looking for great value and excellent results.",
    image: "/testimonial/download.jpeg",
  },
  {
    name: "Linda Davis",
    testimonial: "I highly recommend this company for any project you might have. They are incredibly professional, knowledgeable, and easy to work with. From the initial consultation to the delivery of the final product, the entire process was seamless and stress-free. The team was always available to answer any questions I had, and they made sure to keep me updated throughout every stage of the project. The final product exceeded my expectations in every way. I have already recommended their services to several friends and colleagues, and I will continue to do so in the future. If you’re looking for a company that delivers quality, professionalism, and value, look no further.",
    image: "/testimonial/images.jpeg",
  },
  {
    name: "David Wilson",
    testimonial: "The results exceeded my expectations in every possible way. I initially contacted this company with a vague idea of what I wanted, and they took my vision and turned it into something truly spectacular. The team was incredibly patient, listening to my ideas and offering suggestions that ultimately made the project even better than I had imagined. I was particularly impressed by their attention to detail and their ability to deliver on time, even with a tight deadline. Their dedication to customer satisfaction is evident in every aspect of their work. I couldn’t be happier with the final result and will definitely be using their services again in the future.",
    image: "/testimonial/images-1.jpeg",
  },
  {
    name: "Sophia Martinez",
    testimonial: "Working with this company was a seamless and hassle-free experience. From the moment I reached out, they made everything so easy. The team was incredibly organized and efficient, and they took care of every detail so that I didn’t have to worry about a thing. Their professionalism and expertise were evident in every interaction, and the final product was even better than I had hoped for. What I appreciated most was their commitment to making sure that I was completely satisfied with the work. I would highly recommend their services to anyone looking for a stress-free, high-quality experience. They truly exceeded my expectations.",
    image: "/testimonial/images-2.jpeg",
  },
  {
    name: "James Anderson",
    testimonial: "Fast and reliable service with great support. I needed to get this project done quickly, and the team was able to deliver not only fast but also with excellent quality. The customer service was amazing—they were responsive, attentive, and genuinely cared about making sure I was happy with the final product. The work they produced was exactly what I was looking for, and they made the entire process easy and stress-free. I would highly recommend their services to anyone who values both speed and quality. I will definitely be using them again for future projects. Thank you for your hard work and dedication!",
    image: "/testimonial/images.jpeg",
  },
  {
    name: "Sarah Taylor",
    testimonial: "I'm extremely satisfied with the service I received from this company. From the first consultation to the final product delivery, everything was handled professionally and with care. They took the time to understand exactly what I needed and worked closely with me to make sure that every detail was perfect. The level of customer service was outstanding—I never had to wait long for a response, and they were always willing to go the extra mile to make sure I was happy. The final result exceeded my expectations, and I couldn’t be more pleased. I highly recommend them to anyone looking for quality service.",
    image: "/testimonial/images-1.jpeg",
  },
];

// Custom Next Arrow
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#aefe3a] p-3 rounded-full text-white hover:bg-[#aefe3a]/50"
      onClick={onClick}
    >
     <ArrowRight/>
    </button>
  );
};

// Custom Previous Arrow
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#aefe3a] p-3 rounded-full text-white hover:bg-[#aefe3a]/50"
      onClick={onClick}
    >
    <ArrowLeft/>
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="px-4 py-8 bg-slate-100">
      <HeadingBar
        title="Testimonials"
        subTitle="Sounds unreal? Listen to what our loyal investors have to say about their journey with us."
      />
      <div className="p-10 relative">
        <Slider {...settings} className="w-full my-5">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex p-4  flex-col items-center text-center space-y-3 ">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                height={100}
                width={100}
                className="rounded-full h-[200px] w-auto object-cover mx-auto"
              />
              <h2 className="text-xl font-semibold text-gray-800">{testimonial.name}</h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto line-clamp-6 md:line-clamp-none">{testimonial.testimonial}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
