import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './disney.css'

const Disney = (props) => {
  return (
    <div className="disney-container">
      <Helmet>
        <title>Disney - Mobillio Online Store</title>
        <meta property="og:title" content="Disney - Mobillio Online Store" />
      </Helmet>
      <div className="disney-navbar">
        <header
          data-role="Header"
          className="disney-header max-width-container"
        >
          <div className="disney-container1">
            <div data-role="BurgerMenu" className="disney-burger-menu">
              <div
                data-thq="thq-dropdown"
                className="disney-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="disney-dropdown-toggle"
                >
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="disney-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="disney-icon">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="disney-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="disney-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="disney-dropdown-toggle1"
                    >
                      <span className="disney-text">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="disney-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="disney-dropdown-toggle2"
                    >
                      <span className="disney-text1">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="disney-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="disney-dropdown-toggle3"
                    >
                      <span className="disney-text2">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="disney-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="disney-dropdown-toggle4"
                    >
                      <span className="disney-text3">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link to="/">
            <img alt="image" src="/paquue-200h.png" className="disney-image" />
          </Link>
        </header>
      </div>
      <div className="disney-main">
        <img alt="image" src="/disney%2B2-400h.png" className="disney-image1" />
        <img
          alt="image"
          src="/price%20list%20disney%20%2B-200h.png"
          className="disney-image2"
        />
        <Link to="/checkout" className="disney-navlink1">
          <img
            alt="image"
            src="/acheter%20boutton-200h.png"
            className="disney-image3"
          />
        </Link>
        <img
          alt="image"
          src="/description%20disney%2B-300h.png"
          className="disney-image4"
        />
      </div>
      <div className="disney-footer">
        <Link to="/" className="disney-navlink2">
          <img alt="image" src="/paquue-200h.png" className="disney-image5" />
        </Link>
        <span className="disney-text4">
          Droits d&apos;auteur 2023, Regardeflix Tous droits réservés.
        </span>
      </div>
    </div>
  )
}

export default Disney
