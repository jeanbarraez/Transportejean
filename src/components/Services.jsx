import { Container, Row, Col, Card } from "react-bootstrap";
import { FaTruckMoving, FaBox, FaHome, FaRoute } from "react-icons/fa";
import imagenresidencial from "../image/imagenResidencial.webp";
import mudanzasdeOficinas from "../image/mudanzasdeOficinas.jpg";
import serviciosInterurbanos from "../image/mudanzaatodochile.jpg";
import fletesdeCarga from "../image/fletesycarga.jpg";

const Services = () => {
  const services = [
    {
      icon: <FaTruckMoving size={40} />,
      title: "Mudanzas Residenciales",
      description: "Cambios de casa con seguridad y cuidado de tus pertenencias.",
      image: imagenresidencial,
      color: "#667eea"
    },
    {
      icon: <FaBox size={40} />,
      title: "Fletes de Carga",
      description: "Transporte de mercancías y encomiendas de cualquier tamaño.",
      image: fletesdeCarga,
      color: "#28a745"
    },
    {
      icon: <FaHome size={40} />,
      title: "Mudanzas de Oficina",
      description: "Reubicación empresarial con mínima interrupción.",
      image: mudanzasdeOficinas,
      color: "#ff6b6b"
    },
    {
      icon: <FaRoute size={40} />,
      title: "Servicios Interurbanos",
      description: "Transporte a cualquier ciudad de Chile.",
      image: serviciosInterurbanos,
      color: "#ffa726"
    },
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <Container className="py-5">
        <h2 className="text-center display-4 fw-bold mb-3" style={{ color: "#2d3748" }}>
          Nuestros Servicios
        </h2>
        <p className="text-center text-muted mb-5 fs-5">
          Soluciones completas para todas tus necesidades de transporte
        </p>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={3} key={index}>
              <Card className="h-100 shadow border-0 overflow-hidden">
                <Card.Img 
                  variant="top" 
                  src={service.image} 
                  height="200" 
                  style={{ objectFit: 'cover' }}
                />
                <Card.Body className="text-center p-4">
                  <div 
                    className="mb-3 mx-auto" 
                    style={{ 
                      width: "80px", 
                      height: "80px", 
                      borderRadius: "50%", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}cc 100%)`,
                      color: "white",
                      boxShadow: `0 5px 15px ${service.color}40`
                    }}
                  >
                    {service.icon}
                  </div>
                  <Card.Title className="fw-bold mb-3" style={{ color: "#2d3748" }}>
                    {service.title}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
