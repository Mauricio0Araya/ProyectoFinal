import { useState } from "react";

const Inputloginform = ({ setAlert }) => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const validarDatos = (e) => {

    e.preventDefault();

    if (password != confirmPassword) {
      setAlert({
        msg: "Las contraseñas es erronea ",
        color: "danger",

      })
      return;
    }
    if (
      nombre === "" ||
      email === "" ||
      password === "" 
    ) {
      setAlert({
        msg: "Completa todos los campos",
        color: "danger",

      })
      return;
    }

    setAlert({
      msg: "Cuenta creada con existo",
      color: "success",
    })

    setNombre("")
    setEmail("")
    setPassword("")
    setConfirmPassword("");



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
              name="nombre"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

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