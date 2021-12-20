import React, { useEffect, useState } from 'react'
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
const [color, setColor] = useState('');
const [error, setError] = useState(false);
const [listOfColors, setListOfColors] = useState([]);

  useEffect(()=> {
      let colors = new Values('green').all(5);
      setListOfColors(colors);
  },[])

  function handleSubmit(e) {
    e.preventDefault();
    try {
      let colors = new Values(color).all(5);
      setListOfColors(colors);
    } catch {
      setError(true);
      console.log('there has been an error')
    }
    
  }
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            style={{backgroundColor: `${error? 'rgb(255, 224, 224)': 'white'}`}}
            type='text'
            placeholder='#f15025'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {listOfColors.map((item, index) => {
          return <SingleColor key={index} {...item} index={index} hexColor={item.hex} />
        })}
      </section>
    </>
    )
}

export default App
