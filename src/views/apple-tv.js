import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './apple-tv.css'

const AppleTV = (props) => {
  return (
    <div className="apple-tv-container">
      <Helmet>
        <title>Apple-TV - Mobillio Online Store</title>
        <meta property="og:title" content="Apple-TV - Mobillio Online Store" />
      </Helmet>
      <div className="apple-tv-navbar">
        <header
          data-role="Header"
          className="apple-tv-header max-width-container"
        >
          <div className="apple-tv-container1">
            <div data-role="BurgerMenu" className="apple-tv-burger-menu">
              <div
                data-thq="thq-dropdown"
                className="apple-tv-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="apple-tv-dropdown-toggle"
                >
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="apple-tv-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="apple-tv-icon">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="apple-tv-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="apple-tv-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="apple-tv-dropdown-toggle1"
                    >
                      <span className="apple-tv-text">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="apple-tv-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="apple-tv-dropdown-toggle2"
                    >
                      <span className="apple-tv-text1">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="apple-tv-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="apple-tv-dropdown-toggle3"
                    >
                      <span className="apple-tv-text2">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="apple-tv-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="apple-tv-dropdown-toggle4"
                    >
                      <span className="apple-tv-text3">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link to="/">
            <img
              alt="image"
              src="/paquue-200h.png"
              className="apple-tv-image"
            />
          </Link>
        </header>
      </div>
      <div className="apple-tv-main">
        <img
          alt="image"
          src="/apple%20tv%2B2-400h.png"
          className="apple-tv-image1"
        />
        <img
          alt="image"
          src="/price%20list%20apple%20tv%2B-200h.png"
          className="apple-tv-image2"
        />
        <Link to="/checkout" className="apple-tv-navlink1">
          <img
            alt="image"
            src="/acheter%20boutton-200h.png"
            className="apple-tv-image3"
          />
        </Link>
        <img
          alt="image"
          src="/description%20apple%20tv%2B-300h.png"
          className="apple-tv-image4"
        />
      </div>
      <div className="apple-tv-footer">
        <Link to="/" className="apple-tv-navlink2">
          <img alt="image" src="/paquue-200h.png" className="apple-tv-image5" />
        </Link>
        <span className="apple-tv-text4">
          Droits d&apos;auteur 2023, Regardeflix Tous droits réservés.
        </span>
      </div>
    </div>
  )
}

export default AppleTV
