import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [inputValue, SetInputValue] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      //set alert
    } else if (isEditing) {
      //set editing
      setList(list.map((item) => {
          if(item.id === editId) {
            return { ...item, title: inputValue }
          }
          return item;
          })
        )

        setIsEditing(false);
        setEditId(null);
        SetInputValue('');
    } else {
      const newTodo = { id: new Date().getTime().toString(), title: inputValue };
      setList([...list ,newTodo]);
      SetInputValue('');
    }
  }
 
  const removeItem = (id) => {
    //show alert
    setList(list.filter((item) => item.id !== id));
  }

  const editItem = (id) => {
    const specificItem = list.find(item => item.id === id);
    setIsEditing(true);
    setEditId(id);
    SetInputValue(specificItem.title)
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
          {list.length > 0 && (
            <div className='grocery-container'>
            <List list={list} removeItem={removeItem} editItem={editItem} />
              <button 
              className='clear-btn'
              onClick={() => setList([])}
              >
                clear items
              </button>
            </div>
          )}
    </section>
    )
}

export default App
