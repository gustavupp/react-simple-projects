import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [inputValue, SetInputValue] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      //set alert
    } else if (isEditing) {
      //set editing
    } else {
      const newTodo = { id: new Date().getTime().toString(), title: inputValue };
      setList([...list ,newTodo]);
    }
  }
 
  return (
  <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit} >
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={inputValue}
            onChange={(e) => SetInputValue(e.target.value)}
          />
          <button type='submit' className='submit-btn'> Submit
          </button>
        </div>
      </form>
     
        <div className='grocery-container'>
          <List list={list} />
          <button className='clear-btn'>
            clear items
          </button>
        </div>
    </section>
    )
}

export default App
