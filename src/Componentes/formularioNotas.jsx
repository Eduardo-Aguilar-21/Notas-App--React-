import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import '../Estilos/notas.css';

export function FormularioNotas({guardar, notaExitente, actualizarNota, aeditar }){

    const [nt,setNt] = useState({
        title:"",
        body:""
    });

    const [boton, setBoton] = useState("Crear");

    useEffect(() => {
        if (aeditar) {
            setNt({ title: aeditar.title, body: aeditar.body });
            setBoton("Actualizar");
        }
    }, [aeditar]);



    const handleGuardar = (e) =>{
        e.preventDefault();
        if(notaExitente){
            actualizarNota({ ...aeditar, ...nt });
            setBoton("Crear");
        }else{
            guardar(nt);
            setBoton("Crear");
        }
        setNt({title: "", body: ""});
    }


    return(
        <div className='notasform'>
            <h1>Agregar Nota:</h1>
            <Form onSubmit={handleGuardar}>
                <Form.Label>Ingrese El titulo de la nota</Form.Label>
                <Form.Control 
                type='text'
                name='title'
                value={nt.title}
                onChange={(e) => setNt({...nt, title: e.target.value})}   />      

                <Form.Label>Ingrese el cuerpo la nota</Form.Label>
                <Form.Control 
                type='text'
                name='body'
                value={nt.body}
                onChange={(e) => setNt({...nt, body: e.target.value})}   />

                <Button type="submit" className="botonagregar" variant="success">{boton}</Button>
            </Form>
        </div>
    );
}
