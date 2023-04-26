import React, { useState } from "react";
import { FormularioNotas } from "./formularioNotas";
import { NotasContenedor } from "./notasContenedor";
import {v4 as uuidv4} from "uuid";
export function NotaMenu(){

    const [nota, setNota] = useState([]);
    const [notaedit, setNotaedit] = useState(false);
    const [existenteedit, setExistenteedit] = useState(false);

    const guardarNota = (datos) => {
        const nuevaNota = {
            id:uuidv4(),
            title: datos.title,
            body : datos.body
        }
        setNota([...nota, { ...nuevaNota }])
    }

    const eliminarNota= (id) => {
        const notaEl =  nota.filter((n)=> n.id != id);
        setNota(notaEl);
    }

    const editar = (aeditar) => {
        setExistenteedit(true);
        setNotaedit(aeditar);
    }   

    const guardarEditado = (datos) => {
        const notaActualizada = nota.map(n => {
            if(n.id === datos.id){
                return datos;
            }
            return n;
        });
        setNota(notaActualizada);
        setExistenteedit(false);
        console.log(nota);
    }

    return(
        <div className="notaMenu">
            <FormularioNotas guardar={guardarNota} actualizarNota={guardarEditado}
             notaExitente={existenteedit} aeditar={notaedit} />

            <NotasContenedor notas={nota} eliminar={eliminarNota} editar={editar} />
        </div>
    );
}