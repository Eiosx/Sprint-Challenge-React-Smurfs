import React from 'react';
import {Link} from 'react-router-dom';
import './component.css'; 

const Navigation = () => {
    return(
        <nav>
        <div className='Link'>
          <Link to={'/'}>Smurf Home</Link>
        </div>
        <div className='Link'>
          <Link to={'/form'}>Smurf Form</Link>
        </div>
      </nav>
    )
};

export default Navigation;