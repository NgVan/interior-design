import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faPaintBrush, faLightbulb, faTools, faHandshake } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Thiết kế nội thất',
      icon: faHome,
      description: 'Thiết kế không gian sống theo phong cách hiện đại, tiện nghi và thẩm mỹ.',
      features: [
        'Thiết kế phòng khách',
        'Thiết kế phòng ngủ',
        'Thiết kế phòng bếp',
        'Thiết kế phòng tắm',
      ],
    },
    {
      id: 2,
      title: 'Thiết kế kiến trúc',
      icon: faBuilding,
      description: 'Thiết kế tổng thể công trình với không gian tối ưu và hiệu quả.',
      features: [
        'Thiết kế mặt bằng',
        'Thiết kế phối cảnh',
        'Thiết kế kỹ thuật',
        'Giám sát thi công',
      ],
    },
    {
      id: 3,
      title: 'Trang trí nội thất',
      icon: faPaintBrush,
      description: 'Trang trí và làm mới không gian sống với các giải pháp sáng tạo.',
      features: [
        'Chọn màu sắc',
        'Chọn nội thất',
        'Trang trí phụ kiện',
        'Bố trí ánh sáng',
      ],
    },
    {
      id: 4,
      title: 'Tư vấn thiết kế',
      icon: faLightbulb,
      description: 'Tư vấn giải pháp thiết kế phù hợp với nhu cầu và ngân sách của bạn.',
      features: [
        'Tư vấn phong cách',
        'Tư vấn vật liệu',
        'Tư vấn chi phí',
        'Tư vấn thi công',
      ],
    },
    {
      id: 5,
      title: 'Thi công nội thất',
      icon: faTools,
      description: 'Thi công nội thất chất lượng cao với đội ngũ thợ lành nghề.',
      features: [
        'Thi công tủ bếp',
        'Thi công tủ âm tường',
        'Thi công vách ngăn',
        'Thi công trần thạch cao',
      ],
    },
    {
      id: 6,
      title: 'Bảo hành bảo trì',
      icon: faHandshake,
      description: 'Dịch vụ bảo hành và bảo trì nội thất định kỳ.',
      features: [
        'Kiểm tra định kỳ',
        'Sửa chữa khi cần',
        'Thay thế phụ tùng',
        'Bảo dưỡng thiết bị',
      ],
    },
  ];

  return (
    <main>
      <Container>
        <h1 className="page-title">Dịch vụ của chúng tôi</h1>
        <p className="lead text-center mb-5">
          Chúng tôi cung cấp đầy đủ các dịch vụ thiết kế và thi công nội thất
          với chất lượng cao và giá cả hợp lý.
        </p>

        <Row>
          {services.map(service => (
            <Col md={6} lg={4} className="mb-4" key={service.id}>
              <Card className="h-100 service-card">
                <Card.Body className="text-center">
                  <div className="service-icon mb-4">
                    <FontAwesomeIcon icon={service.icon} size="3x" />
                  </div>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <ul className="list-unstyled text-start">
                    {service.features.map((feature, index) => (
                      <li key={index} className="mb-2">
                        <FontAwesomeIcon icon={faLightbulb} className="text-primary me-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Services; 