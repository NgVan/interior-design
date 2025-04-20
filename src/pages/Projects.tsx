import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'apartment', name: 'Căn hộ' },
    { id: 'villa', name: 'Biệt thự' },
    { id: 'office', name: 'Văn phòng' },
    { id: 'restaurant', name: 'Nhà hàng' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Căn hộ cao cấp Quận 2',
      category: 'apartment',
      image: '/project-1.jpg',
      description: 'Thiết kế nội thất căn hộ 120m2 theo phong cách hiện đại',
    },
    {
      id: 2,
      title: 'Biệt thự Phú Mỹ Hưng',
      category: 'villa',
      image: '/project-2.jpg',
      description: 'Thiết kế nội thất biệt thự 300m2 phong cách luxury',
    },
    {
      id: 3,
      title: 'Văn phòng công ty ABC',
      category: 'office',
      image: '/project-3.jpg',
      description: 'Thiết kế văn phòng làm việc hiện đại, tiện nghi',
    },
    {
      id: 4,
      title: 'Nhà hàng Fusion',
      category: 'restaurant',
      image: '/project-4.jpg',
      description: 'Thiết kế không gian ẩm thực độc đáo',
    },
    {
      id: 5,
      title: 'Căn hộ Masteri',
      category: 'apartment',
      image: '/project-5.jpg',
      description: 'Thiết kế nội thất căn hộ 90m2 phong cách minimal',
    },
    {
      id: 6,
      title: 'Biệt thự Vinhomes',
      category: 'villa',
      image: '/project-6.jpg',
      description: 'Thiết kế nội thất biệt thự 250m2 phong cách contemporary',
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <main>
      <Container>
        <h1 className="page-title">Dự án của chúng tôi</h1>

        {/* Category Filter */}
        <div className="category-filter text-center mb-5">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'primary' : 'outline-primary'}
              className="mx-2 mb-2"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <Row>
          {filteredProjects.map(project => (
            <Col md={6} lg={4} className="mb-4" key={project.id}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-primary" className="w-100">
                    Xem chi tiết
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Projects; 