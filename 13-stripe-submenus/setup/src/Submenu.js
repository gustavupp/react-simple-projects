import React, { useState, useRef, useEffect } from 'react'
import { useContext } from 'react'
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { AppContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, menuLabelCenter, page: {page = '', links = []} } = useContext(AppContext);
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    container.current.style.left = `${menuLabelCenter}px`;
    if (links.length === 3) setColumns('col-3')
    if (links.length > 3) setColumns('col-4')
  },[menuLabelCenter])

  return (
    <aside 
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
      >
      <section >
        <h4>{page}</h4>
        <div className={ `submenu-center ${columns}` }>
          {
            links.map((link, idx) => {
              const { icon, label, url } = link;
              return (
                <a key={idx}>{icon}{label}</a>
              )
            })
          }
        </div>
      </section>
    </aside>
  )
}

export default Submenu
