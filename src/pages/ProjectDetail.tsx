import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

// Mock data - sau này có thể chuyển thành API call
const projectsData = {
  'project-1': {
    title: 'Biệt thự hiện đại',
    location: 'Quận 2, TP.HCM',
    description: 'Thiết kế nội thất cho biệt thự cao cấp với phong cách hiện đại, sang trọng.',
    images: [
      '/project-1.jpg',
      '/project-1-2.jpg',
      '/project-1-3.jpg',
      '/project-1-4.jpg',
    ],
    details: [
      'Diện tích: 250m2',
      'Phong cách: Hiện đại',
      'Thời gian thi công: 3 tháng',
      'Địa điểm: Quận 2, TP.HCM'
    ]
  },
  'project-2': {
    title: 'Căn hộ chung cư',
    location: 'Quận 7, TP.HCM',
    description: 'Thiết kế không gian sống cho căn hộ chung cư cao cấp.',
    images: [
      '/project-2.jpg',
      '/project-2-2.jpg',
      '/project-2-3.jpg',
      '/project-2-4.jpg',
      '/project-2-5.jpg',
    ],
    details: [
      'Diện tích: 120m2',
      'Phong cách: Tối giản',
      'Thời gian thi công: 2 tháng',
      'Địa điểm: Quận 7, TP.HCM'
    ]
  },
  // Thêm các dự án khác tương tự
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData[projectId as keyof typeof projectsData];
    console.log(project, "project");
    
  if (!project) {
    return (
      <main>
        <Container>
          <h1 className="page-title">Không tìm thấy dự án</h1>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <Container>
        <h1 className="page-title">{project.title}</h1>
        <p className="lead text-center mb-5">{project.location}</p>

        <Row className="mb-5">
          <Col lg={8} className="mb-4">
            <div className="project-gallery">
              {project.images.map((image, index) => (
                <div key={index} className="mb-4">
                  <img
                    src={image}
                    alt={`${project.title} - Hình ${index + 1}`}
                    className="img-fluid rounded shadow"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              ))}
            </div>
          </Col>
          <Col lg={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <h3 className="mb-4">Thông tin dự án</h3>
                <p className="mb-4">{project.description}</p>
                <ul className="list-unstyled">
                  {project.details.map((detail, index) => (
                    <li key={index} className="mb-2">
                      <i className="fas fa-check text-primary me-2"></i>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ProjectDetail; 