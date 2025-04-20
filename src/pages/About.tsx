import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <main>
      <Container>
        <h1 className="page-title">Về chúng tôi</h1>
        
        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <img
              src="/about-img.jpg"
              alt="About Us"
              className="img-fluid rounded shadow"
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
          </Col>
          <Col lg={6}>
            <h2 className="mb-4">Chúng tôi là ai</h2>
            <p className="lead mb-4">
              Chúng tôi là đội ngũ thiết kế nội thất chuyên nghiệp với hơn 10 năm kinh nghiệm trong ngành.
            </p>
            <p className="mb-4">
              Với sứ mệnh mang đến những không gian sống đẹp và tiện nghi, chúng tôi luôn nỗ lực không ngừng
              để tạo ra những thiết kế độc đáo, phù hợp với nhu cầu và phong cách của từng khách hàng.
            </p>
            <p>
              Đội ngũ của chúng tôi bao gồm các kiến trúc sư, nhà thiết kế nội thất và chuyên gia tư vấn
              giàu kinh nghiệm, luôn sẵn sàng biến ý tưởng của bạn thành hiện thực.
            </p>
          </Col>
        </Row>

        <h2 className="text-center mb-5">Đội ngũ của chúng tôi</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="team-card h-100">
              <Card.Img variant="top" src="/team-1.jpg" style={{ height: '300px', objectFit: 'cover' }} />
              <Card.Body className="text-center">
                <Card.Title>Nguyễn Văn A</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Giám đốc thiết kế</Card.Subtitle>
                <Card.Text>
                  Hơn 15 năm kinh nghiệm trong lĩnh vực thiết kế nội thất và kiến trúc.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="team-card h-100">
              <Card.Img variant="top" src="/team-2.jpg" style={{ height: '300px', objectFit: 'cover' }} />
              <Card.Body className="text-center">
                <Card.Title>Trần Thị B</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Trưởng phòng thiết kế</Card.Subtitle>
                <Card.Text>
                  Chuyên gia về thiết kế nội thất nhà ở và văn phòng cao cấp.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="team-card h-100">
              <Card.Img variant="top" src="/team-3.jpg" style={{ height: '300px', objectFit: 'cover' }} />
              <Card.Body className="text-center">
                <Card.Title>Lê Văn C</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Chuyên gia tư vấn</Card.Subtitle>
                <Card.Text>
                  10 năm kinh nghiệm tư vấn và quản lý dự án thiết kế.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={3} className="mb-4 text-center">
            <h3 className="display-4 text-primary mb-3">150+</h3>
            <p className="text-muted">Dự án hoàn thành</p>
          </Col>
          <Col md={3} className="mb-4 text-center">
            <h3 className="display-4 text-primary mb-3">10+</h3>
            <p className="text-muted">Năm kinh nghiệm</p>
          </Col>
          <Col md={3} className="mb-4 text-center">
            <h3 className="display-4 text-primary mb-3">50+</h3>
            <p className="text-muted">Đối tác tin cậy</p>
          </Col>
          <Col md={3} className="mb-4 text-center">
            <h3 className="display-4 text-primary mb-3">200+</h3>
            <p className="text-muted">Khách hàng hài lòng</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default About; 