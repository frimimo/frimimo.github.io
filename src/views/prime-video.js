import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './prime-video.css'

const PrimeVideo = (props) => {
  return (
    <div className="prime-video-container">
      <Helmet>
        <title>prime-video - Mobillio Online Store</title>
        <meta
          property="og:title"
          content="prime-video - Mobillio Online Store"
        />
      </Helmet>
      <div className="prime-video-navbar">
        <header
          data-role="Header"
          className="prime-video-header max-width-container"
        >
          <div className="prime-video-container1">
            <div data-role="BurgerMenu" className="prime-video-burger-menu">
              <div
                data-thq="thq-dropdown"
                className="prime-video-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="prime-video-dropdown-toggle"
                >
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="prime-video-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="prime-video-icon">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="prime-video-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="prime-video-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="prime-video-dropdown-toggle1"
                    >
                      <span className="prime-video-text">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="prime-video-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="prime-video-dropdown-toggle2"
                    >
                      <span className="prime-video-text1">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="prime-video-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="prime-video-dropdown-toggle3"
                    >
                      <span className="prime-video-text2">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="prime-video-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="prime-video-dropdown-toggle4"
                    >
                      <span className="prime-video-text3">Sub-menu Item</span>
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
              className="prime-video-image"
            />
          </Link>
        </header>
      </div>
      <div className="prime-video-main">
        <img alt="image" src="/fyfg-400h.png" className="prime-video-image1" />
        <img
          alt="image"
          src="/price%20list%20prime%20video-200h.png"
          className="prime-video-image2"
        />
        <Link to="/checkout" className="prime-video-navlink1">
          <img
            alt="image"
            src="/acheter%20boutton-200h.png"
            className="prime-video-image3"
          />
        </Link>
        <img
          alt="image"
          src="/description%20prime%20video1-300h.png"
          className="prime-video-image4"
        />
      </div>
      <div className="prime-video-footer">
        <Link to="/" className="prime-video-navlink2">
          <img
            alt="image"
            src="/paquue-200h.png"
            className="prime-video-image5"
          />
        </Link>
        <span className="prime-video-text4">
          Droits d&apos;auteur 2023, Regardeflix Tous droits réservés.
        </span>
      </div>
    </div>
  )
}

export default PrimeVideo
