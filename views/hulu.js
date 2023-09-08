import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './hulu.css'

const Hulu = (props) => {
  return (
    <div className="hulu-container">
      <Helmet>
        <title>hulu - Mobillio Online Store</title>
        <meta property="og:title" content="hulu - Mobillio Online Store" />
      </Helmet>
      <div className="hulu-navbar">
        <header data-role="Header" className="hulu-header max-width-container">
          <div className="hulu-container1">
            <div data-role="BurgerMenu" className="hulu-burger-menu">
              <div
                data-thq="thq-dropdown"
                className="hulu-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="hulu-dropdown-toggle"
                >
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="hulu-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="hulu-icon">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <ul data-thq="thq-dropdown-list" className="hulu-dropdown-list">
                  <li
                    data-thq="thq-dropdown"
                    className="hulu-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="hulu-dropdown-toggle1"
                    >
                      <span className="hulu-text">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="hulu-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="hulu-dropdown-toggle2"
                    >
                      <span className="hulu-text1">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="hulu-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="hulu-dropdown-toggle3"
                    >
                      <span className="hulu-text2">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="hulu-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="hulu-dropdown-toggle4"
                    >
                      <span className="hulu-text3">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link to="/">
            <img alt="image" src="/paquue-200h.png" className="hulu-image" />
          </Link>
        </header>
      </div>
      <div className="hulu-main">
        <img alt="image" src="/hulu-400h.png" className="hulu-image1" />
        <img
          alt="image"
          src="/price%20list%20hulu-200h.png"
          className="hulu-image2"
        />
        <Link to="/checkout" className="hulu-navlink1">
          <img
            alt="image"
            src="/acheter%20boutton-200h.png"
            className="hulu-image3"
          />
        </Link>
        <img
          alt="image"
          src="/description%20hulu-300h.png"
          className="hulu-image4"
        />
      </div>
      <div className="hulu-footer">
        <Link to="/" className="hulu-navlink2">
          <img alt="image" src="/paquue-200h.png" className="hulu-image5" />
        </Link>
        <span className="hulu-text4">
          Droits d&apos;auteur 2023, Regardeflix Tous droits réservés.
        </span>
      </div>
    </div>
  )
}

export default Hulu
