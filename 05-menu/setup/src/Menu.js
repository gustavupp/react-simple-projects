import React from 'react';

const Menu = ({menu}) => {
  return (
    <div className='section-center'>
      {menu.map((item) => {
        const { category, id, img, price, title, desc } = item;
        return (
          <article className='menu-item' key={id}>
              <img src={img} alt='' className='photo' />
              <div className='item-info'>
                <header>
                <h4>{title}</h4>
                  <h4 className='price'>${price}</h4>
                </header>
                <p className='item-text'>{desc}</p>
              </div>
          </article>
        )
      })}
    </div>
    )
};

export default Menu;

