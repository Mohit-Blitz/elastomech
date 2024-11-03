import React, { useState, useEffect } from 'react';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Button from '@mui/material/Button';

const FullPageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://konstruk.rstheme.com/assets/h1-2-Dx1IwfDf.jpg',
      label: 'CONSTRUCTION BUSINESS',
      title: 'We build something new and consistent.',
      description: 'No matter where or what you want to build, we mobilize the right experts to drive value and realize your project consistent goals.'
    },
    {
      image: 'https://konstruk.rstheme.com/assets/h1-1-CNAuOS_Z.jpg',
      label: 'CONSTRUCTION BUSINESS',
      title: 'Building Dreams Into Reality.',
      description: 'We bring together expertise and innovation to deliver exceptional construction solutions for our clients.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl space-y-6">
                <div className="inline-block bg-yellow-500/90 px-4 py-1 text-sm font-medium">
                  {slide.label}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                  {slide.description}
                </p>
                <Button
                  variant="contained"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-6 h-auto text-lg"
                >
                  DISCOVER MORE
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeftRoundedIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRightRoundedIcon className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? 'bg-yellow-500' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default FullPageSlider;
