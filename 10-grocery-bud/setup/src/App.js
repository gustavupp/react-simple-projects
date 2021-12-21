import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [inputValue, SetInputValue] = useState('');
  const [list, setList] = useState(localStorage.getItem('list')? JSON.parse(localStorage.getItem('list')): []);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show: false, msg:'', type:''});

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  },[list])

  const handleAlert = (show= false, msg= "", type= "") => {
    setAlert({show, msg, type});
  };  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      handleAlert(true, 'Empty Field', 'danger');

    } else if (isEditing) {
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
        handleAlert(true, 'Item Saved', 'success');
    } else {
      const newTodo = { id: new Date().getTime().toString(), title: inputValue };
      setList([...list ,newTodo]);
      SetInputValue('');
      handleAlert(true, 'Item Added', 'success');
    }
  }
 
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    if (editId === id) {
      setIsEditing(false);
      SetInputValue('');
    }
    handleAlert(true, 'Item Deleted', 'danger');
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
        {alert.show && <Alert {...alert} handleAlert={handleAlert}/>}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={inputValue}
            onChange={(e) => SetInputValue(e.target.value)}
          />
          <button type='submit' className='submit-btn'>{isEditing? 'Save' : 'Submit'}
          </button>
        </div>
      </form>
          {
          list.length > 0 && (
            <div className='grocery-container'>
            <List list={list} removeItem={removeItem} editItem={editItem} />
              <button 
              className='clear-btn'
              onClick={() => { 
                setList([]); 
                handleAlert(true, 'list Cleared', 'danger'); 
              } 
            }
              >
                clear items
              </button>
            </div>
          )}
    </section>
    )
}

export default App
