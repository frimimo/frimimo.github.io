import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './netflix.css'

const Netflix = (props) => {
  return (
    <div className="netflix-container">
      <Helmet>
        <title>Netflix - Mobillio Online Store</title>
        <meta property="og:title" content="Netflix - Mobillio Online Store" />
      </Helmet>
      <div className="netflix-navbar">
        <header
          data-role="Header"
          className="netflix-header max-width-container"
        >
          <div className="netflix-container1">
            <div data-role="BurgerMenu" className="netflix-burger-menu">
              <div
                data-thq="thq-dropdown"
                className="netflix-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="netflix-dropdown-toggle"
                >
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="netflix-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="netflix-icon">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="netflix-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="netflix-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="netflix-dropdown-toggle1"
                    >
                      <span className="netflix-text">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="netflix-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="netflix-dropdown-toggle2"
                    >
                      <span className="netflix-text1">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="netflix-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="netflix-dropdown-toggle3"
                    >
                      <span className="netflix-text2">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="netflix-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="netflix-dropdown-toggle4"
                    >
                      <span className="netflix-text3">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link to="/">
            <img alt="image" src="/paquue-200h.png" className="netflix-image" />
          </Link>
        </header>
      </div>
      <div className="netflix-main">
        <img alt="image" src="/netflix-400h.png" className="netflix-image1" />
        <img
          alt="image"
          src="/price%20list%20netflix-200h.png"
          className="netflix-image2"
        />
        <Link to="/checkout" className="netflix-navlink1">
          <img
            alt="image"
            src="/acheter%20boutton-200h.png"
            className="netflix-image3"
          />
        </Link>
        <img
          alt="image"
          src="/description%20netflix-300h.png"
          className="netflix-image4"
        />
      </div>
      <div className="netflix-footer">
        <Link to="/" className="netflix-navlink2">
          <img alt="image" src="/paquue-200h.png" className="netflix-image5" />
        </Link>
        <span className="netflix-text4">
          Droits d&apos;auteur 2023, Regardeflix Tous droits réservés.
        </span>
      </div>
    </div>
  )
}

export default Netflix
