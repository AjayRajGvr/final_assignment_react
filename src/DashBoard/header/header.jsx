import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './headerStyles.scss';

const currentUser='true';
const Header = () => (
    <div className='header'>
     <Link className='header-content' to='/'>
         <Logo className='logo'/>
     </Link>

     <div className='header-content'>
     //{currentUser ? (
        <div className='header-right' >
          SIGN OUT
        </div>
      ) : (
        <Link className='header-right' to='/signin'>
          SIGN IN
        </Link>
      )}
     </div>

    </div>
);
export default Header;