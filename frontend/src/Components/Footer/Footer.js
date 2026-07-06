import React from 'react'
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FaceBookOutLineIcon from "@mui/icons-material/FacebookOutlined";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner">
        <div className="footer-icons">
          <FaceBookOutLineIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer-data">
          <div>
            <ul>
              <li> Audio Description </li>
              <li> Investors Relations</li>
              <li> Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li> Help Center </li>
              <li> Jobs </li>
              <li> Cookies Preferences </li>
            </ul>
          </div>
          <div>
            <ul>
              <li> Gift Cards </li>
              <li> Terms of Use </li>
              <li> Corporate Information </li>
            </ul>
          </div>
          <div>
            <ul>
              <li> Media Center </li>
              <li> Privacy </li>
              <li> Contact Us </li>
            </ul>
          </div>
          <div className="service-code">
            <p>Service Code</p>
          </div>
          <div className="copy-right">
            <p>&copy; 1997-2026 Netflix, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;