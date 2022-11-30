import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function CambiarContraseña(){
    return(
        <Container>
            <Form>
            <div class="row">
                <Form.Group controlId="cambio-password-addres" class="col-md-6 mb-2">
                        <Form.Control type="password" size="lg" placeholder="Nueva contraseña" autoComplete="current-password" className="position-relative" required/>
                </Form.Group>
                <Form.Group controlId="cambio-password-2-addres" class="col-md-6 mb-2">
                        <Form.Control type="password" size="lg" placeholder="Confirmar contraseña" autoComplete="current-password" className="position-relative" required/>
                </Form.Group>
            </div>
            <div className="d-grid col-md-6 mb-2 back">
                    <Button size="md" id="cambiar-contraseña" variant="primary"  class='btn btn-success right'>Cambiar contraseña</Button>
            </div>
            </Form>
        </Container>
    )
}