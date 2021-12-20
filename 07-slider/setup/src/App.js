import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
const [reviews, setReviews] = useState(data);
const [index, setIndex] = useState(0);

  useEffect(() => {
    let autoPlay = setInterval(()=> {
      if (index === 0){
        setIndex(reviews.length - 1);
      } else {
        setIndex(prevIndex => prevIndex - 1);
        };
      }, 2000);
      
    return ()=> {clearInterval(autoPlay)}
  },[index]);

  return (
        <section className="section">
          <div className="title">
            <h2>
              <span>/</span>reviews
            </h2>
          </div>
          <div className="section-center">

            {reviews.map((item, idx) => {
              const { id, image, name, title, quote } = item;

              //by default you leave them on the right side of the active slide.
              let position = 'nextSlide';
              if (idx === index) {
                position = 'activeSlide';
              }

              //place all slides whose idx is equal to index -1 on the left of current slide. and also if the main slide is index 0, place the last slide on the left side (reviews.length - 1)
              if (idx === index -1 || (index === 0 && idx === reviews.length - 1)){
                position = 'lastSlide'
              }

              //place all slides whose idx is equal to index + 1 on the right side
              if (idx === index +1 ){
                position = 'nextSlide'
              }

              if (index > reviews.length - 1){
                setIndex(0);
              }
              if (index < 0) {
                setIndex(reviews.length - 1)
              }

              return (
                <article key={idx} className={position}>
                  <img src={image} alt='name' className="person-img" />
                  <h4>{name}</h4>
                  <p className="title">{title}</p>
                  <p className="text">{quote}</p>
                  <FaQuoteRight className="icon" />
                </article>
              )
            })}

              <button className="prev" onClick={()=> setIndex(index - 1)}>
                <FiChevronLeft />
              </button>
              <button className="next" onClick={()=> setIndex(index + 1)}>
                <FiChevronRight />
              </button>

          </div>
        </section>

  )
  

}

export default App;
