import React from 'react';
import '../Styles/Footer.css';
import { SocialIcon } from 'react-social-icons';
import VisitorCounter from '../Components/VisitorCounter';

const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-container'>
        {/* Contact Section */}
        <div className='leftFoot'>
          <div className='address'>
            <h4 className="contact-heading">Contact Us</h4>
            <div className='address-box'>
              <div className="add">
                <SocialIcon url="mailto:paac.rtp@iitr.ac.in" bgColor="#000" />
                <a className='a' href="mailto:paac.rtp@iitr.ac.in">paac.rtp@iitr.ac.in</a>
              </div>
              <div className="add">
                <a className='a' href="https://instagram.com/rtp_iitr" target="_blank" rel="noopener noreferrer">
                  <SocialIcon url="https://instagram.com/rtp_iitr" bgColor="#000" /> rtp_iitr
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Visitor Counter */}
        <VisitorCounter />
      </div>
    </div>
  );
};

export default Footer;
