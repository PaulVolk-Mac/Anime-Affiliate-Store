import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "../styles/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      text: 'Amazing products! The quality is unmatched, and the shipping was super fast. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      text: 'I absolutely love the designs. The customer support was also very helpful and friendly!',
      rating: 4.5,
    },
    {
      name: 'Alex Johnson',
      text: 'Great prices and even better service. Will definitely shop here again!',
      rating: 4,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <>
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <i key={i} className="fas fa-star" style={{ color: '#FFD700' }}></i>
          ))}
        {halfStar && <i className="fas fa-star-half-alt" style={{ color: '#FFD700' }}></i>}
      </>
    );
  };

  return (
    <div className="testimonials">
      <h2>What Our Customers Say</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-rating">{renderStars(testimonial.rating)}</div>
              <h3 className="testimonial-name">- {testimonial.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;