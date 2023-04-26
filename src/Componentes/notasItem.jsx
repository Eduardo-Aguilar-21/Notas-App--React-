import React from "react";
import { Button } from "react-bootstrap";

export function NotasItem({nota, eliminar, editar }){

    return(
        <div className="notaitem">
            <h1>{nota.title}</h1>
            <h2>{nota.body}</h2>
            <Button variant="danger" onClick={() => eliminar(nota.id)}>Eliminar</Button>
            <Button variant="success" onClick={() => editar(nota)} >Actualizar</Button>
        </div>
    );
}