import { useState, useRef, useEffect } from 'react'

// INICIO DE USER CONTEXT //
import { useContext } from "react";
import { UserContext } from "./Context/userContext.jsx";
// FIN DE USER CONTEXT //


const Updateprof = ({ setAlert }) => {



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

    var {user} = useContext(UserContext); // const de usuario
    const [resultadoObtenerDatosUsuario, setResultadoObtenerDatosUsuario] = useState(undefined) //Estado de respuesta a get información del usuario


    //COMIENZA FUNCION DE OBTENER DATOS DEL USUARIO //

    const obtenerDatosUsuario = async () => {

        const url = "http://localhost:3000/usuarios";
        console.log("Inicio obtención de datos de usuario")

        try {
            const data = await fetch(url, {
              method: "GET",
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user
            
            }
            });
            
            const resultado = await data.json();

            if (data.status == 200) {
                setResultadoObtenerDatosUsuario(true)
                
                setNombre(resultado[0].nombre)
                setApellido(resultado[0].apellido)
                setDireccion(resultado[0].direccion)
                setCiudad(resultado[0].ciudad)
                setCodigoPostal(resultado[0].codigopostal)
                setEmail(resultado[0].email)
                setTelefono(resultado[0].telefono)
            } else if (data.status == 404) {
                    setResultadoObtenerDatosUsuario(false)

            }

            console.log(data.status)
            
        } catch (error) {
                console.error("Error: ", error)
                setResultadoObtenerDatosUsuario(false)
        
        
              }


    }

    //FINALIZA FUNCION DE OBTENER DATOS DEL USUARIO //

        // INICIO DE USE EFFECT//
        useEffect(() => {
            obtenerDatosUsuario()
            }, []);
    
    
        // FIN DE USE EFFECT //

    //COMIENZA FUNCION DE ENVIO DE ACTUALIZACION //

    const enviaActualizacion = async () => {
      
        const url = "http://localhost:3000/usuarios";
        
        try {
              const data = await fetch(url, {
                method: "PUT",
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + user
                },
                body: JSON.stringify({
                    "nombre": nombre,
                    "apellido": apellido,
                    "direccion": direccion,
                    "ciudad": ciudad,
                    "codigopostal": codigopostal,
                    "email": email,
                    "telefono": telefono,
                    "contrasena": contrasena,
                    "reingresacontrasena": reingresarcontrasena
                })
              });
              const resultado = await data.json();
              console.log(resultado.mensaje);
              if (resultado.estado = 200) {
                                            console.log(resultado.estado + "Estado de actualizacion")
                                            setAlert({
                                                msg: resultado.mensaje,
                                                color: "success"
                                            });
                                            

                                            setContrasena("")
                                            setReingresarContrasena("")
                                            return;
  
              } else {
                    console.log(resultado.mensaje)
                    setAlert({
                                msg: resultado.mensaje,
                                color: "danger"
                            });
                    return;
  
              }
  
        } catch (error) {
          console.error("Error: ", error)
  
  
        }
      }

      //FINALIZA FUNCION DE ENVIO DE ACTUALIZACION //

    const validarFormulario = (e) => { e.preventDefault()

        if (nombre == "" || nombre == null || apellido == "" || apellido == null || direccion == "" || direccion == null || ciudad == "" || ciudad == null ||
        email == "" || email == null || telefono == "" || telefono == null) 
            {
            
                setAlert ({ msg:"Completa todos los campos requeridos.",
                            color:"danger"
                        });
                        return;

            }

        else if (contrasena != undefined && contrasena != "") {

            if (contrasena != reingresarcontrasena) {

                setAlert({
                                msg: "Las contraseñas no coinciden",
                                color: "danger"
                            });
                return;
            }


        }

        else {

                console.log("Enviando Actualizacion")
                enviaActualizacion()




            }
        



    }

if (resultadoObtenerDatosUsuario == undefined) {

    return (<h3 className="row d-flex justify-content-center text-danger">Cargando Información del Usuario...</h3>)

}

else if (resultadoObtenerDatosUsuario == true) {

    return (

            <form ref={form} className="row g-3 d-flex justify-content-center" onSubmit={validarFormulario}>
                <div className="row g-3 d-flex justify-content-center">
                    <div className="col-4">
                        <input type="text" className="form-control" placeholder="Nombre (Requerido)" aria-label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" placeholder="Apellido (Requerido)" aria-label="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
                    </div>
                </div>
                <div className="row g-3 d-flex justify-content-center">
                    <div className="col-4">
                        <input type="text" className="form-control" placeholder="Dirección (Requerido)" aria-label="Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)}/>
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control" placeholder="Ciudad (Requerido)" aria-label="Ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>
                    </div>
                    <div className="col-2">
                        <input type="text" className="form-control" placeholder="Código Postal" aria-label="Código Postal" value={codigopostal} onChange={(e) => setCodigoPostal(e.target.value)}/>
                    </div>
                </div>

                <div className="row g-3 d-flex justify-content-center">
                    <div className="col-4">
                        <input type="email" className="form-control disabled" placeholder="E-mail (Requerido)" aria-label="E-mail" value={email} readOnly onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control col-3 g-3" placeholder="Teléfono (Requerido)" aria-label="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                    </div>
                </div>

                <div className="row g-3 d-flex justify-content-center">
                    <h4 className="row g-3 d-flex justify-content-center text-danger">Si quiere cambiar la contraseña, complete los siguientes campos:</h4>
                    <div className="col-4">
                        <input type="password" className="form-control col-3 g-3" id="inputPassword3" placeholder="Contraseña (Requerido)" onChange={(e) => setContrasena(e.target.value)}/>
                    </div>
                    <div className="col-4">
                        <input type="password" className="form-control col-3 g-3" id="inputPassword4" placeholder="Reingresar Contraseña (Requerido)" onChange={(e) => setReingresarContrasena(e.target.value)}/>
                    </div>
                </div>

                <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>

    )

}

else {
        return (<h3 className="row d-flex justify-content-center text-danger">No se pudieron obtener los datos de usuario. Por favor intente actualizando la página.</h3>)

}


}

export default Updateprof;