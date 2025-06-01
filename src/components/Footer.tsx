import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>Wihome</h5>
            <p className="mb-0">
              Chúng tôi mang đến những giải pháp thiết kế nội thất sáng tạo và độc đáo,
              biến không gian của bạn thành nơi thực sự đáng sống.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Liên hệ</h5>
            <p className="mb-1">Địa chỉ: Số 640/12 Phan Văn Trị, P.10, Q.Gò Vấp, TP.HCM</p>
            <p className="mb-1">Điện thoại: 0795 676 367</p>
            <p className="mb-0">Email: Wihome.qn@gmail.com</p>
          </Col>
          <Col md={4} className="mb-4">
              {/* Facebook, Instagram, Youtube */}
            <h5>Theo dõi chúng tôi</h5>
            <div className="social-links">
              <a 
                href="https://www.facebook.com/zup.kind" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a 
                href="https://www.instagram.com/your-account" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>

              <a 
                href="https://www.youtube.com/your-channel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Wihome Design. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 