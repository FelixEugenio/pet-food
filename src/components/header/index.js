/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './styles.css';
import LogoWhite from '../../assets/logo-white.png';
import Logo from '../../assets/logo.png';

export const Header = ({whiteVersion}) => {
    return (
        <div className="col-12">
        <header className="py-4 px-4 text-center">
        <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid" />
        </header>
        
          <button
            className="btn btn-secondary cart-button"
          >
            <span className="mdi mdi-cart"></span> 
          </button>
      </div>
    )
} 