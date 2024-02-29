import { useNavigate } from "react-router-dom";
import { useState } from "react";

// INICIO DE USER CONTEXT //
import { useContext } from "react";
import { UserContext } from "./Context/userContext.jsx";
// FIN DE USER CONTEXT //

const Inputloginform = ({ setAlert }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  var {user, setUser} = useContext(UserContext); // const de usuario

  // INICIO FUNCIÓN obtenerUserToken //

    const obtenerUserToken = async () => {
      
      const url = "http://localhost:3000/login";
      
      try {
            const data = await fetch(url, {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                      "email": email,
                      "contrasena": password
              })
            });
            const token = await data.json();
            console.log(token.llave);
            if (token.llave != "" && token.llave != undefined) {
              
              setUser(token.llave);

              return token;

            } else {
                    console.log("El token obtenido es vacío")
                    return false

            }

      } catch (error) {
        console.error("Error: ", error)


      }
    }


  // FIN FUNCIÓN obtenerUserToken //


  const validarDatos = (e) => {

    e.preventDefault();

    if (password == "" || password == undefined) {
      setAlert({
        msg: "Por favor escriba una contraseña ",
        color: "danger",
      })
      return;
    }
    else if ( email === "") {
      setAlert({
        msg: "Completa todos los campos",
        color: "danger",
      })
      return;
    } else {
            
            const respuesta = obtenerUserToken();
            console.log(respuesta);
            if (respuesta != undefined && respuesta != "" && user != null && respuesta != null){
              console.log("pasa por la validacion correcta")
              navigate('/');
            }
            if (respuesta === false || user === null){
                  console.log("No hay nada asociado a user");

            }
            }
    
    setEmail("")
    setPassword("")

  }

  return (
    <>
      <div className="contenedor- formulario">
        <hr />
        <h3>Sig in</h3>

        <form onSubmit={validarDatos}>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

         

          <div className="boton">
            <button type="submit">Ingresar</button>
          </div>
        </form>

      </div>

    </>
  )
}
export default Inputloginform;