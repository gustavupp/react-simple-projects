import React, { useState } from 'react';
import data from './data';
function App() {
  const [amount, setAmount] = useState(0);
  const [arr, setArr] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    if(amount < 0 || amount > data.length){
      console.log(amount)
      setArr(data[Math.floor(Math.random() * data.length)]);
    } else {
      let temp = data.slice(0, amount);
      let newTemp = temp.map((item, index) => {
        return <p key={index}>{item}</p>;
      })
      setArr(newTemp);
      setAmount(0);
    }
  }

  return (
  <section className='section-center'>
      <h3>tired of boring lorem ipvcsum?</h3>
      <form className='lorem-form'>
        <label htmlFor='amount'>paragraphs:</label>
        <input type='number' id='amount' name='amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <button className='btn' type='button' onClick={handleClick}>generate</button>
      </form>
      <article className='lorem-text'>{arr}
      </article>
    </section>
    )
}

export default App;
