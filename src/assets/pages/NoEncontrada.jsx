import {Link} from "react-router-dom";

export default function NoEncontrada(){
    return(
        <>
        <h1>No encontrada</h1>
        <h2>Esto no existe</h2>
        <Link to="/">Volver al inicio de la pagina</Link>
        </>

    )

}