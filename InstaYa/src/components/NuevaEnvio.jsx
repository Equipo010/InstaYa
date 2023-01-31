import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export function NuevaEnvio(){
    const [value, setValue] = React.useState(new Date());

    const handleChange = (newValue) => {
      setValue(newValue);
    }
    return(
        <Container id="nueva-orden-container" className="d-flex h-100">
            <Form>
                <div id="datos-envia">
                <h6 calss="mb-2">Datos de quien envía</h6>
                <div class="row">
                        <Form.Group controlId="confirma-cedula-addres-entrega" class="col-md-6 mb-2">
                            <Form.Control type="text" size="sm" placeholder="Confirma tu numero de identificacion" className="position-relative" required/>
                        </Form.Group>
                        <Form.Group controlId="telefono-addres-entrega" class="col-md-6 mb-2">
                            <Form.Control type="text" size="sm" placeholder="Numero de telefono" className="position-relative" required/>
                        </Form.Group>
                    </div>
                </div>
                <hr/>
                <div id="recogida">
                    <h6 calss="mb-2">Datos de recogida</h6>
                    <div class="row">
                        <div class="col-md-6 mb-2" >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>
                                    <DesktopDatePicker size="sm" 
                                    label="Fecha de recogida"
                                    inputFormat="MM/DD/YYYY"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                    />
                            </Stack>
                        </LocalizationProvider>
                        </div>
                        <div class="col-md-6 mb-2">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>
                                    <TimePicker size="sm"
                                    label="Hora de recogida"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>
                        </div>
                        </div>
                    
                     <div class="row">
                        <Form.Group controlId="ciudad-addres-entrega" class="col-md-6 mb-2">
                                    <Form.Control type="text" size="sm" placeholder="Ciudad" className="position-relative" required/>
                        </Form.Group>
                        <Form.Group controlId="departamento-addres-entrega" class="col-md-6 mb-2">
                                    <Form.Control type="text" size="sm" placeholder="Departamento" className="position-relative" required/>
                        </Form.Group>
                        <Form.Group controlId="direccion-addres" class="col-md-6 mb-2">
                                    <Form.Control type="text" size="sm" placeholder="Direccion" className="position-relative" required/>
                        </Form.Group>
                        <Form.Group controlId="barrio-addres-entrega" class="col-md-6 mb-2">
                                    <Form.Control type="text" size="sm" placeholder="Barrio" className="position-relative" required/>
                        </Form.Group>
                    </div>
                </div>
                <hr/>
                <div id="datos quien recibe">
                <h6 calss="mb-4">Datos de quien recibe</h6>
                <div class="row">
                        <Form.Group controlId="nombre-addres-recibe" class="col-md-6 mb-2">
                            <Form.Control type="text" size="sm" placeholder="Nombre" className="position-relative" required/>
                        </Form.Group>
                        <Form.Group controlId="apellido-addres-recibe" class="col-md-6 mb-2">
                            <Form.Control type="text" size="sm" placeholder="Apellidos" className="position-relative" required/>
                        </Form.Group>
                        <div class="col-md-6 mb-2">
							<Form.Select size="sm" id="tipo-doc-recibe" class="select col-md-6 mb-2" required>
								<option value="1" selected disabled>Tipo de documento</option>
								<option value="2">Tarjeta de identidad</option>
								<option value="3">Cedula de ciudadania</option>
								<option value="4">Cedula de extrajeria</option>
							</Form.Select>
						</div>
                        <Form.Group controlId="cedula-recibe-addres" class="col-md-6 mb-2">
                            <Form.Control type="text" size="sm" placeholder="Numero de documento" className="position-relative" required/>
                        </Form.Group>
                        <Form.Group controlId="telefono-addres" class="col-md-6 mb-2">
                            <Form.Control type="text" size="sm" placeholder="Numero de telefono" className="position-relative" required/>
                        </Form.Group>
                        <Form.Group controlId="correo-addres-recibe" class="col-md-6 mb-2">
                            <Form.Control type="email" size="sm" placeholder="Correo" className="position-relative" required/>
                        </Form.Group>
                    </div>
                </div>
                <hr/>
                <div id="recogida">
                    <h6 calss="mb-4">Datos de entrega</h6>
                    <div class="row">
                        <Form.Group controlId="ciudad-addres-recibe" class="col-md-6 mb-2">
                                    <Form.Control type="text" size="sm" placeholder="Ciudad" className="position-relative" required/>
                        </Form.Group>
                        <Form.Group controlId="departamento-addres-recibe" class="col-md-6 mb-2">
                                    <Form.Control type="text" size="sm" placeholder="Departamento" className="position-relative" required/>
                        </Form.Group>
                        <Form.Group controlId="direccion-addres-recibe" class="col-md-6 mb-2">
                                    <Form.Control type="text" size="sm" placeholder="Direccion" className="position-relative" required/>
                        </Form.Group>
                        <Form.Group controlId="barrio-addres-recibe" class="col-md-6 mb-2">
                                    <Form.Control type="text" size="sm" placeholder="Barrio" className="position-relative" required/>
                        </Form.Group>
                    </div>
                    <hr/>
                    <div id="info-paquete">
                        <h6 calss="mb-4">Información del paquete</h6>
                        <div class="row">
                            <Form.Group controlId="alto-paquete" class="col-md-6 mb-2">
                                        <Form.Control type="text" size="sm" placeholder="Alto" className="position-relative" required/>
                            </Form.Group>
                            <Form.Group controlId="ancho-paquete" class="col-md-6 mb-2">
                                        <Form.Control type="text" size="sm" placeholder="Ancho" className="position-relative" required/>
                            </Form.Group>
                            <Form.Group controlId="largo-paquete" class="col-md-6 mb-2">
                                        <Form.Control type="text" size="sm" placeholder="Largo" className="position-relative" required/>
                            </Form.Group>
                            <Form.Group controlId="peso-paquete" class="col-md-6 mb-2">
                                        <Form.Control type="text" size="sm" placeholder="Peso en Kg" className="position-relative" required/>
                            </Form.Group>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="d-grid col-md-5 mb-2 back">
					<Button size="md" id="crear-orden" variant="primary"  class='btn btn-success right'>Crear orden</Button>
				</div>

            </Form>
        </Container>
    )
}