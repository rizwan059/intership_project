'use client';

import React, { useState, useEffect } from 'react';

// Quote Icon Component
const QuoteIcon = () => (
  <svg
    className="w-10 h-10 text-blue-400"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

// Star Icon Component
const StarIcon = ({ filled = true }) => (
  <svg
    className={`w-5 h-5 transition-all duration-300 ${filled ? 'text-blue-400 fill-current' : 'text-slate-600'}`}
    fill={filled ? 'currentColor' : 'none'}
    viewBox="0 0 24 24"
    stroke={filled ? 'none' : 'currentColor'}
    strokeWidth={1.5}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// Chevron Icons
const ChevronLeft = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechVenture Inc.",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      content:
        "The team delivered exceptional results on our AI platform. Their expertise in machine learning and scalable architecture exceeded our expectations. We launched 3 months ahead of schedule.",
    },
    {
      name: "Michael Torres",
      role: "VP Engineering",
      company: "DataFlow Systems",
      avatar: "https://i.pravatar.cc/150?img=8",
      rating: 5,
      content:
        "Outstanding software architects who understand enterprise requirements. Their data engineering solutions transformed our analytics pipeline and reduced processing time by 60%.",
    },
    {
      name: "Emily Watson",
      role: "Founder",
      company: "InnovateAI",
      avatar: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      content:
        "Working with their full-stack developers was seamless. They built our MVP in record time while maintaining code quality and implementing robust testing. Truly impressive.",
    },
    {
      name: "James Park",
      role: "Director of Product",
      company: "CloudScale",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      content:
        "The AI integration they delivered for our platform revolutionized our user experience. Their team is highly skilled, responsive, and deeply technical. A pleasure to work with.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-play logic
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  // Determine position classes based on index relative to current
  const getCardClasses = (index: number) => {
    const total = testimonials.length;
    const isCenter = index === currentIndex;
    const isRight = index === (currentIndex + 1) % total;
    const isLeft = index === (currentIndex - 1 + total) % total;

    const base = "absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] backdrop-blur-xl rounded-2xl flex flex-col items-center text-center";

    const widthClass = "w-[95%] sm:w-[70%] md:w-[55%] lg:w-[50%] xl:w-[45%]";

    if (isCenter) {
      return `${base} ${widthClass} left-[50%] -translate-x-1/2 z-30 scale-100 opacity-100 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 border border-blue-500/40 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3),0_25px_50px_-12px_rgba(0,0,0,0.5)] cursor-default`;
    }

    if (isRight) {
      return `${base} ${widthClass} left-[82%] -translate-x-1/2 z-20 scale-85 opacity-40 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 border border-slate-700/30 shadow-2xl cursor-pointer hover:scale-90 hover:opacity-70 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]`;
    }

    if (isLeft) {
      return `${base} ${widthClass} left-[18%] -translate-x-1/2 z-20 scale-85 opacity-40 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 border border-slate-700/30 shadow-2xl cursor-pointer hover:scale-90 hover:opacity-70 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]`;
    }

    return `${base} ${widthClass} left-[50%] -translate-x-1/2 z-10 scale-75 opacity-0 pointer-events-none`;
  };

  return (
    <>
      <style>{`
        .testimonial-card {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 50%, rgba(15, 23, 42, 0.95) 100%);
        }
        .gradient-text {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glow-effect {
          box-shadow: 0 0 60px -15px rgba(59, 130, 246, 0.3);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>

      <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0b1121] via-[#0f1623] to-[#0b1121] py-16 md:py-24 flex flex-col justify-center">

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-transparent rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-indigo-500/10 to-transparent rounded-full blur-[120px] animate-pulse-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]"></div>

        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">

          {/* Header Section */}
          <div className="text-center mb-16 md:mb-24 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-xs md:text-sm font-semibold text-blue-400 uppercase tracking-[0.2em]">
                Client Success Stories
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Trusted by Industry
              <span className="block mt-2 md:mt-3 gradient-text">
                Leaders
              </span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
              Discover how leading companies have transformed their businesses with our innovative solutions
            </p>
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
              <div className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
            </div>
          </div>

          {/* Carousel Area */}
          <div
            className="relative w-full h-[420px] md:h-[450px] lg:h-[480px] max-w-7xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >

            {/* Render Cards */}
            {testimonials.map((testimonial, index) => {
              const classes = getCardClasses(index);
              const isCenter = index === currentIndex;

              return (
                <div
                  key={index}
                  onClick={() => {
                    if (!isCenter) {
                      const isRight = index === (currentIndex + 1) % testimonials.length;
                      if (isRight) {
                        nextSlide();
                      } else {
                        prevSlide();
                      }
                    }
                  }}
                  className={classes}
                >
                  <div className="flex flex-col items-center justify-between p-5 md:p-6 space-y-3">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center border border-blue-500/30 shrink-0 shadow-lg">
                      <QuoteIcon />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} filled={star <= testimonial.rating} />
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <div className="space-y-3 w-full flex-1 flex flex-col justify-center">
                      <p className="text-slate-200 text-sm md:text-base leading-relaxed font-light italic line-clamp-4">
                        "{testimonial.content}"
                      </p>
                    </div>

                    {/* Author Information */}
                    <div className="w-full pt-4 border-t border-slate-700/50 flex flex-col items-center">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-600/20 blur-sm"></div>
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="relative w-14 h-14 rounded-full border-2 border-blue-500/40 object-cover"
                        />
                      </div>
                      <div className="mt-3 text-center">
                        <p className="text-white font-semibold text-sm md:text-base tracking-tight">
                          {testimonial.name}
                        </p>
                        <p className="text-blue-400 text-xs md:text-sm font-medium mt-0.5">
                          {testimonial.role}
                        </p>
                        <p className="text-slate-500 text-[10px] md:text-xs font-normal">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Navigation Buttons - Desktop */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 -translate-x-0 md:-translate-x-4 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-600/50 text-white hover:from-blue-600 hover:to-blue-700 hover:border-blue-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 focus:outline-none hidden md:flex items-center justify-center group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 translate-x-0 md:translate-x-4 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-600/50 text-white hover:from-blue-600 hover:to-blue-700 hover:border-blue-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 focus:outline-none hidden md:flex items-center justify-center group"
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>

            {/* Mobile Navigation Buttons */}
            <div className="absolute bottom-0 left-0 right-0 z-50 flex justify-center gap-4 md:hidden pb-6">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-600/50 text-white hover:from-blue-600 hover:to-blue-700 hover:border-blue-400 transition-all duration-300 shadow-xl flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-600/50 text-white hover:from-blue-600 hover:to-blue-700 hover:border-blue-400 transition-all duration-300 shadow-xl flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ChevronRight />
              </button>
            </div>

          </div>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8 z-20">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
                  index === currentIndex
                    ? "w-10 bg-gradient-to-r from-blue-500 to-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    : "w-2.5 bg-slate-700 hover:bg-slate-500 hover:shadow-[0_0_10px_rgba(148,163,184,0.3)]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </section>
    </>
  );
}