import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showContainer, setShowContainer] = useState(false);
  const linksContainer = useRef(null);
  const linksUl = useRef(null);

  useEffect(() => {
    const linksUlHeight = linksUl.current.getBoundingClientRect().height;

    if (showContainer) {
      linksContainer.current.style.height = `${linksUlHeight}px`;
    } else {
      linksContainer.current.style.height = '0px';
    }
  },[showContainer])

  return (
    <nav>
      <div className='nav-center'>

        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={() => setShowContainer(!showContainer)}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainer}>
          <ul className='links' ref={linksUl}>
          {
            links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                    <a href={url}>{text}</a>
                </li>
              )
            })
          }
          </ul>
        </div>

        <ul className='social-icons'>
          {
            social.map((item) => {
              const { id, url, icon } = item;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
