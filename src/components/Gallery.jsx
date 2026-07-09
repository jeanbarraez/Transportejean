import { Container, Row, Col, Card } from "react-bootstrap";
import fotoServicio1 from "../image/servicio1.jpeg";
import fotoServicio2 from "../image/servicio2.jpeg";
import fotoServicio3 from "../image/servicio3.jpeg";
import fotoServicio4 from "../image/servicio4.jpeg";
import fotoServicio5 from "../image/servicio5.jpeg";
import fotoServicio6 from "../image/servicio6.jpeg";

const Gallery = () => {
  const galleryImages = [
    fotoServicio1,
    fotoServicio2,
    fotoServicio3,
    fotoServicio4,
    fotoServicio5,
    fotoServicio6,
  ];

  return (
    <section id="gallery" className="py-5 bg-light">
      <Container className="py-5">
        <h2
          className="text-center display-4 fw-bold mb-3"
          style={{ color: "#2d3748" }}
        >
          Galería de Servicios
        </h2>
        <p className="text-center mb-5 fs-5">
          Sigue nuestro trabajo en Instagram:
          <a
            href="https://instagram.com/transportejean"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary fw-bold"
          >
            @transportejean
          </a>
        </p>
        <Row className="g-4">
          {galleryImages.map((img, index) => (
            <Col md={4} sm={6} key={index}>
              <Card className="h-100 border-0 shadow overflow-hidden">
                <Card.Img
                  variant="top"
                  src={img}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
