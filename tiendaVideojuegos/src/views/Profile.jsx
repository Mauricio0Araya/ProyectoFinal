import Alert from '../components/Alert.jsx'
import Updateprof from '../components/Perfil.jsx'
import { useState } from 'react'

const Profile = function () {

    const [alert, setAlert] = useState({msg:"", color: ""})

    return (
        <>
            <div className="reg-title d-flex justify-content-center">
                <h3>Mi perfil</h3>
            </div>
            <Updateprof setAlert={setAlert}/>
            {alert.msg && <Alert msg={alert.msg} color={alert.color}/> }
        </>
    
    )

}
    
export default Profile