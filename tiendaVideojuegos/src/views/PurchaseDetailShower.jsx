import PurchaseDetail from "../components/PurchaseDetail.jsx"

import {useParams} from "react-router-dom"

const PurchaseDetailShower = () => {

    const { id } = useParams()

    return (
        <div className="d-flex justify-content-center flex-column align-items-center">
                <div className="d-flex justify-content-center">
                        <h1>Comprobante de Compra</h1>
                        
                </div>
                <div>
                    <h2>Orden #{id}</h2>
                </div>

            <PurchaseDetail/>

    </div>


    )


}


export default PurchaseDetailShower;