import React, { useEffect } from 'react'
import { useState } from 'react'
import MainComponent from './MainComponent'

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(()=> {
    fetchData();
  },[]);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch('https://course-api.com/react-tours-project');
    const fetchedData =  await response.json();
    setData(fetchedData)
    setLoading(false);
  }

  function removeItem(id) {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  if (data.length === 0){
    return (
      <main>
        <h1>No Tours Left</h1>
        <button className='btn' onClick={()=> fetchData()}>Refresh</button>
      </main>
    )
  }

  if(loading){
    return (
      <main>
        <h1>Loading...</h1>
        </main>
    )
  }

  return (
    <main>
      <h1>Our Tours</h1>
      <MainComponent data={data} removeItem={removeItem} />
    </main>
  )
}
export default App