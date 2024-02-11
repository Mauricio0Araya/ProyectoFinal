import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {UserContext} from "../components/Context/userContext";

const Login = function () {

const {usuariolista} = useContext(UserContext) //Se añade para leer la lista de usuarios y probar front end.

return (
<p>Login</p>

)}

export default Login;