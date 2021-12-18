import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
const [reviews, setReviews] = useState(data);
const [index, setIndex] = useState(0);

const nextBtn = () => {
  if (index === reviews.length -1){
    setIndex(0);
  }
  else {
    setIndex(index + 1)
  }
}

const prevBtn = () => {
  if (index === 0) {
    setIndex(reviews.length -1)
  }
  else {
    setIndex(index - 1)
  }
}

const { id, image, name, quote, title } = reviews[index];

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        <article className='position'>
          <img src={image} alt='name' className="person-img" />
          <h4>{name}</h4>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className="icon" />
        </article>

          <button className="prev" onClick={prevBtn}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={nextBtn}>
            <FiChevronRight />
          </button>

      </div>
    </section>
    );
}

export default App;
