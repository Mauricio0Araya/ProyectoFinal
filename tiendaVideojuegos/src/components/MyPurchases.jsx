import { useState, useEffect, useContext } from 'react'
import {useNavigate} from 'react-router-dom';
import { UserContext } from "./Context/userContext.jsx"

const MyPurchases = () => {

    var {user} = useContext(UserContext); // const de usuario
    const [listaCompras,setListaCompras] = useState([])

    //INICIO DE USE NAVIGATE//
        const navigate = useNavigate();
    //FIN DE USE NAVIGATE//

    useEffect( () => {

        obtenerCompras()
        
        },[]);

    

    const obtenerCompras = async () => {

        const url = "http://localhost:3000/compras";
        console.log("Inicio obtención de listado de compras")

        try {
            const data = await fetch(url, {
              method: "GET",
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user
            
            }
            });
            
            const resultado = await data.json();
            setListaCompras(resultado)
            console.log(listaCompras)

            
        } catch (error) {
                console.error("Error: ", error)
        
        
              }
            }

    return (

            listaCompras.map((compra) => 
            <div className="card col-8 d-flex m-2 d-flex" id={compra.idordencompra} key={compra.idordencompra}>
                <h5 className="card-header">Compra #{compra.idordencompra}</h5>
                <div className="card-body">
                    <h5 className="card-title">Estado de Compra: {compra.estado}</h5>
                    <p className="card-text">Fecha de Compra: {compra.fechacompra} </p>
                    <a href="#" className="btn btn-primary" onClick={() => {navigate(`/purchasehistory/${compra.idordencompra}`)}}>Ver Detalle</a>
                </div>
            </div>
        )


    )



}

export default MyPurchases;