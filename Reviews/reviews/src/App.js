import reviews from "./data";
import { useState } from "react";
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from "react-icons/fa"

function App() {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  const checkIndex = (num) => {
    if (num < 0) {
      return reviews.length - 1;
    }

    if (num > reviews.length - 1) {
      return 0;
    }
    else {
      return num;
    }
  }

  const nextBtn = () => {
    setIndex((index) => {
      return  checkIndex(index + 1);
    });
  }

   const prevBtn = () => {
    setIndex((index) => {
      return checkIndex(index - 1);
    });
  }

  const randomBtn = () => {
    const random = Math.round(Math.random() * (reviews.length - 1));
    setIndex(random);
    return checkIndex(random)
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevBtn}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextBtn}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomBtn}>
        surprise me
      </button>
    </article>  
  );
}

export default App;

{/* <article className='review'>
      <div className='img-container'>
        <img src='' alt='' className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>name</h4>
      <p className='job'>job</p>
      <p className='info'>text</p>
      <div className='button-container'>
        <button className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' >
        surprise me
      </button>
    </article> */}