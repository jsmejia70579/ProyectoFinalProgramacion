import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Table,Navbar,Nav,Container,Form } from 'react-bootstrap';

const element=(
  
    <div>
      {<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand >MENÚ.</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#img">Imagen</Nav.Link>
        <Nav.Link href="#dp">Titulo</Nav.Link>
        <Nav.Link href="#dm">Enlaces de Menú</Nav.Link>
        <Nav.Link href="#tabla">Educación</Nav.Link>
        <Nav.Link href="#formulario">Agregar Estudios</Nav.Link>
        <Nav.Link href="#pg">Pie de Página</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>}
      {<img id="img" src="data:image/jpeg;base64,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" alt="no sirve" width='300px'/>}
      {<br/>}
      {<div id="dp" ><h1>Titulo</h1>
      <h3>Datos personales</h3>
      </div>}
      {<div id="dm" ><h1>Enlaces de menu</h1>
      </div>}
      {<h2>Educacion</h2>}
      {
        <Table id="tabla" striped bordered hover>
  <thead>
    <tr>
      <th>Año</th>
      <th>Institucion</th>
      <th>Lugar</th>
      <th>¿Culmino?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    
  </tbody>
</Table>}

{
  <Form id="formulario">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Año</Form.Label>
    <Form.Select aria-label="Default select example">
  <option>Seleccione</option>
  <option value="1">2021</option>
  <option value="2">2020</option>
  <option value="3">2019</option>
  <option value="4">2018</option>
  <option value="5">2017</option>
  <option value="6">2016</option>
  <option value="7">2015</option>
  <option value="8">2014</option>
  <option value="9">2013</option>
  <option value="10">2012</option>
  <option value="11">2011</option>
  <option value="12">2010</option>
</Form.Select>

 
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Institución Educativa</Form.Label>
    <Form.Control type="text" placeholder="Institucion" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Label>Culminó?</Form.Label>
    <Form.Check type="checkbox" label="Seleccione para SI" />
  </Form.Group>
  <Button variant="primary" type="Enviar">
    Submit
  </Button>
</Form>
}
{<h1 id='pg' >Pie de pagina</h1>}

    </div>
)
ReactDOM.render(element,document.getElementById("root"))