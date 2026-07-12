import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://www.soft-press.com/uploads/images/Intel_1920x400.jpg"
          alt="https://www.quizz.biz/uploads/quizz/1754754/orig/1.jpg?1676617933"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl opacity-0">
          Wellness & Relaxation
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl opacity-0">
          Discover our collection of premium wellness products designed to enhance your comfort and well-being.
        </p>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl opacity-0">
          Discover our collection of premium wellness products designed to enhance your comfort and well-being.
        </p>
        <div className="mt-10">
          <Link
            to="/all-products"
            className="inline-block bg-red-500 py-3 px-8 rounded-md text-base font-medium text-white hover:bg-red-600 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;