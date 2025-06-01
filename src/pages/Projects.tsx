import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
      id: 'project-1',
      title: 'Biệt thự hiện đại',
      location: 'Quận 2, TP.HCM',
      image: '/project-1.jpg',
      description: 'Thiết kế nội thất cho biệt thự cao cấp với phong cách hiện đại, sang trọng.'
    },
    {
      id: 'project-2',
      title: 'Căn hộ chung cư',
      location: 'Quận 7, TP.HCM',
      image: '/project-2.jpg',
      description: 'Thiết kế không gian sống cho căn hộ chung cư cao cấp.'
    },
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
        <p className="lead text-center mb-5">
          Khám phá các dự án thiết kế nội thất tiêu biểu của chúng tôi
        </p>

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
          {filteredProjects.map((project) => (
            <Col md={6} className="mb-4" key={project.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={project.image}
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {project.location}
                  </Card.Subtitle>
                  <Card.Text>{project.description}</Card.Text>
                  <Link 
                    to={`/projects/${project.id}`}
                    className="btn btn-primary"
                  >
                    Xem chi tiết
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Projects; 