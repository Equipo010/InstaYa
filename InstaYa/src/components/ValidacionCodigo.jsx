import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function ValidacionCodigo(){
    return(
        <Container>
            <Form>
                <p>Por favor ingrese su correo electronico para enviar un codigo de validación</p>
                <Form.Group controlId="codigo-validacion">
                    <Form.Control type="text" size="lg" placeholder="Codigo de validación" autoComplete="username" className="position-relative mb-2" required/>
                </Form.Group>
                <div className="d-grid col-md-6 mb-2 back">
                    <Button size="md" id="validar-codigo" variant="primary"  class='btn btn-success right' href="/cambiar-contraseña">Validar código</Button>
                </div>
            </Form>
        </Container>
    )
}