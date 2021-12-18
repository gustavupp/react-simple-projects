import React, { useState } from 'react';
import data from './data';
import Question from './Question';

function App() {

  const showContainer = () => {
    console.log('h1')
  }

  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {data.map((item) => {
            return <Question showContainer={showContainer} key={item.id} {...item} />; 
          })}
           
        </section>
      </div>
    </main>
  );
}

export default App;

