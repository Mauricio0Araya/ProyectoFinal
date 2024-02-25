import { useState } from 'react'
import Inputloginform from "./Inputloginform.jsx";
import Alert from "./Alert";


const Loginform = () => {
  const [alert, setAlert] = useState({ msg: "", color: "", })
  return (
    <>
      <div className="registro-card">
        <h1 className="cuenta">Iniciar Sesion</h1>
        <hr />
        <div className="form">
          <Inputloginform setAlert={setAlert} />

        </div>

        <div className='alert'>
          {alert.msg && <Alert msg={alert.msg} color={alert.color} />}

        </div>
      </div>



    </>
  )
}

export default Loginform;