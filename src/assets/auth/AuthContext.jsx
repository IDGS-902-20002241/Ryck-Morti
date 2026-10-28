import { useContext,createContext, useReducer } from "react"
const estadoinicial = {
    usuario: null, 
    autenticado : false

}

function authReducer(estado, accion){
    switch(accion.type){
        case 'LOGIN':
            return {usuario:accion.payload, autenticado: true}
        case 'LOGOUT':
            return estadoinicial
            default:
                return estado

    }
}
const AuthContext = createContext(null)

export function AuthProvider({children}){
    
    const [estado,dispatch] = useReducer(authReducer, estadoinicial);
    const login = (usuario)=> {dispatch({type:'LOGIN',payload:usuario})};
    const logout = ()=> {dispatch({type:'LOGOUT'})};
    return(
        <AuthContext.Provider value={{...estado,login,logout}}>{children}</AuthContext.Provider>

    ) 
}
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(){

    return useContext(AuthContext)

} 

