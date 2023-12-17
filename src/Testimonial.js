import { useState } from "react";
import "./Style.css";

const Testimonial = () => {
  const testimonials = [
    { quotes: "This will change your life", author: "Adams Shoe" },
    { quotes: "This product makes life easier", author: "John Doe" },
    { quotes: "You should get this", author: "Silvester Stone" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrevClick() {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  }

  function handleNextClick() {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  }
  return (
    <div>
      <div className="testimonials">
        <div className="testimonials-quotes">
          {testimonials[currentIndex].quotes}
        </div>
        <div className="testimonials-author">
          {testimonials[currentIndex].author}
        </div>
        <testimonials className="nav">
          <button onClick={handlePrevClick}>Prev</button>
          <button onClick={handleNextClick}>Next</button>
        </testimonials>
      </div>
    </div>
  );
};

export default Testimonial;
