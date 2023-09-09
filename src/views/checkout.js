import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './checkout.css'

const Checkout = (props) => {
  return (
    <div className="checkout-container">
      <Helmet>
        <title>checkout - Mobillio Online Store</title>
        <meta property="og:title" content="checkout - Mobillio Online Store" />
      </Helmet>
      <div className="checkout-navbar">
        <header
          data-role="Header"
          className="checkout-header max-width-container"
        >
          <div className="checkout-container1">
            <div data-role="BurgerMenu" className="checkout-burger-menu">
              <div
                data-thq="thq-dropdown"
                className="checkout-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="checkout-dropdown-toggle"
                >
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="checkout-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="checkout-icon">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="checkout-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="checkout-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="checkout-dropdown-toggle1"
                    >
                      <span className="checkout-text">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="checkout-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="checkout-dropdown-toggle2"
                    >
                      <span className="checkout-text1">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="checkout-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="checkout-dropdown-toggle3"
                    >
                      <span className="checkout-text2">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="checkout-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="checkout-dropdown-toggle4"
                    >
                      <span className="checkout-text3">Sub-menu Item</span>
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
              className="checkout-image"
            />
          </Link>
        </header>
      </div>
      <div className="checkout-main">
        <img alt="image" src="/rgerg-200h.png" className="checkout-image1" />
        <img alt="image" src="/thrthrth-200h.png" className="checkout-image2" />
        <img
          alt="image"
          src="/qsdqsdqsd-200h.png"
          className="checkout-image3"
        />
        <img alt="image" src="/aaaaaaa-200h.png" className="checkout-image4" />
        <img alt="image" src="/dwfsd-200h.png" className="checkout-image5" />
        <img alt="image" src="/dfsdf-300h.png" className="checkout-image6" />
        <img alt="image" src="/rgtergd-200h.png" className="checkout-image7" />
      </div>
      <div className="checkout-footer">
        <Link to="/" className="checkout-navlink1">
          <img alt="image" src="/paquue-200h.png" className="checkout-image8" />
        </Link>
        <span className="checkout-text4">
          Droits d&apos;auteur 2023, Regardeflix Tous droits réservés.
        </span>
      </div>
    </div>
  )
}

export default Checkout
