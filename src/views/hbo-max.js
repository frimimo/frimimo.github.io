import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './hbo-max.css'

const HBOMax = (props) => {
  return (
    <div className="hbo-max-container">
      <Helmet>
        <title>HBO-max - Mobillio Online Store</title>
        <meta property="og:title" content="HBO-max - Mobillio Online Store" />
      </Helmet>
      <div className="hbo-max-navbar">
        <header
          data-role="Header"
          className="hbo-max-header max-width-container"
        >
          <div className="hbo-max-container1">
            <div data-role="BurgerMenu" className="hbo-max-burger-menu">
              <div
                data-thq="thq-dropdown"
                className="hbo-max-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="hbo-max-dropdown-toggle"
                >
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="hbo-max-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="hbo-max-icon">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="hbo-max-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="hbo-max-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="hbo-max-dropdown-toggle1"
                    >
                      <span className="hbo-max-text">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="hbo-max-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="hbo-max-dropdown-toggle2"
                    >
                      <span className="hbo-max-text1">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="hbo-max-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="hbo-max-dropdown-toggle3"
                    >
                      <span className="hbo-max-text2">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="hbo-max-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="hbo-max-dropdown-toggle4"
                    >
                      <span className="hbo-max-text3">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link to="/">
            <img alt="image" src="/paquue-200h.png" className="hbo-max-image" />
          </Link>
        </header>
      </div>
      <div className="hbo-max-main">
        <img alt="image" src="/hbo-400h.png" className="hbo-max-image1" />
        <img
          alt="image"
          src="/price%20list%20hbo%20max-200h.png"
          className="hbo-max-image2"
        />
        <Link to="/checkout" className="hbo-max-navlink1">
          <img
            alt="image"
            src="/acheter%20boutton-200h.png"
            className="hbo-max-image3"
          />
        </Link>
        <img
          alt="image"
          src="/description%20hbo%20max-300h.png"
          className="hbo-max-image4"
        />
      </div>
      <div className="hbo-max-footer">
        <Link to="/" className="hbo-max-navlink2">
          <img alt="image" src="/paquue-200h.png" className="hbo-max-image5" />
        </Link>
        <span className="hbo-max-text4">
          Droits d&apos;auteur 2023, Regardeflix Tous droits réservés.
        </span>
      </div>
    </div>
  )
}

export default HBOMax
