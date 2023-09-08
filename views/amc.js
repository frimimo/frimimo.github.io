import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './amc.css'

const AMC = (props) => {
  return (
    <div className="amc-container">
      <Helmet>
        <title>AMC - Mobillio Online Store</title>
        <meta property="og:title" content="AMC - Mobillio Online Store" />
      </Helmet>
      <div className="amc-navbar">
        <header data-role="Header" className="amc-header max-width-container">
          <div className="amc-container1">
            <div data-role="BurgerMenu" className="amc-burger-menu">
              <div
                data-thq="thq-dropdown"
                className="amc-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="amc-dropdown-toggle"
                >
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="amc-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="amc-icon">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <ul data-thq="thq-dropdown-list" className="amc-dropdown-list">
                  <li
                    data-thq="thq-dropdown"
                    className="amc-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="amc-dropdown-toggle1"
                    >
                      <span className="amc-text">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="amc-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="amc-dropdown-toggle2"
                    >
                      <span className="amc-text1">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="amc-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="amc-dropdown-toggle3"
                    >
                      <span className="amc-text2">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="amc-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="amc-dropdown-toggle4"
                    >
                      <span className="amc-text3">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link to="/">
            <img alt="image" src="/paquue-200h.png" className="amc-image" />
          </Link>
        </header>
      </div>
      <div className="amc-main">
        <img alt="image" src="/amc-400h.png" className="amc-image1" />
        <img
          alt="image"
          src="/amc%2B%20price%20list-200h.png"
          className="amc-image2"
        />
        <Link to="/checkout" className="amc-navlink1">
          <img
            alt="image"
            src="/acheter%20boutton-200h.png"
            className="amc-image3"
          />
        </Link>
        <img
          alt="image"
          src="/description%20amc%2B-300h.png"
          className="amc-image4"
        />
      </div>
      <div className="amc-footer">
        <Link to="/" className="amc-navlink2">
          <img alt="image" src="/paquue-200h.png" className="amc-image5" />
        </Link>
        <span className="amc-text4">
          Droits d&apos;auteur 2023, Regardeflix Tous droits réservés.
        </span>
      </div>
    </div>
  )
}

export default AMC
