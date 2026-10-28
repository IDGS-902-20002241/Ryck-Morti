import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
export default function Login(){

        const [nombre,setNombre] =useState("");
        const {login} =useAuth('');
        const navigate =useNavigate();
        const enviar = (e) => {
            e.preventDefault()
            if(!nombre.trim())return 
            login(nombre)
            navigate('/detalles',{replace:true})
        };


        return(
            <>
            <h1>Esta es una simulacion de login</h1>
            <form onSubmit={enviar}>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Paquito"/>
                <button type="submit">Iniciar Login</button>
            </form>
            </>
        )
}
