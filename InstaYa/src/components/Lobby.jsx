import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function Lobby(){
    return(
        <Container>
           <Form>
                <table className="table" size="md">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Fecha de recogida</th>
                            <th>Fecha de entrega</th>
                            <th>Ciudad</th>
                            <th>Direccion de entrega</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>25/03/2022</td>
                            <td>30/03/2022</td>
                            <td>Valledupar</td>
                            <td>Tv 24 #18-17</td>
                            <td>Entregado</td> 
                        </tr>
                    </tbody>
                </table>
                <div className="d-grid col-md-5 mb-2 back">
					<Button size="md" id="agregar-orden" variant="primary"  class='btn btn-success right'>Nueva orden</Button>
				</div>
            </Form> 
        </Container>
    )
}