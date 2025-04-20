import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section position-relative">
        <div className="hero-overlay"></div>
        <Container className="position-relative">
          <Row className="min-vh-100 align-items-center">
            <Col md={8} lg={6}>
              <h1 className="display-4 text-white mb-4">Thiết kế không gian sống hoàn hảo</h1>
              <p className="lead text-white mb-4">
                Chúng tôi mang đến những giải pháp thiết kế nội thất sáng tạo và độc đáo,
                biến không gian của bạn thành nơi thực sự đáng sống.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg me-3">
                Liên hệ ngay
              </Link>
              <Link to="/projects" className="btn btn-outline-light btn-lg">
                Xem dự án
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section py-5">
        <Container>
          <h2 className="text-center mb-5">Dịch vụ của chúng tôi</h2>
          <Row>
            <Col md={4} className="mb-4">
              <div className="service-card text-center p-4">
                <h4>Thiết kế nội thất</h4>
                <p>Thiết kế không gian sống theo phong cách hiện đại, tiện nghi và thẩm mỹ.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="service-card text-center p-4">
                <h4>Thiết kế kiến trúc</h4>
                <p>Thiết kế tổng thể công trình với không gian tối ưu và hiệu quả.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="service-card text-center p-4">
                <h4>Tư vấn thiết kế</h4>
                <p>Tư vấn giải pháp thiết kế phù hợp với nhu cầu và ngân sách của bạn.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Dự án nổi bật</h2>
          <Row>
            <Col md={6} className="mb-4">
              <div className="project-card">
                <img src="/project-1.jpg" alt="Project 1" className="img-fluid mb-3" />
                <h4>Biệt thự hiện đại</h4>
                <p>Thiết kế nội thất cho biệt thự cao cấp tại Quận 2, TP.HCM</p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="project-card">
                <img src="/project-2.jpg" alt="Project 2" className="img-fluid mb-3" />
                <h4>Căn hộ chung cư</h4>
                <p>Thiết kế không gian sống cho căn hộ chung cư cao cấp</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h2>Bạn cần tư vấn thiết kế?</h2>
              <p className="lead">Hãy để chúng tôi giúp bạn biến ý tưởng thành hiện thực</p>
            </Col>
            <Col md={4} className="text-md-end">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Liên hệ ngay
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home; 