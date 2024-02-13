import { useState } from 'react'
import SocialButton from "./SocialButton.jsx";
import Inputloginform from "./Inputloginform.jsx";
import Alert from "./Alert";


const Loginform = () => {
  const [alert, setAlert] = useState({ msg: "", color: "", })
  return (
    <>
      <div className="registro-card">
        <h1 className="cuenta">Login</h1>
        <hr />

        <div className="social-buttons">
          <SocialButton icon="fa-brands fa-facebook" />
          <SocialButton icon="fa-brands fa-github" />
          <SocialButton icon="fa-brands fa-linkedin" />
          <SocialButton icon= "fa-brands fa-instagram"/>
          <SocialButton icon= "fa-brands fa-google"/>
        </div>
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