import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export function EditarEnvio(){
    const [value, setValue] = React.useState(new Date());

    const handleChange = (newValue) => {
      setValue(newValue);
    };
    return(
        <Container id="modificar-orden-container" className="d-flex h-100">
            <Form>
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
                    <Form.Group controlId="nombre-addres-modificacion" class="col-md-6 mb-2">
                        <Form.Control type="text" size="sm" placeholder="Nombre" className="position-relative" required/>
                    </Form.Group>
                    <Form.Group controlId="identificacion-addres-entrega" class="col-md-6 mb-2">
                        <Form.Control type="text" size="sm" placeholder="Numero de documento" className="position-relative" required/>
                    </Form.Group>
                </div>
                <div class="mb-2">
                    <Form.Select size="sm" id="tipo-doc-recibe" class="select col-md-6 mb-2" required>
                        <option value="1" >Por recoger</option>
                        <option value="2">Recogido</option>
                        <option value="3">Guardado y por entregar</option>
                        <option value="4">Entregado</option>
                    </Form.Select>
				</div>
                <div class="row">
                    <Form.Group controlId="largo-addres-entrega" class="col-md-6 mb-2">
                        <Form.Control type="text" size="sm" placeholder="largo" className="position-relative" required/>
                    </Form.Group>
                    <Form.Group controlId="ancho-addres-entrega" class="col-md-6 mb-2">
                        <Form.Control type="text" size="sm" placeholder="Ancho" className="position-relative" required/>
                    </Form.Group>
                    <Form.Group controlId="alto-addres" class="col-md-6 mb-2">
                        <Form.Control type="text" size="sm" placeholder="Alto" className="position-relative" required/>
                    </Form.Group>
                    <Form.Group controlId="barrio-addres-entrega" class="col-md-6 mb-2">
                        <Form.Control type="text" size="sm" placeholder="Peso" className="position-relative" required/>
                    </Form.Group>
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
                <div className="d-grid col-md-5 mb-2 back">
					<Button size="md" id="modificar-orden" variant="primary"  class='btn btn-success right'>Modificar orden</Button>
				</div>

            </Form>
        </Container>
    )
}