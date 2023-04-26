import React from "react";
import { NotasItem } from "./notasItem";

export function NotasContenedor({notas, eliminar, editar}){
    return(
        <div className="notasContenedor">
            {notas.map((n)=>{
                return <NotasItem key={n.id} nota={n} eliminar={eliminar}  editar={editar}  />
            })}

        </div>
    );
}
