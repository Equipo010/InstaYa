import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function OlvideContraseña(){
    return(
        <Container>
            <Form>
                <p>Por favor ingrese su correo electronico para enviar un codigo de validación</p>
                <Form.Group controlId="cambio-contraseña-email-addres">
                    <Form.Control type="email" size="lg" placeholder="Correo electronico" autoComplete="username" className="position-relative mb-2" required/>
                </Form.Group>
                <div className="d-grid col-md-6 mb-2 back">
                    <Button size="md" id="enviar-codigo" variant="primary"  class='btn btn-success right' href="#/">Enviar código</Button>
                </div>
            </Form>
        </Container>
    )
}