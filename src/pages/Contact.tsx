import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <main>
      <Container>
        <h1 className="page-title">Liên hệ với chúng tôi</h1>
        <p className="lead text-center mb-5">
          Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất
        </p>

        <Row>
          <Col lg={6} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <h3 className="mb-4">Gửi tin nhắn cho chúng tôi</h3>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Tiêu đề</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Nội dung</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Gửi tin nhắn
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <h3 className="mb-4">Thông tin liên hệ</h3>
                <div className="contact-info">
                  <div className="d-flex align-items-center mb-4">
                    <FontAwesomeIcon icon={faPhone} className="text-primary me-3" size="lg" />
                    <div>
                      <h5 className="mb-0">Điện thoại</h5>
                      <p className="mb-0">0795 676 367</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-4">
                    <FontAwesomeIcon icon={faEnvelope} className="text-primary me-3" size="lg" />
                    <div>
                      <h5 className="mb-0">Email</h5>
                      <p className="mb-0">Wihome.qn@gmail.com</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-4">
                    <FontAwesomeIcon icon={faLocationDot} className="text-primary me-3" size="lg" />
                    <div>
                      <h5 className="mb-0">Địa chỉ</h5>
                      <p className="mb-0">Số 640/12 Phan Văn Trị, P.10, Q.Gò Vấp, TP.HCM</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faClock} className="text-primary me-3" size="lg" />
                    <div>
                      <h5 className="mb-0">Giờ làm việc</h5>
                      <p className="mb-0">Thứ 2 - Thứ 6: 8:00 - 17:00</p>
                      <p className="mb-0">Thứ 7: 8:00 - 12:00</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h5 className="mb-3">Bản đồ</h5>
                  <div className="map-container" style={{ height: '300px', backgroundColor: '#f8f9fa' }}>
                    {/* Add Google Maps or other map component here */}
                    <p className="text-center py-5">Bản đồ sẽ được hiển thị ở đây</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Contact; 