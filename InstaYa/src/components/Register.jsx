import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function Register(){

	return(
		<Container id="register-container" className="d-flex h-100">
			<Form id="register-form" class="px-md-2">
				<img
						className=" InstaYa-logo"
						src="src/Imagenes/Recurso 7.png"
						alt="InstaYa"/>
				<div className="text-center w-100">
					<h1 class="mb-4">Crear cuenta</h1>
					<div class="row ">
						<Form.Group controlId="register-name-addres" class="col-md-6 mb-2">
								<Form.Control type="text" size="lg" placeholder="Nombre" className="position-relative" required/>
						</Form.Group>
						<Form.Group controlId="register-apellidos-addres" class="col-md-6 mb-2">
								<Form.Control type="text" size="lg" placeholder="Apellidos" className="position-relative" required/>
						</Form.Group>
					</div>
					<div class="row ">
						<div class="col-md-6 mb-2">
							<Form.Select id="tipo-doc" class="select col-md-6 mb-2" required>
								<option value="1" selected disabled>Tipo de documento</option>
								<option value="2">Tarjeta de identidad</option>
								<option value="3">Cedula de ciudadania</option>
								<option value="4">Cedula de extrajeria</option>
							</Form.Select>
						</div>
						<Form.Group controlId="register-identification-addres" class="col-md-6 mb-2">
								<Form.Control type="text" size="lg" placeholder="Numero de documento" className="position-relative" required/>
						</Form.Group>
					</div>
					<Form.Group controlId="register-email-addres">
						<Form.Control type="email" size="lg" placeholder="Correo electronico" autoComplete="username" className="position-relative mb-2" required/>
					</Form.Group>
					<div class="row">
						<Form.Group controlId="register-password-addres" class="col-md-6 mb-2">
								<Form.Control type="password" size="lg" placeholder="Contraseña" autoComplete="current-password" className="position-relative" required/>
						</Form.Group>
						<Form.Group controlId="register-password-2-addres" class="col-md-6 mb-2">
								<Form.Control type="password" size="lg" placeholder="Confirmar contraseña" autoComplete="current-password" className="position-relative" required/>
						</Form.Group>
					</div>
					<div class="form-check d-flex justify-content-center mb-2">
						<input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
						<label class="form-check-label" for="form2Example3">
							Aceptar <a href="#!">Terminos y condiciones</a>
						</label>
                  	</div>
					<div class="row">
						<div className="d-grid col-md-6 mb-2 back">
							<Button id="Inicio" variant="primary" size="lg">Iniciar Sesión</Button>
						</div>
						<div className="d-grid col-md-6 mb-2 register">
							<Button id="registro" variant="primary" size="lg">Registrarse</Button>
						</div>
					</div>
				</div>
				<p className="mt-5">&copy; 2022-2023</p>
			</Form>
		</Container>
	)
}