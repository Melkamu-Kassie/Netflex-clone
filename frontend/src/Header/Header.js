import React from 'react'
import './Header.css';

import NfLogo from '../Assets/Nflogo.png';
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className='header-container'>
      <div className="header">
        <div className="header-left">
          <ul>
            {/* <li> <img src={NfLogo} alt="Logo" /></li>    */}
            <li>Netflix</li>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;