import { useContext, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { TransportContext } from "../context/TransportContext";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const QuoteForm = () => {
  const { quoteData, updateQuoteData, resetQuoteData } =
    useContext(TransportContext);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!quoteData.name || quoteData.name.trim() === "") {
      newErrors.name = "Por favor ingresa tu nombre";
    }

    if (!quoteData.email || quoteData.email.trim() === "") {
      newErrors.email = "Por favor ingresa tu email";
    } else if (!/\S+@\S+\.\S+/.test(quoteData.email)) {
      newErrors.email = "Por favor ingresa un email válido";
    }

    if (!quoteData.phone || quoteData.phone.trim() === "") {
      newErrors.phone = "Por favor ingresa tu teléfono";
    } else if (quoteData.phone.replace(/\D/g, "").length < 8) {
      newErrors.phone = "Teléfono debe tener al menos 8 dígitos";
    }

    if (!quoteData.origin || quoteData.origin.trim() === "") {
      newErrors.origin = "Por favor ingresa la dirección de origen";
    }

    if (!quoteData.destination || quoteData.destination.trim() === "") {
      newErrors.destination = "Por favor ingresa la dirección de destino";
    }

    if (!quoteData.serviceType || quoteData.serviceType === "") {
      newErrors.serviceType = "Por favor selecciona un tipo de servicio";
    }

    if (!quoteData.date || quoteData.date === "") {
      newErrors.date = "Por favor selecciona una fecha";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const generateWhatsAppMessage = () => {
    const message = `¡Hola TRANSPORTEJEAN! Quiero cotizar un servicio:
- Nombre: ${quoteData.name}
- Email: ${quoteData.email}
- Teléfono: ${quoteData.phone}
- Origen: ${quoteData.origin}
- Destino: ${quoteData.destination}
- Tipo de servicio: ${quoteData.serviceType}
- Fecha: ${quoteData.date}
- Detalles: ${quoteData.details || "Sin detalles adicionales"}`;
    return encodeURIComponent(message);
  };

const generateGmailWebLink = () => {
  const to = "jeanbarraez17@gmail.com";
  const subject = encodeURIComponent("Cotización de Flete/Mudanza");

  const bodyText =
    `¡Hola TRANSPORTEJEAN! Quiero cotizar un servicio:\n\n` +
    `- Nombre: ${quoteData.name}\n` +
    `- Email: ${quoteData.email}\n` +
    `- Teléfono: ${quoteData.phone}\n` +
    `- Origen: ${quoteData.origin}\n` +
    `- Destino: ${quoteData.destination}\n` +
    `- Tipo de servicio: ${quoteData.serviceType}\n` +
    `- Fecha: ${quoteData.date}\n` +
    `- Detalles: ${quoteData.details || "Sin detalles adicionales"}`;

  const body = encodeURIComponent(bodyText);

  // URL oficial para “compose” en Gmail
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
};

  const handleWhatsApp = (e) => {
    if (!validateForm()) {
      e.preventDefault();
      setShowSuccess(false);
      return;
    }
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleEmail = (e) => {
    if (!validateForm()) {
      e.preventDefault();
      setShowSuccess(false);
      return;
    }
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  if (!quoteData || !updateQuoteData || !resetQuoteData) {
    console.log("DEBES INTRODUCIR TODOS LOS DATOS");
    return null;
  }

  return (
    <section id="quote" className="py-5 bg-light">
      <Container className="py-5">
        <h2
          className="text-center display-4 fw-bold mb-3"
          style={{ color: "#2d3748" }}
        >
          Cotiza Tu Servicio
        </h2>
        <p className="text-center text-muted mb-5 fs-5">
          Completa el formulario y recibe una cotización personalizada
        </p>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {showSuccess && (
              <Alert variant="success" className="mb-4">
                ✅ Formulario válido! Abriendo tu aplicación...
              </Alert>
            )}
            <Form
              onSubmit={handleSubmit}
              className="bg-white p-4 p-md-5 rounded shadow"
            >
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">
                  Nombre Completo *
                </Form.Label>
                <Form.Control
                  type="text"
                  value={quoteData.name}
                  onChange={(e) => {
                    updateQuoteData("name", e.target.value);
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  placeholder="Ej: Juan Pérez"
                  isInvalid={!!errors.name}
                />
                {errors.name && (
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Email *</Form.Label>
                <Form.Control
                  type="email"
                  value={quoteData.email}
                  onChange={(e) => {
                    updateQuoteData("email", e.target.value);
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  placeholder="tucorreo@ejemplo.com"
                  isInvalid={!!errors.email}
                />
                {errors.email && (
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Teléfono *</Form.Label>
                <Form.Control
                  type="tel"
                  value={quoteData.phone}
                  onChange={(e) => {
                    updateQuoteData("phone", e.target.value);
                    if (errors.phone) setErrors({ ...errors, phone: "" });
                  }}
                  placeholder="+56 9 1234 5678"
                  isInvalid={!!errors.phone}
                />
                {errors.phone && (
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Origen *</Form.Label>
                    <Form.Control
                      type="text"
                      value={quoteData.origin}
                      onChange={(e) => {
                        updateQuoteData("origin", e.target.value);
                        if (errors.origin) setErrors({ ...errors, origin: "" });
                      }}
                      placeholder="Dirección de origen"
                      isInvalid={!!errors.origin}
                    />
                    {errors.origin && (
                      <Form.Control.Feedback type="invalid">
                        {errors.origin}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Destino *</Form.Label>
                    <Form.Control
                      type="text"
                      value={quoteData.destination}
                      onChange={(e) => {
                        updateQuoteData("destination", e.target.value);
                        if (errors.destination)
                          setErrors({ ...errors, destination: "" });
                      }}
                      placeholder="Dirección de destino"
                      isInvalid={!!errors.destination}
                    />
                    {errors.destination && (
                      <Form.Control.Feedback type="invalid">
                        {errors.destination}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">
                      Tipo de Servicio *
                    </Form.Label>
                    <Form.Select
                      value={quoteData.serviceType}
                      onChange={(e) => {
                        updateQuoteData("serviceType", e.target.value);
                        if (errors.serviceType)
                          setErrors({ ...errors, serviceType: "" });
                      }}
                      isInvalid={!!errors.serviceType}
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="Mudanza Residencial">
                        Mudanza Residencial
                      </option>
                      <option value="Flete de Carga">Flete de Carga</option>
                      <option value="Mudanza de Oficina">
                        Mudanza de Oficina
                      </option>
                      <option value="Servicio Interurbano">
                        Servicio Interurbano
                      </option>
                    </Form.Select>
                    {errors.serviceType && (
                      <Form.Control.Feedback type="invalid">
                        {errors.serviceType}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">
                      Fecha Tentativa *
                    </Form.Label>
                    <Form.Control
                      type="date"
                      value={quoteData.date}
                      onChange={(e) => {
                        updateQuoteData("date", e.target.value);
                        if (errors.date) setErrors({ ...errors, date: "" });
                      }}
                      isInvalid={!!errors.date}
                    />
                    {errors.date && (
                      <Form.Control.Feedback type="invalid">
                        {errors.date}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4 p-4 bg-light rounded">
                <h4 className="fw-bold mb-3">Detalles Adicionales</h4>
                <h6 className="fw-semibold mb-2">
                  Hay 3 tipos de traslados y servicios:
                </h6>
                <p className="mb-1">
                  <strong>1. BRONCE:</strong> Sólo Traslado, los clientes cargan
                  y descargan el material.
                </p>
                <p className="mb-1">
                  <strong>2. PLATA:</strong> El Chófer ayuda a los clientes a
                  cargar y descargar el material.
                </p>
                <p className="mb-3">
                  <strong>3. ORO:</strong> El Chófer realiza el servicio
                  completo con un ayudante (peoneta).
                </p>
                <div className="alert alert-warning py-2 mb-3">
                  <strong>Nota importante:</strong> Si hay materiales con peso
                  superior a 50 kg, la carga o descarga tiene que ser entre 3
                  personas mínimo.
                </div>
                <Form.Label className="fw-semibold">
                  Describe tu carga o mudanza:
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={quoteData.details}
                  onChange={(e) => updateQuoteData("details", e.target.value)}
                  placeholder="Ej: Mudanza de 2 ambientes, 1 sofá, 1 mesa, 4 sillas, nevera pequeña, cajas varias..."
                />
              </Form.Group>

              <div className="d-grid gap-3">
                <a
                  href={`https://wa.me/56986813898?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-lg fw-bold py-3"
                  onClick={handleWhatsApp}
                  style={{
                    background:
                      "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
                    border: "none",
                  }}
                >
                  <FaWhatsapp className="me-2 fs-5" />
                  Enviar por WhatsApp
                </a>
                <a
                  href={generateGmailWebLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-danger btn-lg fw-bold py-3"
                  onClick={handleEmail}
                  style={{
                    background:
                      "linear-gradient(135deg, #ea4335 0%, #d93025 100%)",
                    border: "none",
                  }}
                >
                  <FaEnvelope className="me-2 fs-5" />
                  Enviar por Email
                </a>
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    resetQuoteData();
                    setErrors({});
                    setShowSuccess(false);
                  }}
                  className="fw-bold py-3"
                >
                  Limpiar Formulario
                </Button>
              </div>

              <p className="text-center text-muted mt-4 mb-0 small">
                * Campos obligatorios. Tus datos están seguros y no serán
                compartidos.
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QuoteForm;
