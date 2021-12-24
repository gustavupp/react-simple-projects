import React from 'react'
import { FaExternalLinkSquareAlt, FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useContext } from 'react'
import { AppContext } from './context'
import Submenu from './Submenu'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(AppContext)
  return (
    <div
      className={`${isSidebarOpen? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}
    >
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {
            sublinks.map((link, index) => {
              const { page, links } = link;
              return (
                <article key={index}>
                  <h4 >{page}</h4>
                  <div className='sidebar-sublinks'>
                    {
                      links.map((innerLink, idx) => {
                        const { label, url, icon } = innerLink;
                        return (
                          <a key={idx} href={url} >{icon}{label}</a>
                        )
                      })
                    }
                    
                  </div>
                </article>
              )
            })
          }
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
