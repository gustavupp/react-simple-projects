import React from 'react';

const Categories = ({allCategories, displayCategory}) => {
  console.log(allCategories)
  return (
  <div className="btn-container">
      {allCategories.map((item, index) => {
        return (
          <button
            key={index}
            onClick={()=> displayCategory(item)}
            type="button"
            className="filter-btn">{item}
          </button>
        )
      })}
       </div>
    )
};

export default Categories;

       
        