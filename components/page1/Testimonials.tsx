"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../Carousel";

export default function Testimonials() {
  const testimonials = [
    {
      message: "Amazing photography! Captured our wedding perfectly.",
      name: "Priya Sharma",
    },
    {
      message: "Very professional and creative photographer.",
      name: "Rahul Verma",
    },
    {
      message: "The photos were absolutely stunning!",
      name: "Ankit Jain",
    },
    {
      message: "Great experience working with this studio.",
      name: "Neha Kapoor",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="p-10  mx-auto">
        <h2 className="text-4xl testimonialH2 font-extrabold text-center mb-16 text-gray-900">
          What Clients Say
        </h2>

        {/* Carousel Container */}
        <div className=" mt-16 px-10">
          <Carousel>
            {testimonials.map((item, index) => (
              <div key={index} className="px-4 py-4">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between min-h-[200px] transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-gray-600 italic text-lg leading-relaxed">
                    {item.message}
                  </p>
                  <div className="mt-6">
                    <h4 className="font-bold text-gray-900 text-xl">
                      {item.name}
                    </h4>
                    <p className="text-blue-600 text-sm font-medium">
                      Verified Client
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
