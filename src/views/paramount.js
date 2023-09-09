import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './paramount.css'

const Paramount = (props) => {
  return (
    <div className="paramount-container">
      <Helmet>
        <title>Paramount - Mobillio Online Store</title>
        <meta property="og:title" content="Paramount - Mobillio Online Store" />
      </Helmet>
      <div className="paramount-navbar">
        <header
          data-role="Header"
          className="paramount-header max-width-container"
        >
          <div className="paramount-container1">
            <div data-role="BurgerMenu" className="paramount-burger-menu">
              <div
                data-thq="thq-dropdown"
                className="paramount-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="paramount-dropdown-toggle"
                >
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="paramount-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="paramount-icon">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="paramount-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="paramount-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="paramount-dropdown-toggle1"
                    >
                      <span className="paramount-text">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="paramount-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="paramount-dropdown-toggle2"
                    >
                      <span className="paramount-text1">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="paramount-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="paramount-dropdown-toggle3"
                    >
                      <span className="paramount-text2">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="paramount-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="paramount-dropdown-toggle4"
                    >
                      <span className="paramount-text3">Sub-menu Item</span>
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
              className="paramount-image"
            />
          </Link>
        </header>
      </div>
      <div className="paramount-main">
        <img
          alt="image"
          src="/paramount%2B-400h.png"
          className="paramount-image1"
        />
        <img
          alt="image"
          src="/paramount%2B%20price%20list-200h.png"
          className="paramount-image2"
        />
        <Link to="/checkout" className="paramount-navlink1">
          <img
            alt="image"
            src="/acheter%20boutton-200h.png"
            className="paramount-image3"
          />
        </Link>
        <img
          alt="image"
          src="/description%20paramount%2B-300h.png"
          className="paramount-image4"
        />
      </div>
      <div className="paramount-footer">
        <Link to="/" className="paramount-navlink2">
          <img
            alt="image"
            src="/paquue-200h.png"
            className="paramount-image5"
          />
        </Link>
        <span className="paramount-text4">
          Droits d&apos;auteur 2023, Regardeflix Tous droits réservés.
        </span>
      </div>
    </div>
  )
}

export default Paramount
