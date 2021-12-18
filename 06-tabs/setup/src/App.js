import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
      const response = await fetch(url);
      const apiData = await response.json();
      setData(apiData);
      setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[]);

  if (loading) {
    return (
      <main style={{textAlign: 'center', margin: '20px'}}>
        <h1>Loading...</h1>
      </main>
    );
  }

  const { company, dates, title, duties } = data[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
        {data.map((item,index) => {
          return (
              <button key={item.id} className={`job-btn ${index === value && 'active-btn'}`} onClick={() =>setValue(index)} >{item.company}
              </button>
          )
        })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
            {duties.map((item,index)=> {
              return (
                <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item}</p>
              </div>
              )
            })}
      
        </article>
        
      </div>
      <button type="button" className="btn">more info
      </button>
    </section>
    )
}

export default App

 
