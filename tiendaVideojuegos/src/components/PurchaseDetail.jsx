import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from "./Context/userContext.jsx"
import ListGroup from 'react-bootstrap/ListGroup';


const PurchaseDetail = () => {

    const {user} = useContext(UserContext)

    const { id } = useParams()

    const [detalleObtenido, setDetalleObtenido] = useState([])

    const obtenerDetalleCompra = async () => {

        //const url = `http://localhost:3000/compras/${id}`;//

        const url = "https://pfgames-devbackend-vutz.onrender.com/compras/${id}";
        console.log("Inicio obtención de Detalle")

        try {
            const data = await fetch(url, {
                method: "GET",
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + user
                
                },
              });

              const resultado = await data.json();

              if (resultado.code = 200) {

                setDetalleObtenido(resultado.message)
                console.log(detalleObtenido);
              }

              


        } catch (error) {
            console.error(error);
        }
            
        
    }

    useEffect( () => {

        obtenerDetalleCompra()
        
        },[]);
    
    return (
        <>
        <ul> 
            {
                detalleObtenido.map((detalle) =>
                
                <li>
                    <div className="d-flex flex-direction-row">
                        <div className="m-2">
                            Código: {detalle.codigo}
                        </div>
                        <div className="m-2">
                            <p> Nombre {detalle.nombre} </p>
                        </div>
                        <div className="m-2">
                            <p> Plataforma: {detalle.plataforma}</p>
                        </div>
                        <div className="m-2">
                            Precio: {detalle.producto_precio}
                        </div>
                        <div className="m-2">
                            Cantidad: {detalle.producto_cantidad}
                        </div>
                    </div>
                </li>
                
                
                
                )
            }

        </ul>

        </>




    
    )
    


}


export default PurchaseDetail;