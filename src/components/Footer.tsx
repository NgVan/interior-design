import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>Về chúng tôi</h5>
            <p>Chúng tôi là đơn vị thiết kế nội thất hàng đầu, mang đến những giải pháp thiết kế sáng tạo và chất lượng cho không gian sống của bạn.</p>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Liên hệ</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                0123 456 789
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                info@interiordesign.com
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                123 Đường ABC, Quận XYZ, TP.HCM
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Theo dõi chúng tôi</h5>
            <div className="social-links">
              <a href="#" className="text-light me-3">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="text-light me-3">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-light">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 Interior Design. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 