import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Mobillio Online Store</title>
        <meta property="og:title" content="Mobillio Online Store" />
      </Helmet>
      <div className="home-navbar">
        <header data-role="Header" className="home-header max-width-container">
          <div className="home-container1">
            <div data-role="BurgerMenu" className="home-burger-menu">
              <div
                data-thq="thq-dropdown"
                className="home-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle"
                >
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="home-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle1"
                    >
                      <span className="home-text">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle2"
                    >
                      <span className="home-text1">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle3"
                    >
                      <span className="home-text2">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle4"
                    >
                      <span className="home-text3">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link to="/">
            <img alt="image" src="/paquue-200h.png" className="home-image" />
          </Link>
        </header>
      </div>
      <div className="home-main">
        <div className="home-hero section-container">
          <img
            alt="image"
            src="/blurred-lights-northern-sky-background_23-2148273864_cleanup-1500w.png"
            className="home-image01"
          />
          <img alt="image" src="/sdfsdfsdf-300h.png" className="home-image02" />
        </div>
        <Link to="/netflix" className="home-navlink01">
          <img alt="image" src="/netflix-400h.png" className="home-image03" />
        </Link>
        <Link to="/prime-video" className="home-navlink02">
          <img alt="image" src="/fyfg-400h.png" className="home-image04" />
        </Link>
        <Link to="/apple-tv" className="home-navlink03">
          <img
            alt="image"
            src="/apple%20tv%2B-400h.png"
            className="home-image05"
          />
        </Link>
        <Link to="/hbo-max" className="home-navlink04">
          <img alt="image" src="/hbo-400h.png" className="home-image06" />
        </Link>
        <Link to="/hulu" className="home-navlink05">
          <img alt="image" src="/hulu2-400h.png" className="home-image07" />
        </Link>
        <Link to="/disney" className="home-navlink06">
          <img alt="image" src="/disney%2B-400h.png" className="home-image08" />
        </Link>
        <Link to="/amc" className="home-navlink07">
          <img alt="image" src="/amc-400h.png" className="home-image09" />
        </Link>
        <Link to="/paramount" className="home-navlink08">
          <img
            alt="image"
            src="/paramount%2B1-400h.png"
            className="home-image10"
          />
        </Link>
        <img alt="image" src="/thythfgh-4400h.png" className="home-image11" />
        <img alt="image" src="/yghfghfgh-4400h.png" className="home-image12" />
        <img
          alt="image"
          src="/bonne%20assistance%20copie1-4400h.png"
          className="home-image13"
        />
        <img alt="image" src="/fgfgdfgdfg-4400h.png" className="home-image14" />
      </div>
      <div className="home-footer">
        <Link to="/" className="home-navlink09">
          <img alt="image" src="/paquue-200h.png" className="home-image15" />
        </Link>
        <span className="home-text4">
          Droits d&apos;auteur 2023, Regardeflix Tous droits réservés.
        </span>
      </div>
    </div>
  )
}

export default Home
