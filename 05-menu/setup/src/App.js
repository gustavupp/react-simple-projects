import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
const [menu, setMenu] = useState(items);
const [categories, setCategories] = useState([]);

const allCategories = ['All', ...new Set(items.map((item) => {
    return item.category;
}))];

const displayCategory = (category) => {
  if(category === 'All'){
    setMenu(items)
    return;
  }
  let filteredCategories = items.filter((item)=> {
    if (item.category === category){
      return item;
    }
  });
 setMenu(filteredCategories);
}

  return (
    <main style={{textAlign: 'center'}}>
      <h1>Our Menu</h1>
      <Categories displayCategory={displayCategory} allCategories={allCategories} />
      <Menu menu={menu} />
    </main>
  )
}

export default App;
