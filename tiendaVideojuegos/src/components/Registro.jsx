import { useState, useRef } from 'react'
import { useContext } from "react";
import {UserContext} from "./Context/userContext"

const Registro = ({ setAlert }) => {

    const {usuariolista, setUsuarioLista, user, setUser} = useContext(UserContext);
    console.log(usuariolista)

    const form = useRef()
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState("")
    const [direccion, setDireccion] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [codigopostal, setCodigoPostal] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [contrasena, setContrasena] = useState("")
    const [reingresarcontrasena, setReingresarContrasena] = useState("")

    const validarFormulario = (e) => { e.preventDefault()

        if (nombre == "" || nombre == null || apellido == "" || apellido == null || direccion == "" || direccion == null || ciudad == "" || ciudad == null ||
        email == "" || email == null || telefono == "" || telefono == null || contrasena == "" || contrasena == null || reingresarcontrasena == "" || 
        reingresarcontrasena == null) {
            
                                        setAlert ({ msg:"Completa todos los campos.",
                                                    color:"danger"
                                    });
                                    return;

        }

        else if (contrasena != reingresarcontrasena) {

            setAlert({
                            msg: "Las contraseñas no coinciden",
                            color: "danger"
                        });
            return;
        }

        else {

                const nuevoUsuario = {
                                        "nombre": nombre,
                                        "apellido": apellido,
                                        "direccion": direccion,
                                        "ciudad": ciudad,
                                        "codigopostal": codigopostal,
                                        "email": email,
                                        "telefono": telefono,
                                        "contraseña": contrasena,


                }

                console.log(nuevoUsuario);

                setUsuarioLista(usuariolista.push(nuevoUsuario));
                setUser(email)



                setNombre("");
                setApellido("");
                setDireccion("");
                setCiudad("");
                setCodigoPostal("");
                setEmail("");
                setTelefono("");
                setContrasena("");
                setReingresarContrasena("");

                setAlert({
                    msg:"Usuario Registrado Exitosamente",
                    color: "success"
                });

                form.current.reset()
        }



    }


return (

        <form ref={form} className="row g-3 d-flex justify-content-center" onSubmit={validarFormulario}>
            <div className="row g-3 d-flex justify-content-center">
                <div className="col-4">
                    <input type="text" className="form-control" placeholder="Nombre (Requerido)" aria-label="Nombre" onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div className="col-4">
                    <input type="text" className="form-control" placeholder="Apellido (Requerido)" aria-label="Apellido" onChange={(e) => setApellido(e.target.value)}/>
                </div>
            </div>
            <div className="row g-3 d-flex justify-content-center">
                <div className="col-4">
                    <input type="text" className="form-control" placeholder="Dirección (Requerido)" aria-label="Dirección" onChange={(e) => setDireccion(e.target.value)}/>
                </div>
                <div className="col-2">
                    <input type="text" className="form-control" placeholder="Ciudad (Requerido)" aria-label="Ciudad" onChange={(e) => setCiudad(e.target.value)}/>
                </div>
                <div className="col-2">
                    <input type="text" className="form-control" placeholder="Código Postal" aria-label="Código Postal" onChange={(e) => setCodigoPostal(e.target.value)}/>
                </div>
            </div>

            <div className="row g-3 d-flex justify-content-center">
                <div className="col-4">
                    <input type="email" className="form-control" placeholder="E-mail (Requerido)" aria-label="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="col-4">
                    <input type="text" className="form-control col-3 g-3" placeholder="Teléfono (Requerido)" aria-label="Teléfono" onChange={(e) => setTelefono(e.target.value)}/>
                </div>
            </div>

            <div className="row g-3 d-flex justify-content-center">
                <div className="col-4">
                    <input type="password" className="form-control col-3 g-3" id="inputPassword4" placeholder="Contraseña (Requerido)" onChange={(e) => setContrasena(e.target.value)}/>
                </div>
                <div className="col-4">
                    <input type="password" className="form-control col-3 g-3" id="inputPassword4" placeholder="Reingresar Contraseña (Requerido)" onChange={(e) => setReingresarContrasena(e.target.value)}/>
                </div>
            </div>

            <div className="col-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </div>
        </form>

)


}

export default Registro;