import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export function User(){
    return(
        <Container>
            <h5>Mi informacion</h5>
            <p>Nombre: <a id="Nombre"></a></p>
            <p>Apellidos:<a></a> </p>
            <p>Correo electronico: <a></a></p> 
            <div class="row">
                <div className="d-grid col-md-6 mb-2 back">
                    <Button size="md" id="cambiar-datos" variant="primary"  class='btn btn-success right'>Editar informacion</Button>
                </div>
                <div className="d-grid col-md-6 mb-2 back">
                    <Button size="md" id="cambiar-contraseña" variant="primary"  class='btn btn-success right' href="/cambiar-contraseña">Cambiar contraseña</Button>
                </div>
            </div>
        </Container>
        )
}