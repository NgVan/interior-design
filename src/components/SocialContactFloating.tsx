import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faComment } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

const phoneNumber = '0795676367'; // Thay bằng số điện thoại thật
// const messengerLink = 'https://www.messenger.com/new?initial_e2ee_toggle_position=true'; // Thay bằng link Messenger thật
// const zaloLink = 'https://zalo.me/yourzalo'; // Thay bằng link Zalo thật
const zaloLink = 'https://zalo.me/0795676367'; // Thay bằng link Zalo thật
const messengerLink = 'https://www.messenger.com/e2ee/t/7385372268211418'

const SocialContactFloating = () => {
  return (
    <div className="social-contact-floating">
      <a href={`tel:${phoneNumber}`} className="icon phone" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faPhone} size="2x" />
      </a>
      <a href={messengerLink} className="icon messenger" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookMessenger} size="2x" />
      </a>
      {/* <a href={zaloLink} className="icon zalo" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faComment} size="2x" />
      </a> */}
      <a href={zaloLink} className="icon zalo" target="_blank" rel="noopener noreferrer">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#0180C7"/>
          <path d="M24 13C17.3726 13 12 17.4772 12 23C12 25.7614 13.7909 28.0922 16.5355 29.5355C16.1942 30.6942 15.3672 32.3672 15.3672 32.3672C15.3672 32.3672 17.3058 32.1942 18.4645 31.5355C20.2761 32.1517 22.0909 32.5 24 32.5C30.6274 32.5 36 28.0228 36 22.5C36 16.9772 30.6274 13 24 13Z" fill="white"/>
        </svg>
      </a>
    </div>
  );
};

export default SocialContactFloating; 