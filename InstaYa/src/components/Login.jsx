import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export function Login(){
	return (
		<Container id="login-container" className="d-flex h-100">
			<Form id="login-form" className="text-center w-100">
			
				<img
				className="mb-4 InstaYa-logo"
				src="src/Imagenes/Recurso 7.png"
				alt="InstaYa"/>
				
				<Form.Group controlId="sign-in-email-addres">
					<Form.Control type="email" size="lg" placeholder="Correo electronico" autoComplete="username" className="position-relative mb-2" required/>
				</Form.Group>
				<Form.Group controlId="sign-in-password-addres" class="mb-3">
					<Form.Control type="password" size="lg" placeholder="Contraseña" autoComplete="current-password" className="position-relative mb-2" required/>
				</Form.Group>
				<Form.Group className="d-flex justify-content-center mb-2">
					<Form.Check label="Recordar inicio de sesión" />
				</Form.Group>
				<div className="d-grid mb-2">
					<Button variant="primary" size="lg">Iniciar sesión</Button>
				</div>
				<div className="mb-2">
					<NavLink to="/olvide-contraseña">¿Olvidaste tu contraseña?</NavLink>
				</div>
				<div className="d-grid mb-2 registro">
					<Button id="registro" variant="primary" size="lg">Crear cuenta</Button>
				</div>
				<p className="mt-5">&copy; 2022-2023</p>
			</Form>
		</Container>
	    )
}