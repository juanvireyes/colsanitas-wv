import React from 'react';
import '../styles/Header.css';

const Header = ({ type, text, className }) => {

  switch (type) {
    case 1:
      return (
        <header>
          <h1 className={className ? className : 'main-title'}>{text}</h1>
        </header>
      );
    
    case 2:
      return (
        <header>
          <h2 className={className ? className : 'h2-title'}>{text}</h2>
        </header>
      );

    case 3:
      return (
        <header>
          <h3 className={className ? className : 'h3-title'}>{text}</h3>
        </header>
      );

    case 4:
      return (
        <header>
          <h4 className={className ? className : 'h4-title'}>{text}</h4>
        </header>
      );
    
    case 5:
      return (
        <header>
          <h5 className={className ? className : 'h5-title'}>{text}</h5>
        </header>
      );
    
    case 6:
      return (
        <header>
          <h6 className={className ? className : 'h6-title'}>{text}</h6>
        </header>
      );
  
    default:
      return (
        <header>
          <h1 className='main-title'>¡Bienvenidos!</h1>
        </header>
      ) ;
  }
}

export default Header