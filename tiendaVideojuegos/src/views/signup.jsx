import Registro from '../components/Registro.jsx'
import Alert from '../components/Alert.jsx'
import { useState } from 'react'

const Signup = () => {

    const [alert, setAlert] = useState({msg:"", color: ""})

    return (

    <>
    <div className="reg-title d-flex justify-content-center">
        <h3>Completa el Formulario de Registro</h3>
    </div>
    <Registro setAlert={setAlert}/>
    {alert.msg && <Alert msg={alert.msg} color={alert.color}/> }
    </>
    )}
    
export default Signup;